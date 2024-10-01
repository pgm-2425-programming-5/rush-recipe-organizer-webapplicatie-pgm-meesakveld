import React from 'react';
import Nav from './Nav';

import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center max-sm:flex-col gap-6">
            <Link href="/">
                <div className="text-xl font-bold">Recipes</div>
            </Link>
            <Nav />
        </header>
    );
};

export default Header;