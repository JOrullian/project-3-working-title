import Logo from '../assets/logo.svg'

export default function Login(props) {
    return (
        <>
            <div className="login-main-container">
                <header className="login-header">
                    <div className="login-logo-container">
                        <img className="login-logo" src={Logo}></img>
                    </div>
                    <div className="login-header-title">
                        <h1>Sign in to your<br/>account</h1>
                    </div>
                    <div className="login-header-subtext">
                        <p>Enter your email and password to log in</p>
                    </div>
                </header>
                <form id="login-form" className="login-form">
                    <div className='login-input-line'>
                        <input className='login-input' id='login-email' type='email' placeholder='Email'></input>
                    </div>
                    <div className='login-input-line'>
                        <input className='login-input' id='login-password' type='password' placeholder='Password'></input>
                    </div>
                    <div className='login-selections-container'>
                        <div className='remember-me-container'>
                            <input type='checkbox'></input>
                            <p>Remember me</p>
                        </div>
                    </div>
                    <button className='login-btn' id='login-btn'>Log In</button>
                    <div className='login-signup-subtext'>
                        <p>Don't have an account? <a className='signup-link' href='/'>Sign up</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}