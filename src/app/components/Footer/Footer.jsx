import React from 'react';
import logo from "../../styles/assets/img/logo/dzair.svg"

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <nav>
                <div className="logo"> <Link href='/'><Image fill="layout" src={logo} alt="" /></Link></div>
                <ul className='terms'>
                    <li><Link href='/legal/conditions-generales-d-utilisation'>CGU</Link></li>
                    <li><Link href='/legal/politique-des-cookies'>Politique des cookies</Link> </li>
                    <li><a href="/legal/mentions-legales-et-politique-de-confidentialite">Mention Legal</a> </li>
                    <li><a href="/a-propos-de-nous">A propos de nous</a> </li>
                </ul>
                <ul className='icon-social'>
                    <li><a href="https://www.youtube.com/channel/UCKX5CSfv-ep5h_F2lnSRJHA" target='_blank' ><i><FaYoutube /></i></a></li>
                    <li><a href="https://www.facebook.com/DzairHistory" target='_blank' ><i><FaFacebookF /></i></a></li>
                    <li><a href="https://twitter.com/DzairHistory" target='_blank' ><FaTwitter /></a></li>
                    <li><a href="https://www.instagram.com/dzairhistory_/" target='_blank' ><FaInstagram /></a></li>
                    <li><a href="https://www.tiktok.com/@dzairhistory" target='_blank' ><FaTiktok /></a></li>
                </ul>
            </nav>
            <div className="copyright"> Copyright ©2021 Certain rights reserved | <a href="https://dzh-admin.herokuapp.com/admin">Dzair History</a></div>


        </footer >
    );
}

export default Footer;
