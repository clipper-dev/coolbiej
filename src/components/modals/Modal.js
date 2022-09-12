//components
import Backdrop from "./Backdrop";

import { useSession } from "next-auth/react";

//recoil
import { useRecoilState, useRecoilValue } from "recoil"

import { modalState, modalTypeState, modalEntranceState } from "../../atoms/modalAtom";
//forms
import AddNewTask from "./AddNewTask";
import EditTask from "./EditTask";
import ShareTask from "./ShareTask";

import Settings from "./Settings";
import Notifications from "./Notifications";
//framer motion
import { motion } from "framer-motion";
import Friends from "./Friends";

//import { getPostState } from "../atoms/postAtom";


const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.05,
			type: "spring",
			damping: 30,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const gifYouUp = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
	exit: {
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.15,
			ease: "easeOut",
		},
	},
};

const Modal = ({ handleClose, entrance, task }) => {
	const { data: session } = useSession();
	const [modalType, setModalType] = useRecoilState(modalTypeState);

	return (
		<Backdrop onClick={handleClose}>
			{entrance === "dropIn" && modalType === "add" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<AddNewTask handleClose={handleClose} />
				</motion.div>
			)}
			{entrance === "dropIn" && modalType === "edit" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<EditTask handleClose={handleClose} task={task} />
				</motion.div>
			)}
			{entrance === "dropIn" && modalType === "settings" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<Settings handleClose={handleClose} />
				</motion.div>
			)}
			{entrance === "dropIn" && modalType === "friends" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<Friends handleClose={handleClose}/>
				</motion.div>
			)}
			{entrance === "dropIn" && modalType === "notifications" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<Notifications handleClose={handleClose}/>
				</motion.div>
			)}
			{entrance === "dropIn" && modalType === "share" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className=""
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<ShareTask handleClose={handleClose}/>
				</motion.div>
			)}
		</Backdrop>

	);
};

export default Modal;