{/*Functionality*/ }

import React, { useEffect, useRef, useState } from 'react';
import TimeAgo from 'timeago-react';
{/*Components*/ }
{/*Styling*/ }
import styles from './Task.module.css'

{/*Icons*/ }
import { FaRegCheckSquare, FaRegSquare, FaLock, FaUser, FaEdit, FaCross } from 'react-icons/fa';
import { FiDelete, FiEdit, FiShare } from 'react-icons/fi';
import { MdDragIndicator } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
{/*Recoil*/ }
import { useRecoilState, useRecoilValue } from "recoil"
import { nameState, emailState, newUserState, changeNameDialogState, newUserWelcomeState } from "../../atoms/profileAtom"
import { modalState, modalTypeState, modalEntranceState } from "../../atoms/modalAtom";
import { handleTaskState, handleEditTaskState, handleShareTaskState } from '../../atoms/taskAtom'
import { displayOptionsState } from '../../atoms/officeAtom';


function Task({ task }) {
  //-- -- -- -- MODALS -- -- -- --
  //-- variables
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  //variables
  const [handleTask, setHandleTask] = useRecoilState(handleTaskState);
  const [handleEditTask, setHandleEditTask] = useRecoilState(handleEditTaskState);
  const [handleShareTask, setHandleShareTask] = useRecoilState(handleShareTaskState);
  //
  //
  //for searching and querring
  const [displayOptions, setDisplayOptions] = useRecoilState(displayOptionsState);
  // -- -- -- -- -- --
  // Accordion for additional data
  const [openDetails, setOpenDetails] = useState(false);
  // - - - - -
  //
  //methods for on click events of particular buttons
  //deleting current task
  const handleDeleteTask = async () => {
    //firing the delete api
    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
      headers: { 'Content-Type': "application/json" }
    });
    //refreshing the flag for updating task list
    setHandleTask(!handleTask);
  }
  //-- -- --
  //editing current task
  const handleModal = (method) => {
    if (method === "") return;
    if (method === "edit") {
      setHandleEditTask(task);
    }
    if (method === "share") {
      setHandleShareTask(task);
    }
    setModalType(method);
    setModalOpen(true);
  }
  return (
    <>

      <div className={styles['main-container']}>
        <div
          className={styles['content-container']}
        >
          {/*Title of the task and icons for basic operations*/}
          <div
            className={[styles['text-section'], styles['section-general']].join(' ')}
          >


            {/*Title of the task*/}
            <div
              className={styles['task-text']}
            >
              {task.title}
            </div>
            {/*Opening the details drawer*/}
            <div
              className={openDetails ?
                [styles['operation-icon'], styles['open-description-icon'], styles['open-description-icon-open']].join(" ")
                :
                [styles['operation-icon'], styles['open-description-icon']].join(" ")}
              onClick={() => setOpenDetails(!openDetails)}
            >
              <IoIosArrowDown />
            </div>
            {/*Dragging of the task to change sequence*/}
            <div
              className={[styles['operation-icon'], styles['grab-icon']].join(" ")}
            >
              <MdDragIndicator />
            </div>

            {/*Editing of the task*/}
            <div
              className={styles['operation-icon']}
              onClick={() => handleModal("edit")}
            >
              <FiEdit />
            </div>

            {/*Delete the task*/}
            <div
              className={styles['operation-icon']}
              onClick={handleDeleteTask}
            >
              <FiDelete />
            </div>

            {/*Share the task*/}
            <div
              className={styles['operation-icon']}
              onClick={() => handleModal("share")}
            >
              <FiShare />
            </div>

          </div>
          {/*Who created the task*/}

          {/*Show the priority of the task*/}
          {displayOptions.showPriority ?
            <>
              <div
                className={[styles['time-ago-container'], styles['section-general']].join(' ')}
              >
                {(task.priority === "" || task.priority === undefined) ? "normal" : task.priority}
              </div>
            </>
            :
            <>

            </>}
          {/*Show the deadline*/}
          {displayOptions.showDeadline ?
            <>
              <div
                className={[styles['time-ago-container'], styles['section-general']].join(' ')}
              >
                {(task.deadline === "" || task.deadline === undefined) ? "none" : task.deadline}
              </div>
            </>
            :
            <>

            </>}
          {/*When the task was created*/}
          {displayOptions.showCreatedAt ?
            <>
              <div
                className={[styles['time-ago-container'], styles['section-general']].join(' ')}
              >
                <TimeAgo
                  datetime={task.createdAt}
                />
              </div>
            </>
            :
            <>

            </>}



        </div>
      </div>
      <div
        className={openDetails
          ? [styles['details-container'], styles['details-container-open']].join(" ")
          : [styles['details-container'], styles['details-container-hidden']].join(" ")
        }
      >

        {/*Description of the task*/}
        <div
          className={[styles['details-container--description'], styles['']].join(' ')}
        >
          {(task.description === "" || task.description === undefined) ? "Your description goes here..." : task.description}
        </div>
        {/*When created and when last modified*/}
        <div
          className={[styles['details-container--dates'], styles['']].join(' ')}
        >
          <div
            className={[styles['details-container--dates-item'], styles['']].join(' ')}
          >

            CREATED: {task.createdAt.substr(0, 21)}
          </div>
          <div
            className={[styles['details-container--dates-item'], styles['']].join(' ')}
          >

            LAST MODIFIED: {task.lastModified === undefined ? "Never" : task.lastModified.substr(0, 21)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Task