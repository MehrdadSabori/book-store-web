import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css'

import { SlBasket } from 'react-icons/sl'
import { AuthContext, ContextDatas } from '../../context/context';
import { ShowAlert } from '../sweetAlert/sweetAlert';
import BasketHandeler from '../hooks/BasketHandeler';

function Card(props) {
  let { id, author, price, image, count } = props;

  const contextData = useContext(ContextDatas);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate()

  const detailsHandelr = (props) => {
    navigate(`/book-details/${props.id}`);
    contextData.setShowBsket(false)
  }

  return (
    <>
        <div className='card_section'>
          <div className="image_section">
            <button className="btn btn_details" onClick={() => detailsHandelr(props)}>جز‌‌‌‌‌‌ییات</button>
            {/* <img className='card_img' src={`./../.${image}`} alt="تصویر کتاب" /> */}
            <img className='card_img' src={image} alt="تصویر کتاب" />
          </div>
          <span className="author_book">نویسنده : {author}</span>
          <span className="price">قیمت :  {price.toLocaleString('fa-IR')} تومان</span>
          {
            props.hideButton == true ? <button className="btn btn_card"
              onClick={() => {
                authContext.isLogin ? BasketHandeler(id, author, price, image, undefined, authContext, contextData):
                ShowAlert('warning', 'به حساب کاربری خود وارد شوید', contextData.darkMode && true)
              }}
            >افزودن به سبد خرید<SlBasket /></button> :
              <span className='number_span_card'>{count} عدد</span>
          }
        </div >
    </>
  )
}

export default Card