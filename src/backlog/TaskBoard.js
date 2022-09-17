{/*Functionality*/ }

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
{/*Components*/ }
import Task from './items/Task';
{/*Styling*/ }
import styles from './TaskBoard.module.css'

{/*Icons*/ }

import { FaRegCheckSquare, FaRegSquare, FaLock, FaUser, FaPlus, FaAd, FaSearch, FaHome, FaBell } from 'react-icons/fa';

{/*Recoil*/ }
import { useRecoilState, useRecoilValue } from "recoil"
import { nameState, emailState, newUserState, changeNameDialogState, newUserWelcomeState, userState } from "../atoms/profileAtom"
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { handleTaskState, useSSRTasksState } from '../atoms/taskAtom'
import { handleProjectsState, projectsState, currentProjectState, handleListsState, listsState, handleTagsState, tagsState, handlePrioritiesState, prioritiesState, currentTabState, searchBarState, displayOptionsState } from "../atoms/officeAtom"
import { FiDroplet, FiEye } from 'react-icons/fi';
import { IoIosEye, IoIosOptions, IoMdEye } from 'react-icons/io';
import { HiAdjustments, HiDotsVertical } from 'react-icons/hi';
{/*Framer motion*/ }

function TaskBoard({ tasks }) {
    //getting session data
    const { data: session } = useSession();
    const [user, setUser] = useRecoilState(userState);

    //for searching and querring
    const searchBar = useRecoilValue(searchBarState);
    const [displayOptions, setDisplayOptions] = useRecoilState(displayOptionsState);

    //getting the flag for updating task list
    const [realtimeTasks, setRealtimeTasks] = useState([]);
    const [useSSRTasks, setUseSSRTasks] = useRecoilState(useSSRTasksState);
    const [handleTask, setHandleTask] = useRecoilState(handleTaskState);

    {/*PROJECTS AND TABS*/ }
    const [currentProject, setCurrentProject] = useRecoilState(currentProjectState);
    const [currentTab, setCurrentTab] = useRecoilState(currentTabState);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/tasks/${session.id}?friendLink=${user.friendLink}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const responseData = await response.json();
            console.log("resopose data:", responseData)
            setRealtimeTasks(responseData);
            setUseSSRTasks(false);
        };
        fetchPosts();
    }, [handleTask]);

    return (
        <div>

            <div
                className={styles["main-container"]}
            >

                {/* Tasks */}
                {!useSSRTasks
                    ? <>

                        {{
                            "general":
                                <>
                                    <div className={styles["title-container"]}>
                                        <>
                                            <div className={styles["title"]}>
                                                <h1>Inbox</h1>
                                            </div>
                                            <div className={styles["toolbar-container"]}>
                                                <HiDotsVertical />
                                            </div>
                                        </>

                                    </div>
                                    {/*For showing columns that are displayed*/}

                                    {realtimeTasks.length > 0 ?
                                        <>
                                            <div
                                                className={styles["header-container"]}
                                            >
                                                <>
                                                    <div
                                                        className={[styles["header-label"], styles["size-7"]].join(" ")}
                                                    >
                                                        TASK
                                                    </div>
                                                    {displayOptions.showPriority ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                PRIORITY
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                                    {displayOptions.showDeadline ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                DEADLINE
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                                    {displayOptions.showCreatedAt ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                CREATED
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}

                                                </>

                                            </div>
                                            {searchBar === "" ?
                                                <>
                                                    {realtimeTasks.map((task) => <Task key={task._id} task={task} />)}
                                                </>
                                                :
                                                <>
                                                    {realtimeTasks.filter((task) => task.title.toLowerCase().includes(searchBar.toLowerCase())).map((task) => <Task key={task._id} task={task} />)}
                                                </>
                                            }
                                        </>
                                        :
                                        <>
                                            <h3>
                                                Add a task to get started!
                                            </h3>
                                        </>
                                    }

                                </>
                        }[currentTab]}
                        {{
                            "shared":
                                <>
                                    <div className={styles["title-container"]}>
                                        <>
                                            <>
                                                <div className={styles["title"]}>
                                                    <h1>Shared</h1>
                                                </div>
                                                <div className={styles["toolbar-container"]}>
                                                    <HiDotsVertical />
                                                </div>
                                            </>
                                        </>

                                    </div>

                                    {realtimeTasks.filter((task) => task.shared != null && task.shared.includes(user.friendLink)).length > 0 ?
                                        <>{/*For showing columns that are displayed*/}
                                            <div
                                                className={styles["header-container"]}
                                            >
                                                <>
                                                    <div
                                                        className={[styles["header-label"], styles["size-7"]].join(" ")}
                                                    >
                                                        TASK
                                                    </div>
                                                    {displayOptions.showPriority ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                PRIORITY
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                                    {displayOptions.showDeadline ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                DEADLINE
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                                    {displayOptions.showCreatedAt ?
                                                        <>
                                                            <div
                                                                className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                            >
                                                                CREATED
                                                            </div>
                                                        </>
                                                        :
                                                        <>

                                                        </>}
                                                </>


                                            </div>
                                            {realtimeTasks.filter((task) => task.shared != null && task.shared.includes(user.friendLink)).map((task) => <Task key={task._id} task={task} />)}
                                        </>
                                        :
                                        <>
                                            <h3>Empty...</h3>
                                            <h3>Share your first task with a friend!</h3>

                                        </>
                                    }
                                </>
                        }[currentTab]}
                        {{
                            "project":
                                <>
                                    <div className={styles["title-container"]}>
                                        <>
                                            <div className={styles["title"]}>
                                                <h1>Inbox</h1>
                                                <div className={styles["toolbar-container"]}>
                                                    <FiEye />
                                                </div>
                                            </div>
                                        </>

                                    </div>
                                    {/*For showing columns that are displayed*/}
                                    <div
                                        className={styles["header-container"]}
                                    >

                                        <div
                                            className={[styles["header-label"], styles["size-7"]].join(" ")}
                                        >
                                            TASK
                                        </div>
                                        {displayOptions.showPriority ?
                                            <>
                                                <div
                                                    className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                >
                                                    PRIORITY
                                                </div>
                                            </>
                                            :
                                            <>

                                            </>}
                                        {displayOptions.showDeadline ?
                                            <>
                                                <div
                                                    className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                >
                                                    DEADLINE
                                                </div>
                                            </>
                                            :
                                            <>

                                            </>}
                                        {displayOptions.showCreatedAt ?
                                            <>
                                                <div
                                                    className={[styles["header-label"], styles["size-1"]].join(" ")}
                                                >
                                                    CREATED
                                                </div>
                                            </>
                                            :
                                            <>

                                            </>}


                                    </div>
                                    {realtimeTasks.filter((task) => task.project === currentProject).map((task) => <Task key={task._id} task={task} />)}
                                </>
                        }[currentTab]}
                        {{
                            "addons":
                                <>
                                    <div className={styles["title-container"]}>
                                        <>
                                            <div className={styles["title"]}>
                                                <h1>Addons & Plugins</h1>
                                                <div className={styles["toolbar-container"]}>
                                                </div>
                                            </div>
                                        </>

                                    </div>
                                    <h3>There is nothing to be seen here, we will keep you updated, tough!</h3>

                                    {realtimeTasks.filter((task) => task.project === currentProject).map((task) => <Task key={task._id} task={task} />)}
                                </>
                        }[currentTab]}


                    </>
                    : tasks.map((task) => <div key={task._id}>{task.title}</div>)}
            </div>
        </div>
    )
}

export default TaskBoard