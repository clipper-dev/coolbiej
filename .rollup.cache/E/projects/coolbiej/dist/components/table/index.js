import { jsx as _jsx } from "react/jsx-runtime";
export function TableTextBody({ children, className = '' }) {
    return _jsx("p", Object.assign({ className: `text-base md:text-base lg:text-lg text-zinc-400 max-w-[70ch] ${className}` }, { children: children }));
}
export function TableTextSmall({ children, className = '' }) {
    return _jsx("p", Object.assign({ className: `text-sm md:text-sm lg:text-base text-zinc-400 max-w-[70ch] ${className}` }, { children: children }));
}
export function TableTextHeader({ children, className = '' }) {
    return _jsx("p", Object.assign({ className: `text-sm md:text-sm lg:text-base font-semibold text-zinc-400 ${className}` }, { children: children }));
}
//# sourceMappingURL=index.js.map