import Header from "./Header"
import TopTracksCard from "./TopTracksCard"

function TopTracks(props) {

    let trackElements
    if(props.topTracks) {
    trackElements = props.topTracks.map(track => {
        let artistsName = track.artists[0].name

        for(let i = 1; i < track.artists.length; i++) {
            //console.log(i + ' ' + track.artists[i].name)
            artistsName += ', ' + track.artists[i].name
        }

        return (
            <TopTracksCard 
                key = {track.id} 
                name = {track.name}
                image = {track.album.images[1].url}
                artist = {artistsName}
            />
        )
    })
    }

    return (
        <div className='top-tracks__content-container'>
            <Header 
                userName = {props.userName}
                text = ', these are your top 20 tracks'
            />
            <div className='top-tracks__elements-container'>
                {trackElements}
            </div>
        </div>
    )
}

export default TopTracks