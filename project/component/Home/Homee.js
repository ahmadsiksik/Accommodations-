import { Fragment, useContext } from 'react';
import AuthContext from '../Login&Signin/Auth-context';
import Header from './Header';
import Nav from './Nav';
import ShAd from './Sh&Ad';

const Homee = () => {
   const Autx = useContext(AuthContext);
   console.log(Autx.isLoggedIn);
    return (
        <Fragment>
           <Nav/>
           <Header/>
           <ShAd/>
        </Fragment>
    )
}
export default Homee;