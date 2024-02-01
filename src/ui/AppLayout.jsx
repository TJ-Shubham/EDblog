import { Outlet } from "react-router-dom"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"


function AppLayout() {
  return (
    <div>
        <Header />
        <main>
            <Container>
                <Outlet />
            </Container>
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout