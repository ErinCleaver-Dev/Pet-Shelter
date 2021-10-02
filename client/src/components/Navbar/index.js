import React from 'react'
import styles from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () =>{

    let user = JSON.parse(localStorage.getItem('user'));
console.log(user)

    return(
        <div className={styles["navbar-container"]}>
           <div  style={{
              display:"flex",
             
              alignItems:'center',
              justifyContent:"space-between"
              
          }}>
           <Link className={styles["brand-style"]} to="/" >Client</Link>

           </div>
          <div style={{
              display:"flex",
              minWidth:"15rem",
              alignItems:'center',
              justifyContent:"flex-end",
              paddingRight: "20px"
              
          }}>

{user ?   (<>Hello user <Link to="/logout" className={styles["link-style"]}>
           logout
           </Link></>)   :  (
    <>
<Link to="/account" className={styles["link-style"]}>
           signin
           </Link>

           <Link to="/account?register=true" className={styles['signup']}>
            sign Up
           </Link></>)
           }
           

           </div>
           
          
        </div>
    )
}

export default Navbar
