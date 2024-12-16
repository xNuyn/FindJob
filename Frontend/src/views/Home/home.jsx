import React from 'react'
import FindAJob from '../../components/FindAJob/FindAJob';
import Popular from '../../components/Popular/Popular';
import Jobpilot from '../../components/Jobpilot/Jobpilot';
import Category from '../../components/Category/Category';
import Featured from '../../components/Featured/Featured';
import Compaines from '../../components/Compaines/Compaines';
import Testimonial from '../../components/Testimonial/Testimonial';
import Beecome from '../../components/Beecome/Beecome';

export default function Home() {

    return (
        <div >
            <FindAJob />
            <Popular />
            <Jobpilot />
            <Category />
            <Featured />
            <Compaines />
            <Testimonial />
            <Beecome />
        </div>
    )
}