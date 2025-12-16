import style from "../Hero/Hero.module.css";
function Hero() {
    return (
        <>
        <main className={style.main}>
                <div className ={style.adv}>
                    <h2>Limited time only</h2>
                    <h1>Get 30% off</h1>
                    <p>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
                </div>
        </main>
        </>
    )
}
export default Hero