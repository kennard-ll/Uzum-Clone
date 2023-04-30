import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Slider = () => {

    const data = useSelector(state => state.goods.data)

    const swiper = useSwiper();

    return ( 
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => swiper}
                onSlideChange={() => "slide change"}
            >
                {data.slice(16, 22).map((item, inx) => (
                    <SwiperSlide key={inx} className="">
                        <div className="hidden md:flex items-center relative h-full justify-betwen px-[60px]">
                            <div className="w-[70%] text-[#000] text-start flex flex-col gap-4">
                                <NavLink to={`/product/${item.id}`} >
                                    <h1 className="text-[38px] text-[#ffffff] font-semibold w-[75%]">{item.title}</h1>
                                    <p className="text-[14px] font-semibold text-[#ffffff] w-[70%]">{item.description}</p>
                                </NavLink>
                            </div>
                            <NavLink to={`/product/${item.id}`}>
                                <div className="w-[300px]"><img src={item.media[0]} alt="" /></div>
                            </NavLink>

                            <div className="next" onClick={() => swiper.slideNext()}></div>
                            <div className="prev" onClick={() => swiper.slidePrev()}></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
     );
}
 
export default Slider;