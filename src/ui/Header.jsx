import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import Logout from "../features/Logout";
import Button from "./Button";

function Header() {
    const authStatus = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            path: "/",
            active: true,
        },
        {
            name: 'Login',
            path: "/login",
            active: !authStatus,
        },
        {
            name: 'Signup',
            path: "/signup",
            active: !authStatus,
        },
        {
            name: 'All Posts',
            path: "/all-posts",
            active: authStatus,
        },
        {
            name: 'Add Post',
            path: "/add-post",
            active: authStatus,
        },
        {
            name:'favourite post',
            path:"/favourite-post",
            active:authStatus,
        },
    ]

  return (
    <header className="p-8">
        <nav className='flex'>
          <div className='mr-4'>
          <Link to="/" className="tracking-widest 70px">EDBlog</Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
                item.active && (
                <li key={item.name}>
                    <Button onClick={() => navigate(item.path)} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                        {item.name}
                    </Button>
                </li>
            ) 
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
    </header>
  )
}

export default Header