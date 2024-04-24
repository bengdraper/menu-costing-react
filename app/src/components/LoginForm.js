import React from 'react'

const LoginForm = () => {
    return (
        <div className="d-flex col justify-content-center  " >
            <form className="justify-content-center">
                <div>
                    <input type='email' placeholder='Email' />
                </div>
                <div>
                    <input type='password' placeholder='Password' />
                </div>
                <button className="mt-3 ms-5 ps-4 pe-4"type='submit'>Login</button>
                <br />
            <button className="mt-3 ms-4 ps-4 pe-4" >I'm New</button>
            </form>
        </div>
    )
}

export default LoginForm