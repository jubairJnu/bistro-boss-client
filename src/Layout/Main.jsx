
import Header from '../pages/shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div>
     {isLogin || <Header></Header>}
      <Outlet></Outlet>
    {isLogin ||  <Footer></Footer>}
      
    </div>
  );
};

export default Main;