import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./features/Signup";
import Login from "./features/Login";
import Home from "./pages/Home";
import AllPost from "./pages/AllPost";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        // path:"/",
        element: <Home />
      },
      {
        path:"/signup",
        element: (
          <ProtectedRoute authentication={false}>
            <Signup />
          </ProtectedRoute>
        )
      },
      {
        path:"/login",
        element: (
          <ProtectedRoute authentication={false}>
            <Login />
          </ProtectedRoute>
        )
      },
      {
        path: "/all-posts",
        element: (
            <ProtectedRoute authentication>
                <AllPost />
            </ProtectedRoute>
        ),
    },
    {
        path: "/add-post",
        element: (
            <ProtectedRoute authentication>
                <AddPost />
            </ProtectedRoute>
        ),
    },
    {
        path: "/edit-post/:id",
        element: (
            <ProtectedRoute authentication>
                <EditPost />
            </ProtectedRoute>
        ),
    },
    {
        path: "/post/:id",
        element: <Post />,
    },
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App