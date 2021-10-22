import classNames from 'classnames';
import React from 'react';
import "./Catalog.scss";
export default function Catalog(props) {
    const {text, icon, datanum} = props;
    return (
        <div className="catalog-container">
            <i className={classNames("icon", icon)}></i>
            <p className="content-text">{text}</p>
            <p className="data-number">{datanum}</p>
        </div>
    )
}
