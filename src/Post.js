import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'

const Post = React.forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="Post">
            <div className="Post__header">
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className="Post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="Post__body">
                <p>{message}</p>
            </div>
            <div className="Post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlined} title="Share" color="gray" />
                <InputOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
