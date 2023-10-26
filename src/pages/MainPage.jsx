import React from 'react'
import AnimatedNumber from 'animated-number-react'
import ScrollTrigger from 'react-scroll-trigger';
import Image from '../images/main_picture_1.png'
import Map from '../images/map.png'

import Exploding from '../images/exploding.png';
import House from '../images/home.png';
import Humans from '../images/group.png';
import Earthquake from '../images/earthquake.png';
import Skull from '../images/human-skull.png';


import { points } from '../map';

import { useState } from 'react';


const MainPage = () => {

    const [numAnim, setNumAnim] = useState(false)


    function getPoint(index) {
        let position = points[index]
        // [position[top], position[left]]
        return <div className='map_point' 
                    style={{top: position.top + 30, left: position.left + 30}}
                >
                    <div className='info_block'>
                        <h1>{position.name}</h1>
                        <ul>
                            <li><img src={Exploding} width='25px' height='25px' alt="" /><label>{position.destroy}</label></li>
                            <li><img src={House} width='25px' height='25px' alt="" /><label>{position.houses}</label></li>
                            <li><img src={Humans} width='25px' height='25px' alt="" /><label>{position.humans}</label></li>
                            <li><img src={Earthquake} width='25px' height='25px' alt="" /><label>{position.housesDestroy}</label></li>
                            <li><img src={Skull} width='25px' height='25px' alt="" /><label>{position.humansDied}</label></li>
                        </ul>
                    </div>
                </div>
    }

    return (
    <main>
        <div className='container'>
            <section className='main_section'>
                    <img className='main_image' src={Image} alt="Главная картинка" />
                    <div className='main_info_wrapper'>
                        <div className='main_info_text_wrapper'>
                            <h1>
                            В память<br></br>
                            о погибших в годы<br></br>
                            Великой Отечественной войны
                            </h1>
                            <p>
                            27 июня, на пятый день войны, Глусский район был<br></br> оккупирован немецко-фашистскими захватчиками<br></br> и оказался в тылу группы армий «Центр». В июле<br></br> 1941 года в районе Глуска вели тяжелые бои части<br></br> 24-й Самара-Ульяновской Железной дивизии...
                            </p>
                        </div>
                        <div className='main_info_buttons_wrapper'>
                            <button className='main_btn_1'>
                                <a href='/memory' style={{textDecoration: 'none', color: '#fff'}}>ЧИТАТЬ</a>
                            </button>
                            <button className='main_btn_2'>
                                <a href="/teachers" style={{textDecoration: 'none', color: '#8c7c2b'}}>ЧИТАТЬ ДРУГОЕ</a>
                            </button>
                        </div>
                    </div>
            </section>
        </div>
        <section className='green_block'>
                <div className='number_wrapper'>
                    <p className='number'>{numAnim ? <AnimatedNumber value={3126} formatValue={value=>value.toFixed(0)} duration={3000}/> : 0}</p>
                    <p className='near-number'>МИРНЫХ<br></br><span style={{fontFamily: 'Myriad Pro Semibold'}}>ГРАЖДАН</span></p>
                </div>
                <div className='number_wrapper'>
                    <p className='number'>{numAnim ? <AnimatedNumber value={1482} delay={500} formatValue={value=>value.toFixed(0)} duration={3000}/> : 0}</p>
                    <p className='near-number'>БЫЛИ<br></br><span style={{fontFamily: 'Myriad Pro Semibold'}}>УГНАНЫ</span></p>
                </div>
                <div className='number_wrapper'>
                    <p className='number'>{numAnim ? <AnimatedNumber value={1482} delay={1000} formatValue={value=>value.toFixed(0)} duration={3000}/> : 0}</p>
                    <p className='near-number'>БЫЛИ<br></br><span style={{fontFamily: 'Myriad Pro Semibold'}}>РАССТРЕЛЯНЫ</span></p>
                </div>
                
        </section>
        <div className='container'>
            <ScrollTrigger onEnter={() => setNumAnim(true)}/>
            <section className='map_section'>
                <div className='map_wrapper'>
                    <img className='map_img' src={Map} alt="Карта"/>
                    {Object.keys(points).map((index) => getPoint(index))}
                </div>
            </section>
        </div>
    </main>
  )
}

export default MainPage