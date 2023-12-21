import React, { memo, useContext, useEffect, useState } from 'react'
import './home.css'
import './homeResponsive.css'
import Typewriter from 'typewriter-effect';
import Card from '../../components/card/Card';
import { allBooks, imagesBanner } from '../../data';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// ----- icons ----
import { FiUsers } from 'react-icons/fi'
import { GiBookshelf } from 'react-icons/gi'
import { BsBagCheck } from 'react-icons/bs'
import { BsArrowDown, BsArrowRightCircle } from 'react-icons/bs'
import Counter from '../../components/hooks/counter/Counter';
import { ShowAlert } from '../../components/sweetAlert/sweetAlert';
import { ContextDatas } from '../../context/context';


function Home () {
  const contextDatas = useContext(ContextDatas);
  const navigate = useNavigate()
  const popularBooks = allBooks.filter(obj => obj.category === 'popular_books');
  const newBooks = allBooks.filter(obj => obj.category === 'new_books');
  const [bannerBook, setBannerBook] = useState(imagesBanner[0]);
  
  useEffect(() => {
    const randomImage = Math.floor(Math.random() * imagesBanner.length);
    setBannerBook(imagesBanner[randomImage])
  }, [])
  
const navigateStore=(categoryName)=>{
  navigate(`/store/${categoryName}`);
}
  return (
    <>
      <main>
        <section className="home_section">
          <div className="cover_header">
            <h1 className='h1 headertext'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("سفری به عمق دانش با کتاب های معتبر")
                    .pauseFor(2000) // توقف به مدت 1 ثانیه
                    .deleteAll() // حذف متن
                    .typeString("قطب کتاب ، مسیری برای دانش و سرزندگی!")
                    .start()
                    .pauseFor(2000); // شروع افکت تایپ‌نویسی
                }}
                options={{ loop: true }}
              />
            </h1>
            <h3 className='h3 welcome_text'>به فروشگاه قطب کتاب خوش آمدید</h3>
            <div className="big_icons_sections">
              <div className="big_icon users_icon_users_count">
                <FiUsers />
                <span>کاربران قطب کتاب  <Counter targetCount={2_230} /></span>
              </div>
              <div className="big_icon book_icon_allBooks_count">
                <GiBookshelf />
                <span>بانک کتاب  <Counter targetCount={1_200} /></span>
              </div>
              <div className="big_icon bagcheck_icon_buy_count">
                <BsBagCheck />
                <span>خرید  <Counter targetCount={2_300} /></span>
              </div>

            </div>
          </div>
          <div className="popular_section">
            <div className="popular_text_icon">
              <h4 onClick={()=> navigateStore('popular_books')}>محبوب ترین کتاب ها</h4>
              <BsArrowDown className='arrow_down_icon' />
            </div>
            <div className="bg_popular">
              <Swiper
                slidesPerView={4}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  650: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
              >
                {popularBooks.map(card => (
                  <SwiperSlide>
                    <Card key={card.id} {...card} hideButton={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="new_books popular_section">
            <div className="new_books_text_icon popular_text_icon">
              <h4 onClick={()=> navigateStore('new_books')}>جدید ترین کتاب ها</h4>
              <BsArrowDown className='arrow_down_icon' />
            </div>
            <div className="bg_new_books bg_popular">
              <Swiper
                slidesPerView={4}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  650: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
              >
                {newBooks.map(card => (
                  <SwiperSlide>
                    <Card key={card.id} {...card} hideButton={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="banner_contaner">
            <div className="text_btn_svg_section">
              <h2 className="h2 banner_text">تخفیف <span className='percent_banner'>60%</span> کتابهای پیشنهادی</h2>
              <img className='img_banner' src="/images/banner-image-book/baners__discount.png" alt="بنر" />
              <button className="btn btn_banner" onClick={() => navigate(`/book-details/${bannerBook.id}`)}><span>مشاهده و خرید</span></button>
            </div>
            <div className="banner_book_section">
              <img src={bannerBook.src} alt="تصویر کتاب" />
            </div>
          </div>
          <div className="emailAddress_section">
            <h2 className="text_emailAddress">با عضویت در خبرنامه و کانال تلگرام قطب کتاب تخفیف <span>20 درصدی</span> دریافت کنید</h2>
            <div className="inputsection_email">
              <input type="email" name="email" className='email_input' placeholder='email address ...' autoComplete='false' />
              <BsArrowRightCircle className='email_input_icon' onClick={()=> ShowAlert('info', 'به زودی فعال میشود!', contextDatas.darkMode && true)} />
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Home