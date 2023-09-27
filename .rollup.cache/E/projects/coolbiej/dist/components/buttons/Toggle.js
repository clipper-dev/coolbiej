import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Toggle({ className = '', checked, onChange }) {
    return (_jsxs("label", Object.assign({ className: `relative inline-flex items-center cursor-pointer ${className}` }, { children: [_jsx("input", { type: 'checkbox', value: '', className: 'sr-only peer', checked: checked, onChange: onChange }), _jsx("div", { className: "w-11 h-6 bg-zinc-400 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600" })] })));
}
//# sourceMappingURL=Toggle.js.map