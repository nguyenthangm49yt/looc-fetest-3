import React from 'react';
import "./PageFifth.scss";
import Catalog from '../../../components/Catalog/Catalog';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'
export default function PageFifth() {
    return (
        <div className="page5-container">
            <div className="page5-content">
                <div className="page5-content--upper">
                    <div className="upper-header">
                        체험 가능한 템플릿
                    </div>

                    <div className="upper-category">
                        <Catalog
                            text="사용중인 기업"
                            icon="df"
                            datanum={100}
                        >
                        </Catalog>
                        <Catalog
                            text="사용중인 기업"
                            icon="df"
                            datanum={100}

                        >
                        </Catalog>
                        <Catalog
                            text="사용중인 기업"
                            icon="df"
                            datanum={100}

                        >

                        </Catalog>
                    </div>

                    <div className="upper-subtitle">
                        나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!
                    </div>
                    <PrimaryBtn
                        text="PrimaryBtn"
                        classname="upper-btn"
                    >

                    </PrimaryBtn>
                </div>
                <div className="page5-content--lower">

                    <div className="page5-content--lower-t1">
                        팀원들과 함께 공유하며 작업하세요
                    </div>
                    <div className="page5-content--lower-t2">
                        작업량이 많을 때, 마감으로 정신없을 때
                        바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!
                    </div>
                </div>

            </div>
        </div>
    )
}
