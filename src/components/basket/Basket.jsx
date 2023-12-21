import React, { useCallback, useContext, useEffect, useState } from 'react'
import './basket.css'
// ----- icons ------- //
import { SlBasket } from 'react-icons/sl'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AuthContext, ContextDatas } from '../../context/context'
import Card from '../card/Card'
import { ShowAlert } from '../sweetAlert/sweetAlert'
import { MdDelete } from "react-icons/md";


function Basket() {

    const authContext = useContext(AuthContext);
    const contextData = useContext(ContextDatas);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        fetch(`https://parseapi.back4app.com/users/${authContext.userInfo.objectId}`, {
            method: 'PUT',
            headers: {
                'X-Parse-Application-Id': '2UnD8XTSl0ihtuI4VgRGiWSDCUou376Guu5anRzr',
                'X-Parse-REST-API-Key': '0h9enABpV7H9fzrfJvfZeQwRzj7tqi1zNtRBuLXt',
                'X-Parse-Session-Token': authContext.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketItems: authContext.userInfo.basketItems })
        })
            .then(res => {
                res.ok == true ? res.json() : ShowAlert('warning', 'شما ثبت نام نکرده اید ', contextData.darkMode && true)
            })
            .catch(() => ShowAlert('error', 'عدم ارتباط با سرور', contextData.darkMode && true))

    }, [authContext.userInfo.basketItems])

    useEffect(() => {

        const calculateTotalPrice = () => {
            const price = authContext.userInfo.basketItems.reduce((total, item) => total + item.price, 0);
            setTotalPrice(price);
        };
        calculateTotalPrice();

    }, [authContext.userInfo.basketItems]);

    setTimeout(() => {
        if (contextData.showBasket) {
            document.querySelector('.basket_section').classList.add('show_basket')
        }
    }, 100)

    const deleteHandler = (author) => {
        authContext.setUserInfo((prevItem) => {
            let basketItems = prevItem.basketItems
            const mainFilter = basketItems.filter(item => item.author !== author);
            ShowAlert('success', 'از سبد خرید حذف شد', contextData.darkMode && true)
            return { ...prevItem, basketItems: mainFilter }
        })
    }

    return (
        <>
            <div className='basket_section'>
                <div className="header_basket">
                    <AiOutlineCloseCircle
                        className='basket_icon close_btn_basket'
                        onClick={contextData.toggleBasket}
                    />
                    <SlBasket className='basket_icon' />
                    <hr />
                </div>
                <div className="basket_items_section">
                    {authContext.userInfo.basketItems.length ? (authContext.userInfo.basketItems.map(card => (
                        <div className="delete_div">
                            {contextData.showBasket && <MdDelete className='delete_cart'
                                onClick={() => deleteHandler(card.author)} />}
                            <Card key={card.id} {...card} hideButton={false} />
                        </ div>
                    ))) : (<span className='empety_text'>سبد خرید شما خالی است</span>)}
                </div>
                <div className="buy_section">
                    <hr />
                    <span className="all_price_text"> کل مبلغ خرید : {totalPrice.toLocaleString('fa-IR')} تومان</span>
                    <button className='btn btn_buy' onClick={() => ShowAlert('info', 'به زودی این قابلیت اضافه میشود', contextData.darkMode && true)}>
                        <span>خرید</span>
                    </ button>
                </div>
            </div>
        </>
    )
}

export default Basket