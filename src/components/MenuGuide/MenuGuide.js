import React from 'react';
import "./MenuGuide.scss";
export default function MenuGuide(props) {
    const {headerText, context, url} = props;
    return (
        <div className="container-mguide"
       
        >
            <div className="content-mguide" 
            style={{backgroundImage: `url(${url})`}}
            >
                <div className="content-mguide__header">
                    <div className="content-mguide__header--left">
                        <p>{headerText}</p>

                    </div>
                    <div className="content-mguide__header--right">
                    {/* <i class="fal fa-long-arrow-right"></i> */}
                    <i class="fas fa-arrows-alt-h"></i>
                        {/* <i className="ico-arrow__right"></i> */}
                    </div>

                </div>
                <div className="content-mguide__context">
                    <p>{context}</p>
                </div>
            </div>
        </div>
    )
}
