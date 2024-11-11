import React from 'react';
import '../Css/topheader.css';

function TopHeader(){
    return (
        
        <div className="h-12 bg-primary flex justify-between items-center px-6 topheader_text">
           
            <div className='flex font-medium' data-aos="fade-down">
                    <span className="system-uicons--location"></span>
                    Shop 2, 118 Church Street, Parramatta NSW
            </div>
            
            <div className='flex'>
                <ul className='flex justify-between items-center space-x-4 topheader_social_link'>
                    <li data-aos="fade-down" data-aos-delay="700"><a href='https://www.facebook.com/profile.php?id=61567603241017' target='_blank' rel='noreferrer' className='flex relative group' data-tooltip-target="bottom-tooltip"><span className="raphael--facebook"></span>
                    <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible left-1/2 mt-3 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[var(--secondarycolor)] py-2 px-4 text-xs text-gray-800 transition-opacity duration-300 shadow-lg z-50" role="tooltip" id="bottom-tooltip">
<span className="absolute -top-1.5 left-1/2 -z-10 h-3 w-3 -translate-x-1/2 rotate-45 bg-[var(--secondarycolor)]"></span>
<p className="text-xs text-[var(--primarycolor)] font-light">Follow us on facebook.</p></div>
                    </a></li>
                    <li data-aos="fade-down" data-aos-delay="800"><a href='https://www.instagram.com/lacuisine.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel='noreferrer' className='flex relative group' data-tooltip-target="bottom-tooltip"><span className="simple-line-icons--social-instagram"></span>
                    <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible left-1/4 mt-3 mr-1 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[var(--secondarycolor)] py-2 px-4 text-xs text-gray-800 transition-opacity duration-300 shadow-lg z-50" role="tooltip" id="bottom-tooltip">
<span className="absolute -top-1.5 left-[54%] -z-10 h-3 w-3 -translate-x-1/2 rotate-45 bg-[var(--secondarycolor)]"></span>
<p className="text-xs text-[var(--primarycolor)] font-light">Follow us on instagram.</p></div></a></li>
                    <li data-aos="fade-down" data-aos-delay="900"><a href='https://www.tiktok.com/@lacuisinecafe' target='_blank' rel='noreferrer' className='flex relative group' data-tooltip-target="bottom-tooltip"><span className="hugeicons--tiktok"></span>
                    <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible -left-3/4 mt-3 mr-1 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[var(--secondarycolor)] py-2 px-4 text-xs text-gray-800 transition-opacity duration-300 shadow-lg z-50" role="tooltip" id="bottom-tooltip">
<span className="absolute -top-1.5 left-[74%] -z-10 h-3 w-3 -translate-x-1/2 rotate-45 bg-[var(--secondarycolor)]"></span>
<p className="text-xs text-[var(--primarycolor)] font-light">Follow us on tiktok.</p></div></a></li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader