import React from 'react'
import styles from './FriendItem.module.css'
import { FiCheck, FiX, FiTrash, FiDelete } from 'react-icons/fi'
import TimeAgo from 'timeago-react'
import Image from 'next/image'

function FriendItem({ friend, handleDelete, handleAccept, handleDecline, handleCancel }) {

    return (
        <div
            className={styles['friend-item']}
        >

            {/*Friend's profile picture*/}
            {/*check if friend has a profile picture, if yes present it*/}
            {friend.image !== undefined && friend.image !== null && friend.image !== "" ?
                <>
                    <div
                    >
                        <img
                            className={styles['friend-item-picture']}
                            src={friend.image}
                            alt="profile"
                            width={40}
                            height={40}
                        />
                    </div>
                </>
                :
                <>
                    <div className={styles['initial-outilne-container']} >
                        {/*icon on the side bar*/}
                        <div className={[styles['initial-outline'], ["noselect"]].join(" ")}>{friend.name[0].toUpperCase()}</div>
                    </div>

                </>
            }
            {/*Friend's name*/}
            <div
                className={styles['friend-item-name']}
            >
                <div
                    className={styles['friend-item-name-text']}
                >
                    {friend.name === null ? "" : friend.name + ", "}{friend.email}
                </div>
                <div
                    className={styles['friend-item-status']}
                >
                    {{
                        "pendding-received": <span>Request received <TimeAgo datetime={friend.createdAt} /></span>,
                        "pendding-sent": "Pending",
                        "accepted": "Friend",
                    }[friend.status]}
                </div>
            </div>
            <div
                className={styles['friend-item-buttons']}
            >
                {{
                    "pendding-received": <>
                        <div
                            className={styles['friend-item-buttons-item']}
                            onClick={() => { handleAccept(friend) }}
                        >
                            <FiCheck />
                        </div>
                        <div
                            className={styles['friend-item-buttons-item']}
                            onClick={() => { handleDecline(friend) }}
                        >
                            <FiX />
                        </div>
                    </>,
                }[friend.status]}
                {{
                    "accepted": <>
                        <div
                            className={styles['friend-item-buttons-item']}
                            onClick={() => { handleDelete(friend) }}
                        >
                            <FiTrash />
                        </div>
                    </>
                }[friend.status]}
                {{
                    "pendding-sent": <>
                        <div
                            className={styles['friend-item-buttons-item']}
                            onClick={() => { handleCancel(friend) }}
                        >
                            <FiDelete />
                        </div>
                    </>
                }[friend.status]}
            </div>
        </div>
    )
}

export default FriendItem