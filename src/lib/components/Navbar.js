import React, { useState } from "react";
import { Button } from "./Button";
import styles from "./Navbar.module.css";
import { NavBarData } from "./NavBarData";
import { SideBarData } from "./SideBarData";
import Link from "next/link";

import { FaBars } from "react-icons/fa";

import { useWindowSize } from "../utils/CustomHooks";
import Image from "next/image";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const [button] = useState(true);
  {
    /*Custom hook responsible for detecting small screen like mobiles*/
  }
  const size = useWindowSize();

  return (
    <>
      <div className={styles["navbar"]}>
        {/*Left section of the navbar, responsible for the logo or company name*/}
        <Link
          href={"/"}
          onClick={() => {
            setSideBar(false);
          }}
          passHref
        >
          <div className={styles["title-container"]}>
            <div className={styles["navbar-main-logo"]}>
              <Image
                src="/logo.png"
                alt="Majordomu app logo"
                width={30}
                height={30}
              />
            </div>
            <span className={styles["app-title"]}>Majordomu</span>
          </div>
        </Link>
        {/*Middle section of the navbar, responsible for the logo or company name*/}
        <div className={styles["middle-container"]}>
          {size.width > 600 ? (
            //wide screen, desktop
            <div className={styles["navBar-menu"]}>
              <ul className={styles["navBar-menu-items"]}>
                {NavBarData.map((item, index) => {
                  return (
                    <li key={index} className={styles["nav-text-top"]}>
                      {item.behaviour === "scroll" ? (
                        <>
                          <a
                            href={`#${item.path}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document
                                .querySelector(`#${item.path}`)
                                .scrollIntoView({
                                  behavior: "smooth",
                                });
                            }}
                          >
                            <span
                              className={[
                                styles["navBar-menu-item-title"],
                                ["p--display"],
                              ].join(" ")}
                            >
                              {item.title}
                            </span>
                          </a>
                        </>
                      ) : (
                        <>
                          <Link
                            href={item.path}
                            onClick={() => {
                              setSideBar(false);
                            }}
                            passHref
                          >
                            <span
                              className={[
                                styles["navBar-menu-item-title"],
                                ["p--display"],
                              ].join(" ")}
                            >
                              {item.title}
                            </span>
                          </Link>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/*Right section of the navbar, responsible for the logo or company name*/}
        <div className={styles["signup-border"]}>
          <Link href="https://app.majordomu.com/login">
            <div className={styles["signup-button"]}>Sign up -&gt;</div>
          </Link>
        </div>
        {size.width > 600 ? (
          //wide screen, desktop
          <></>
        ) : (
          //mobile, only icon
          <div className={styles["menu-icon-container"]}>
            <FaBars
              className={styles["menu-icon"]}
              onClick={() => {
                setSideBar(!sideBar);
              }}
            />
          </div>
        )}
      </div>

      {/*Display side bar only if opened and only if on mobile*/}
      {
        <div
          className={
            sideBar
              ? [styles["sideBar-menu"], styles["sideBar-active"]].join(" ")
              : [styles["sideBar-menu"], styles["sideBar-hidden"]].join(" ")
          }
        >
          <ul className={styles["sideBar-menu-items"]}>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={styles["sideBar-menu-item"]}>
                  <Link
                    href={item.path}
                    onClick={() => {
                      setSideBar(false);
                    }}
                    passHref
                  >
                    <span
                      className={[
                        styles["sideBar-menu-item-text"],
                        ["p--display"],
                      ].join(" ")}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
}

function NavbarSinglePage() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const [button] = useState(true);
  {
    /*Custom hook responsible for detecting small screen like mobiles*/
  }
  const size = useWindowSize();

  return (
    <>
      <div className={styles["navbar"]}>
        {/*Left section of the navbar, responsible for the logo or company name*/}
        <Link
          href={"/"}
          onClick={() => {
            setSideBar(false);
          }}
          passHref
        >
          <div className={styles["title-container"]}>
            <div className={styles["navbar-main-logo"]}>
              <Image src="/logo.png" alt="Majordomu app logo" layout="fill" />
            </div>
            <span className={styles["app-title"]}>Majordomu</span>
          </div>
        </Link>
        {size.width > 600 ? (
          <div className={styles["navBar-menu"]}>
            <ul className={styles["navBar-menu-items"]}>
              {NavBarData.map((item, index) => {
                return (
                  <li key={index} className={styles["nav-text-top"]}>
                    {item.behaviour === "scroll" ? (
                      <>
                        <a
                          href={`#${item.path}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(`#${item.path}`)
                              .scrollIntoView({
                                behavior: "smooth",
                              });
                          }}
                        >
                          <span
                            className={[
                              styles["navBar-menu-item-title"],
                              ["p--display"],
                            ].join(" ")}
                          >
                            {item.title}
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        <Link
                          href={item.path}
                          onClick={() => {
                            setSideBar(false);
                          }}
                          passHref
                        >
                          <span
                            className={[
                              styles["navBar-menu-item-title"],
                              ["p--display"],
                            ].join(" ")}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className={styles["menu-icon"]}>
            <FaBars
              onClick={() => {
                setSideBar(!sideBar);
              }}
            />
          </div>
        )}
      </div>
      {/*Display side bar only if opened and only if on mobile*/}
      {
        <div
          className={
            sideBar
              ? [styles["sideBar-menu"], styles["sideBar-active"]].join(" ")
              : [styles["sideBar-menu"], styles["sideBar-hidden"]].join(" ")
          }
        >
          <ul className={styles["sideBar-menu-items"]}>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={styles["sideBar-menu-item"]}>
                  <Link
                    href={"#" + item.path}
                    onClick={() => {
                      setSideBar(!sideBar);
                    }}
                    passHref
                  >
                    <span
                      onClick={() => {
                        setSideBar(!sideBar);
                      }}
                      className={[
                        styles["sideBar-menu-item-text"],
                        ["p--display"],
                      ].join(" ")}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
}

export { Navbar, NavbarSinglePage };
