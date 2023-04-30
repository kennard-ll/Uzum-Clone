import React, { useEffect } from "react";
import { addLiked, removeLiked } from "../features/liked/likedSlise";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLikeds, patchGoodsThunk } from "../features/liked/patchLikedThunk";

const ProductCard = ({ item }) => {

    const liked_id = useSelector(state => state.liked.data_id)

    const dispatch = useDispatch()

    const likeItem = () => {
        if (liked_id.includes(item?.id)) {
            dispatch(removeLiked(item?.id))
        } else {
            dispatch(addLiked(item))
        }
    }

    useEffect(() => {
        if (!liked_id.length) {
            dispatch(getLikeds())
        }
    }, []);

    const percent = Math.round(item?.price - ((item?.price * item?.salePercentage) / 100))
    const perMonth = Math.round(item?.price / 12)

    return ( 
        <>
        
            <div className="w-[180px] lg:w-[232px] mb-[10px]">
                <div className="rounded-[8px] ">
                    <div className="flex flex-wrap justify-end relative">
                        <img onClick={likeItem} className="w-[26px] z-10" src={`${liked_id.includes(item?.id) ? './img/pinkLiked.svg' : './img/like.svg'}`} /> 
                        <NavLink to={`/product/${item.id}`}>  
                            <img  src={item.media[0]} alt="" />   
                        </NavLink>                     
                    </div>
                </div>
                <div className="px-[8px] py-[12px] h-[167px] flex flex-col justify-start">
                    <NavLink to={`/product/${item.id}`}>
                    <div className="leading-[17px] mb-1">
                        <span className="text-[13px] font-medium ">{item?.title}</span>
                    </div>
                    <div className="flex">
                        <img className="mr-[5px] pb-[4px]" src="/img/starIcon.svg" alt="" />
                        <span className="text-[11.2px] text-[#757575]">{item?.rating} (244 оценки)</span>
                    </div>
                    <div className="bg-[#ffff00] w-[37%] rounded-[4px] my-[4px] h-[17px] flex">
                        <span className="text-[11px] mt-[1px] ml-1">{perMonth} сум/мес</span>
                    </div>
                    </NavLink>
                    <div className="flex justify-between mt-auto">
                        <div>
                            <p className={`${percent === item?.price ? 'hidden' : 'block'} line-through text-[11px] pl-[4px] text-[#757575] leading-none`}>{percent} сум</p>
                            <p className="text-[.875rem] pl-[1px] font-medium">{item.price} сум</p>                            
                        </div>
                        <img className="w-[31px]" src="/img/korzinka.svg" alt="" />
                    </div>
                </div>
            </div>  
        

        </>
     );
}
 
export default ProductCard;