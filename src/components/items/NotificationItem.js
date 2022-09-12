import React from 'react'
import styles from './NotificationItem.module.css'
import { FiCheck, FiX, FiTrash, FiDelete } from 'react-icons/fi'
import TimeAgo from 'timeago-react'

function NotificationItem({ notification, handleDelete, handleRead, status }) {

    return (
        <div
            className={styles['notification-item']}
        >
            <div
                className={styles['notification-item-name']}
            >
                <div
                    className={styles['notification-item-name-text']}
                >
                    {notification.message}
                </div>
            </div>
            <div
                className={styles['notification-item-buttons']}
            >
                {{
                    "new": <>
                        <div
                            className={styles['notification-item-buttons-item']}
                            onClick={() => { handleRead(notification) }}
                        >
                            <FiCheck />
                        </div>
                        <div
                            className={styles['notification-item-buttons-item']}
                            onClick={() => { handleDelete(notification, status) }}
                        >
                            <FiTrash />
                        </div>
                    </>,
                }[status]}
                {{
                    "read": <>
                        <div
                            className={styles['notification-item-buttons-item']}
                            onClick={() => { handleDelete(notification, status) }}
                        >
                            <FiTrash />
                        </div>
                    </>,
                }[status]}
            </div>
        </div>
    )
}

export default NotificationItem