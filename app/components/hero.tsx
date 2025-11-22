import * as fonts from "../styles/fonts"


export default () => {
    return (
        <section className="relative h-[100vh] w-[100vw] max-w-5xl max-h-[520px] bg-white solana-gradient-animated flex flex-col items-center justify-center">
            <img src={'./logo.png'}/>
            <p className={`text-black ${fonts.spectral600.className}`}>A Solana Devshop</p>
            <p className={`absolute bottom-0 left-0 text-black p-2 ${fonts.spectral200.className}`}>Our Favorite Solana Projects</p>
        </section>  
    )
}
