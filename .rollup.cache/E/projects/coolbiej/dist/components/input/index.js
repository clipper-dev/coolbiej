import { jsx as _jsx } from "react/jsx-runtime";
export function Input({ placeholder, type, value, onChange, className, name, id, required, disabled, autoComplete, autoFocus, }) {
    return (_jsx("input", { className: `w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`, placeholder: placeholder, type: type, value: value, onChange: onChange, name: name, id: id, required: required, disabled: disabled, autoComplete: autoComplete, autoFocus: autoFocus }));
}
//# sourceMappingURL=index.js.map