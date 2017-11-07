import React from 'react';
import CSS from './Hero.scss';

class Hero extends React.Component {
    render() {
        return(
            <div>
                <h1 className={ CSS.test }> Test... </h1>
            </div>
        );
    }
}

export default Hero;