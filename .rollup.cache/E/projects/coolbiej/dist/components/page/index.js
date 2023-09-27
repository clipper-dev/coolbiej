import { jsx as _jsx } from "react/jsx-runtime";
export function Page({ children, className = '', clip, }) {
    return (_jsx("main", Object.assign({ className: `w-full flex flex-col items-center text-zinc-800 dark:text-zinc-100 dark:bg-zinc-800 ${className} ${clip && 'overflow-hidden'}` }, { children: children })));
}
export function PageContent({ children, className = '' }) {
    return _jsx("section", Object.assign({ className: `w-full max-w-screen-xl dark:bg-zinc-800 ${className}` }, { children: children }));
}
//# sourceMappingURL=index.js.map