import { Outlet } from "react-router-dom";
import Navbar from './userLayout component/Navbar'
import Footer from './userLayout component/Footer'

const UserLayout = () => {
  return (
    <>
      <Navbar/>

      <main>
        <Outlet />
      </main>

      <Footer/>
    </>
  );
};

export default UserLayout;