import React from 'react'
import "./PageFourth.scss";
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'

export default function PageFourth() {
    return (
        <div className='page4-container'>
            <div className='page4-content'>
                <div className="page4-content__left" >
                    <div className="page4--content__left--header">
                        WHAT IS VIDEO ONLY
                    </div>
                    <div className="page4--content__left--title">
                        비디온리는 무엇인가요?
                    </div>
                    <div className="page4--content__left--description">
                        
                        세상에는 수많은 회사들이 존재합니다. 비디온리에서는
                        그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.
                        우리는 특정 회사에서 원하는 템플릿을 만들고, 해당
                        템플릿을 사용해서 직접 더 나은 비디오를 만들 수 
                        있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나 
                        뿐인 템플릿, 직접 경험해보세요.
                    </div>
                    <PrimaryBtn
                        text="시작하기"
                        classname="page4--content__left--btn"
                    ></PrimaryBtn>
                </div>
                
                <div className="page4-content__photo">
                    <img src={process.env.PUBLIC_URL + '/images/img-02.jpg'} alt=""></img>

                </div>


              
            </div>
        </div>
    )
}
