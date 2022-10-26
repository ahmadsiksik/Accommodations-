import { Fragment, useContext,  } from 'react';
import classes from './Nav.module.css'
import { AiFillHome } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { MdAddBox } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import AuthContext from '../Login&Signin/Auth-context';
import Link from 'next/link';





const Nav = () => {
    
    const authCtx = useContext(AuthContext);
    const login=authCtx.isLoggedIn;
    console.log(login);
    return (
        <Fragment>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                  {login &&(  <li className={classes.li}><RiLoginBoxFill/><Link href="/SignIn">{ 'تسجيل الخروج ' }</Link></li>)}
                  {!login &&(  <li className={classes.li}><RiLoginBoxFill/><Link href="/SignIn">{ 'تسجيل الدخول ' }</Link></li>)}

                    <li className={classes.li}><a href="/ShowRoom"><BiShow/>عرض السكنات</a></li>
                    {login &&(  <li className={classes.li}><a href="/AddRoom"><MdAddBox/>اضافه سكن</a></li>)}
                    <li className={classes.li}><a href="/"><AiFillHome/>الصفحه الرئيسيه</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}
export default Nav;