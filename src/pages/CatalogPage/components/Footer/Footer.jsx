import style from "./footer.module.css"

function Footer() {

    return (
        <footer>
            <div className={style.container}>
                <div className={style.footertitles}>
                    <div className={style.about}>
                        <h1>About Us</h1>
                        <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                    </div>
                    <div className={style.categoriess}>
                        <h2>Categories</h2>
                        <ul>
                            <li>Runners</li>
                            <li>Sneakers</li>
                            <li>Basketball</li>
                            <li>Outdoor</li>
                            <li>Golf</li>
                            <li>Hiking</li>

                        </ul>
                    </div>
                    <div className={style.company}>
                        <h2>Company</h2>
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className={style.sociallinks}>
                        <h2>Follow us</h2>
                        <div className={style.links}>
                            <img src="public\img\ic_baseline-facebook.png" alt="facebook" srcset="" />
                            <img src="public\img\mdi_instagram.png" alt="" srcset="" />
                            
                            <img src="public\img\mdi_twitter.png" alt="" srcset="" />
                            <img src="public\img\ic_baseline-tiktok.png" alt="" srcset="" />
                        </div>
                    </div>
                </div></div>
        </footer>
        )
}
export default Footer

