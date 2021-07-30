import React from 'react'
import { LoginButton } from './Home.styles'

const Home = ({onButtonClick}) => {
    return (
        <div>
            <LoginButton
                onClick={onButtonClick}
            >
                Login
            </LoginButton>
        </div>
    )
}

export default Home
