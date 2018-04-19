import React, { Component } from 'react';
import { SocialStyled } from './Social.style';

import twitter from '../../Assets/social/twitter.png'
import github from '../../Assets/social/github.png'
import email from '../../Assets/social/email.png'
import medium from '../../Assets/social/medium.png'
import discord from '../../Assets/social/discord.png'
import facebook from '../../Assets/social/facebook.png'
import reddit from '../../Assets/social/reddit.png'

class Social extends Component {
    render() {
        return (
            <SocialStyled>
                <div>
                    <a href='https://twitter.com/finalitylabs' target='_blank'>
                        <img src={twitter} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='mailto:team@finalitylabs.co'>
                        <img src={email} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/finalitylabs' target='_blank'>
                        <img src={github} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='https://medium.com/finality-labs' target='_blank'>
                        <img src={medium} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <img src={discord} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <img src={facebook} alt='' width='30px'/>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <img src={reddit} alt='' width='30px'/>
                    </a>
                </div>
            </SocialStyled>
        );
    }
}

export default Social;
