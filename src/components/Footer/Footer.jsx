import React from 'react'
import './footer.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (
        <>
            <footer>
                <div className="footer_contaner">
                    <hr />
                    <div className="links_and_map">
                        <div className="footer_links">
                            <ul>
                                <li><NavLink to="/store">فروشگاه</NavLink></li>
                                <li>تخفیفات ویژه</li>
                                <li><NavLink to="/articles">مقالات</ NavLink></li>
                                <li><NavLink to="/about-us">درباره ما</ NavLink></li>
                                <li>شبکه های اجتماعی</li>
                            </ul>
                            <ul>
                                <li onClick={()=> navigate('/book-details/3')}>کتابهای علمی</li>
                                <li onClick={()=> navigate('/book-details/5')}>کتابهای تاریخی</li>
                                <li onClick={()=> navigate('/book-details/13')}>کتابهای کودکان</li>
                            </ul>
                        </div>
                        <div className="map">
                            <div>
                                <iframe
                                    className='map_iframe'
                                    title="نقشه"
                                    width="425"
                                    height="350"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=51.571986079216%2C35.42954948527067%2C51.57922804355622%2C35.43263541074993&amp;layer=mapnik&amp;marker=35.43109246279188%2C51.57560706138611"
                                    style={{ border: '2px solid black', borderRadius: '.7rem', width: '20rem', height: '8rem' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="copyRight">
                        <span>تمامی حقوق برای مهرداد صبوری محفوظ است. ©</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer