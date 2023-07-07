import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Header } from "../Components/Header/Header.jsx";
import { Main } from "../Components/Layout/Main/Main.jsx";

export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}