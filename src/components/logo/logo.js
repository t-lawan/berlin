import React from 'react';
import { LogoWrapper } from './logo.styles';
import logo from '../../images/stripes-min.gif'
const Logo = props => {

    return (
        <LogoWrapper>
            <img src='https://11.berlinbiennale.de/temp/img/animation_prelimWebsite_comp.gif' alt="logo"  height="70%" width="70%"/>
        </LogoWrapper>
    );
}

export default Logo;