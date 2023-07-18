import React from 'react'
import './trainer.css'
import ME from '../../images/me.jpg'
import {DiCodeigniter} from 'react-icons/di'

import {GiMountedKnight} from 'react-icons/gi'
import {BsCodeSquare} from 'react-icons/bs'
import SectionHeader from '../../components/SectionHeader'
import {GiTeacher} from 'react-icons/gi'

const Trainer = () => {
  return (
    <section id='about'>
      <SectionHeader icon={<GiTeacher/>} title="Talk to Trainer" />
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} className='about_me-image' alt="About img " />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <DiCodeigniter className='about_icon'/>
              <h5>I love </h5>
              <small>Travelling ! </small>
            </article>
            <article className='about_card'>
              <BsCodeSquare className='about_icon'/>
              <h5>I love </h5>
              <small>Coding ! </small>
            </article>
            <article className='about_card'>
              <GiMountedKnight className='about_icon'/>
              <h5>I love </h5>
              <small>adventure ! </small>
            </article>
          </div>

          <p>
          All people smile in the same language. Smiles are free but they are worth a lot.
          Success is not an accident. 
          " Never give up !; At first, you didn't succceed , call it version 1.0; ". Develop the best , release the latest success version ;
          </p>
          <a href="/" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default Trainer