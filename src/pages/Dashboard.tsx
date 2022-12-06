
const sidebar = [
    [
        { name: "Overview", icon: 'OverviewIcon' },
        { name: "Products", icon: 'OverviewIcon' },
        { name: "Analytics", icon: 'OverviewIcon' },
        { name: "Schedule", icon: 'OverviewIcon' },
        { name: "Payout", icon: 'OverviewIcon' },
        { name: "Statements", icon: 'OverviewIcon' },
    ],
    [
        { name: "Help", icon: 'OverviewIcon' },
        { name: "Community", icon: 'OverviewIcon' },
        { name: "Settings", icon: 'OverviewIcon' },
        { name: "Logout", icon: 'OverviewIcon' },
    ]
]


export const Dashboard = () => {


    return (
        <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
            <aside className="py-6 px-10 w-64 border-r border-gray-200">
                <img src="/img/logo.png" alt="logo" className="w-28" />

                {sidebar.map((group) => (
                    <ul className="flex flex-col gap-y-6 pt-20">
                        {group.map((item) => (
                            <li>
                                <a href="#" className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group">
                                    <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0
                                    transition-transform ease-in-out" />
                                    {/* Icone vai aqui com className="w-6 h-6 fill-current" */}
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </aside>

            <main className="flex-1">
                <div className="flex items-center justify-between py-7 px-10">
                    <div>
                        <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Products</h1>
                        <p className="text-sm font-medium text-gray-500">Let's grow to your business! Create your products and upload here</p>
                    </div>
                    <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl 
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                        {/* Icone de mais className="w-6 h-6 fill-current" */}
                        <span className="text-sm font-semibold tracking-wide">Create Item</span>
                    </button>
                </div>
            </main>
        </div>
    )
}