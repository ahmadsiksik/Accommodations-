import { Fragment, useEffect } from 'react';
import classes from './Header.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOpacity } from 'react-icons/md';

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      
    return (
        <Fragment>
            <div  className={classes.bg_image} data-aos={"fade-left"} >
            <h1 className={classes.header} >اهلا وسهلا بكم في موقعنا للسكنات الجامعيه </h1>
            </div>
        </Fragment>
    )
}
export default Header;