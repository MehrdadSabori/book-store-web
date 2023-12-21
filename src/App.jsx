import { useCallback, useEffect, memo, useState, useMemo } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import { routes } from './routes.jsx'
import Header from './components/Header/Header'
import './App.css'
import { ContextDatas, AuthContext } from './context/context'
import Menu from './components/menu/Menu'
import Footer from './components/Footer/Footer'
import Basket from './components/basket/Basket.jsx'
import BookDetails from './pages/bookDetails/BookDetails.jsx'
import useDarkMode from './components/hooks/darkMode/useDarkMode.jsx'
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx'

function App() {
  const mainRoutes = useRoutes(routes);
  const { pathname } = useLocation();

  const [darkMode, toggleMode] = useDarkMode()
  const [showMenu, setShowMenu] = useState(false)
  const [showBasket, setShowBsket] = useState(false)

  // --- AuhtContext value State ---
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState()
  const [userInfo, setUserInfo] = useState({})

  const toggleMenuNav = () => setShowMenu(!showMenu);
  const toggleBasket = () => setShowBsket(!showBasket);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (showMenu) {
      toggleMenuNav()
    }
  }, [pathname]);

  useEffect(() => {

    if (localStorage.getItem('token')) {

      fetch('https://parseapi.back4app.com/users/me', {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': '2UnD8XTSl0ihtuI4VgRGiWSDCUou376Guu5anRzr',
          'X-Parse-REST-API-Key': '0h9enABpV7H9fzrfJvfZeQwRzj7tqi1zNtRBuLXt',
          'X-Parse-Session-Token': JSON.parse(localStorage.getItem('token'))
        }
      }).then(res => res.json())
        .then(data => {
          logIn(data, data.sessionToken)
        })
    }
  }, [])

  const logIn = (data, token) => {
    setIsLogin(true)
    setToken(token);
    setUserInfo(data)
    localStorage.setItem('token', JSON.stringify(token))
  }
  const logOut = () => {
    setIsLogin(false)
    setToken(null)
    setUserInfo({})
  }

  return (
    <>
      <AuthContext.Provider value={{
        isLogin,
        token,
        userInfo,
        setUserInfo,
        logIn,
        logOut
      }}>

        <ContextDatas.Provider value={{
          darkMode,
          toggleMode,
          showBasket,
          setShowBsket,
          toggleBasket,
          setShowMenu
        }}>
          <div className="app" id={darkMode ? 'dark' : 'light'}>
            {showBasket && <Basket />}
            {showMenu && <Menu toggleMenu={toggleMenuNav} showMenu={showMenu} />}
            {showMenu || showBasket ? <div className="matte_background">
            </div> : null}
            {window.location.pathname !== '/registration' && window.location.pathname !== '/login' &&
              <Header toggleMenu={toggleMenuNav} toggleBasket={toggleBasket} />
            }

            {/* ---- routes ---- */}
            {mainRoutes}

            {/* ------ footer ----- */}
            {window.location.pathname !== '/registration' && window.location.pathname !== '/login' && <Footer />}
            {/* --- scroll to top --- */}
            <ScrollToTop />

          </div>
        </ContextDatas.Provider >
      </AuthContext.Provider>
    </>
  )
}

export default memo(App)
