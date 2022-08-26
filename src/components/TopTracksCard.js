import '../styles/imports/top-tracks-card.scss'

function TopTracksCard(props) {

    return (
        <div className="top-tracks__card">
            <img src = {props.image} alt='song cover'/>
            <div className='info-box'>
                <h1>{props.name}</h1>
                <h2>{props.artist}</h2>
            </div>
        </div>
    )
}

export default TopTracksCard