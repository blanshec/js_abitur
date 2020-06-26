import React, { Component } from 'react';
import Intselect from '../intselect/Intselect';
import ExamFieldsets from './ExamFieldsets';
import './cabinet.css';
const avatar = require('../../images/302-3022217_roger-berry-avatar-placeholder.png');

const examsInfo = [
  {
    label: 'Русский язык',
    name: 'russianLang',
  },
  {
    label: 'Информатика',
    name: 'compsci',
  },
  {
    label: 'Биология',
    name: 'biology',
  },
  {
    label: 'История',
    name: 'history',
  },
  {
    label: 'Математика',
    name: 'maths',
  },
  {
    label: 'Обществознание',
    name: 'sociology',
  },
  {
    label: 'Химия',
    name: 'chemestry',
  },
  {
    label: 'Литература',
    name: 'litrature',
  },
  {
    label: 'Физика',
    name: 'physics',
  },
  {
    label: 'География',
    name: 'geography',
  },
  {
    label: 'Иностранный язык',
    name: 'englishLang',
  },
];

class Cabinet extends Component {
  render() {
    return (
      <div className='cabinet'>
        <section className='section'>
          <h2 className='section__header'>О пользователе</h2>
          <div className='profile'>
            <img className='avatar' src={avatar}></img>
            <form className='about'>
              <input className='input user-name' placeholder='Андрей'></input>
              <input
                className='input user-fname'
                placeholder='Иванович'
              ></input>
              <input
                className='input user-surname'
                placeholder='Иванов'
              ></input>
              <input
                className='input user-city'
                placeholder='Санкт-Петербург'
              ></input>
              <input
                className='input user-dob'
                placeholder='10 января 1997'
              ></input>
            </form>
          </div>
        </section>

        <section className='section additional'>
          <h2 className='section__header'>Интересы</h2>
          <Intselect></Intselect>
        </section>

        <section className='section'>
          <h2 className='section__header'>Экзамены</h2>
          <form className='exams'>
            <ExamFieldsets
              className='exams__container'
              props={examsInfo}
            ></ExamFieldsets>
          </form>
        </section>
      </div>
    );
  }
}

export default Cabinet;
