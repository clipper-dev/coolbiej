import React, { useState, useEffect, useRef } from "react";
import styles from "./EditTask.module.css";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { handleTaskState, handleEditTaskState } from "../../atoms/taskAtom";
import { v4 as uuidv4 } from "uuid";

function EditTask({ handleClose }) {
  const [input, setInput] = useState("");
  const [handleTask, setHandleTask] = useRecoilState(handleTaskState);
  const [handleEditTask, setHandleEditTask] =
    useRecoilState(handleEditTaskState);
  const { data: session } = useSession();
  //refs for input fields
  const titleInput = useRef();
  const descriptionInput = useRef();

  const uploadTask = async (e) => {
    //e.preventDefault();
    if (titleInput.current.value === "") return;
    const _newTask = {
      ...handleEditTask,
      title: titleInput.current.value,
      description: descriptionInput.current.value,
    };
    setHandleEditTask(_newTask);
    const response = await fetch(`/api/tasks/${handleEditTask._id}`, {
      //const response = await fetch("/api/tasks", {
      //const response = await fetch("/api/tasks/update", {
      method: "PUT",
      body: JSON.stringify({
        title: _newTask.title,
        owner: session.id,
        description: _newTask.description,
        priority: "",
        tags: [],
        project: "",
        list: "",
        deadline: _newTask.deadline ?? "",
        shared: _newTask.shared ?? [],
        bloodmark: uuidv4(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setHandleTask(!handleTask);
    handleClose();
  };
  //adding the task on enter key press
  const handleEnter = () => {
    // your logic here
    if (titleInput.current.value === "") return;
    uploadTask(null);
  };
  useEffect(() => {
    titleInput.current.value = handleEditTask.title;
    descriptionInput.current.value = handleEditTask.description;
  }, []);
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ your logic here
        handleEnter();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["input-container"]}>
        {/*The name of the new task*/}
        <input
          className={[styles["input-field"], styles["title-input"]].join(" ")}
          ref={titleInput}
          type="text"
          placeholder="The name of your next task"
          autoFocus
        />
        {/*The description of the new task*/}
        <textarea
          className={[styles["input-field"], styles["description-input"]].join(
            " "
          )}
          ref={descriptionInput}
          type="text"
          placeholder="The description of the task"
        />
        <div className={styles["button-control-container"]}>
          <div className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </div>
          <div className={styles["add-button"]} onClick={uploadTask}>
            Update
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
