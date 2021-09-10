import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="HeaderOption">
            {Icon && <Icon className="HeaderOption__icon" />}
            {avatar && <Avatar className="HeaderOption__icon"
                src={user?.photoUrl} />}
            <h3 className="HeaderOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
