import '../styles/imports/header.scss'

function Header(props) {
    return (
        <header>
            <h1>Hello <span>{props.userName}</span>{props.text}</h1>
        </header>
    )
}

export default Header