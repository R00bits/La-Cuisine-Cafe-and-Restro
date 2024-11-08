import React from 'react'
import Herosecton from '../components/herosection'
import Spealities from '../components/spealities'
import About from '../components/About';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import  Fotter from '../components/Footer';
import Location from '../components/Location';
import Navbar from '../components/Navbar';
import TopHeader from '../components/TopHeader';
function Home() {
  return (
    <div className='hompage'> 
      <div>
        <TopHeader/>
        <Navbar/>
        <Herosecton/>
      </div>
      <div className=' specialities-section'>
        <Spealities/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Feature/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <section id='location'>
        <div>
          <Location title={"Opening Hour"}/>
        </div>
      </section>
      <div>
        <Fotter/>
      </div>
    </div>
  )
}

export default Home