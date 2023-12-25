import React from 'react';

const ParisCat = () => {
    return (
        <div className='px-4 md:px-8 relative'>
            <div className="window relative left-8">
                <div className="window-pane" />
                <div className="stars" />
                <div id="moon" className="moon" />
                <div className="cloud"></div>
                <div className="roof"></div>
                <div className="roof-1"></div>
                <div className="roof-2"></div>
                <div className="roof-3"></div>
                <div className="roof-4"></div>
            </div>
            <div className="window-sill relative" />
            <div className="cat">
                <div className="head">
                    <div className="ear-l" />
                    <div className="ear-r" />
                    <div className="eyes" />
                </div>
                <div className="tail" />
            </div>
        </div>
    )
}

export default ParisCat;