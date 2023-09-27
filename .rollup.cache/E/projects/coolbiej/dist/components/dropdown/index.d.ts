import { ReactNode } from 'react';
interface DropdownProps {
    children: ReactNode;
    label: ReactNode;
    className?: string;
    openTimeout?: number;
    arrow?: boolean;
}
export declare function Dropdown({ children, label, openTimeout, className, arrow }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export declare function DropdownBreaker(): import("react/jsx-runtime").JSX.Element;
export declare function DropdownItem({ children, className }: Props): import("react/jsx-runtime").JSX.Element;
export declare function DropdownHeader({ children, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map