import React from 'react'
import FirstCarousel from '../../Component/Carousel/Carousel'
import MainGalleria from '../../Component/Galleria/Galleria'
import Grouping from '../../Component/Grouping/Grouping'
import FavItems from '../../FavItems/FavItems'


const Home = () => {
    return (
        <div>
            <MainGalleria />
            <FirstCarousel />
            <Grouping />
            <FavItems />
        </div>
    )
}

export default Home
