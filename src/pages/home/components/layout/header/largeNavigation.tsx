import { useState } from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Menu from "./menu";

function LargeNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { name: "Example Link", link: "#" },
        { name: "Example Link", link: "#" },
        { name: "Example Link", link: "#" },
    ];

  return (
    <nav className="max-w-screen-xl px-4 py-3 mx-auto flex-wrap justify-between items-center w-full hidden lg:flex">
    <Menu isOpen={isMenuOpen} categories={categories} setIsMenuOpen={setIsMenuOpen} />
    <div className="flex items-center justify-center">
        <ul className="flex flex-row font-medium mt-0 space-x-8 gap-2">
            <li>
                <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:underline py-2"
                    aria-current="page"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    Design spotlight <RiArrowDropDownLine className="inline text-xl" />
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:underline py-2"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    Business <RiArrowDropDownLine className="inline text-xl" />
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:underline py-2"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    Education <RiArrowDropDownLine className="inline text-xl" />
                </a>
            </li>
        </ul>
    </div>
    <div className="flex gap-4 items-center justify-center">
        <button className="rounded-full aspect-square w-6 h-6 text-2xl flex items-center justify-center">
            <MdOutlineSearch />
        </button>
        <button className="rounded-full aspect-square w-6 h-6  text-2xl  flex items-center justify-center">
            <IoMdHelpCircleOutline />
        </button>
        <button className="bg-gray-100 text-black  p-4  py-3 rounded-sm font-semibold">
            Log in
        </button>
        <button className="bg-brand text-white p-4 py-3 rounded-sm  font-semibold">
            Sign up
        </button>
    </div>
</nav>  )
}

export default LargeNavigation