import Link from 'next/link';
import React from 'react';
import Button from '../common/button';

const Nav: React.FC = () => {
    return (
        <nav className="bg-gray-100 rounded-sm p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="sm:space-x-4 flex max-sm:flex-col gap-4 ">
                    <Button as="link" href="/">Home</Button>
                    <Button as="link" href="/recipes">Recipes</Button>
                    <Button as="link" href="/recipes/add">Add Recipe</Button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;