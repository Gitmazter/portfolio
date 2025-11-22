import * as fonts from "../styles/fonts"


export default () => {



    return (
        <section className="flex max-h-50 w-full max-w-3xl sm:items-start flex flex-row gap-3">
            <img src={'./andzi.jpg'} className="h-50"/>
            <div className="max-h-50 overflow-y-scroll no-scrollbar">
                <h2 className={`text-2xl ${fonts.spectral600Italic.className}`}>Shill by @AndziDev</h2>
                <p className={`text-sm ${fonts.spectral400.className}`}> 
                    Andzi Software is a Vietnam based dev shop with over 3 years of 
                    experience developing Dapps for Solana businesses. We specialize in 
                    data analytics, smart contract integrations and full stack web applications.
                    <br/>
                    <br/>
                    A bet on Andzi is a bet on yourself. Get in touch now.
                </p>
                <button className="solana-gradient-animated hover:pause-animation p-3 rounded-xl cursor-pointer">Contact Us</button>
            </div>
        </section>
    )
}