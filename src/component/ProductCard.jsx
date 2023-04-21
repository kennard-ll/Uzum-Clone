import React from "react";
import {FiHeart} from 'react-icons/fi'
import {FaHeart} from 'react-icons/fa'
import { addLiked } from "../features/liked/likedSlise";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ item }) => {



    return ( 
        <>
            <div className="w-[180px] lg:w-[232px] mb-[10px]">
                <div className="rounded-[8px] ">
                    <div className="flex flex-wrap justify-end relative">
                        <button className="pt-[1px] pr-[10px]">{item.like ? (<FiHeart onClick={() => {(item, false);}}/> ) : ( <FaHeart onClick={() => {(item, true); }} />)}</button>
                        <img  src={item.media[0]} alt="" />                        
                    </div>
                </div>
                <div className="px-[8px] py-[12px] h-[167px] flex flex-col justify-start">
                    <div className="leading-[17px] mb-1">
                        <span className="text-[13px] font-medium ">{item?.title}</span>
                    </div>
                    <div className="flex">
                        <img className="mr-[5px] pb-[4px]" src="/img/starIcon.svg" alt="" />
                        <span className="text-[11.2px] text-[#757575]">{item?.rating} (244 оценки)</span>
                    </div>
                    <div className="bg-[#ffff00] w-[45%] rounded-[4px] my-[4px]">
                        <span className="text-[11px]">1 680 сум/мес</span>
                    </div>
                    <div className="flex justify-between mt-auto">
                        <div>
                            <p className="line-through text-[11px] pl-[4px] text-[#757575] leading-none">25 000 сум</p>
                            <p className="text-[14]">{item.price} сум</p>                            
                        </div>
                        <img className="w-[31px]" src="/img/korzinka.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductCard;