import React from 'react';
import "./PrimaryBtn.scss";
import classNames from 'classnames';


export default function PrimaryBtn(props) {
    const {text, classname} = props;
    return (
        <div className={classNames('container', classname)}
        >
            {text}
        </div>
    )
}
