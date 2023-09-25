import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this amazing Videos:</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src= 'images/yt3.png'
                    text = 'Day Trip to From Cork to Kerry County'
                    label = 'Travelling to Kerry'
                    path = '/vlog-1' />
                    <CardItem
                    src= 'images/yt4.png'
                    text = 'Cork City Walk'
                    label = 'City Walk'
                    path = '/vlog-2' />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src= 'images/yt1.JPG'
                    text = 'Morining Walk to Ballincolling Regional Park'
                    label = 'Morning Walk'
                    path = '/vlog-3' />
                    <CardItem
                    src= 'images/yt2.png'
                    text = 'A day in my life as Uni Student'
                    label = 'Day in my Life'
                    path = '/vlog-4' />
                    <CardItem
                    src= 'images/img-home.jpg'
                    text = 'India to Ireland my first internation trip'
                    label = 'Travelling'
                    path = '/svlog-5' />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
