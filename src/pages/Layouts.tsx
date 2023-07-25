import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layouts;
