import { jsx as _jsx } from "react/jsx-runtime";
export function CenterX({ children, className }) {
    return _jsx("div", Object.assign({ className: 'w-full flex justify-center ' + className }, { children: children }));
}
export function CenterY({ children, className }) {
    return _jsx("div", Object.assign({ className: 'w-full flex items-center ' + className }, { children: children }));
}
//# sourceMappingURL=center.js.map