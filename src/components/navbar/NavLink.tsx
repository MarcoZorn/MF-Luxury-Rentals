import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

    return (
        <Link
            to={to}
            className={cn(
                "relative text-sm font-bold tracking-widest transition-all duration-300 py-2 group",
                isActive ? "text-white" : "text-gray-400 hover:text-white"
            )}
        >
            {children}
            <span className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(212,175,55,0.8)]",
                isActive ? "w-full" : "w-0"
            )} />
        </Link>
    );
};

export default NavLink;
