import { useState, useRef, useContext, Fragment } from 'react';
import Nav from '../Home/Nav';
import AuthContext from './Auth-context';
import classes from './Login&Signin.module.css';
import { useRouter } from 'next/router'


const Login_Signin = () => {
    const history = useRouter();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Add validation

        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs2AVC7UVdgGLAvonllhsG02g6JvKMBAg';

        }
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs2AVC7UVdgGLAvonllhsG02g6JvKMBAg';

        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        // if (data && data.error && data.error.message) {
                        //   errorMessage = data.error.message;
                        // }

                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString());
                history.replace('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>
                            <section className={classes.auth}>
                                <h1>{isLogin ? 'تسجيل الدخول' : 'انشاء حساب '}</h1>
                                <form onSubmit={submitHandler}>
                                    <div className={classes.control}>
                                        <label htmlFor='email'>البريد الالكتروني</label>
                                        <input type='email' id='email' required ref={emailInputRef} />
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='password'>كلمه المرور</label>
                                        <input
                                            type='password'
                                            id='password'
                                            required
                                            ref={passwordInputRef}
                                        />
                                    </div>
                                    <div className={classes.actions}>
                                        {!isLoading && (
                                            <button>{isLogin ? 'تسجيل الدخول' : ' انشاء الحساب'}</button>
                                        )}
                                        {isLoading && <p>Sending request...</p>}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                            onClick={switchAuthModeHandler}
                                        >
                                            {isLogin ? 'انشاء حساب' : 'تسجيل الدخول'}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>


        </Fragment>

    );
};
export default Login_Signin;