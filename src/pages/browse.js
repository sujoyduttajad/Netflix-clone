import React from 'react'
import { useContent } from '../hooks'

const Browse = () => {

    // we need the series and the films 
    const { series } = useContent('series');
    console.log(series);
    // we need slides
    // pass it to he browse container
    
    return (
        <div>
            <h1>Hello from the Browse page</h1>
        </div>
    )
}

export default Browse
