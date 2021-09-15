import React from 'react';
import { CityLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="social">
                <a target="blank" href="https://www.facebook.com/vangiau.recca/"><i className="fab fa-facebook fa-2x" /></a>
                <a target="blank" href="https://twitter.com/vangiau_recca"><i className="fab fa-twitter fa-2x" /></a>
                <a target="blank" href="https://www.instagram.com/vangiau.recca/"><i className="fab fa-instagram fa-2x" /></a>
                <a target="blank" href="https://www.youtube.com/channel/UCaxR1aMhRUId7JzXN3unNXQ"><i className="fab fa-youtube fa-2x" /></a>
                <a target="blank" href="https://www.google.com/search?q=man+city+google&rlz=1C1CHBF_enUS934US935&oq=man+city+google&aqs=chrome..69i57j0l4j69i60l3.9655j1j9&sourceid=chrome&ie=UTF-8">
                    <i className="fab fa-google fa-2x" />
                </a>
            </div>
            <div className="footer_discl">
                Manchester City Fan Club - Copyright by Nguyễn Văn Giàu. All rights reserved.
            </div>
            
        </footer>
    );
};

export default Footer;