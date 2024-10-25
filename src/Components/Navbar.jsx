import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import logo from "../assets/logo.png";
import indFlag from "../assets/ind flag/indFlag.webp";

function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [activeDropdownItem, setActiveDropdownItem] = useState(null);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
    };

    const handleChevronClick = (index, e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, []);

    const navItems = [
        {
            label: 'WordPress',
            link: '#',
            dropdownItems: [
                { label: 'WordPress Hosting', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs." },
                { label: 'Managed WordPress', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs." },
                { label: 'WordPress Themes', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs."},
                { label: 'WordPress Plugins', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs."},
            ]
        },
        {
            label: 'Website Builder',
            link: '#',
            dropdownItems: [
                { label: 'Easy Builder', link: '#' },
                { label: 'Pro Builder', link: '#' },
                { label: 'Templates', link: '#' },
            ]
        },
        {
            label: 'Premium Hosting',
            link: '#',
            dropdownItems: [
                { label: 'Shared Hosting', link: '#' },
                { label: 'VPS Hosting', link: '#' },
                { label: 'Dedicated Servers', link: '#' },
            ]
        },
        {
            label: 'Pro Features',
            link: '#',
            dropdownItems: [
                { label: 'SSL Certificates', link: '#' },
                { label: 'Website Security', link: '#' },
                { label: 'Email Hosting', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs." },
            ]
        },
        {
            label: 'Free Domains',
            link: '#',
            dropdownItems: [
                { label: 'Domain Search', link: '#' },
                { label: 'Domain Transfer', link: '#' },
                { label: 'Free Domain', link: '#' , details: "Explore our various hosting plans and find one that suits your business needs." },
            ]
        },
    ];

    return (
        <>

            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
                    onClick={toggleMobileMenu}
                >
                    <div 
                        id="mobileMenu" 
                        className="fixed inset-0 bg-white z-[10000] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >

                        <div className="flex justify-between items-center p-4 border-b">
                            <a href="/" className="flex items-center">
                                <img 
                                    src={logo}
                                    alt="Logo" 
                                    className="h-8 w-auto object-contain"
                                />
                            </a>
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 hover:bg-gray-100 rounded-full"
                                aria-label="Close menu"
                            >
                                <X size={24} className="text-gray-600" />
                            </button>
                        </div>
                        

                        <div className="pt-4">
                            <ul className="text-center">
                                {navItems.map((item, index) => (
                                    <li key={index} className="border-b border-gray-100">
                                        <div className="flex items-center justify-between px-4 py-4">
                                            <span className="text-xl text-[#2F1C6A] font-semibold">
                                                {item.label}
                                            </span>
                                            <button
                                                onClick={() => setActiveMobileDropdown(
                                                    activeMobileDropdown === index ? null : index
                                                )}
                                                className="p-2 hover:bg-gray-100 rounded-full"
                                            >
                                                <ChevronDown 
                                                    size={24} 
                                                    className={`transform transition-transform duration-200 ${
                                                        activeMobileDropdown === index ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                        {activeMobileDropdown === index && (
                                            <div className="bg-gray-50 py-2">
                                                {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                                    <a
                                                        key={dropIndex}
                                                        href={dropdownItem.link}
                                                        className="block px-8 py-3 text-[#2F1C6A] hover:bg-gray-100"
                                                    >
                                                        {dropdownItem.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4">
                                <button className="w-full font-semibold py-3 text-[rgb(103,61,230)] text-[17px] border-2 border-[rgb(103,61,230)] rounded-[5px] hover:bg-[rgb(103,61,230)] hover:text-white transition-colors">
                                    Login to Client Area
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <div 
                id="navBar" 
                className={`bg-white w-full sticky transition-shadow duration-300 z-[100] ${hasScrolled ? 'shadow-lg' : ''}`} 
                style={{ top: 0, margin: 0 }}
            >
                <nav className="lg:mx-[40px] mx-[20px] lg:h-[88px] h-[62px] bg-white">
                    <div className="w-full h-[48px] lg:py-[22px] py-[10px] flex flex-row justify-between">
                        <div className="flex flex-row my-auto gap-[20px] items-center">
                            {/* Logo Section */}
                            <a href="/" className="flex items-center">
                                <img 
                                    src={logo}
                                    alt="Logo" 
                                    className="h-8 lg:h-10 w-auto object-contain mr-2 hover:opacity-90 transition-opacity"
                                />
                            </a>
                            <div className="flex flex-row gap-[5px]">
                                <img src={indFlag} alt="IN" className="h-[18px] my-auto lg:block hidden" />
                                <span className="font-semibold my-auto lg:block hidden text-black">English</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="my-auto flex flex-row gap-[20px] items-center">
                            <ul className="flex flex-row gap-[30px]">
                                {navItems.map((item, index) => (
                                    <li key={index} className="my-auto flex-row gap-[8px] lg:flex hidden relative">
                                        <div className="flex items-center">
                                            <span className="font-normal my-auto text-black">
                                                {item.label}
                                            </span>
                                            <button
                                                onClick={(e) => handleChevronClick(index, e)}
                                                className="ml-2 p-1 hover:bg-gray-100 rounded-full"
                                            >
                                                <ChevronDown 
                                                    size={24} 
                                                    className={`transform transition-transform duration-200 ${
                                                        activeDropdown === index ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                  {/* Desktop Dropdown */}
                                    {activeDropdown === index && (
                                        <div 
                                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                                        >
                                            {item.dropdownItems.map((dropdownItem, dropIndex) => (
                                                <div
                                                    key={dropIndex}
                                                    className="relative"
                                                >
                                                    {/* Dropdown Item */}
                                                    <a
                                                        href={dropdownItem.link}
                                                        className="flex items-center px-4 py-2 rounded text-gray-800 hover:bg-gray-50 transition-transform duration-200 transform hover:scale-110"
                                                    >
                                                        <span>{dropdownItem.label}</span>
                                                        <ChevronRight size={16} className="ml-auto" />
                                                    </a>

                                                    {/* Details Section for the dropdown item (Always visible) */}
                                                    <div className="w-full p-3 bg-white text-sm text-gray-700 border-t border-gray-200">
                                                        {dropdownItem.details}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}



                                    </li>
                                ))}
                            </ul>
                            <button className="px-[18px] py-[10px] font-semibold hover:scale-[1.02] hover:duration-300 lg:block hidden border-2 border-[#2F1C6A] rounded-[5px]">
                                Log In
                            </button>

                            {/* Mobile Menu Icon */}
                            <svg
                                id="hamburger"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-label="burger"
                                role="presentation"
                                className="w-[34px] h-[34px] pt-2 lg:hidden block cursor-pointer"
                                onClick={toggleMobileMenu}
                            >
                                <g><path d="M2 5V7H22V5H2ZM2 11V13H22V11H2ZM2 17V19H22V17H2Z"></path></g>
                            </svg>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;