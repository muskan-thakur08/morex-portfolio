export default function BrandLogo() {
    let logo = [
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand7.png" ,border:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand5.png",border:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand3.png",border:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand1.png" },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand8.png", border:true,topBorder:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand6.png",border:true,topBorder:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand4.png",border:true,topBorder:true },
        { image: "https://themihub.com/html/morex-bootstrap/morex/assets/img/logo/brand2.png",topBorder:true }
    ]
    return (
        <div className="max-w-screen-xl h-screen mx-auto">
            <div className="flex flex-wrap">
               {logo.map((elem,idx)=>{
                return  <div key={idx} className={`w-80 h-40 flex items-center justify-center ${elem.border?"border-r-[1px]":""} ${elem.topBorder?"border-t-[1px]":""}`}>
                <img src={elem.image} className="opacity-60 hover:opacity-100 hover:scale-110 transition ease-in-out duration-300 delay-100" />
            </div>
               })}
            </div>
        </div>
    )
}