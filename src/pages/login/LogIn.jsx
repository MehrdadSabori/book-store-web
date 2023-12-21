import React, { useContext, useState } from 'react'
import Input from '../../components/input/Input'
import { loginInput } from '../../data'
import { useNavigate } from 'react-router-dom'
import { ContextDatas, AuthContext } from '../../context/context'
import { ShowAlert } from '../../components/sweetAlert/sweetAlert'

function LogIn() {
  const authContext = useContext(AuthContext);
  const contextDatas = useContext(ContextDatas);
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const submitHandeler = async (e) => {
    e.preventDefault();
    await fetch('https://parseapi.back4app.com/login', {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': '2UnD8XTSl0ihtuI4VgRGiWSDCUou376Guu5anRzr',
        'X-Parse-REST-API-Key': '0h9enABpV7H9fzrfJvfZeQwRzj7tqi1zNtRBuLXt',
        'X-Parse-Revocable-Session': '1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(data => {
        
        if(data.code !== 101){
          authContext.logIn(data, data.sessionToken);
          ShowAlert('success', 'با موفقیت لاگین شدید ', contextDatas.darkMode && true);
          setTimeout(() => navigate('/'), 3100)
        }else{
          ShowAlert('error', 'ادرس ایمیل یا پسورد اشتباه است', contextDatas.darkMode && true);
        }
        
      })
      .catch(err => console.log(err))
  }
  const onchangeHandeler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className='registration'>
      <div className="register_contaner">
        <form className="form_section" onSubmit={submitHandeler}>
          <span className='form_header'>وارد شوید</span>
          {loginInput.map(input => (
            <Input key={input.id} {...input} onChange={onchangeHandeler} value={values[input.name]} />
          ))}
          <span className="btn spanLink" onClick={() => navigate('/registration')}>ثبت نام</span>
          <input type='submit' value={'ورود'} className="btn submit_btn" />
        </form>
        <div className="logo_register">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='svg_logo_register'
            fill="none"
            viewBox="0 0 102 91"
          >
            <path
              fill="#18D992"
              d="M45.394 57.32l1.867 6.028a2.379 2.379 0 002.976 1.568l44.64-13.81a2.377 2.377 0 001.57-2.974l-1.867-6.027a2.379 2.379 0 00-2.976-1.568l-44.641 13.81a2.377 2.377 0 00-1.569 2.974z"
            ></path>
            <path
              fill="#FFA71A"
              d="M90.544 40.85l-.758.234 3.274 10.57.758-.235-3.274-10.57z"
            ></path>
            <path
              fill="#FFA71A"
              d="M91.01 42.68l-1.303.407 3.321 10.621 1.303-.406L91.01 42.68zM52.279 64.26l.758-.235-3.273-10.568-.759.234 3.274 10.57zM54.042 63.717l1.297-.401-3.274-10.57-1.296.402 3.273 10.569z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M91.997 40.4L46.724 54.41a2.175 2.175 0 00-1.472 2.207l49.127-15.2h-.053c-.437-.73-1.462-1.286-2.33-1.017zM49.9 65.002l45.273-14.007a2.183 2.183 0 001.472-2.209L47.518 63.99h.056c.416.727 1.441 1.286 2.326 1.014z"
            ></path>
            <path
              fill="#FFA71A"
              d="M72.21 52.31a1.355 1.355 0 01-1.156 1.749 1.358 1.358 0 111.155-1.75zM73.644 52.499l-.35-1.157 4.823-1.025a.161.161 0 01.095.304L73.643 52.5zM68.211 52.908l.35 1.157-4.823 1.027a.161.161 0 01-.095-.307l4.568-1.877z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M93.434 46.717l-11.543 3.569a1.142 1.142 0 01-1.477-1.2 1.14 1.14 0 01.802-.985l11.543-3.569a1.14 1.14 0 011.43.755 1.14 1.14 0 01-.755 1.43zM66.637 55.008l-8.92 2.758a1.142 1.142 0 01-1.35-1.627 1.139 1.139 0 01.676-.557l8.912-2.758a1.148 1.148 0 011.434.751 1.146 1.146 0 01-.752 1.433z"
            ></path>
            <path
              fill="#122130"
              d="M20.618 1.75L3.34 7.094l1.373 4.434 17.279-5.345-1.374-4.435z"
            ></path>
            <path
              fill="#122130"
              d="M26.276 0l-5.66 1.751L42.67 72.952l5.66-1.751L26.276 0z"
            ></path>
            <path
              fill="#122130"
              d="M82.832 61.675L46.256 72.99l-1.375-4.436 41.012-12.693a4.638 4.638 0 01-3.06 5.814z"
            ></path>
            <path
              fill="#122130"
              d="M52.473 84.375c6.869-3.617 9.502-12.114 5.882-18.978-3.62-6.865-12.122-9.497-18.99-5.879-6.869 3.617-9.502 12.114-5.883 18.979 3.62 6.864 12.123 9.496 18.991 5.878z"
            ></path>
            <path
              fill="#E2D0BF"
              d="M44.076 65.932a7.56 7.56 0 019.238 4.384 7.885 7.885 0 00-.16-.612 7.56 7.56 0 00-13.833-1.222 7.546 7.546 0 00-.6 5.69c.063.202.137.398.214.594a7.543 7.543 0 015.141-8.834z"
            ></path>
            <path
              fill="#F9F2E8"
              d="M48.14 79.16c3.971-1.23 6.274-5.184 5.144-8.834-1.13-3.65-5.267-5.612-9.238-4.384-3.971 1.229-6.274 5.183-5.144 8.833 1.13 3.65 5.267 5.613 9.238 4.384z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M100.252 37.841L46.57 54.463a2.331 2.331 0 01-1.091-.056 1.906 1.906 0 01-.874-.517l56.969-17.625c-.074.33-.218.64-.423.909a1.91 1.91 0 01-.899.667z"
            ></path>
            <path
              fill="#D91882"
              d="M12.724 3.254L2.125 6.533a2.223 2.223 0 00-1.467 2.78l.587 1.898a2.225 2.225 0 002.783 1.466l10.6-3.279a2.223 2.223 0 001.467-2.781l-.588-1.897a2.225 2.225 0 00-2.783-1.466z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M48.42 75.788a3.536 3.536 0 00.651-4.96 3.541 3.541 0 00-4.963-.651 3.536 3.536 0 00-.652 4.96 3.541 3.541 0 004.963.651z"
            ></path>
            <path
              fill="#122130"
              d="M49.323 70.893a3.535 3.535 0 01-3.016 4.563 3.542 3.542 0 01-3.479-1.835 3.535 3.535 0 012.067-5.063 3.545 3.545 0 014.428 2.335z"
            ></path>
            <path
              fill="#F25116"
              d="M100.79 32.825l.668 2.153a2.364 2.364 0 01-.168 1.813 2.387 2.387 0 01-1.402 1.162l-52.933 16.38a2.378 2.378 0 01-2.977-1.569l-.668-2.153a2.375 2.375 0 011.57-2.975l52.934-16.38a2.38 2.38 0 012.976 1.57z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M86.26 34.831l-.094.168a4.613 4.613 0 01-2.634 2.098L43.16 49.587c.03-.393.168-.77.395-1.09.24-.338.57-.602.952-.763L86.26 34.831z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M75.683 42.868L57.57 48.461a1.149 1.149 0 01-1.478-1.2 1.142 1.142 0 01.803-.988l18.112-5.593a1.146 1.146 0 11.675 2.188zM92.661 37.618L80.77 41.295a1.142 1.142 0 01-1.478-1.199 1.14 1.14 0 01.803-.986l11.892-3.68a1.146 1.146 0 11.675 2.188z"
            ></path>
            <path
              fill="#FFA71A"
              d="M96.635 31.629l-1.013.313 2.075 6.699 1.013-.313-2.075-6.699zM46.67 47.087l-1.012.313 2.075 6.699 1.013-.313-2.075-6.699z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M66.637 55.008l-8.92 2.758a1.142 1.142 0 01-1.35-1.627 1.139 1.139 0 01.676-.557l8.912-2.758a1.148 1.148 0 011.434.751 1.146 1.146 0 01-.752 1.433z"
            ></path>
            <path
              fill="#00B3D1"
              d="M38.688 35.671l3.21 10.362a2.379 2.379 0 002.976 1.568l39.552-12.236a2.377 2.377 0 001.569-2.974l-3.21-10.361a2.379 2.379 0 00-2.975-1.568L40.257 32.697a2.377 2.377 0 00-1.569 2.974z"
            ></path>
            <path
              fill="#FFA71A"
              d="M43.163 31.784l-1.921.595 4.616 14.903 1.922-.594-4.617-14.904zM78.297 20.915l-1.92.594 4.615 14.903 1.922-.594-4.617-14.903zM47.13 30.558l-.654.203 4.616 14.903.655-.203-4.616-14.903zM48.067 30.27l-.655.203 4.616 14.904.655-.203-4.616-14.903z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M77.236 26.87l-17.9 5.537a1.255 1.255 0 00-.828 1.57l.495 1.6a1.256 1.256 0 001.571.827l17.9-5.538a1.255 1.255 0 00.828-1.57l-.495-1.599a1.256 1.256 0 00-1.57-.828zM55.604 33.562l-6.222 1.925a1.255 1.255 0 00-.828 1.57l.495 1.599a1.256 1.256 0 001.571.828l6.222-1.925a1.255 1.255 0 00.828-1.57l-.495-1.6a1.256 1.256 0 00-1.571-.827z"
            ></path>
            <path
              fill="#FFA71A"
              d="M44.823 31.267l-1.657.513.513 1.656 1.657-.512-.513-1.657z"
            ></path>
            <path
              fill="#FFA71A"
              d="M46.991 32.41l-1.657.513.513 1.657 1.657-.513-.513-1.656zM45.842 34.588l-1.658.513.513 1.656 1.657-.512-.512-1.657zM48.02 35.723l-1.657.513.513 1.656 1.657-.512-.513-1.657zM46.877 37.894l-1.658.513.513 1.656 1.657-.513-.513-1.656z"
            ></path>
            <path
              fill="#FFA71A"
              d="M49.045 39.037l-1.657.513.513 1.656 1.657-.513-.513-1.656zM47.902 41.208l-1.657.513.513 1.656 1.657-.513-.513-1.656zM48.927 44.518l-1.658.513.513 1.656 1.658-.512-.513-1.657z"
            ></path>
            <path
              fill="#FFA71A"
              d="M50.064 42.354l-1.658.513.513 1.657 1.658-.513-.513-1.657z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M41.79 45.57l44.04-13.623.08.257a2.564 2.564 0 01-1.693 3.21L45.082 47.52a2.569 2.569 0 01-3.212-1.692l-.08-.257zM79.996 20.38l-39.95 12.361a2.176 2.176 0 00-1.43 2.716L82.71 21.824a2.166 2.166 0 00-2.714-1.444z"
            ></path>
            <path
              fill="#D91882"
              d="M35.412 25.102l1.867 6.028a2.379 2.379 0 002.976 1.567l44.64-13.81a2.377 2.377 0 001.57-2.973l-1.867-6.028a2.379 2.379 0 00-2.976-1.568l-44.641 13.81a2.377 2.377 0 00-1.569 2.974z"
            ></path>
            <path
              fill="#FFA71A"
              d="M41.408 20.746l-.688.213 3.273 10.569.689-.213-3.274-10.57zM40.014 21.172l-.345.106 3.274 10.57.344-.107-3.273-10.57zM80.358 8.691l-.344.107 3.274 10.569.344-.107-3.274-10.569zM79.392 8.986l-.344.107 3.274 10.569.344-.107-3.274-10.569zM78.42 9.286l-.344.106 3.273 10.57.344-.107-3.273-10.57z"
            ></path>
            <path
              fill="#FFA71A"
              d="M43.695 25.823a.66.66 0 11-1.261.39.66.66 0 011.261-.39zM43.051 23.75a.66.66 0 11-1.262.39.66.66 0 011.262-.39zM44.339 27.896a.66.66 0 01-1.212.514.66.66 0 111.212-.514zM44.979 29.973a.66.66 0 11-1.263.389.66.66 0 011.263-.39zM42.408 21.674a.66.66 0 11-1.26.395.66.66 0 011.26-.395z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M85.085 18.808L40.047 32.74a2.171 2.171 0 01-2.714-1.43l49.186-15.22a2.17 2.17 0 01-1.434 2.716zM68.03 12.515l-31.257 9.67a2.172 2.172 0 00-1.43 2.712l27.894-8.63a8.524 8.524 0 004.677-3.57l.115-.182z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M62.965 20.768l-11.071 3.426a1.144 1.144 0 11-.679-2.184l11.071-3.426a1.144 1.144 0 11.679 2.184zM82.577 14.7l-14.429 4.457a1.147 1.147 0 01-1.352-1.628c.141-.268.384-.47.674-.56l14.432-4.454a1.144 1.144 0 01.675 2.185z"
            ></path>
            <path
              fill="#00B3D1"
              d="M31.84 13.568l2.167 6.995a2.379 2.379 0 002.976 1.568l29.591-9.154a2.377 2.377 0 001.569-2.974l-2.167-6.996a2.379 2.379 0 00-2.975-1.567l-29.592 9.154a2.377 2.377 0 00-1.569 2.974z"
            ></path>
            <path
              fill="#FFA71A"
              d="M35.8 9.835l-1.142.353 3.574 11.538 1.142-.354-3.573-11.537zM40.066 8.52l-.572.177 3.574 11.537.572-.177L40.066 8.52zM38.064 9.138l-1.143.353 3.574 11.538 1.142-.354-3.573-11.537zM62.626 1.537l-1.143.354 3.574 11.537 1.142-.353-3.573-11.538zM38.788 8.913l-.722.223.715 2.307.721-.223-.715-2.307z"
            ></path>
            <path
              fill="#FFA71A"
              d="M40.209 13.531l-.722.223.715 2.308.722-.223-.715-2.308zM41.643 18.146l-.721.223.714 2.307.722-.223-.715-2.307zM40.215 11l-.721.223.714 2.307.722-.223L40.215 11zM41.65 15.614l-.722.223.715 2.308.721-.223-.714-2.308zM63.082 14.028l.572-.177L60.08 2.314l-.571.177 3.573 11.537zM64.367 13.628l.722-.223-.715-2.308-.722.224.715 2.307zM62.938 9.018l.721-.223-.714-2.307-.722.223.715 2.307zM61.504 4.404l.721-.223-.714-2.308-.722.224.715 2.307z"
            ></path>
            <path
              fill="#FFA71A"
              d="M62.933 11.549l.722-.224-.715-2.307-.721.223.714 2.308zM61.503 6.93l.722-.222L61.51 4.4l-.722.223.715 2.308z"
            ></path>
            <path
              fill="#EDCFBC"
              d="M33.97 20.517L68.087 9.962l.03.093a2.316 2.316 0 01-1.53 2.9l-29.705 9.19a2.32 2.32 0 01-2.902-1.53l-.029-.093.017-.005z"
            ></path>
            <path
              fill="#FFE4CF"
              d="M48.93 9.57l-10.86 3.36a1.255 1.255 0 00-.828 1.57l.258.83a1.256 1.256 0 001.57.829l10.86-3.36a1.255 1.255 0 00.829-1.57l-.258-.831a1.256 1.256 0 00-1.57-.828zM63.324 5.114l-7.251 2.243a1.255 1.255 0 00-.828 1.57l.257.832a1.256 1.256 0 001.571.827l7.251-2.243a1.255 1.255 0 00.828-1.57l-.257-.831a1.256 1.256 0 00-1.571-.828z"
            ></path>
          </svg>
          <button className='btn backHome' onClick={() => navigate('/')}>بازگشت به صفحه اصلی</button>
        </div>
      </div>
    </div>
  )
}

export default LogIn