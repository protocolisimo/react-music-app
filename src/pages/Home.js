import React, {Fragment} from 'react';
import {Songs} from '../Components/Songs/Songs';

export const Home = () => {

    const SONGS = new Array(3).fill('').map(( _, i) => ({ id: i, name: `song #${ i + 1 }`}))
    return (
        <Fragment>
            <h1>
                Home title
            </h1>
            <Songs songsList={SONGS}/>
        </Fragment>
    )
}