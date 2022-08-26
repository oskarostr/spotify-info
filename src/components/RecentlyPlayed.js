import Header from "./Header"
import LatestCard from "./RecentlyPlayedCard"

function RecentlyPlayed(props) {

    let recentlyPlayedElements
    if(props.recentlyPlayed) {
    recentlyPlayedElements = props.recentlyPlayed.map(last => {
        //creating new string with artist names
        let artistsName = last.track.artists[0].name
        for(let i = 1; i < last.track.artists.length; i++) {
            //console.log(i + ' ' + last.artists[i].name)
            artistsName += ', ' + last.track.artists[i].name
        }

        //counting time from last played
        const date = new Date()

        return (
            <LatestCard 
                key = {last.track.id} 
                name = {last.track.name}
                image = {last.track.album.images[1].url}
                artist = {artistsName}
                //time = {minutes}
            />
        )
    })
    }

    return (
        <div className='recently-played__content-container'>
            <Header 
                userName = {props.userName}
                text = ', these are your recently played songs'
            />
            <div className="recently-played__elements-container">
                {recentlyPlayedElements}
            </div>
        </div>
    )
}

export default RecentlyPlayed