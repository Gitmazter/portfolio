

interface PortfolioProject {
    title: string,
    description: string,
    linkUrl: string,
    imageUrl: string
}

const portfolioProjects:PortfolioProject[] = [
    {
        title:"Token Terminal Deluxe",
        description:"shhhh",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"ISC Homepage",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"https://isc.money/",
        imageUrl:""
    },
    {
        title:"ISC Dashboard",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"https://dashboard.isc.money/",
        imageUrl:""
    },
    {
        title:"ISC Points System (Prospera)",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"Meteora PnL Dashboard",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"",
        imageUrl:""
    },
    {
        title:"CsForge",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"https://github.com/Gitmazter/csForge",
        imageUrl:""
    },
    {
        title:"Spritely",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"https://github.com/Gitmazter/spritely-ts",
        imageUrl:""
    },
    {
        title:"Spliscwise",
        description:"A medium length description will go here to explain the project at a glance",
        linkUrl:"https://dashboard.isc.money/#/sgbuilders",
        imageUrl:""
    },
]


export default () => {


    return (
        <section className="w-[100vw] max-w-5xl flex flex-col mt-3">
            <h1 className="text-3xl margin-0 font-spectral">Portfolio</h1>
            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
                {portfolioProjects.map((e, index) => {
                    return (
                        <div key={index} className="grid grid-cols-2 h-[200px] bg-[#505050] text-black p-2 rounded-lg">   
                            <img className="h-full bg-white" src={""} alt="noimg"/>
                            <div className="flex flex-col justify-between">
                                <div className="pl-3">
                                    <h3 className="nowrap text-lg font-bold text-white">{e.title}</h3>
                                    <p className="text-[#ffffffa0]">{e.description}</p>
                                </div>
                                <a href={e.linkUrl} target="new" className="bg-white px-2 py-1 rounded-xl w-max self-end">Visit</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}