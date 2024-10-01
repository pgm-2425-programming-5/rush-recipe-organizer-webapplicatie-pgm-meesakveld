import React from 'react';

interface ButtonProps {
    as: 'button' | 'link';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ as, href, onClick, children, className }) => {
    const baseStyles = 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300';

    if (as === 'link' && href) {
        return (
            <a href={href} className={`${baseStyles} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
};

export default Button;