import { jsx as _jsx } from "react/jsx-runtime";
export function MainButton({ children, onClick, className, disabled }) {
    return (_jsx("button", Object.assign({ className: 'bg-gradient-to-r from-orange-500 to-purple-500 px-4 py-2 rounded-full font-secondary' + ' ' + className, disabled: disabled, onClick: onClick }, { children: _jsx("div", Object.assign({ className: 'p-px' }, { children: children })) })));
}
export function SecondaryButton({ children, onClick, className, disabled }) {
    return (_jsx("button", Object.assign({ className: 'bg-gradient-to-r from-orange-500 to-purple-500 p-px rounded-full font-secondary' + ' ' + className, onClick: onClick, disabled: disabled }, { children: _jsx("div", Object.assign({ className: 'bg-zinc-800 rounded-full px-4 py-2' }, { children: children })) })));
}
//# sourceMappingURL=index.js.map