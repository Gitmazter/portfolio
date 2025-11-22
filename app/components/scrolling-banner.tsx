
const logos = [
 './scrolling-logos/meteora.svg',
 './scrolling-logos/jupiter.svg',
 './scrolling-logos/orca.svg',
 './scrolling-logos/bonk.svg',
 './scrolling-logos/zcash.svg',
 './scrolling-logos/eth.svg',
 './scrolling-logos/isc.webp',
 './scrolling-logos/wojak.webp',
 './scrolling-logos/kamino.svg',
 './scrolling-logos/uranus.webp',
 './scrolling-logos/pepe.webp',
 './scrolling-logos/giga.webp',
 './scrolling-logos/troll.webp',
]

export default () => {

    return (
        <div className="logo-slider">
            <div className="logo-slider__track">
                <div className="logo-slider__list">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]" />
                    ))}
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]" />
                    ))}
                </div>
                <div className="logo-slider__list">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]" />
                    ))}
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]" />
                    ))}
                </div>
            </div>
        </div>
      )
}

// return (
//     <section className="h-[10vh] max-h-[75px] w-[100vw] py-1 max-w-5xl bg-[#ffffff10] flex gap-3 justify-between overflow-hidden">
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/meteora.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/jupiter.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/orca.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/bonk.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/zcash.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/eth.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/isc.webp'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/wojak.webp'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/kamino.svg'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/uranus.webp'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/pepe.webp'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/giga.webp'}/>
//         <img className=" cursor-pointer transition-all hover:h-[9vh] h-[8vh] max-h-[75px] rounded-[999px]"  src={'./scrolling-logos/troll.webp'}/>
//     </section>
// )