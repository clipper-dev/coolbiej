import React, { useState, useEffect, useRef } from "react";
import styles from "./Friends.module.css";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { FiRefreshCcw } from "react-icons/fi";
import { handleTaskState } from "../../atoms/taskAtom";
import {
    userState,
    friendsState,
    handleFriendsState,
    profileState,
} from "../../atoms/profileAtom";
import FriendItem from "../items/FriendItem";
import { v4 as uuidv4 } from 'uuid';
import { sendNotification } from '../../utils/notifications';

function Friends({ handleClose }) {
    const [friendMessasge, setFriendMessasge] = useState("");

    const { data: session } = useSession();

    const [user, setUser] = useRecoilState(userState);

    const [friends, setFriends] = useRecoilState(friendsState);

    const [profile, setProfile] = useRecoilState(profileState);

    const [handleFriends, setHandleFriends] = useRecoilState(handleFriendsState);

    //refs for input fields
    const [newFriend, setNewFriend] = useState("");
    //fetch friend list from database
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
            //console.log("profile", responseData);
            //console.log("friends", responseData.friends);
            setFriends(responseData.friends);
        };
        fetchProfile();
    }, [handleFriends]);

    //function fired when user clicks on add friend button
    //adds friend to database as well as to the friends list
    //if friend is already added, it will show an error message
    //if friend is not found, it will show an error message
    //if friend is added successfully, it will show a success message
    //the friend is added with status "pendding-sent"
    //the other user will have to accept the friend request
    const addFriend = async (e) => {
        //check if friend link is pasted
        if (newFriend === "") return;
        console.log("newFriend", newFriend);
        //check if friend with the pasted link exists in database
        const response = await fetch(`/api/profile/link/${newFriend}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const responseData = await response.json();
        //check ig the friend link is not of the current user
        if (newFriend === profile.friendLink) {
            handleMessage(
                setFriendMessasge,
                "Unfortunately, you can't add yourself as a friend"
            );
            setNewFriend("");
            return;
        }
        //check if friend with the pasted link exists in database
        if (responseData.error) {
            handleMessage(setFriendMessasge, "Friend not found");
            setNewFriend("");
            return;
        }
        //check if friend is already in friend list
        if (friends.find((friend) => friend.friendLink === newFriend)) {
            handleMessage(setFriendMessasge, "You already have this friend");
            setNewFriend("");
            return;
        }
        console.log("fetched friend", responseData);
        //OWN FRIEND LIST
        //add friend to friend list
        const _friend = {
            key: newFriend,
            name: responseData.userName,
            email: responseData.email,
            status: "pendding-sent",
            friendLink: newFriend,
            image: responseData.image,
            createdAt: new Date(),
        };
        const _friends = [...friends, _friend];
        setFriends(_friends);
        console.log("own friend group", _friends);
        console.log("own friend link", profile.friendLink);
        //add friend to database as pending-sent for the current user
        const response2 = await fetch(
            `/api/profile/update/friends/${profile.friendLink}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    friends: _friends,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const responseData2 = await response2.json();
        console.log("responseData2", responseData2);
        if (responseData2.error) {
            console.log("3");
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }

        //FRIEND FRIEND LIST
        //the same but for the other friend
        //add friend to friend list
        const _friend2 = {
            key: profile.friendLink,
            name: profile.userName,
            email: profile.email,
            status: "pendding-received",
            friendLink: profile.friendLink,
            createdAt: new Date(),
        };
        //get friend friend list
        const response3 = await fetch(`/api/profile/link/${newFriend}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const theirProfile = await response3.json();
        console.log("theirProfile", theirProfile);
        if (theirProfile.error) {
            console.log("4");
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        const _theirFriends = [...theirProfile.friends, _friend2];
        console.log("their friend group", _theirFriends);
        //upload their new friend list to database
        const response4 = await fetch(`/api/profile/update/friends/${newFriend}`, {
            method: "PUT",
            body: JSON.stringify({
                friends: _theirFriends,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const responseData4 = await response4.json();
        console.log("responseData4", responseData4);
        if (responseData4.error) {
            console.log("5");
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        //sending notification to the other user
        const _notification = {
            key: uuidv4(),
            address: newFriend,
            type: "friend-request",
            sender: profile.userName ?? profile.email,
            origin: profile.friendLink,
        };
        sendNotification(_notification);

        //reset input field
        setNewFriend("");
        //update friend list
        setHandleFriends(!handleFriends);
        handleMessage(setFriendMessasge, "Friend request sent");


    };

    //updating message depending of friend request status
    const clearMessage = async (method) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        await delay(5000);
        method("");
    };
    const handleMessage = (method, message) => {
        if (message === "") return;
        method(message);
        clearMessage(method);
    };
    //update friend list

    //handle friend request
    //handleDelete, handleAccept, handleDecline, handleCancel
    const handleDelete = async (friend) => {
        //delete friend from friend list
        console.log("delete", friend);
        const _friends = friends.filter((f) => f.key !== friend.key);
        setFriends(_friends);
        const response = await fetch(
            `/api/profile/update/friends/${profile.friendLink}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    friends: _friends,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const responseData = await response.json();
        console.log("responseData", responseData);
        if (responseData.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        setHandleFriends(!handleFriends);
        handleMessage(setFriendMessasge, "Friend deleted");
        //
        //delete friend from other friend list
        const response2 = await fetch(`/api/profile/link/${friend.friendLink}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const theirProfile = await response2.json();
        console.log("theirProfile", theirProfile);
        if (theirProfile.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        const _theirFriends = theirProfile.friends.filter(
            (f) => f.key !== profile.friendLink
        );
        console.log("their friend group", _theirFriends);
        const response3 = await fetch(
            `/api/profile/update/friends/${friend.friendLink}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    friends: _theirFriends,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const responseData3 = await response3.json();
        console.log("responseData3", responseData3);
        if (responseData3.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
    };
    const handleAccept = async (friend) => {
        //accept friend request
        //change status to accepted in our friend list
        console.log("accept", friend);
        const _friends = [...friends].map((f) => {
            if (f.friendLink === friend.friendLink) {
                return { ...f, status: "accepted" };
            }
            return f;
        });
        setFriends(_friends);
        const response = await fetch(
            `/api/profile/update/friends/${profile.friendLink}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    friends: _friends,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const responseData = await response.json();
        console.log("responseData", responseData);
        if (responseData.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        setHandleFriends(!handleFriends);
        handleMessage(setFriendMessasge, "Friend accepted");
        //
        //change status to accepted in other friend list
        const response2 = await fetch(`/api/profile/link/${friend.friendLink}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const theirProfile = await response2.json();
        console.log("theirProfile", theirProfile);
        if (theirProfile.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        const _theirFriends = theirProfile.friends.map((f) => {
            if (f.friendLink === profile.friendLink) {
                f.status = "accepted";
            }
            return f;
        });
        console.log("their friend group", _theirFriends);
        const response3 = await fetch(
            `/api/profile/update/friends/${friend.friendLink}`,
            {
                method: "PUT",
                body: JSON.stringify({
                    friends: _theirFriends,
                }),
                headers: { "Content-Type": "application/json" },
            }
        );
        const responseData3 = await response3.json();
        console.log("responseData3", responseData3);
        if (responseData3.error) {
            handleMessage(setFriendMessasge, "Something went wrong");
            return;
        }
        //if everything went well, send notification to the other user
        const _notification = {
            key: uuidv4(),
            address: friend.friendLink,
            type: "friend-request-accepted",
            sender: profile.userName ?? profile.email,
            origin: profile.friendLink,
        }
        sendNotification(_notification);
    };

    return (
        <div className={styles["main-container"]}>
            <div className={styles["tab-container"]}>
                <div className={styles["tab-container-item"]}>Friends</div>
                <div
                    className={styles["tab-container-refresh-button"]}
                    onClick={() => {
                        setHandleFriends(!handleFriends);
                    }}
                >
                    <FiRefreshCcw />
                </div>
            </div>
            <div className={styles["display-container"]}>
                {/*check if user has friends*/}
                {friends != undefined && friends.length > 0 ? (
                    <>
                        {friends.map((friend, index) => (
                            <FriendItem
                                key={friend.friendLink}
                                friend={friend}
                                handleAccept={handleAccept}
                                handleDecline={handleDelete}
                                handleCancel={handleDelete}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <div>You have no friends.</div>
                    </>
                )}
                {/*adding new friend*/}
                <div className={styles["add-friend-container"]}>
                    <input
                        className={styles["add-friend-input"]}
                        type="text"
                        placeholder="Add friend"
                        value={newFriend}
                        onChange={(e) => setNewFriend(e.target.value)}
                    />
                    <div
                        className={styles["add-friend-button"]}
                        onClick={() => addFriend()}
                    >
                        Add
                    </div>
                </div>
                <div>{friendMessasge}</div>
            </div>
        </div>
    );
}

export default Friends;
