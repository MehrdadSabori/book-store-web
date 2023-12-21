import React from 'react'
import './aboutUs.css'
import { myTeam } from '../../data'
import { Tooltip } from 'react-tooltip'

// --- icons ---
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoTelegram } from 'react-icons/bi'
import { CiMail } from 'react-icons/ci'

function AboutUs() {
  return (
    <div className='about_us_section'>
      <div className="about_contaner">
        <h4>کتابفروشی قطب کتاب</h4>
        <p className='first_p'>
          ما در کتابفروشی قطب کتاب به ارائه یک تجربه خرید منحصر به فرد در دنیای کتابفروشی آنلاین متعهد هستیم. از آنجایی که ما خود عاشقان کتاب و ادبیات هستیم، به عنوان تیمی از علاقمندان به دانش و فرهنگ، تصمیم داریم که کتاب‌های بهترین نویسندگان جهان را برای شما به ارمغان آوریم.
        </p>
        <p>
          ماموریت ما این است که دانش و آموزه‌های ارزشمندی که در کتاب‌ها نهفته‌اند را به افراد جامعه ارائه دهیم تا زندگی آنها را غنی‌تر و دانا‌تر کنیم. ما به ارائه مجموعه‌ای گسترده از کتاب‌ها از انواع و اقسام موضوعات و ژانرها می‌پردازیم تا تمامی سلیقه‌ها و اهداف خوانندگان را پوشش دهیم.

          با تفکری نوآورانه و توجه به انتخاب دقیق کتب و محصولات مرتبط، ما به خرید آسان و لذت‌بخش کتاب‌های مورد علاقه شما از خانه تبدیل می‌کنیم. تیم ما همواره در دسترس شماست تا به هر گونه سوال یا درخواست شما پاسخ دهد.
        </p>
        <div className="social_media">
          <a href="mailto:mehrdad.sabori76@gmail.com" target="_blank" >
            <CiMail className='icon_social' />
          </a>
          <a href='https://t.me/@mehrdadSabori' target="_blank" >
            <AiOutlineTwitter className='icon_social' />
          </a>
          <a href='https://www.youtube.com/@mehrdad.sabori' target="_blank" >
            <AiOutlineYoutube className='icon_social' />
          </a>
          <a href='https://t.me/@mehrdadSabori' target="_blank" >
            <BiLogoTelegram className='icon_social' />
          </a>
          <a href='https://www.instagram.com/mehrad.sabori_' target="_blank" >
            <AiOutlineInstagram className='icon_social' />
          </a>
        </div>
        <p className='last_p'>
          با کتابفروشی قطب کتاب، دنیایی از دانش و سرگرمی در دستان شماست. با ما همراه باشید تا در مسیری به سرزمین داستان‌ها و افکار نویدآوری سفر کنیم.
        </p>
        <h5> - تیم کتابفروشی قطب کتاب</h5>
        <div className="my_team_profile">
          {myTeam.map(profile => (
            <div key={profile.id} className='profile'>
              <Tooltip id="my-tooltip-data-html" />
              <img src={profile.src} alt="پروفایل"
                data-tooltip-id='my-tooltip-data-html'
                data-tooltip-html={`${profile.name} <br /> ${profile.post}`} />
              <div className="link_icon_profile">
                <a href={profile.telegramLink} target="_blank" >
                  <BiLogoTelegram className='icon_social link_profile' />
                </a>
                <a href={profile.instagramLink} target="_blank" >
                  <AiOutlineInstagram className='icon_social link_profile' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs