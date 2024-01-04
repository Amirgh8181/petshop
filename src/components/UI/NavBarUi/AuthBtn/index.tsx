import { IoIosLogIn } from "react-icons/io";
const AuthBtn = () => {
  return (
    <div className="group flex justify-center items-center space-x-1">
      <div className="hover:text-petBlue transition-colors duration-300 cursor-pointer">LogIn</div>
      <span>/</span>
      <div className="hover:text-petBlue transition-colors duration-300 cursor-pointer">SignUp</div>
      <span className="group-hover:text-petBlue transition-colors duration-300 text-xl font-bold"><IoIosLogIn /></span> 
       </div>
  )
}

export default AuthBtn