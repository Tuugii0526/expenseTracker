export default function Layout({children}){
return (
    <div className="w-full h-screen relative flex">
        <div className="w-1/2 h-screen bg-white">
        </div>
        <div className="w-1/2 h-screen bg-[#0166FF]"></div>
        <div className="absolute inset-x-0 inset-y-0 w-full h-full flex justify-center items-center">
            {children}
        </div>
    </div>
)
}