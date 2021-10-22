import React from 'react'
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';
import Banner from '../../../components/Banner/Banner';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.scss";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function PageFirst() {
    return (
        <div className="fage1-container">
            <div className="fage1-content--upper">
                <div className="fage1-header">
                    <div className="fage1-header__left">
                        <div className="logo">
                            <p>videonly</p>
                        </div>
                    </div>
                    <div className="fage1-header__right">
                        <PrimaryBtn
                            text="LOGIN"
                            classname="header-Btn header-Btn--login"
                        >
                        </PrimaryBtn>
                        <PrimaryBtn
                            text="JOIN"
                            classname="header-Btn header-Btn--join"
                        >
                        </PrimaryBtn>
                    </div>
                </div>

                {/* fage1-below-header */}
                <div className="fage1-below-header"      >
                    <div className="fage1-below-header__title">
                        비디온리는
                        오직 당신의 브랜드만를 위해
                        템플릿을 만듭니다
                    </div>
                    <div className="fage1-below-header__subtitle">
                        2나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.
                    </div>
                    <PrimaryBtn
                        text="시작하기"
                        classname="fage1-below-header__btn"
                    >
                    </PrimaryBtn>
                </div>
            </div>


            {/* fage1-content--lower */}
            <div className="fage1-content--lower">
                <div className="fage1-content--lower__title">
                    <div className="fage1-content--lower__title-l">
                        기업들의 템플릿 제작
                    </div>
                    <div className="fage1-content--lower__title-r">
                        MORE
                    </div>
                </div>
                <div className="fage1-content--lower__banner">

                    {/* <Banner
                            text1="한낮 무더위 점심네뉴는"
                            text2="냉면이 최고!"
                            subtitle="이마트 여름휴가 이벤트"
                            url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                        >
                        </Banner>
                */}
                    <Carousel responsive={responsive}>      
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>
                        
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>
                            
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>
                            
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>
                            
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>
                            
                            <Banner
                                text1="한낮 무더위 점심네뉴는"
                                text2="냉면이 최고!"
                                subtitle="이마트 여름휴가 이벤트"
                                url="https://media-cdn.laodong.vn/storage/newsportal/2020/8/18/829010/Jisoo.jpg?w=720&crop=auto&scale=both"
                            >
                            </Banner>

                    </Carousel>
                </div>
            </div>
        </div>
    )
}
