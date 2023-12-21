import React, { useContext, useEffect, useState } from 'react'
import './bookDetails.css';
import { allBooks, imagesBanner } from '../../data';
import { useParams } from 'react-router-dom'
import { AuthContext, ContextDatas } from '../../context/context';
import BasketHandeler from '../../components/hooks/BasketHandeler';
import { ShowAlert } from '../../components/sweetAlert/sweetAlert';

function BookDetails() {
  const authContext = useContext(AuthContext);
  const contextData = useContext(ContextDatas);

  const [bookCount, setBookCount] = useState(1);
  const [moreText, setMoreText] = useState(false);

  let { id } = useParams()

  const mainBook = allBooks.concat(imagesBanner).find(book => book.id == id)

  const mainText = mainBook.summary.split(' ').slice(0, 20).join(' ');
  const summaryHandeler = () => {
    setMoreText(!moreText)
  }

  const mainPrice = mainBook.price * bookCount

  const handleIncrement = () => {
    setBookCount(bookCount + 1)
  }
  const handleDecrement = () => {
    if (bookCount >= 2) {
      setBookCount(bookCount - 1)
    }
  }


    return (
      <div className='details'>
        <div className="details_contaner">
          <p className="summary" onTouchStart={summaryHandeler}>
            {!moreText ? `${mainText}  ... ` : mainBook.summary + ' '}
            {<button className='btn more_text' onClick={summaryHandeler}>{moreText ? 'بستن ↑' : 'بیشتر بخوانید ↓'}</button>}
          </p>
          <img src={`./../.${mainBook.image}`} alt="تصویر این کتاب" />
          <span className='details_author'>نویسنده : {mainBook.author}</span>
          <div className="number_section">
            <label htmlFor="number">تعداد ← </label>
            <button className='btn btn_number' onClick={handleIncrement}>+</button>
            <input type="number" name="number" className="number_book" value={bookCount} min={1}
              onChange={e => e.target.value} />
            <button className='btn btn_number' onClick={handleDecrement}>-</button>
          </div>
          <span className='details_price'>قیمت : {mainPrice.toLocaleString('fa-IR')} تومان </span>
          <button className="btn buy" onClick={()=>ShowAlert('info', 'به زودی این قابلیت اضافه میشود', contextData.darkMode && true)}>خرید این کتاب</button>
          <button className="btn sendBasket"
            onClick={() => authContext.isLogin ? 
              BasketHandeler(id, mainBook.author, mainPrice, mainBook.image, bookCount, authContext, contextData):
              ShowAlert('warning', 'به حساب کاربری خود وارد شوید', contextData.darkMode && true)
            }>افزودن به سبد خرید</button>
        </div>
      </div>
    )
}

export default BookDetails