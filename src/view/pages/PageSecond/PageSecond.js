import React from 'react';
import "./PageSecond.scss";
// import moduleName from '../../../images/'
import MenuGuide from '../../../components/MenuGuide/MenuGuide';
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';


export default function PageSecond() {
    return (
        <div className="page2-container">
            <div className="page2-content--upper">
                <div className="page2--upper__header">
                    Tutorial Guide
                </div>
                <div className="page2--upper__title">
                    영상 만들기, 어렵지 않아요
                </div>
                <div className="page2--upper__description">
                    나에게 맞는 템플릿,
                    망설이지 말고 지금 직접 체험해보세요!
                </div>

                <div className="menu-guide">
                    <MenuGuide
                        headerText="첫번째"
                        context="내 브랜드에 맞는
                         영상 만들기"
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ldBkrgynlHxi4uP8In4w-rzGS8HHfMioKg&usqp=CAU"
                    >

                    </MenuGuide>
                    <MenuGuide
                        headerText="첫번째"
                        context="내 브랜드에 맞는
                         영상 만들기"
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ldBkrgynlHxi4uP8In4w-rzGS8HHfMioKg&usqp=CAU"
                    >

                    </MenuGuide>
                    <MenuGuide
                        headerText="첫번째"
                        context="내 브랜드에 맞는
                         영상 만들기"
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ldBkrgynlHxi4uP8In4w-rzGS8HHfMioKg&usqp=CAU"
                    >

                    </MenuGuide>
                </div>
            </div>
            <div className="page2-content--lower">
                <div className="page2--lower__tex1">
                    퀄리티있는 브랜딩, 비디온리 하세요
                </div>
                <div className="page2--lower__tex2">
                    나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!
                </div>
                <PrimaryBtn
                    text="시작하기"
                    classname="page2--lower__btn"
                ></PrimaryBtn>

            </div>

        </div>
    )
}
