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
                    비디온리가 아직 고민되시나요?<br/>
                    비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.
                    </div>
                    <div className="page6-upper__category">
                        <Category
                            title="이미지 찾기"
                            subtitle="내 회사에 맞는 이미지를
                            찾아 정합니다."
                            photoUrl={process.env.PUBLIC_URL + '/images/big-icon-01.png'}
                        >

                        </Category>
                        <Category
                            title="만들기"
                            subtitle="정해둔 이미지에 맞춰
                            템플릿을 만듭니다."
                            photoUrl={process.env.PUBLIC_URL + '/images/big-icon-02.png'}

                        >

                        </Category>
                        <Category
                            title="정리하기"
                            subtitle="회사와 비디온리가 소통을
                            통해 퀄리티를 높입니다."
                            photoUrl={process.env.PUBLIC_URL + '/images/big-icon-03.png'}

                        >

                        </Category>
                        <Category
                            title="제작 완료"
                            subtitle="세상에 단 하나 뿐인
                            영상 제작 완료!"
                            photoUrl={process.env.PUBLIC_URL + '/images/big-icon-04.png'}

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

                        <img src={process.env.PUBLIC_URL + '/images/footer-sns-icon-1.png'} alt=""></img>
                        <img src={process.env.PUBLIC_URL + '/images/footer-sns-icon-2.png'} alt=""></img>
                        <img src={process.env.PUBLIC_URL + '/images/footer-sns-icon-3.png'} alt=""></img>
                        <img src={process.env.PUBLIC_URL + '/images/footer-sns-icon-4.png'} alt=""></img>

                       

                    </div>
                </div>
            </div>
        </div>
    )
}
