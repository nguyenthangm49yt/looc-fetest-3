import React from 'react'
import './PageSixth.scss';
import Category from '../../../components/Category/Category'

export default function PageSixth() {
    return (
        <div className="page6-container">
            <div className="page6-content">
                <div className="page6-upper">
                    <div className="page6-upper__header">
                        한 눈에 보는 템플릿 절차
                    </div>
                    <div className="page6-upper__subtitle">
                        비디온리가 아직 고민되시나요?
                        비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.
                    </div>
                    <div className="page6-upper__category">
                        <Category
                            title="dsf"
                            subtitle="sdf"
                            photoUrl="df"
                        >

                        </Category>
                        <Category
                            title="dsf"
                            subtitle="sdf"
                            photoUrl="df"
                        >

                        </Category>
                        <Category
                            title="dsf"
                            subtitle="sdf"
                            photoUrl="df"
                        >

                        </Category>
                        <Category
                            title="dsf"
                            subtitle="sdf"
                            photoUrl="df"
                        >

                        </Category>
                    </div>
                </div>
                <div className="page6-lower">
                    <div className="page6-lower__left">
                        <div className="page6-lower__left--l1">
                            이용약관          개인정보처리방침          고객센터
                        </div>
                        <div className="page6-lower__left--l2">

                            비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000
                            이메일 : test0101@vidionly.co.kr｜ FAX : 070-0000-0000
                            서울특별시 강남구 도산대로 8길 17 3층
                        </div>
                        <div className="page6-lower__left--l3">
                            Copyright© VIDIONLY All rights reserved.

                        </div>



                    </div>
                    <div className="page6-lower__right">

                        <img src="/footer-sns-icon-1.png" alt=""></img>
                        <img src="/footer-sns-icon-1.png" alt=""></img>

                        <img src="/footer-sns-icon-1.png" alt=""></img>

                        <img src="/footer-sns-icon-1.png" alt=""></img>

                    </div>
                </div>
            </div>
        </div>
    )
}
