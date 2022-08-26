import '../styles/imports/sign-in.scss'

function SignIn(props) {
    return (
        <div className='login-page'>
            <h1>Sign in with Spotify</h1>
            <div className='btn-wrapper'>
                <a href = {props.URL} className='sign-in-btn'>Sign in</a>
            </div>
        </div>
    )
}

export default SignIn