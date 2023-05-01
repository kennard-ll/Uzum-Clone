import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../features/cart/postCartThunk";
import { useEffect } from "react";
import BasketItem from "../component/basketItem";
import TotalList from "../component/totalList";
import { Link } from "react-router-dom";

const Basket = () => {
    const cart = useSelector(state => state.cart.data)
    const cart_id = useSelector(state => state.cart.data_id)
    const goodQt = cart.length
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cart_id.length) {
            dispatch(getCartThunk())
        }
    }, []);

    if (cart.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <center><img  src="https://uzum.uz/static/img/shopocat.8cee444.png" className="h-[128px] mt-[50px] md:mt-[70px]" /></center>
                    <span className="font-bold text-[1.375rem]">В корзине пока нет товаров</span>
                    <p className="  text-[.8rem] mt-[15px] ml-[10px]">Начните с подборок на главной странице или найдите нужный товар через поиск</p>
                    <Link to={"/"}><button className="bg-[#5d00d6] text-[#ffffff] text-[.875rem] rounded-[4px] h-[38px] px-[14px] py-[7px] font-medium mt-[16px]">На главную</button></Link>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="mt-[50px] text-[1.5rem] font-semibold mb-5">Ваша корзина, <span className="opacity-[.54]">{goodQt} товар</span></h1>
                <div className="md:flex">
                    <div className="border-[1px] border-[#d9d9d9] rounded-[3px] px-3 mr-[15px] mb-[30px]">
                        {
                            cart.map((item, inx) => <BasketItem item={item} key={inx} />)
                        }
                    </div>
                    <TotalList goodQt={goodQt} cart={cart} />
                </div>                
            </div>
        )
    }

}

export default Basket;