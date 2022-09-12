import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Button } from './Button'
import './Modal.css'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { alterTodo, addTag, removeTag } from '../features/todos/todosSlice';
import { addProject, } from '../features/profile/profileSlice';
import {TagItem, TagItemCompact} from './TagItem'
import ColorPicker from './ColorPicker';


function Modal() {
	return (
		<div>Modal</div>
	)
}

//
//NEW PROJECT MODAL
//
function AddNewProjectModal({ setOpenAddNewProjectModal }) {
	///-------BOILER PLATE STARTS HERE
	///
	function CloseModal() {
		setOpenAddNewProjectModal(false);
	}
	//closing modal when pressed on the background outside of modal
	const modalRef = useRef();
	const CloseModalBackground = e => {
		if (modalRef.current === e.target) {
			CloseModal();
		}
	}
	// -- escape
	//binds escape key to close the modal if open
	const handleEscapeKeyPress = useCallback(e => {
		if (e.key === "Escape") {
			console.log('pressed escape to close the modal');
			CloseModal();
		}
	}, []);
	const handleEnterKeyPress = (event) => {
		if (event.key === "Enter" && newProjectNameRef.current.value != null) {
			AddNewProject();
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', handleEscapeKeyPress);
		return () => document.removeEventListener('keydown', handleEscapeKeyPress);
	}, [handleEscapeKeyPress]);
	useEffect(() => {
		document.addEventListener('keydown', handleEnterKeyPress);
		return () => document.removeEventListener('keydown', handleEnterKeyPress);
	}, [handleEnterKeyPress]);
	///
	///--------BOILER PLATE ENDS 

	//HANDLING ADDING NEW PROJECT

	const userProfile = useSelector((state) => state.profile); //load profile data
	const dispatch = useDispatch();
	const newProjectNameRef = useRef();
	function AddNewProject() {
		if (newProjectNameRef.current.value != null) {
			const newProject = {
				name: newProjectNameRef.current.value,
				id: uuidv4()
			}
			dispatch(addProject(newProject));
			CloseModal();

		}
	}


	return (
		<>
			<div className='modal-background' ref={modalRef} onClick={CloseModalBackground}>
				<div className='modal-container'>
					<h3 className='modal-title'>Add new project</h3>
					<div className='p--display'>Name:</div>
					<input ref={newProjectNameRef} type='text' className='modal-input' autoFocus />
					<div className='p--display'>Color:</div>
					<ColorPicker/>
					<div className='spread-line'>
						<Button buttonStyle='btn--cancel' onClick={CloseModal}>Cancel</Button>
						<Button buttonStyle='btn--primary' onClick={AddNewProject}>Add</Button>
					</div>

				</div>

			</div>
		</>
	)
}

//
//EDIT TODO MODAL
//
function EditTodoModal({ todo, setOpenTodoEditModal }) {
	//load important data once the page is loaded
	const userProfile = useSelector((state) => state.profile); //load profile data
	let projectDictionary = {};
	const [openDropDownProject, setOpenDropDownProject] = useState(false);

	console.log('todo:', todo);
	//load projects details for dropdown etc
	for (var proj in userProfile.projects) {
		projectDictionary[userProfile.projects[proj].id] = userProfile.projects[proj].name;
	}
	projectDictionary[''] = 'General';
	console.log('projectDictionary:', projectDictionary);
	const [currentProjectID, setCurrentProjectID] = useState(todo.project.id);
	const [currentProjectName, setCurrentProjectName] = useState(projectDictionary[currentProjectID]);

	//set reference calls
	const todoNameRef = useRef();
	const todoCommentRef = useRef();
	const todoCreatedDateRef = useRef();
	const todoDeadlineDateRef = useRef();
	const todoPriorityRef = useRef();
	const todoProjectRef = useRef();
	const todoTagsRef = useRef();
	const [completed, setCompleted] = useState(todo.completed);

	function CloseModal() {
		setOpenTodoEditModal('');
	}
	//closing modal when pressed on the background outside of modal
	const modalRef = useRef();
	const CloseModalBackground = e => {
		if (modalRef.current === e.target) {
			CloseModal();
		}
	}
	// -- escape
	//binds escape key to close the modal if open
	const handleEscapeKeyPress = useCallback(e => {
		if (e.key === "Escape") {
			console.log('pressed escape to close the modal');
			CloseModal();
		}
	}, []);
	useEffect(() => {
		document.addEventListener('keydown', handleEscapeKeyPress);
		return () => document.removeEventListener('keydown', handleEscapeKeyPress);
	}, [handleEscapeKeyPress]);

	function handleTodoCompleted() {
		setCompleted(!completed);
	}

	//dropDown menu for choosing project


	function handleSwitchProject(id) {
		setCurrentProjectID(id);
		setCurrentProjectName(projectDictionary[id]);
		setOpenDropDownProject(false);
	}

	//save updated todo to redux storage

	const todoData = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	function SaveUpdatedTodo() {
		let _todo = {};
		_todo.id = todo.id;
		_todo.completed = completed;
		_todo.name = todoNameRef.current.value;
		_todo.comment = todoCommentRef.current.value;
		_todo.project = {
			id: currentProjectID,
			name: currentProjectName
		};
		_todo.tags = todo.tags;
		_todo.createdDate = '';
		_todo.deadlineDate = '';
		_todo.priority = 0;
		console.log('new todo:', _todo);
		dispatch(alterTodo(_todo));
		CloseModal();
	}

	//TAGS LOGIC
	function handleToggleTag(_tag) {
		let lock = true;
		todo.tags.map((tag) => {
			if (tag.id === _tag.id) {
				console.log('toggling off the tag:', _tag.name)
				const action = {
					id: todo.id,
					tag: _tag
				};
				dispatch(removeTag(action));
				lock = false;
			}
		})
		const action = {
			id: todo.id,
			tag: _tag
		};
		if (lock) {
			console.log('toggling on the tag:', _tag.name)
			dispatch(addTag(action));
			console.log('todo:', todo)
		}
	}


	function canChooseTag() {
		//return (null === todo.tags[0]) || (null === todo.tags[1]) || (null === todo.tags[2]);
		return true;
	}

	function isTagAssignedToTodo(id) {
		try {
			if (todo.tags != null && todo.tags != undefined) {
				todo.tags.forEach(tag => {
					if (id === tag.id) {
						console.log('isAssigned');
						return true;
					};
				});
			}
			console.log('isNotAssigned');
			return false;
		} catch (error) {
			return false;
		}
	}

	return (
		<>
			<div className='modal-background' ref={modalRef} onClick={CloseModalBackground}>
				<div className='modal-container'>
					<div className='modal-title'>Edit your todo</div>
					<div>
						<div className='modal-label'>Title: </div>
						<input ref={todoNameRef} className='modal-input' type="text" defaultValue={todo.name} autoFocus />
					</div>
					<div>
						<div className='modal-label'>Note: </div>
						<input ref={todoCommentRef} className='modal-input' type="text" defaultValue={todo.comment} />
					</div>
					<div>
						<div className='modal-labe'>Completed: </div>
						<svg className='icon' viewBox='0 0 24 24' width='24' height='24' onClick={handleTodoCompleted}>
							<path d={completed ?
								"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM10.6 16.2 17.65 9.15 16.25 7.75 10.6 13.4 7.75 10.55 6.35 11.95ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
								:
								"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
							} /></svg>
					</div>


					<div>
						<div className='modal-label' >Project: </div>
						<div className='project-container'>
							<div ref={todoProjectRef} className='project-chosen' onClick={
								() => setOpenDropDownProject(!openDropDownProject)}>
								{currentProjectName}
							</div>
							{openDropDownProject && currentProjectName != 'General' && <div key={''} onClick={() => handleSwitchProject('')} className='project-choose'>
								<span>General</span>
							</div>}
							{openDropDownProject && userProfile.projects.map((project, index) => {
								return (
									<div key={project.id} onClick={() => handleSwitchProject(project.id)} className='project-choose'>
										<span>{project.name}</span>
									</div>
								)
							})}
						</div>

					</div>

					<div>
						<div className='modal-label' >Tags: </div>
						<div className='project-container'>
							{userProfile.tags.map((tag) => {
								return (
									
									<TagItemCompact key={tag.id} tag={tag} onClick={() => handleToggleTag(tag)}/>
								)
							})}
						</div>

					</div>

					<div className='spread-line'>
						<Button buttonStyle='btn--cancel' onClick={CloseModal}>Cancel</Button>
						<Button buttonStyle='btn--primary' onClick={SaveUpdatedTodo}>Save</Button>
					</div>

				</div>

			</div>
		</>
	)
}

export { Modal, EditTodoModal, AddNewProjectModal }
