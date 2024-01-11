import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
const AuthBtn = () => {
  return (
    <div className="group flex justify-center items-center space-x-1 md:text-lg text-sm ">
      <Link href={'/Auth/Login'} className="hover:text-petBlue transition-colors duration-300 cursor-pointer">LogIn</Link>
      <span>/</span>
      <Link href={'/Auth/SignUp'} className="hover:text-petBlue transition-colors duration-300 cursor-pointer">SignUp</Link>
      <span className="group-hover:text-petBlue transition-colors duration-300 text-xl font-bold"><IoIosLogIn /></span> 
       </div>
  )
}

export default AuthBtn