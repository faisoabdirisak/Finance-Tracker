import React from "react";
import {Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//styles
import styles from './Navbar.module.css'

function Navbar() {
  const {logout} = useLogout()
  const { user } = useAuthContext()

  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}>myMoneyApp</li>

          {!user && (
             <>
             <li>
               <Link to="/login">Login</Link>
               <Link to="/signup">Signup</Link>
             </li>
             </>
          )}
          
         {user && (
          <>
          <li>Hello, {user.displayName}</li>

           <li>
           <button className="btn" onClick={logout}>Logout</button>
         </li>
          </>
         )}
         
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
