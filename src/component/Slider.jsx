import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = (item) => {
    return ( 
        <>
            <Swiper
                navigation={true} modules={[Navigation, Pagination]} className="mySwiper" pagination={true} onSwiper={(swiper) => swiper} onSlideChange={() => "slide change"}
            >
                <SwiperSlide>
                    <div>
                        <div>
                            <h1>{item?.title}</h1>
                        </div>
                        <div></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
     );
}
 
export default Slider;