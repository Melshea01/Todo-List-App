import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Navbar } from '../Landingpage/Navbar/Navbar';


export default function Login() {
    return (
        <div className="Login">
            <body className='body-login'>
                <main class='main-login'>
                        <form>

                            <label for="email">Email</label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                required />


                            <button type="submit" class="login-btn">Sign in</button>

                            <div class="or">OR</div>
                            
                            <div class="btn-group">
                                <button class="btn">
                                    <img class="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9" alt="" />
                                    <span>Sign in with Google</span>
                                </button>
                                <button class="btn">
                                    <img class="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/59c1561b-8152-4d05-b617-0680a7629a0e" alt="" />
                                    <span>Sign in with Apple</span>
                                </button>
                            </div>

                            <div class="links">
                                <a href="#">Forgot password?</a>
                                <a href="#">Do not have an account?</a>
                            </div>
                        </form>
                </main>
            </body>
        </div>
    );
}