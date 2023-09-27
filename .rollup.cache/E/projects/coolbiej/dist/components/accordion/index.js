'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TriangleIcon } from '../../_misc/icons';
export function Accordion({ children, label, className, arrow = false, fill = false }) {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", Object.assign({ className: `${fill ? 'w-full' : 'w-fit'}` }, { children: [_jsxs("button", Object.assign({ className: `w-full flex flex-row justify-between bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-gray-200 dark:border-zinc-700 focus:outline-none rounded-lg font-semibold text-sm px-5 py-2.5 text-center items-center hover:bg-gray-100 transition-all duration-75 dark:hover:bg-zinc-700 ${className}`, onClick: () => setIsOpen(!isOpen) }, { children: [label, arrow && (_jsx(TriangleIcon, { className: `ml-2 h-full aspect-square transition ${isOpen ? 'rotate-0' : '-rotate-180'}` }))] })), _jsx("div", Object.assign({ className: `${isOpen ? 'block]' : 'hidden'}` }, { children: children }))] })));
}
export function AccordionDrawer({ children, className = '', border = false }) {
    return (_jsx("div", Object.assign({ className: `w-full bg-white dark:bg-zinc-800 mt-2 px-5 py-2.5  ${border ? 'border border-gray-200 dark:border-zinc-700 rounded-lg' : ''} ${className}` }, { children: children })));
}
//# sourceMappingURL=index.js.map