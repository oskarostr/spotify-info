import '../styles/imports/sidebar.scss'
import { IoIosPodium } from 'react-icons/io'
import { BiTimer } from "react-icons/bi";

function SideBar(props) {
    return (
        <nav className="sidebar">
            <div className='logo'>
                <h1>Spotify</h1>
            </div>
            <ul className='nav-list'>
                <div className='nav-item' onClick={props.changeToTracks}>
                    <IoIosPodium className='icon'/>
                    <li className='nav-text'>Top tracks</li>
                </div>

                <div className='nav-item' onClick={props.changeToRecently}>
                    <BiTimer className='icon' />
                    <li className='nav-text'>Recently played</li>
                </div>
            </ul>
        </nav>
    )
}

export default SideBar