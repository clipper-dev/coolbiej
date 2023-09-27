import { jsx as _jsx } from "react/jsx-runtime";
export function Display({ children, className = '' }) {
    return _jsx("h1", Object.assign({ className: `text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-zinc-50 ${className}` }, { children: children }));
}
export function Headline({ children, className = '' }) {
    return _jsx("h2", Object.assign({ className: `text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-zinc-50 ${className}` }, { children: children }));
}
export function Title({ children, className = '' }) {
    return _jsx("h3", Object.assign({ className: `text-lg md:text-xl lg:text-2xl font-semibold dark:text-zinc-50 ${className}` }, { children: children }));
}
export function Header({ children, className = '' }) {
    return _jsx("h4", Object.assign({ className: `text-base md:text-lg lg:text-xl font-medium dark:text-zinc-50 ${className}` }, { children: children }));
}
export function Body({ children, className = '' }) {
    return (_jsx("p", Object.assign({ className: `text-base md:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 max-w-[70ch] ${className}` }, { children: children })));
}
export function Label({ children, className = '' }) {
    return (_jsx("p", Object.assign({ className: `text-sm md:text-sm lg:text-base font-bold text-zinc-600 dark:text-zinc-500 ${className}` }, { children: children })));
}
export function Small({ children, className = '' }) {
    return _jsx("span", Object.assign({ className: `text-xs dark:text-zinc-50 ${className}` }, { children: children }));
}
export function Code({ children, className = '' }) {
    return _jsx("span", Object.assign({ className: `text-xs font-mono dark:text-zinc-50 ${className}` }, { children: children }));
}
export function NavItem({ children, className = '' }) {
    return (_jsx("span", Object.assign({ className: 'text-zinc-400 hover:text-purple-500 md:text-lg dark:text-zinc-50 ' + className }, { children: children })));
}
//# sourceMappingURL=index.js.map