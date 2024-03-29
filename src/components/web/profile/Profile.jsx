import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './Profile.module.css'
import { Link, Outlet } from 'react-router-dom';
export default function Profile() {

    const {userData,loading} = useContext(UserContext);
    if(loading){
        return <p>loading ...</p>
    }
    console.log(userData);

  return (
    <aside className={`${style.profile}`}>
        <div className={`${style.profileLinks}`}>
            <nav>
                <Link to=''>info</Link>
                <Link to='contact'>contact</Link>
                <Link to='order'>order</Link>
            </nav>
        </div>

        <div className={`${style.userData}`}>
          <Outlet />
        </div>
           </aside>
       
 
  )
}
