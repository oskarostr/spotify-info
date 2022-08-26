import React from 'react';
import './styles/main.scss'
import Header from './components/Header';
import Card from './components/TopTracksCard'
import SignIn from './components/SignIn';
import SpotifyWebApi from 'spotify-web-api-js';
import SideBar from './components/SideBar';
import TopTracks from './components/TopTracks';
import RecentlyPlayed from './components/RecentlyPlayed';

function App() {
  const [spotifyToken, setSpotifyToken] = React.useState()
  const [topTracks, setTopTracks] = React.useState()
  const [userData, setUserData] = React.useState()
  const [lastPlayed, setLastPlayed] = React.useState()
  const [page, setPage] = React.useState('tracks')

  const spotify = new SpotifyWebApi()

  const authEndpoint = "https://accounts.spotify.com/authorize"
  const redirectUri = 'http://localhost:3000/callback'
  const clientID = '38c53561ad794547901185e5b90be818'

  const scopes = [
    'user-top-read',
    'user-read-recently-played'
  ]

  const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
      }, {})
  }

  React.useEffect(() => {
    const token = getTokenFromUrl().access_token
    window.location.hash = ''

    if(token) {
      setSpotifyToken(token)

      spotify.setAccessToken(token)

      spotify.getMyTopTracks()
        .then(data => {
          //console.log(data.items[0].album.artists)
          setTopTracks(data.items)
        })
        .catch(err => console.error(err))

      spotify.getMe()
        .then(data => {
          //console.log(data)
          setUserData(data)
        })
        .catch(err => console.error(err))

      spotify.getMyRecentlyPlayedTracks()
        .then(data => {
          console.log(data.items)
          setLastPlayed(data.items)
        })
        .catch(err => console.error(err))
    }
  })

  //console.log(topTracks)

  return (
    <div className='app'>
      { spotifyToken && topTracks && userData && page === 'tracks' ? (
        <div className='main-page'>
          <SideBar 
            changeToRecently = {() => setPage('recently')}
            page = {page}
          />
          <TopTracks
            userName = {userData.display_name}
            topTracks = {topTracks}
          />
        </div>
      ) : spotifyToken && topTracks && userData && page === 'recently' ? (
        <div className='main-page'>
          <SideBar 
            changeToTracks = {() => setPage('tracks')}
            page = {page}
          />
          <RecentlyPlayed
            userName = {userData.display_name}
            recentlyPlayed = {lastPlayed}
          />
        </div>
      ) : (
        <SignIn URL = {loginUrl} />
      )}
    </div>
  )
}

export default App;