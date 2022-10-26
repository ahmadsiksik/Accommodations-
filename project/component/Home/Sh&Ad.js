import { Fragment, useContext } from 'react';
import classes from './Sh&Ad.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import AuthContext from '../Login&Signin/Auth-context';
const ShAd = () => {
    
    const authCtx = useContext(AuthContext);
    const login=authCtx.isLoggedIn;
    console.log(login);
    return (
        <Fragment>
            <h1>سكناتي</h1>
            <div className={classes.flexContainer}>

                <div data-aos={"fade-right"} className={classes.card}>
               <div className={classes.container}>
                        <h4><b> عرض السكنات المتاحه </b></h4>
                        <p className={classes.p}>  <Link href='/ShowRoom'> اضغط هنا اذا اردت ان ترى السكنات المتاحه في منطقه الاكادميه و شارع الجامعه لطلاب جامعه النجاح</Link></p>
                        </div>
                   
                </div>
    
                {login&&( <div data-aos={"fade-left"} className={classes.card}>
                    <div className={classes.container}>
                        <h4><b>اضافه سكن</b></h4>
                        <p className={classes.p}><Link href='/Home/AddRoom'>اضغط هنا اذا كنت لديك شقه قريبه من جامعه النجاح تريد تاجيرها</Link>n </p>
                    </div>
                </div>)}

 
              {!login&&  (<div data-aos={"fade-left"} className={classes.card}>
                    <div className={classes.container}>
                        <h4><b>تسحيل دخول</b></h4>
                        <p className={classes.p}><Link href='/SignIn'>اضغط هنا اذا كنت لديك شقه قريبه من جامعه النجاح تريد تاجيرها</Link>n </p>
                    </div>
                </div>)}


            </div>
        </Fragment>
    )
}
export default ShAd;