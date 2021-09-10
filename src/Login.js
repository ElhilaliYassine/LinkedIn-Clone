import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL
                    })
                )
            })
            .catch(err => alert(err))
    }

    const register = () => {
        if (!name) return alert('Please enter a full name')
        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic
                            }))
                    })
            })
            .catch(err => alert(err))
    }

    return (
        <div className="Login">
            <img src="https://logos-marques.com/wp-content/uploads/2021/03/Linkedin-logo.png" alt="" />
            <form>
                <input placeholder="Full name (required if registring)" type="text" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Profile pic URL (optional)" type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?{' '}
                <span className="Login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
