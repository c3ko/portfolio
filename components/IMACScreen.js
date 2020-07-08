import React from 'react';

function IMACScreen({ imgPath }) {
    const style = { backgroundImage: `url(${imgPath}`}
    return (
        <div className="imac">
            <div className="bezel">
                <div className="screen" style={style}>
                    <div className=""></div>
                </div>
            </div>
            <div class="stand"></div>
        </div>    



    )
}

export default IMACScreen;
