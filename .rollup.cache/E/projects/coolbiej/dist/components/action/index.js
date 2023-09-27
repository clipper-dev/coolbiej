import { jsx as _jsx } from "react/jsx-runtime";
export function Action({ className = '', children, onClick }) {
    return (_jsx("div", Object.assign({ className: `font-medium cursor-pointer text-blue-500 hover:underline ${className}`, onClick: onClick }, { children: children })));
}
export function Caution({ className = '', children, onClick }) {
    return (_jsx("div", Object.assign({ className: `font-medium cursor-pointer text-rose-500 hover:underline ${className}`, onClick: onClick }, { children: children })));
}
//# sourceMappingURL=index.js.map