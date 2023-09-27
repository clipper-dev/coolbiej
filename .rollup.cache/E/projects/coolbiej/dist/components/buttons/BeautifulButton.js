import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './BeautifulButton.module.css';
export function BeautifulButton({ children, icon, className }) {
    return (_jsxs("div", Object.assign({ className: [styles.buttonWrapper, 'md:px-6 py-2 cursor-pointer transition-all rounded-full', className].join(' ') }, { children: ["(", _jsxs("div", Object.assign({ className: 'flex items-center gap-1' }, { children: [_jsx("div", Object.assign({ className: styles.arrowLeft }, { children: icon })), _jsx("span", Object.assign({ className: [styles.label, 'font-secondary text-sm md:text-lg'].join(' ') }, { children: children })), _jsx("div", Object.assign({ className: styles.arrowRight }, { children: icon }))] })), ")"] })));
}
//# sourceMappingURL=BeautifulButton.js.map