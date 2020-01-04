import React from 'react';
import { LogoWrapper } from './logo.styles';
import logo from '../../images/stripes-min.gif'
const Logo = props => {

    return (
        <LogoWrapper>
            <img src='https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/600x834_Animation_BB11.gif' alt="11th Berlin Biennale Logo"/>
        </LogoWrapper>
    );
}

export default Logo;