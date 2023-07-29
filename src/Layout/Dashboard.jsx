import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars, FaShoppingBag, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load data for admin dyamic

  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
 
      <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-[#D1A054]">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
        {
         isAdmin?<>
        
          <li><NavLink to='/'><FaHome />Admin Home </NavLink></li>
          <li><NavLink to='/dashboard/addAnItem'><FaCalendarAlt />Add Item </NavLink></li>
          <li><NavLink to='/dashboard/managaitems'><FaBars />Manage Items </NavLink></li>
          <li><NavLink to='/dashboard/mycart'><FaBook /> Manage Booking       
          </NavLink></li>
          <li><NavLink to='/dashboard/allusers'><FaUsers /> All Users     
          </NavLink></li>

        </>:
        <>
         <li><NavLink to='/'><FaHome />User Home </NavLink></li>
          <li><NavLink to='/reservation'><FaCalendarAlt />Reservation </NavLink></li>
          <li><NavLink to='/payment'><FaWallet />Payment History </NavLink></li>
          <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My cart 
          <span className="badge badge-secondary">{cart?.length || 0} </span>
          </NavLink></li>
        </>}
          {/* common option */}
          <div className="divider"></div>

          <li><NavLink to='/'><FaHome/>Home</NavLink></li>
          <li><NavLink to='/menu'><FaBars/>Our Menu</NavLink></li>
          <li><NavLink to='/order/salad'><FaShoppingBag/>Order</NavLink></li>

        </ul>

      </div>
    </div>
    
  );
};

export default Dashboard;