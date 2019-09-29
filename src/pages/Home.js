import React from 'react'
import Hero from "../Components/Hero"
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'
import {StyledHero} from '../StyledHero'


function Home() {

    return (
        <>
        <Hero >
            <Banner title="luxurious rooms" 
                    subtitle= 'deluxe rooms starting at ₿299'
                    >
            <Link to='/rooms' className="btn-primary" >
                our rooms
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        <StyledHero>
            test
        </StyledHero>
        </>
    )
}

export default Home