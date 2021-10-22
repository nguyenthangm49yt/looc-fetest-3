import React from 'react'
import "./PageThird.scss";
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'

export default function PageThird() {
    return (
        <div className='page3-container'>
            <div className='page3-content'>
                <div className="page3-upper">
                    <div className="page2-content__photo">
                        <img src="https://cdn.dribbble.com/users/1052222/screenshots/6291444/getch_menu.png?compress=1&resize=400x300" alt=""></img>

                    </div>


                    <div className="page3-content__right" >
                        <div className="page3--content__right--header">
                            WHAT IS VIDEO ONLY
                        </div>
                        <div className="page3--content__right--title">
                            비디온리는 무엇인가요?
                        </div>
                        <div className="page3--content__right--description">

                            세상에는 수많은 회사들이 존재합니다. 비디온리에서는
                            그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.
                            우리는 특정 회사에서 원하는 템플릿을 만들고, 해당
                            템플릿을 사용해서 직접 더 나은 비디오를 만들 수
                            있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나
                            뿐인 템플릿, 직접 경험해보세요.
                        </div>
                        <PrimaryBtn
                            text="시작하기"
                            classname="page3--content__right--btn"
                        ></PrimaryBtn>
                    </div>
                </div>
                <div className="page3-lower">
                    
                </div>
            </div>
        </div>
    )
}
