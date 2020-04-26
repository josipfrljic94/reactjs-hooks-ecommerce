import React,{useContext} from 'react'
import {StoreContext} from '../StoreContext'

    

import Header from '../components/Header';
import Title from '../components/Title'
import MyJumbotron from '../components/MyJumbotron';
import MyCarosel from '../components/MyCarosel';
import OurService from '../components/OurService';
import MyFooter from '../components/MyFooter';

export default function Home() {

    const value = useContext(StoreContext);
    const[ state,setstate]=value.value;
    return (
        <div className='home'>
            <Header imeheadera={'home-header'}>
                <MyJumbotron/>
            </Header>
            <Title titleime={'home-naslov'} textnaslov={'OUR PRODUCTS'}/>
           <MyCarosel proizvodi={[state,setstate]}/>
           <Title  titleime={'service-naslov'} textnaslov={'SERVICES'}/>
           <OurService/>
           <MyFooter/>
           
        </div>
    )
}
