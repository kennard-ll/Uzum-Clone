const TotalList = ({ goodQt, cart }) => {
    const calcTotal = cart.map(item => item.price).reduce((a, b) => a + b, 0)
    return (
        <div className="md:w-[370px] h-fit  border-[1px] border-[#d9d9d9] rounded-[9px] p-5 md:block">
            <h3 className="mb-[1.8rem] text-[16px] text-[#212121] font-semibold">Ваш заказ</h3>
            <div className="flex justify-between text-[.875rem]">
                <p>Товары ({goodQt}): </p>
                <p>{calcTotal} сум</p>
            </div>
            <div className="border-b border-b-[#76797f33] my-[1.25rem]"></div>
            <div className="flex justify-between mb-[1.25rem] items-center">
                <p className="text-[.875rem]">Итого:</p> 
                <p className="text-[1.75rem]">{calcTotal} сум</p>
            </div>
            <button className="px-12  md:h-[40px] w-full rounded-[10px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] text-center py-1 md:py-2 font-semibold">Перейти к оформлению</button>
        </div>
    );
}


{/*

            <div className="flex justify-between">
                <span className="text-[10px] ss:text-[26px] font-semibold ss:mt-[15px]">{calcTotal - calcPercent} сум</span>

                <div className="ss:mt-[20px] mb-[10px] md:mb-[40px]">
                    <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого товаров: {goodQt}</p>
                    <p className="text-[8px] ss:text-[16px] font-bold ss:font-normal ">Итого скидки: {calcPercent} сум</p>
                </div>
            </div>


            <button className="px-12  md:h-[40px] w-full rounded-[7px] text-[12px] md:text-[16px] text-[#fff] bg-[#7000FF] text-center py-1 md:py-2">Оформить</button>

*/}


export default TotalList;