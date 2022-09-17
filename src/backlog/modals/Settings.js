import React, { useState, useEffect, useRef } from 'react'
import styles from './Settings.module.css'
import { useSession } from "next-auth/react";
import { useRecoilState } from 'recoil';
import { handleTaskState } from '../../atoms/taskAtom'
import { userState, friendsState } from '../../atoms/profileAtom'

function Settings({ handleClose }) {
    //session and profile data
    const { data: session } = useSession();
    const [user, setUser] = useRecoilState(userState);

    //coping functionality
    const [copied1, setCopied1] = useState(false);
    const updateCopiedButton = async (method) => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        method(true);
        await delay(5000);
        method(false);
    }
    const [currentTab, setCurrentTab] = useState("general");
    const handleSetCurrentTab = (tab) => {
        setCurrentTab(tab);
    }
    //refs for input fields

    //uploading changes to database
    const uploadSettings = async (e) => {
        //e.preventDefault();
        if ((titleInput.current.value === "")) return;

        const response = await fetch("api/tasks", {
            method: "POST",
            body: JSON.stringify({

            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const responseData = await response.json();
        handleClose();
    }
    const copyFriendLink = async () => {

        navigator.clipboard.writeText(user.friendLink);
        updateCopiedButton(setCopied1);
    }


    return (
        <div className={styles['main-container']}>

            <div
                className={styles['tab-container']}
            >
                <div
                    className={currentTab === "general"
                        ? [styles['tab-container-item'], styles['tab-container-item-chosen']].join(' ')
                        : [styles['tab-container-item'], styles['']].join(' ')}
                    onClick={() => { handleSetCurrentTab("general") }}
                >
                    General
                </div>
                <div
                    className={currentTab === "profile"
                        ? [styles['tab-container-item'], styles['tab-container-item-chosen']].join(' ')
                        : [styles['tab-container-item'], styles['']].join(' ')}
                    onClick={() => { handleSetCurrentTab("profile") }}
                >
                    Profile
                </div>

            </div>
            <div
                className={styles['display-container']}
            >
                {currentTab === "general" &&
                    /*General Settings*/
                    <>
                        <div
                            className={styles['header-label']}
                            data-tooltip="Change the language of the interface. Currently only supports English."
                        >
                            Language
                        </div>
                        <select id="ln">
                            <option value="en">English 🇬🇧</option>
                            <option value="en">English 🇺🇸</option>
                        </select>
                    </>
                }
                {currentTab === "profile" &&
                    /*Profile Settings*/
                    <>
                        <div
                            className={[styles['header-label']]}
                            data-tooltip="Share the public key with your friends so that they can share with you their tasks and projects in a secure way."
                        >
                            Friend key
                        </div>
                        <div
                            className={[styles['button--copy-friend-link']]}

                            onClick={() => { copyFriendLink() }}
                        >
                            {copied1 ? "Copied!" : "Copy"}
                        </div>

                    </>
                }



            </div>
        </div>
    )
}

export default Settings