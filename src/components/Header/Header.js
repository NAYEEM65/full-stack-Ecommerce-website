import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <header className="w-full transition-all duration-200 bg-slate-700 text-white ">
            {/* desktop menu */}
            <DesktopMenu />
            {/* mobile menu */}
            <MobileMenu />
        </header>
    );
};

export default Header;
