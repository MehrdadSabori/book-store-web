import React, { useState, useEffect, memo } from 'react'
import './scrollToTop.css'

function ScrollToTop() {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const ScrollTopShow = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', ScrollTopShow)
        return () => {

            window.removeEventListener('scroll', ScrollTopShow)
        }
    }, []);

    const scrollToTopHandeler = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <button className={`scroll_to_top ${scrollY > 50 ? 'showScrollTop' : ''}`} onClick={() => scrollToTopHandeler()}>↑</button>
    )

}

export default memo(ScrollToTop)