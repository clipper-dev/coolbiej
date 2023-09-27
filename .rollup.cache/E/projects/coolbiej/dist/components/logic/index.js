import { jsx as _jsx } from "react/jsx-runtime";
export function TextError({ children, className = '' }) {
    return _jsx("span", Object.assign({ className: `text-rose-500 ${className}` }, { children: children }));
}
export function TextSuccess({ children, className = '' }) {
    return _jsx("span", Object.assign({ className: `text-emerald-500 ${className}` }, { children: children }));
}
//# sourceMappingURL=index.js.map