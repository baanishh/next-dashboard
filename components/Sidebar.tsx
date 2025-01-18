"use client"
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleOptions = (section: string) => {
        setOpenSections(prevOpenSections =>
            prevOpenSections.includes(section)
                ? prevOpenSections.filter(s => s !== section)
                : [...prevOpenSections, section]
        );
    };

    return (
        <section className='w-[230px] bg-[#112143] h-screen flex flex-col gap-2 items-center border-r border-[#8B97B2]'>
            {/* card one */}
            <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-3'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('home')}>
                    <p className='text-white font-semibold text-[13px] select-none'>Home</p>
                    {openSections.includes('home') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('home') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Banner</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>Main Category</p>
                    </div>
                )}
            </div>

            {/* card two */}
            <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-2'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('pages')}>
                    <p className='text-white font-semibold text-[13px] select-none'>Pages</p>
                    {openSections.includes('pages') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('pages') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>About us</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Research & Development</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Terms & Conditions</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Privacy Policy</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>Cookie Policy</p>
                    </div>
                )}
            </div>

            {/* card three */}
            <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-2'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('news')}>
                    <p className='text-white font-semibold text-[13px] select-none'>News</p>
                    {openSections.includes('news') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('news') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Add News</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>View all</p>
                    </div>
                )}
            </div>

             {/* card four */}
             <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-2'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('Catalogue')}>
                    <p className='text-white font-semibold text-[13px] select-none'>Catalogue</p>
                    {openSections.includes('Catalogue') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('Catalogue') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>Add Catalogue</p>
                    </div>
                )}
            </div>

             {/* card five */}
             <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-2'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('Projects')}>
                    <p className='text-white font-semibold text-[13px] select-none'>Projects</p>
                    {openSections.includes('Projects') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('Projects') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Project Category</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>Add Project</p>
                    </div>
                )}
            </div>

             {/* card six */}
             <div className='w-[209px] border border-[#0d9aff4e] bg-[#052E60] mt-2'>
                <div className='flex items-center justify-between px-2 h-[43px] border-b border-[#0d9aff4e]' onClick={() => toggleOptions('Products')}>
                    <p className='text-white font-semibold text-[13px] select-none'>Products</p>
                    {openSections.includes('Products') ? <IoIosArrowUp className='text-white' /> : <IoIosArrowDown className='text-white' />}
                </div>
                {openSections.includes('Products') && (
                    <div className='bg-[#112143]'>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Main Category</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Product Category</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center border-b border-[#0d9aff4e] select-none'>Product Group</p>
                        <p className='text-[#8B97B2] px-2 py-1 h-[43px] flex items-center select-none'>Add Products</p>
                    </div>
                )}
            </div>
        </section>
    );
};
export default Sidebar;