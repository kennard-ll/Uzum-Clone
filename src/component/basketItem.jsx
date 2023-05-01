import { useDispatch } from "react-redux";
import {  remove_from_cart } from "../features/cart/cartSlise";

const BasketItem = ({ item }) => {

    const percent = Math.round(item?.price - ((item?.price * item?.salePercentage) / 100))
    const dispatch = useDispatch()
    
    return (
        <div className="w-full mt-[1.25rem]">
            <div className="flex w-full">
                <div className="mr-6 h-[7.5rem] w-[7.5rem]">
                    <img className="object-contain w-full h-full" src="https://images.uzum.uz/cgo371nhj8j9g69cbsf0/t_product_240_high.jpg" alt="" />
                </div>

                <div className="w-full">
                    <div className="flex justify-between">
                        <h6 className="w-[75%] text-[1rem] mb-[1.3rem]">{item.title}</h6>
                        <button onClick={() => dispatch(remove_from_cart(item?.id))} className="flex items-center h-[24px]" >       
                            <svg data-v-57aaf377="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="black"></path>
                            </svg>
                            <p className="text-[.75rem]">Удалить</p>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-[#757575] text-[.875rem]">Продавец: <span className="text-[#000] ">Someone</span></p>
                        <div className="flex items-center justify-between w-[7.5rem] rounded-[4px] border-[1px] border-[#acacac] mt-[10px] mb-[10px] px-2">
                            <button className="text-[#757575] text-[22px]">-</button>
                            <p className="text-[#757575]">1</p>
                            <button className="text-[#757575] text-[22px]">+</button>
                        </div>
                        <div className="text-end">
                            <p className="text-[1.25rem] font-semibold">{item.price} сум</p>
                            <p className="line-through text-[.875rem] text-[#757575]">{percent} сум</p>
                        </div>                        
                    </div>
                </div>

            </div>
            <div className="border-b border-b-[#76797f33] mt-[1.25rem]"></div>
        </div>

    ); 
}

export default BasketItem;