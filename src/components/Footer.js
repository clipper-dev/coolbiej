import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

//icons
import { FaLongArrowAltUp, FaMediumM, FaLinkedinIn, FaLink, FaInstagram, FaTwitter, FaBook, FaReadme } from 'react-icons/fa'

function Footer() {

    return (
        <div className={styles['main-footer-container']}>
            <div className={styles['footer-container']}>

                <div className={styles['footer-column']}>
                    <div className={styles['footer-header']}>Majordomu</div>
                    <span className={styles['footer-content']}>Become a more productive version of you and get things done with Majordomu app.</span>
                </div>

                <div className={styles['footer-column']}>

                    <div className={styles['footer-subheading']}>MAJORDOMU</div>
                    <Link href="#home">
                        <div className={styles['footer-link']}>
                            <FaLongArrowAltUp />
                            <div className={styles["footer-link-item"]}>
                                Home
                            </div>
                        </div>
                    </Link>
                    <Link href="#features">
                        <div className={styles['footer-link']}>
                            <FaLongArrowAltUp />
                            <div className={styles["footer-link-item"]}>
                                Features
                            </div>
                        </div>
                    </Link>
                    <Link href="#pricing">
                        <div className={styles['footer-link']}>
                            <FaLongArrowAltUp />
                            <div className={styles["footer-link-item"]}>
                                Pricing
                            </div>
                        </div>
                    </Link>
                    <Link href="#faq">
                        <div className={styles['footer-link']}>
                            <FaLongArrowAltUp />
                            <div className={styles["footer-link-item"]}>
                                FAQ
                            </div>
                        </div>
                    </Link>

                </div>
                <div className={styles['footer-column']}>

                    <div className={styles['footer-subheading']}>BROWSE</div>
                    <Link href="/articles">
                        <div className={styles['footer-link']}>
                            <FaReadme />
                            <div className={styles["footer-link-item"]}>
                                Articles
                            </div>
                        </div>
                    </Link>
                    <Link className={styles['footer-link']} href="/book">
                        <div className={styles['footer-link']}>
                            <FaBook />
                            <div className={styles["footer-link-item"]}>
                                Book
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['footer-column']}>

                    <div className={styles['footer-subheading']}>LINKS</div>
                    <Link className={styles['footer-link']} href="https://erickulbiej.medium.com/">
                        <div className={styles['footer-link']}>
                            <FaMediumM />
                            <div className={styles["footer-link-item"]}>
                                Medium
                            </div>
                        </div>
                    </Link>
                    <Link className={styles['footer-link']} href="https://www.linkedin.com/in/eric-kulbiej-918b85111/">
                        <div className={styles['footer-link']}>
                            <FaLinkedinIn />
                            <div className={styles["footer-link-item"]}>
                                Linkedin
                            </div>
                        </div>
                    </Link>
                    <Link className={styles['footer-link']} href="https://bio.link/erickulb">
                        <div className={styles['footer-link']}>
                            <FaLink />
                            <div className={styles["footer-link-item"]}>
                                Link Tree
                            </div>
                        </div>
                    </Link>
                    <Link className={styles['footer-link']} href="https://www.instagram.com/erickulbiej/">
                        <div className={styles['footer-link']}>
                            <FaInstagram />
                            <div className={styles["footer-link-item"]}>
                                Instagram
                            </div>
                        </div>
                    </Link>
                    <Link className={styles['footer-link']} href="https://twitter.com/erickulbiej">
                        <div className={styles['footer-link']}>
                            <FaTwitter />
                            <div className={styles["footer-link-item"]}>
                                Twitter
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Footer