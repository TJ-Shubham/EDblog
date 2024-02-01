import { useDispatch } from "react-redux"
import authService from "../services/apiAuth";
import { logout } from "../app/authSlice";
import Button from "../ui/Button";

function Logout() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }

  return (
    <Button onClick={handleLogout} className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full">Logout</Button>
  )
}

export default Logout;