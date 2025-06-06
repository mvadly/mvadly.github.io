import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faCogs, faEnvelope, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className="w-full py-2 sm:py-5 fixed top-0 bg-slate-800 border-b-2 sm:border-0 border-white z-50">
            <div className="container mx-auto">
                <div className={`flex justify-between items-center`}>
                    <h1 className="px-3 sm:px-0 text-2xl font-bold text-slate-300">@mvadly</h1>
                    <div className={`${!isMobileMenuOpen ? "" : "absolute right-0"} block sm:hidden px-2 cursor-pointer`} onClick={toggleMobileMenu}>
                    {!isMobileMenuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} />}
                    </div>
                    <nav className={`${!isMobileMenuOpen ? "hidden sm:block" : "block sm:hidden"}`}>
                        <ul className={`${!isMobileMenuOpen ? "sm:flex sm:space-x-4 " : "sm:hidden absolute right-0 top-12 bg-orange-500 px-2 py-3 z-10 rounded-b-xl border-2 border-white"} text-slate-200`}>
                            <li className="mb-4 mx-2 sm:mb-0 sm:mx-4"><a href="#home"><FontAwesomeIcon icon={faHome} className="sm:!hidden" /><span className="!hidden sm:!block">Home</span></a></li>
                            <li className="mb-4 mx-2 sm:mb-0 sm:mx-4"><a href="#about"><FontAwesomeIcon icon={faUser} className="sm:!hidden" /><span className="!hidden sm:!block">About</span></a></li>
                            <li className="mb-4 mx-2 sm:mb-0 sm:mx-4"><a href="#experiences"><FontAwesomeIcon icon={faCogs} className="sm:!hidden" /><span className="!hidden sm:!block">Experiences</span></a></li>
                            <li className="mb-4 mx-2 sm:mb-0 sm:mx-4"><a href="#contact"><FontAwesomeIcon icon={faEnvelope} className="sm:!hidden" /><span className="!hidden sm:!block">Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header