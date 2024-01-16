// Menu.tsx
import PropTypes from 'prop-types';


interface Category {
    name: string;
    link: string;
}
interface SubMenuProps {
    categories: Category[];
}
function SubMenu({ categories }: SubMenuProps) {
    return (
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {categories.map((category, index) => (
                <div key={index}>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        {category.name}
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href={category.link} className="hover:underline">
                                {category.name}
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
SubMenu.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

interface MenuProps {
    isOpen: boolean;
    categories: Category[];
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isOpen, categories, setIsMenuOpen }: MenuProps) {
    return (
        <div className={` w-[800px] h-[400px] transition-all duration-300 fixed top-14 bg-white shadow-lg ${isOpen ? "opacity-1" : "opacity-0 hidden"}`} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
            <div className={"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"}>
                <div className="md:flex md:justify-between">
                    <SubMenu categories={categories} />
                </div>
            </div>
        </div>
    );
}

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
};
export default Menu;
