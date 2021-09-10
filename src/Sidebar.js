import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="Sidebar__recentItem">
            <span className="Sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="Sidebar">
            <div className="Sidebar__top">
                <img src="https://wallpapercave.com/wp/wp2473080.jpg" alt="" />
                <Avatar className="Sidebar__avatar" src={user.photoUrl}>
                    {user.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="Sidebar__stats">
                <div className="Sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="Sidebar__statNumber">1,211</p>
                </div>
                <div className="Sidebar__stat">
                    <p>Views on post</p>
                    <p className="Sidebar__statNumber">1,203</p>
                </div>
            </div>
            <div className="Sidebar__bottom">
                <p>recent</p>
                {recentItem('Detective')}
                {recentItem('Sergent')}
                {recentItem('Lautenant')}
                {recentItem('Captain')}
                {recentItem('Commisionner')}
            </div>
        </div>
    )
}

export default Sidebar
