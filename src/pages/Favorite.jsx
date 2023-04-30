import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";

const Favorite = () => {

    const liked = useSelector(state => state.liked.data)

    if (liked.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <center><img  src="	https://uzum.uz/static/img/hearts.cf414be.png" className="h-[128px] mt-[50px] md:mt-[70px]" /></center>
                    <span className="font-bold text-[1.375rem]">Добавьте то, что понравилось</span>
                    <p className="  text-[.8rem] mt-[15px] ml-[10px]">Перейдите на главную страницу и нажмите на ♡ в товаре</p>
                    <Link to={"/"}><button className="bg-[#5d00d6] text-[#ffffff] text-[.875rem] rounded-[4px] h-[38px] px-[14px] py-[7px] font-medium mt-[16px]">На главную</button></Link>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className="grid xs:grid-cols-2 gap-[20px] vs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  ">
                    {
                        liked.map((item, inx) => <ProductCard key={inx} item={item} />)
                    }
                </div>
            </>
        )
    }

}
 
export default Favorite;