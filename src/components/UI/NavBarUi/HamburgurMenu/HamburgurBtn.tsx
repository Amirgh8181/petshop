
import { IoMenu } from "react-icons/io5"



const OpenHamburgurMenuBtn = ({ setMobileMenu }: { setMobileMenu: () => void }) => {

    return (
        <div
            onClick={() => setMobileMenu()}
            className='
                aspect-square h-7 flex justify-center items-center text-2xl
              bg-petBlue text-white rounded-lg'
        >

            <IoMenu />
        </div>)
}

export default OpenHamburgurMenuBtn