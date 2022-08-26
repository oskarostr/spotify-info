import '../styles/imports/recently-played-card.scss'
import { GiBackwardTime } from "react-icons/gi";

function LatestCard(props) {
    return (
        <div className="recently-played__card">
            <img src = {props.image} alt='song cover'/>
            <div className="info-box">
                <h1>{props.name}</h1>
                <h2>{props.artist}</h2>
            </div>
            {/*<div className='time-passed'>
                <GiBackwardTime className='icon'/>
                <p className='time'>{props.time}m</p>
            </div>*/}
        </div>
    )
}

export default LatestCard