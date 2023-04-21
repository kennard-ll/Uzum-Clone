import React from "react";
import { NavLink } from "react-router-dom";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProductCard from "../component/ProductCard";
import { useSelector } from "react-redux";
import Slider from "../component/Slider";


const Home = () => {

    const data = useSelector(state => state.goods.data)

    const arr = Array(data).at(-1)

    return ( 
    <div>
        <section className="mb-[50px]">
            <Slider />
        </section>

        <section className="mb-[50px]">
            <div className="flex items-center mb-6">
                <span className="text-[1rem] font-semibold md:text-[28px] md:font-bold ">Популярное</span>
                <MdOutlineKeyboardArrowRight size={30} className="hidden md:block"/>
            </div>
            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(0, 15).map((item, ind) =><ProductCard key={ind} item={item} />)
                }
            </div>
            <button className="bg-[#76797f1a] rounded-[8px] h-[56px] w-[95%] font-semibold">Покозать ещё</button>
        </section>

        <section className="mb-[40px]">
            <div className="flex items-center mb-6">
                <span className="text-[1rem] font-semibold md:text-[28px] md:font-bold ">Спортивная одежда</span>
                <MdOutlineKeyboardArrowRight size={30} className="hidden md:block"/>
            </div>
            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(16, 21).map((item, ind) =><ProductCard key={ind} item={item} />)
                }
            </div>
        </section>

        <section className="mb-[40px]">
            <div className="flex items-center mb-6">
                <span className="text-[1rem] font-semibold md:text-[28px] md:font-bold ">Все лучшее детям</span>
                <MdOutlineKeyboardArrowRight size={30} className="hidden md:block"/>
            </div>
            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(22, 27).map((item, ind) =><ProductCard key={ind} item={item} />)
                }
            </div>
        </section>

        <section className="mb-[40px]">
            <div className="flex items-center mb-6">
                <span className="text-[1rem] font-semibold md:text-[28px] md:font-bold ">Для братьев меньших</span>
                <MdOutlineKeyboardArrowRight size={30} className="hidden md:block"/>
            </div>
            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-5 ">
                {
                    arr.slice(28, 33).map((item, ind) =><ProductCard key={ind} item={item} />)
                }
            </div>
        </section>

    </div>
    );
}
 
export default Home;