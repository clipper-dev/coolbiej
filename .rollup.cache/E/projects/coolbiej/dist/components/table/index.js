import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TriangleIcon } from '../../_misc/icons';
export function Table({ children, className = '' }) {
    return _jsx("table", Object.assign({ className: 'w-full caption-bottom text-sm ' + className }, { children: children }));
}
export function TableHead({ children, className = '' }) {
    return (_jsx("thead", Object.assign({ className: 'bg-zinc-50 dark:bg-zinc-700 border-y border-zinc-100 dark:border-zinc-700 ' + className }, { children: _jsx("tr", { children: children }) })));
}
export function TableBody({ children, className = '' }) {
    return _jsx("tbody", Object.assign({ className: '[&_tr:last-child]:border-0 ' + className }, { children: children }));
}
export function TableRow({ children, className = '', onClick }) {
    return (_jsx("tr", Object.assign({ className: 'border-b border-zinc-100 dark:border-zinc-700 ' + className, onClick: onClick }, { children: children })));
}
export function TableHeader({ children, className = '', onClick, sortable = false, sort = 'none', align = 'left', strong = false, }) {
    return (_jsxs("th", Object.assign({ className: `p-4 text-zinc-500 dark:text-zinc-400 ${sortable ? 'cursor-pointer flex flex-row' : ''} ${strong ? 'font-bold' : 'font-medium'} ${className}`, onClick: onClick, align: align }, { children: [children, sortable && (_jsxs("span", Object.assign({ className: 'ml-1 flex flex-col text-zinc-300 dark:text-zinc-600 ' }, { children: [_jsx(TriangleIcon, { className: `w-3 h-3 transition-transform transform ${sort === 'asc' ? 'text-blue-400 dark:text-purple-200' : ''}` }), _jsx(TriangleIcon, { className: `w-3 h-3 transition-transform transform rotate-180 ${sort === 'asc' ? '' : 'text-blue-400 dark:text-purple-200'}` })] })))] })));
}
export function TableCell({ children, className = '', align = 'left', strong = false }) {
    return (_jsx("td", Object.assign({ className: `p-4 ${strong ? 'text-zinc-700 dark:text-zinc-100 font-semibold' : 'text-zinc-500 dark:text-zinc-400'} ${className}`, align: align }, { children: children })));
}
//# sourceMappingURL=index.js.map