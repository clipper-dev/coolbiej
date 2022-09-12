import React, { useEffect, useState, useRef  } from "react";
import styles from './TableOfContent.module.css'
import dynamic from 'next/dynamic'
import { useHeadingsData, useIntersectionObserver  } from "../utils/CustomHooks";


const Headings = ({ headings, activeId }) => (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id} className={child.id === activeId ? "active" : ""}>
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const TableOfContents = () => {
    const [activeId, setActiveId] = useState("");
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);
  
    return (
      <div className={styles['main-container']}>
        <div className={styles['header']}>Contents</div>
        <a
            href={`#title`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#title`).scrollIntoView({
                behavior: "smooth"
              });
            }}
          >Back to top</a>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </div>
    );
  };

export default TableOfContents;