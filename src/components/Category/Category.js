import React from 'react';
import "./Category.scss";

export default function Category(props) {
    const {photoUrl, title, subtitle} = props;
    return (
        <div className="category-container">
            <div className="photo">
                <img src={photoUrl} alt='' width="100%" height="100%"/>
            </div>
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}
