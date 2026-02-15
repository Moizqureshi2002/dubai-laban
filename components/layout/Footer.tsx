import Image from "next/image"
import DLlogo from "../../public/dubai-laban-logo.png"

export default function Footer() {
  return (
    <footer className=' h-[250px] w-full flex justify-center items-center bg-blue-800 text-white'>
        <div className="flex items-center w-[90%] mx-auto h-full">
            <div className="w-1/2">
                <Image src={DLlogo} alt="Dubai Laban" className="h-[100px] md:h-25 w-auto" />
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                Socials
            </div>
        </div>
    </footer>
  )
}
