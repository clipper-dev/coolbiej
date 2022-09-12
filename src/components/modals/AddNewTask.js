import React, { useState, useEffect, useRef } from "react";
import styles from "./AddNewTask.module.css";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { handleTaskState } from "../../atoms/taskAtom";

function AddNewTask({ handleClose }) {
  const [input, setInput] = useState("");
  const [handleTask, setHandleTask] = useRecoilState(handleTaskState);
  const { data: session } = useSession();
  //refs for input fields
  const titleInput = useRef();
  const descriptionInput = useRef();

  const uploadTask = async (e) => {
    //e.preventDefault();
    if (titleInput.current.value === "") return;

    const response = await fetch("api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: titleInput.current.value,
        owner: session.id,
        createdBy: session.id,
        description: descriptionInput.current.value,
        priority: "",
        tags: [],
        project: "",
        list: "",
        createdAt: new Date().toString(),
        lastModified: new Date().toString(),
        deadline: "",
        shared: [],
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
  });

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

        {/*Other parameters*/}
        <div className={styles["other-params"]}>
          <div className={styles["other-params-container"]}>
            {/*Dropdown to choose priority*/}
            <div className={styles["other-params-title"]}>Priority</div>
            <select
              className={styles["other-params-select"]}
              name="priority"
              id="priority"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          {/*Dropdown to choose urgency*/}

          <div className={styles["other-params-container"]}>
            <div className={styles["other-params-title"]}>Urgency</div>
            <select className={styles["other-params-select"]}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/*Dropdown to choose project*/}
          <div className={styles["other-params-container"]}>
            <div className={styles["other-params-title"]}>Project</div>
            <select className={styles["other-params-select"]}></select>
          </div>
        </div>

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
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTask;
