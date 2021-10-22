import React from 'react';
import "./Banner.scss";
export default function Banner(props) {
    const {text1, text2, subtitle, url} = props;
    return (
        <div className="banner-container"
        style={{backgroundImage: `url(${url})`}} 
        >
            <div className="banner-content">
                <p className="text">{text1}</p>
                <p className="text">{text2}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
        </div>
    )
}
