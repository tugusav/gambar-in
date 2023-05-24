import Image from "next/image"
function Header() {
  return (
    <header className="flex p-5 justify-between items-center sticky top-0 z-50 bg-white shadow-md">
        {/* left */}
        <div className="flex space-x-2 items-center">
            <Image 
            src="https://devnote.tech/wp-content/uploads/2022/07/sagemaker-icon.png"
            alt="logo"
            width={50}
            height={50}
            />

            <div>
                <h1 className="font-bold">
                    Gambar.<span className="text-orange-500">in</span> Image Generator
                </h1>
                <h2 className="text-xs">
                    Powered by AWS SageMaker and StableDifussion 2.1
                </h2>
            </div>
        </div>

        {/* right */}
        <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
            <h1 className="px-4 font-bold text-right">My Images</h1>
            <div className="px-4">
                <Image src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
                alt="user"
                width={50}
                height={50}/>
            </div>
        </div>

        
    </header>

  )
}

export default Header