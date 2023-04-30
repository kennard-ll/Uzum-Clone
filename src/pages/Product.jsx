import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {IoIosArrowForward} from 'react-icons/io'
import ProductCard from "../component/ProductCard";
import { getCartThunk } from "../features/cart/postCartThunk";



const Product = () => {

    const data = useSelector(state => state.goods.data)
    const cart = useSelector(state => state.cart.data)
    const id = window.location.href.split('/').at(-1)
    const filtered = data.filter(item => item.id == id)
    const arr = Array(data).at(-1)

    useEffect(() => {
        if (!cart.length) {
            dispatch(getCartThunk())
        }
    }, []);

    return ( 
        <>  

            <div>
                <section className="mt-[30px] md:flex justify-between">
                    <div className="w-full md:w-[41%]  ">
                        <img className="sticky md:top-[12px]" src={filtered[0]?.media[0]} alt="" />
                    </div>
                    <div className="px-2 mt-[30px] md:mt-0 md:w-[54%] md:px-6">
                        <div className="flex">
                            <div className="flex">
                                <img className="" src="/img/starIcon.svg" alt="" />
                                <span className="text-[13px] text-[#62656a]">{filtered[0]?.rating}( 244оценки )</span>                                
                            </div>
                            <span className="pl-[16px] text-[13px] text-[#62656a]">Более 15000 заказов</span>
                        </div>
                        <h1 className="text-[22px] text-[#212121] mt-2 leading-7">{filtered[0]?.title}</h1>
                        <div className="flex mt-2 items-center gap-4">
                            <span className="text-[#7000FF] font-semibold text-[20px]">{filtered[0]?.price} сум</span>
                            <span className="line-through text-[14px] text-[#757575]">230 000 сум</span>
                        </div>
                        <div className="mt-3">
                            <div className="md:flex">
                                <p className="text-[14px] text-[#141415] md:mr-[50px]">Продавец:</p>
                                <p className="text-[14px] text-[#141415]">Someone</p>
                            </div>
                            <div className="pt-2 md:flex">
                                <p className="text-[14px] text-[#141415] md:mr-[50px]">Доставка:</p>
                                <p className="text-[14px] text-[#141415]">1 день, бесплатно</p>
                            </div>
                        </div>
                        <div>
                            <div className="border-b border-b-[#76797f33] mt-[34px] mb-[23px]"></div>
                            <span>Количество:</span>
                            <div className="flex ">
                                <div className="flex items-center justify-around w-[120px] rounded-[4px] border-[1px] border-[#acacac] text-[0.875rem] h-[2.25rem] mt-2 mb-[20px] px-2 mr-4">
                                    <button className="text-[30px]">-</button>
                                    <p>1</p>
                                    <button className="text-[30px]">+</button>
                                </div>
                                <div className="flex items-center mb-[10px]"> 
                                    <img className="w-[20px]" src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.5049 1.86715V0.99585L10.7526 1.43546L11.0049 1.86715C10.7526 1.43546 10.7524 1.43557 10.7522 1.43569L10.7517 1.43599L10.7504 1.43677L10.7465 1.43905L10.734 1.44655C10.7235 1.45285 10.7089 1.46176 10.6904 1.47327C10.6533 1.49628 10.6007 1.52971 10.5348 1.57349C10.4029 1.66103 10.2173 1.79021 9.99599 1.96061C9.55393 2.30092 8.9655 2.80844 8.37646 3.48037C7.32037 4.68505 6.24614 6.43815 6.03663 8.7112C5.97334 8.62082 5.91227 8.5088 5.85405 8.37345C5.76832 8.17417 5.71024 7.9695 5.67356 7.81119C5.65545 7.73302 5.64309 7.6685 5.63542 7.62465C5.63159 7.60278 5.62895 7.5862 5.62737 7.57581L5.62578 7.56504L5.62567 7.56431L5.62564 7.56404L5.62561 7.56382L5.62556 7.56351L5.62555 7.56337L5.48535 6.50496L4.76198 7.2915L5.13 7.62996C4.76198 7.2915 4.76185 7.29164 4.76171 7.29178L4.76141 7.29211L4.7607 7.29289L4.75884 7.29494L4.75336 7.301L4.73569 7.32094C4.72102 7.33767 4.70071 7.36125 4.67557 7.39148C4.62531 7.4519 4.5556 7.539 4.47299 7.65095C4.30796 7.87459 4.09025 8.19907 3.873 8.60986C3.43952 9.42955 3 10.6083 3 12.0221C3 15.8743 6.13919 19.0009 10 19.0009C13.8608 19.0009 17 15.8743 17 12.0221C17 9.18756 15.4792 7.67893 14.0971 6.36405L14.012 6.2832C12.6533 4.99143 11.5049 3.89964 11.5049 1.86715ZM9.12842 4.13958C9.65177 3.54259 10.1757 3.08691 10.5746 2.77724C10.8776 4.68829 12.1154 5.86244 13.2585 6.94682L13.4078 7.08856C14.7732 8.38755 16 9.63833 16 12.0221C16 15.3189 13.3116 18.0009 10 18.0009C6.68839 18.0009 4 15.3189 4 12.0221C4 10.8161 4.37548 9.79878 4.757 9.07735C4.81633 8.96516 4.87561 8.8605 4.93337 8.76381L4.93544 8.76861C5.14841 9.26369 5.61069 10.0121 6.5 10.0121H7V9.51209C7 7.16515 8.05294 5.36638 9.12842 4.13958ZM8.45317 11.3496C7.86179 11.9734 7.25 12.6187 7.25 13.7812C7.25 15.2812 8.48276 16.5 10 16.5C11.5172 16.5 12.75 15.2812 12.75 13.7812C12.75 12.6562 12.0625 11.9687 12.0625 11.9687C12.0625 11.9687 11.8491 12.6484 11.375 12.6484C11.375 10.3984 9.54167 9.24996 9.54167 9.24996C9.54167 10.2015 9.00635 10.7661 8.45317 11.3496Z' fill='%237000FF'/%3e %3c/svg%3e"/>
                                    <span className="text-[#7000ff] text-[14px]">Осталось всего 2</span>
                                </div>                                
                            </div>
                            <div className="hidden md:inline">
                                <span>Цена:</span>
                                <div className="flex items-center">
                                    <p className="text-[#212121] text-[20px] font-semibold mr-[13px]">{filtered[0]?.price} сум</p>
                                    <p className="text-[14px] text-[#8A8D93] line-through">23 000 сум</p>
                                </div>
                            </div>
                            <div className="flex justify-between bg-[#F5F6FA] rounded-[12px] w-full h-[54px] items-center px-3 md:mt-[20px]">
                                <div className="flex items-center">
                                    <div className="bg-[#FFFF00] rounded-[8px] mr-1 px-1 h-[30px]">
                                        <span className="text-[#1F1F26] text-[12.25px] font-semibold">От 2 340 сум/мес</span>
                                    </div>
                                    <span className="text-[#1F1F26] text-[12.25px]">в расрочку</span>
                                </div>
                                <div>
                                <IoIosArrowForward />
                                </div>
                            </div>
                            <div className="hidden md:flex mt-4 justify-between">
                                <button className="bg-[#7000FF] rounded-[8px] text-[#ffffff] text-[16px] h-[52px] w-[49%] font-semibold">Добавить в корзину</button>
                                <button className="border border-[#7000FF] rounded-[8px] text-[#7000FF] text-[16px] h-[52px] w-[49%] font-semibold">Купить в 1 клик</button>
                            </div>
                            <div className="flex bg-[#ffe4334d] rounded-[8px] items-center px-7 mt-6">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z" fill="#141415"></path></svg>
                                <span className="py-3 text-[#141415] text-[14px]">3569 человек купили на этой неделе</span>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div className="border-b border-b-[#76797f33] mt-[34px] mb-3"></div>
                    <p className="text-[20px] font-semibold md:px-7">Описание товара</p>
                    <div className="border-b border-b-[#76797f33] mt-3 mb-[23px]"></div>
                    <div className="md:px-10">
                        <p className="text-[.75rem] mt-3">{filtered[0]?.description}</p>
                    </div>
                </section>
                <section className=" mb-[30px] mt-[80px]">
                    <div className="flex items-center h-[20px] mt-[80px]">
                        <p className="font-bold text-[20px]">Похожие товары</p>
                        <IoIosArrowForward />
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 lg:grid-cols-5  mt-[30px]">
                        {
                            arr.slice(41, 46).map((item, inx) => <ProductCard key={inx} item={item} />)
                        }
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default Product;