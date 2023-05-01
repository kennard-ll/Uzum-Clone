import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProductCard from "../component/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../component/Slider";
import { getGoodsThunk } from "../features/goods/getGoodsThunk";


const Home = () => {

    const data = useSelector(state => state.goods.data)

    const arr = Array(data).at(-1)
    const [count, setCount] = useState(5)
    const arrLen = arr.length
    const dispatch = useDispatch()

    useEffect(() => {
		if (!data.length) {
			dispatch(getGoodsThunk())
		}   
	}, []);

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
            <div className=" text-center mt-[20px] mb-[20px]">
                <button onClick={() => setCount(count + 5)} className="px-4 py-2 bg-[#76797f1a]  rounded-[6px] font-semibold">{arrLen == count ? 'Свернуть' : `Показать еще ${(arrLen - count) >= 10 ? '20' : (arrLen - count)}`} </button>
            </div>
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