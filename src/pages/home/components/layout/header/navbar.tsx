// NavBar.js

import LargeNavigation from "./largeNavigation";

function NavBar() {

    return (
        <header className="bg-white border-gray-200 shadow-xl sticky top-0 z-[9999]">
            <div className="flex justify-between items-center mx-auto px-4 py-2 gap-4">
                <a href="/" className="flex items-center">
                    <img src="/assets/logo.svg" className="h-8" alt="Logo" />
                </a>
                <LargeNavigation/>
            </div>
        </header>
    );
}

export default NavBar;


