import Form from '../component/AddForm/Form';
import { useRouter } from 'next/router'
import { Fragment, useContext } from "react";
import AuthContext from "../component/Login&Signin/Auth-context";
import classes from './AddRoom.module.css';
const AddRoom=()=>{
    const history = useRouter();

    async function addMovieHandler(movie) {
        const response = await fetch('https://rooms-513e7-default-rtdb.firebaseio.com/m1.json', {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        history.replace('/Home');
      }
      const authCtx = useContext(AuthContext);
      const login=authCtx.isLoggedIn;
      console.log(login);

      const Click=()=>{
        history.replace('/SignIn');
      }
    return(
      <Fragment>
        
    { login &&(
    <Form onAddRoom={addMovieHandler} />)}
    <div className={classes.all}>
    {!login &&( <p>الرجاء تسجيل الدخول</p>)}
    {!login &&(<button className={classes.butt} onClick={Click}>Login</button >)}
    </div>
    </Fragment>
    )
}
export default AddRoom;