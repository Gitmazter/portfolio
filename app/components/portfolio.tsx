

interface PortfolioProject {
    title: string,
    description: string,
    linkUrl: string,
    imageUrl: string
}

const portfolioProjects:PortfolioProject[] = [
    {
        title:"Token Terminal Deluxe (Coming Soon)",
        description:"shhhh",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"ISC Homepage",
        description:"",
        linkUrl:"https://isc.money/",
        imageUrl:""
    },
    {
        title:"ISC Dashboard",
        description:"",
        linkUrl:"https://dashboard.isc.money/",
        imageUrl:""
    },
    {
        title:"ISC Points System (Prospera)",
        description:"",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"Meteora PnL Dashboard",
        description:"",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"CsForge",
        description:"",
        linkUrl:"https://github.com/Gitmazter/csForge",
        imageUrl:""
    },
    {
        title:"Spritely",
        description:"pixel art NFT draw and mint ui",
        linkUrl:"https://github.com/Gitmazter/spritely-ts",
        imageUrl:""
    },
    {
        title:"SGBuilders Bill Splitter",
        description:"",
        linkUrl:"https://dashboard.isc.money/#/sgbuilders",
        imageUrl:""
    },
]


export default () => {


    return (
        <section className="w-[100vw] max-w-5xl flex flex-col mt-3">
            <h1 className="text-3xl margin-0 font-spectral">Portfolio</h1>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <div className=" h-[200px] bg-[#505050] text-black">
                    Token Terminal Deluxe (Coming Soon)
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    ISC Homepage
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    ISC Dashboard
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    ISC Points System
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    Meteora Dashboard
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    CSForge
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    Pixel art nft Project
                </div>
                <div className=" h-[200px] bg-[#505050] text-black">
                    SGBuilders Bill Splitter
                </div>
            </div>
        </section>
    )
}