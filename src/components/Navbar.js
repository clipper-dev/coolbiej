{/*Functionality*/ }
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { useWindowSize } from '../utils/CustomHooks'
import { useTheme } from 'next-themes'
//next-js
import Link from 'next/link'
import Image from 'next/image';
//auth
import { signOut, useSession } from 'next-auth/react';
{/*Components*/ }
import { Button } from './Button'
import { NavBarData } from './NavBarData'
import { SideBarData } from './SideBarData'
{/*Styling*/ }
import styles from './Navbar.module.css'

{/*Icons*/ }
import { FaBars, FaStar, FaPaintRoller, FaFileContract, FaRegCalendarCheck } from 'react-icons/fa'
import { FiBell, FiLogOut, FiSearch, FiSettings } from 'react-icons/fi'
import { BsFillKeyFill } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'

{/*Recoil*/ }
import { useRecoilState, useRecoilValue } from "recoil"
import { nameState, emailState, userState, changeNameDialogState, newUserState } from "../atoms/profileAtom"
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { handleNotificationState, newNotificationsState, readNotificationsState } from "../atoms/notificationsAtom"
import { searchBarState } from '../atoms/officeAtom';
import { HiSearch } from 'react-icons/hi';

function PureNavbar() {
	return (
		<div className={styles['navbar']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>
				<div className={styles['navbar-main-logo']}>
					<Image
						src="/logo.png"
						alt="Majordomu app logo"
						layout='fill'
					/>
				</div>
				<span className={styles['app-title']}>Majordomu</span>
			</div>
		</div>
	)
}

function Navbar() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				{/*Left section of the navbar, responsible for the logo or company name*/}
				<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
					<div className={styles['title-container']}>
						<div className={styles['navbar-main-logo']}>
							<Image
								src="/logo.png"
								alt="Majordomu app logo"
								layout='fill'
							/>
						</div>
						<span className={styles['app-title']}>Majordomu</span>
					</div>
				</Link>
				{/*Middle section of the navbar, responsible for the logo or company name*/}
				<div className={styles['middle-container']}>
					{size.width > 600 ?
						//wide screen, desktop
						<div className={styles['navBar-menu']}>
							<ul className={styles['navBar-menu-items']}>
								{NavBarData.map((item, index) => {
									return (
										<li key={index} className={styles['nav-text-top']}>
											{item.behaviour === "scroll" ?
												<>
													<a href={`#${item.path}`} onClick={(e) => {
														e.preventDefault();
														document.querySelector(`#${item.path}`).scrollIntoView({
															behavior: "smooth"
														});
													}} >
														<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
													</a>
												</>
												:
												<>
													<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
														<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
													</Link>
												</>}
										</li>
									)
								})}
							</ul>

						</div>
						:
						<></>
					}
				</div>
				{/*Right section of the navbar, responsible for the logo or company name*/}
				<div className={styles['signup-border']}>
					<Link href='https://app.majordomu.com/signup'>
						<div className={styles['signup-button']}>Sign up -&gt;</div>
					</Link>
				</div>
				{size.width > 600 ?
					//wide screen, desktop
					<></>
					:
					//mobile, only icon
					<div className={styles['menu-icon-container']}>
						<FaBars className={styles['menu-icon']} onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>

			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
									<span className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")}>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}

function NavbarSinglePage() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				{/*Left section of the navbar, responsible for the logo or company name*/}
				<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
					<div className={styles['title-container']}>
						<div className={styles['navbar-main-logo']}>
							<Image
								src="/logo.png"
								alt="Majordomu app logo"
								layout='fill'
							/>
						</div>
						<span className={styles['app-title']}>Majordomu</span>
					</div>
				</Link>
				{size.width > 600 ?

					<div className={styles['navBar-menu']}>
						<ul className={styles['navBar-menu-items']}>
							{NavBarData.map((item, index) => {
								return (
									<li key={index} className={styles['nav-text-top']}>
										{item.behaviour === "scroll" ?
											<>
												<a href={`#${item.path}`} onClick={(e) => {
													e.preventDefault();
													document.querySelector(`#${item.path}`).scrollIntoView({
														behavior: "smooth"
													});
												}} >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</a>
											</>
											:
											<>
												<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</Link>
											</>}
									</li>
								)
							})}
						</ul>

					</div>
					:
					<div className={styles['menu-icon']}>
						<FaBars onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>
			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={'#' + item.path} onClick={() => { setSideBar(!sideBar) }} passHref >
									<span onClick={() => { setSideBar(!sideBar) }} className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")} >{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}

function NavbarMajordomu() {
	//close sidebar on escape key press
	const closeSidebar = () => {
		// your logic here
		if (sidebar) { setSideBar(false) };
		if (true) { setModalOpen(false) };
	};

	useEffect(() => {
		const keyDownHandler = event => {
			if (event.key === 'Escape') {
				event.preventDefault();

				// 👇️ your logic here
				closeSidebar();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		// 👇️ clean up event listener
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, []);


	//getting session data
	const { data: session } = useSession();
	//setting themes
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme, setTheme } = useTheme()
	//set the flag of mounting to true when the app mounts
	useEffect(() => setMounted(true), []);


	//get user data
	const userName = useRecoilValue(nameState);
	const email = useRecoilValue(emailState);
	const [showChangeNameDialog, setShowChangeNameDialog] = useRecoilState(changeNameDialogState);

	//hook for checking window size
	const size = useWindowSize();

	const [sidebar, setSideBar] = useState(false); //sidebar
	//modal for adding new task
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);

	const router = useRouter()

	return (
		<div className={styles['navbar-2']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>
				<div className={styles['navbar-main-logo']}>
					<Image
						src="/logo.png"
						alt="Majordomu app logo"
						width={30}
						height={30}
					/>
				</div>
			</div>
			{/*Middle section of the navbar, responsible for ???*/}
			<div className={styles['middle-container']}>
				<div className={styles['initial-button-container']} onClick={() => setModalOpen(true)}>
					<div className={[styles['initial-button'], ["noselect"]].join(" ")}>+</div>
				</div>
			</div>
			{/*Right section of the navbar, responsible for the account and settings icon*/}
			{/*initial icon button*/}
			<div className={styles['right-container']}>
				<div className={styles['initial-button-container']} onClick={() => setSideBar(!sidebar)}>
					<div className={[styles['initial-button'], ["noselect"]].join(" ")}>{session.user.userName[0].toUpperCase()}</div>
				</div>
			</div>
			{/*sidebar visible only if sidebar is true, else hidden*/}
			<div className={sidebar ?
				[styles['sidebar-menu'], styles['sidebar-active']].join(" ")
				:
				[styles['sidebar-menu'], styles['sidebar-hidden']].join(" ")}>

				<div className={[styles['profile-container']].join(" ")}>
					<div className={styles['initial-outilne-container']} >
						{/*icon on the side bar*/}
						<div className={[styles['initial-outline'], ["noselect"]].join(" ")}>{session.user.userName[0].toUpperCase()}</div>
					</div>
					<div className={[styles['profile-container-details'], ["noselect"]].join(" ")}>
						<div className={[styles['profile-container-details-name']].join(" ")} onClick={() => { setShowChangeNameDialog(true) }}>
							{/*first name or part of the username*/}
							{session.user.userName.split(" ")[0]}
						</div>
						{/*mail of the user*/}
						<div className={[styles['profile-container-details-email']].join(" ")}>
							{session.user.email}
						</div>
						<div className={[styles['profile-container-details-tier']].join(" ")}>
							{/*tier of the account*/}
							FREE TIER
						</div>
					</div>
				</div>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				{/*setting link*/}
				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FiSettings />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Settings</span>
				</a>

				{/*change theme*/}
				{mounted && (
					<>
						<a className={[styles['sidebar-menu-item']].join(" ")} onClick={(e) => {
							{ theme === "light" ? setTheme('dark') : setTheme('light') }
						}} >
							<FaPaintRoller />
							<span className={[styles['sidebar-menu-item-text']].join(" ")}>Theme: {theme}</span>
						</a>
					</>
				)
				}
				{/*some debugging tools*/}
				<>
					<a className={[styles['sidebar-menu-item']].join(" ")}>
						<BsFillKeyFill />
						<span className={[styles['sidebar-menu-item-text']].join(" ")}>{ }</span>
					</a>
				</>

				{/*change plan for higher*/}
				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FaStar />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Change plan</span>
				</a>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				<a className={[styles['sidebar-menu-item']].join(" ")} onClick={(e) => {
					signOut()
				}} >
					<FiLogOut />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Sign out</span>
				</a>

			</div>
		</div>
	)
}
function NavbarMajordomuGuest() {
	const size = useWindowSize();
	const router = useRouter()

	return (
		<div className={styles['navbar']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<Link href="/">
				<div className={styles['title-container']}>
					<div className={styles['navbar-main-logo']}>
						<Image
							src="/logo.png"
							alt="Majordomu app logo"
							layout='fill'
						/>
					</div>
					<span className={styles['app-title']}>Majordomu</span>
				</div>
			</Link>
			{/*Middle section of the navbar, responsible for the logo or company name*/}
			<div className={styles['middle-container']}>
				{size.width > 600 ?
					//wide screen, desktop
					<div className={styles['navBar-menu']}>
						<ul className={styles['navBar-menu-items']}>

							{NavBarData.map((item, index) => {
								return (
									<li key={index} className={styles['nav-text-top']}>
										{item.behaviour === "scroll" ?
											<>
												<a href={`#${item.path}`} onClick={(e) => {
													e.preventDefault();
													document.querySelector(`#${item.path}`).scrollIntoView({
														behavior: "smooth"
													});
												}} >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</a>
											</>
											:
											<>
												<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</Link>
											</>}
									</li>
								)
							})}

						</ul>

					</div>
					:
					<></>
				}
			</div>
		</div>
	)
}


function NavbarMajordomuApp({ }) {
	//close sidebar on escape key press

	const [user, setUser] = useRecoilState(userState);
	//for searching and querring
	const [searchBar, setSearchBar] = useRecoilState(searchBarState);

	{/*changing the user name*/ }
	const [newUser, setNewUser] = useRecoilState(newUserState);
	const handleChangeUserName = () => {
		console.log("new user name: ", newUser)
		setNewUser(true);
	}


	const closeSidebar = () => {
		// your logic here
		if (sidebar) { setSideBar(false) };
		if (true) { setModalOpen(false) };
	};

	useEffect(() => {
		const keyDownHandler = event => {
			if (event.key === 'Escape') {
				event.preventDefault();

				// 👇️ your logic here
				closeSidebar();
			}
		};
		document.addEventListener('keydown', keyDownHandler);
		// 👇️ clean up event listener
		return () => {
			document.removeEventListener('keydown', keyDownHandler);
		};
	}, []);

	//getting session data
	const { data: session } = useSession();
	//setting themes
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme, setTheme } = useTheme()
	//set the flag of mounting to true when the app mounts
	useEffect(() => setMounted(true), []);


	//get user data
	const userName = useRecoilValue(nameState);
	const email = useRecoilValue(emailState);
	const [showChangeNameDialog, setShowChangeNameDialog] = useRecoilState(changeNameDialogState);

	//notifications vars
	const [newNotifications, setNewNotifications] = useRecoilState(newNotificationsState);
	//hook for checking window size
	const size = useWindowSize();

	const [sidebar, setSideBar] = useState(false); //sidebar
	//modal for adding new task
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);

	//open settings modal
	const handleOpenSettingsModal = () => {
		setModalType("settings");
		setModalOpen(true);
	}

	//open friends tab modal
	const handleOpenFriendsModal = () => {
		setModalType("friends");
		setModalOpen(true);
	}

	//open notifications tab modal
	const handleOpenNotificationsModal = () => {
		setModalType("notifications");
		setModalOpen(true);
	}

	const router = useRouter()

	return (
		<div className={styles['navbar-2']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>

			</div>
			{/*Middle section of the navbar, responsible for ???*/}
			<div className={styles['middle-container']}>

			</div>
			{/*Right section of the navbar, responsible for the account and settings icon*/}
			{/*initial icon button*/}
			<div className={styles['right-container']}>

				{/*MAIN TOOLBAR*/}
				<div
					className={styles['toolbar']}
				>

					{/*Search bar*/}
					<div className={styles['search-bar']}>
						<div
							className={styles['search-bar-icon']}
						>
							<HiSearch />
						</div>
						<input
							type="text"
							placeholder="Search"
							className={styles['search-bar-input']}
							onChange={(e) => { setSearchBar(e.target.value) }}
						/>
					</div>



				</div>
				<div
					className={styles['toolbar-right']}
				>


					{/*Notification icon*/}
					<div
						className={styles['notification-icon']}
						notification-count={newNotifications.length}
						onClick={() => { handleOpenNotificationsModal() }}
					>
						<FiBell />
					</div>
					{/*Calendar icon*/}
					<div
						className={styles['toolbar-icon']}
						onClick={() => { handleOpenNotificationsModal() }}
					>
						<FaRegCalendarCheck />
					</div>
					<div className={styles['initial-button-container']} onClick={() => setSideBar(!sidebar)}>
						<div className={[styles['initial-button'], ["noselect"]].join(" ")}>{user.userName[0].toUpperCase()}</div>
					</div>
				</div>
			</div>
			{/*sidebar visible only if sidebar is true, else hidden*/}
			<div className={sidebar ?
				[styles['sidebar-menu'], styles['sidebar-active']].join(" ")
				:
				[styles['sidebar-menu'], styles['sidebar-hidden']].join(" ")}>

				<div className={[styles['profile-container']].join(" ")}>
					<div className={styles['initial-outilne-container']} >
						{/*icon on the side bar*/}
						<div className={[styles['initial-outline'], ["noselect"]].join(" ")}>{user.userName[0].toUpperCase()}</div>
					</div>
					<div className={[styles['profile-container-details'], ["noselect"]].join(" ")}>
						<div className={[styles['profile-container-details-name']].join(" ")} onClick={() => { handleChangeUserName() }}>
							{/*first name or part of the username*/}
							{user.userName.split(" ")[0]}
						</div>
						{/*mail of the user*/}
						<div className={[styles['profile-container-details-email']].join(" ")}>
							{session.user.email}
						</div>
						<div className={[styles['profile-container-details-tier']].join(" ")}>
							{/*tier of the account*/}
							FREE TIER
						</div>
					</div>
				</div>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				{/*settings link*/}
				<a className={[styles['sidebar-menu-item']].join(" ")}
					onClick={() => { handleOpenSettingsModal() }}>
					<FiSettings />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Settings</span>
				</a>
				{/*friends tab*/}
				<a className={[styles['sidebar-menu-item']].join(" ")}
					onClick={() => { handleOpenFriendsModal() }}>
					<IoMdContacts />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Friends</span>
				</a>

				{/*change theme*/}
				{mounted && (
					<>
						<a className={[styles['sidebar-menu-item']].join(" ")} onClick={(e) => {
							{ theme === "light" ? setTheme('dark') : setTheme('light') }
						}} >
							<FaPaintRoller />
							<span className={[styles['sidebar-menu-item-text']].join(" ")}>Theme: {theme}</span>
						</a>
					</>
				)
				}
				{/*some debugging tools*/}
				{/* <>
					<a className={[styles['sidebar-menu-item']].join(" ")}>
						<BsFillKeyFill />
						<span className={[styles['sidebar-menu-item-text']].join(" ")}>{ }</span>
					</a>
				</>
 */}
				{/*change plan for higher*/}
				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FaStar />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Change plan</span>
				</a>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				<a className={[styles['sidebar-menu-item']].join(" ")} onClick={(e) => {
					signOut()
				}} >
					<FiLogOut />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Sign out</span>
				</a>

			</div>
		</div>
	)
}
//side bars

function MainSidebar() {
	return (
		<>

		</>
	)
}

export { Navbar, NavbarSinglePage, PureNavbar, NavbarMajordomu, NavbarMajordomuGuest, NavbarMajordomuApp, MainSidebar }