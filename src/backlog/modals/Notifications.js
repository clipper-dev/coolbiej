import React, { useState, useEffect, useRef } from "react";
import styles from "./Notifications.module.css";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { FiCheck } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io";

import {
    handleNotificationState,
    newNotificationsState,
    readNotificationsState
} from "../../atoms/notificationsAtom"
import {
    userState
} from "../../atoms/profileAtom"
import NotificationItem from "../items/NotificationItem";


function Notifications({ handleClose }) {

    //getting session data
    const { data: session } = useSession();
    const [handleSession, setHandleSession] = useState("false");
    const [user, setUser] = useRecoilState(userState);
    {/*NOTIFICATIONS*/ }
    //fetching the notifications
    const fetchNotifications = async () => {
        const response = await fetch(`/api/notifications/${session.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        return response.json();
    }
    //notifications vars
    const [newNotifications, setNewNotifications] = useRecoilState(newNotificationsState);
    const [readNotifications, setReadNotifications] = useRecoilState(readNotificationsState);
    const [handleNotification, setHandleNotification] = useRecoilState(handleNotificationState);


    const [currentTab, setCurrentTab] = useState("new");
    const handleSetCurrentTab = (tab) => {
        setCurrentTab(tab);
    }

    //read all notifications
    const readAllNotifications = async () => {
        //add all new notifications to read notifications
        setReadNotifications([...readNotifications, ...newNotifications]);
        //clear new notifications
        setNewNotifications([]);
        //update database
        const response = await fetch(`/api/notifications/push/${user.friendLink}?readAll=true`, {
            method: "PUT",
            body: JSON.stringify({
                new: [],
                read: [...readNotifications, ...newNotifications],
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const responseData = await response.json();
        //log
        console.log(responseData);
        console.log(response)
    }
    //read notification
    const handleRead = async (notification) => {
        //add to read notifications
        setReadNotifications([...readNotifications, notification]);
        //remove from new notifications
        setNewNotifications(newNotifications.filter(n => n.id !== notification.id));
        //update database
        const response = await fetch(`/api/notifications/push/${user.friendLink}`, {
            method: "PUT",
            body: JSON.stringify({
                new: newNotifications.filter(n => n.id !== notification.id),
                read: [...readNotifications, notification],
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const responseData = await response.json();
    }
    //delete notification
    const handleDelete = async (notification, status) => {
        if (status === "new") {
            //remove from new notifications
            setNewNotifications(newNotifications.filter(n => n.id !== notification.id));
            //update database
            const response = await fetch(`/api/notifications/push/${user.friendLink}`, {
                method: "PUT",
                body: JSON.stringify({
                    new: newNotifications.filter(n => n.id !== notification.id),
                    read: readNotifications,
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const responseData = await response.json();
        }
        if (status === "read") {
            //remove from new notifications
            setReadNotifications(readNotifications.filter(n => n.id !== notification.id));
            //update database
            const response = await fetch(`/api/notifications/push/${user.friendLink}`, {
                method: "PUT",
                body: JSON.stringify({
                    new: newNotifications,
                    read: readNotifications.filter(n => n.id !== notification.id),
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const responseData = await response.json();
        }
    }
    //delete all notifications
    const handleDeleteAll = async () => {
    }


    return (
        <div className={styles['main-container']}>

            <div
                className={styles['tab-container']}
            >
                {/*Heading for the modal*/}
                <div
                    className={styles['tab-container']}
                >
                    <div
                        className={styles['tab-container-header']}
                    >
                        <div
                            className={currentTab === "new"
                                ? [styles['tab-container-item'], styles['tab-container-item-chosen']].join(' ')
                                : [styles['tab-container-item'], styles['']].join(' ')}
                            onClick={() => { handleSetCurrentTab("new") }}
                        >
                            New
                        </div>
                        <div
                            className={currentTab === "all"
                                ? [styles['tab-container-item'], styles['tab-container-item-chosen']].join(' ')
                                : [styles['tab-container-item'], styles['']].join(' ')}
                            onClick={() => { handleSetCurrentTab("all") }}
                        >
                            All
                        </div>
                    </div>
                    <div
                        className={styles['read-all-icon']}
                        onClick={() => { readAllNotifications() }}
                    >
                        <FiCheck />
                    </div>

                </div>

            </div>
            {/*Content of the modal*/}
            <div
                className={styles['display-container']}
            >
                {currentTab === "new" && (
                    /*New and unread notifications*/
                    <>
                        {newNotifications.length > 0 ?
                            <>
                                {newNotifications.map((notification, index) => (
                                    <NotificationItem
                                        notification={notification}
                                        key={index}
                                        handleDelete={handleDelete}
                                        handleRead={handleRead}
                                        status={"new"}
                                    />
                                ))}
                            </>
                            :
                            <>
                                Hurra! You are up to date.
                            </>}
                    </>
                )}
                {currentTab === "all" && (
                    /*All notifications*/
                    <>
                        {readNotifications.length > 0 ?
                            <>
                                {readNotifications.map((notification, index) => (
                                    <NotificationItem
                                        notification={notification}
                                        key={index}
                                        handleDelete={handleDelete}
                                        handleRead={handleRead}
                                        status={"read"}
                                    />
                                ))}
                            </>
                            :
                            <>
                                It&apos;s kind of empty here.
                            </>}
                    </>
                )}

            </div>
        </div>

    );
}

export default Notifications;
