import React from 'react'
import './TodoItem.css'
import { TagItem, TagItemCompact, TagItemTiny } from './TagItem'

function TodoItemCompact({ todo, toggleTodo, toggleEditTodo }) {
	function handleTodoClick() {
		toggleTodo(todo.id);
	}
	function handleEditTodo() {
		toggleEditTodo(todo.id);
	}
	return (
		<>
			<div className='todo-item-container'>
				<div className='todo-item-outer-container'>
					<div className='todo-item-inner-container'>

						<div className='todo-label' onClick={handleTodoClick}>
							{todo.name}
						</div>
						<svg className='icon' viewBox='0 0 24 24' width='24' height='24' onClick={handleTodoClick}>
							<path d={todo.completed ?
								"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM10.6 16.2 17.65 9.15 16.25 7.75 10.6 13.4 7.75 10.55 6.35 11.95ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
								:
								"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
							} /></svg>
					</div>

					<div className='todo-tags-container'>
						{todo.tags.map(tag => {
							return <>
								<TagItemTiny key={tag.id} tag={tag} />
							</>
						})}
					</div>

				</div>


			</div>
		</>
	)
}

function TodoItem({ todo, toggleTodo, toggleEditTodo }) {
	function handleTodoClick() {
		toggleTodo(todo.id);
	}
	function handleEditTodo() {
		toggleEditTodo(todo.id);
	}
	return (
		<>
			<div className='todo-item-container'>
				<div className='todo-item-outer-container'>
					<div className='todo-item-inner-container'>
						<div className='todo-item-icons-container'>
							<svg className='icon-draggable' viewBox='0 0 24 24' width='24' height='24'>
								<path d=
									"M9 20q-.825 0-1.412-.587Q7 18.825 7 18q0-.825.588-1.413Q8.175 16 9 16t1.413.587Q11 17.175 11 18q0 .825-.587 1.413Q9.825 20 9 20Zm6 0q-.825 0-1.412-.587Q13 18.825 13 18q0-.825.588-1.413Q14.175 16 15 16t1.413.587Q17 17.175 17 18q0 .825-.587 1.413Q15.825 20 15 20Zm-6-6q-.825 0-1.412-.588Q7 12.825 7 12t.588-1.413Q8.175 10 9 10t1.413.587Q11 11.175 11 12q0 .825-.587 1.412Q9.825 14 9 14Zm6 0q-.825 0-1.412-.588Q13 12.825 13 12t.588-1.413Q14.175 10 15 10t1.413.587Q17 11.175 17 12q0 .825-.587 1.412Q15.825 14 15 14ZM9 8q-.825 0-1.412-.588Q7 6.825 7 6t.588-1.412Q8.175 4 9 4t1.413.588Q11 5.175 11 6t-.587 1.412Q9.825 8 9 8Zm6 0q-.825 0-1.412-.588Q13 6.825 13 6t.588-1.412Q14.175 4 15 4t1.413.588Q17 5.175 17 6t-.587 1.412Q15.825 8 15 8Z"
								/></svg>
							<svg className='icon' viewBox='0 0 24 24' width='24' height='24' onClick={handleTodoClick}>
								<path d={todo.completed ?
									"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM10.6 16.2 17.65 9.15 16.25 7.75 10.6 13.4 7.75 10.55 6.35 11.95ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
									:
									"M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
								} /></svg>
							<svg className='icon' viewBox='0 0 24 24' width='24' height='24' onClick={handleEditTodo}>
								<path d=
									"M19.3 8.925 15.05 4.725 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.725Q21.25 5.3 21.275 6.113Q21.3 6.925 20.725 7.5ZM17.85 10.4 7.25 21H3V16.75L13.6 6.15Z"
								/></svg>
						</div>
						<div className='todo-items-text-container'>

							<div className='todo-label' onClick={handleTodoClick}>
								{todo.name}
							</div>

						<div className='todo-tags-container'>
							{todo.tags.map(tag => {
								return <>
									<TagItemCompact key={tag.id} tag={tag} />
								</>
							})}
						</div>
						</div>
					</div>


				</div>
			</div>
		</>
	)
}

export { TodoItem, TodoItemCompact }