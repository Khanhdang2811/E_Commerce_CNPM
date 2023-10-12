import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../../Data/mens_kurta';
const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectinoname={"Men'S Kurta"}/>
            <HomeSectionCarosel data={mens_kurta} sectinoname={"Men'S Shoes"}/>
            <HomeSectionCarosel data={mens_kurta} sectinoname={"Men'S Shirt"}/>
            <HomeSectionCarosel data={mens_kurta} sectinoname={"Women's Saree"}/>
            <HomeSectionCarosel data={mens_kurta} sectinoname={"Women's Dress"}/>

        </div>
    </div>
  )
}

export default HomePage