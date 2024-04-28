import { Link, NavLink } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";


const Navbar = () => {
  const {logout,user} = useAuth();
  
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allCraft'>Arts & Crafts</NavLink></li>
        <li><NavLink to='/addCraft'>Add Crafts</NavLink></li>
        <li><NavLink to='/myCraft'>My Art&Craft</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Crafty Labs</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allCraft'>All Arts & Crafts</NavLink></li>
      <li><NavLink to='/addCraft'>Add Crafts</NavLink></li>
      <li><NavLink to='/myCraft'>My Art & Craft</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
      user ? <div className=" dropdown dropdown-left dropdown-hover flex ">
          <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
            <div className=" w-10 rounded-full">
              <img src={user?.photoURL || ""} alt="" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box shadow w-auto">
            <li>
              <button className=" btn btn-sm btn-ghost">{user.displayName || 'No User'}</button>
            </li> 
          </ul>
          <div className=" ml-5">
          <Link to='/login' onClick={logout} className="btn text-base font-semibold hover:bg-rose-500 bg-rose-400 hover:text-white hover:font-bold">Logout</Link>
          </div>
      </div> 
      : <Link to='/login' className="btn text-base font-semibold bg-rose-400 hover:bg-rose-500 hover:text-white hover:font-bold">Login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;