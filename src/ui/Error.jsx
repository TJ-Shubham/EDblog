import { useNavigate, useRouteError } from "react-router-dom"


function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

  return (
    <div>
        <h1>Somthing went wrong 😢</h1>
        <p>{error.message}</p>
        <button className="text-sm text-blue-500 hover:text-blue-600 hover:underline" onClick={() => navigate(-1)}>
            &larr; Go back
        </button>
    </div>
  )
}

export default Error