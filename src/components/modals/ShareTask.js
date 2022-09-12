import React, { useState, useEffect, useRef } from 'react'
import styles from './EditTask.module.css'
import { useSession } from "next-auth/react";
import { useRecoilState } from 'recoil';
import { handleTaskState, handleEditTaskState, handleShareTaskState } from '../../atoms/taskAtom'
import { friendsState, userState } from '../../atoms/profileAtom';
import ShareItem from '../items/ShareItem';
import { v4 as uuidv4 } from 'uuid';
import { sendNotification } from '../../utils/notifications';

function ShareTask({ handleClose }) {

    //getting session data
    const { data: session } = useSession();
    const [user, setUser] = useRecoilState(userState);
    //getting the currently shared task
    const [handleShareTask, setHandleShareTask] = useRecoilState(handleShareTaskState);

    //friend list for sharing
    const [friends, setFriends] = useRecoilState(friendsState);

    const [profile, setProfile] = useState({});

    //getting friend list when component renders
    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`/api/profile/${session.id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const responseData = await response.json();
            setProfile(responseData);
            if (responseData.friends != undefined) {
                setFriends(responseData.friends);
            } else {
                setFriends([]);
            }
            console.log("profile", responseData);
            console.log("friends", responseData.friends);
            setFriends(responseData.friends);
        };
        fetchProfile();
    }, []);

    //function responsible for sharing the selected task
    const shareTask = async (friend) => {
        let sharedList;
        if (handleShareTask.shared === undefined || handleShareTask.shared === null) {
            sharedList = [friend.friendLink];
        } else {
            sharedList = [...handleShareTask.shared, friend.friendLink];
        }
        const response = await fetch(`/api/tasks/share/${handleShareTask._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                shared: sharedList,
            }),
        });
        const responseData = await response.json();
        //send notification to friend that task was shared
        const _notification = {
            key: uuidv4(),
            type: "task-share",
            task: handleShareTask._id,
            sender: profile.userName ?? profile.email,
            origin: profile.friendLink,
            address: friend.friendLink,
        };
        sendNotification(_notification);


        handleClose();
    }


    return (
        <div className={styles['main-container']}>
            <div className={styles["tab-container"]}>
                <div className={styles["tab-container-item"]}>Choose a friend to share</div>

            </div>
            <div
                className={styles['input-container']}
            >

            </div>

            {/*Friends list*/}
            {friends.filter((friend) => friend.status === "accepted").map((friend) => (
                <>
                    <ShareItem friend={friend} handleShare={shareTask} />
                </>
            ))}
            {/*If friend list is empty*/}
            {friends.length === 0 && (
                <div className={styles["empty-container"]}>
                    <div className={styles["empty-container-item"]}>You have no friends</div>
                </div>
            )}
        </div>
    )
}

export default ShareTask