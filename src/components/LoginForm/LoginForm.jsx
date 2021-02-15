import React from 'react'
import { useDispatch } from 'react-redux'
import { profileActions } from '../../store/profile/actions'

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget

        const profile = {
            name: form['name'].value,
            lastName: form['lastname'].value,
        }

        dispatch(profileActions.setProfile(profile))
    }

    return (
        <form className="form form-login" onSubmit={handleSubmit}>
            <div className="field">
                <input type="text" name="name" autoComplete='off' />
            </div>
            <div className="field">
                <input type="text" name="lastname" autoComplete='off' />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}