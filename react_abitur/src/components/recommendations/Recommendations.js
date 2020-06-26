import React, { Component } from 'react';
import './recommendations.css';

const midgrade = 90;
const unis = [
  {
    id: 'adsdas',
    city: 'Санкт-Петербург',
    name:
      'Санкт-Петербургский государственный университет телекомунникаций имени проф. Бонч-Бруевича',
    link: 'https://www.sut.ru',
    logo: require('../../images/logo_sut.png'),
    grade: '75',
    cost: '58 000',
    programms:
      'Информационные системы и технологии; Регионоведение; Программная инжерия и еще 16 направлений',
  },
  {
    id: 'adsdsad',
    city: 'Санкт-Петербург',
    name: 'Национальный исследовательский университет ИТМО',
    link: 'https://www.itmo.ru',
    logo: require('../../images/logo_itmo.jpg'),
    grade: '90',
    cost: '208 000',
    programms:
      'Фотоника и оптоинформатика; техническая физика и еще 27 направлений',
  },
  {
    id: 'dsadsa',
    city: 'Санкт-Петербург',
    name: 'Санкт-Петербургский политехнический университет Петра Великого',
    link: 'https://www.spbstu.ru',
    logo: require('../../images/logo_politeh.png'),
    grade: '69',
    cost: '74 000',
    programms: 'Менеджмент; экономика и еще 63 направления',
  },
];

function RecItem(props) {
  const universities = props.unis;
  const sortedUnis = universities.sort((a, b) => (a.grade < b.grade ? 1 : -1));
  const renderedItems = sortedUnis.map((university) => (
    <li key={university.id} className='recommendation'>
      <div className='recommendation__uni'>
        <img className='recommendation__logo' src={university.logo}></img>
        <div className='recommendation__info'>
          <p className='rec_text recommendation__city'>
            <span>{university.city}</span>
          </p>
          <h5 className='rec_title cost__info'>
            От {university.cost} рублей в год
          </h5>
          <h4 className='rec_title recommendation__name'>
            <a href={university.link} target='_blank'>
              {university.name}
            </a>
          </h4>
          <p className='rec_text  recommendation__programs'>
            {university.programms}
          </p>
          <div className='recommendation__grade-info'>
            <h5 className='rec_title grade-info__title'>Средний балл</h5>
            <p className='rec_text  grade-info__grade'>{university.grade}</p>
          </div>
          <button className='button recommendation__btn_more'>Подробнее</button>
        </div>
      </div>
      <div className='recommendation__more'>
        <div className='more__container'>
          <div className='more__program'>
            <h4 className='program__heading'>
              12.04.03 Фотоника и оптоинформатика
            </h4>
            <div className='program__info'>
              <div className='program__item'>
                <h5>Количество мест</h5>
                <p>Бюджет 29</p>
                <p>Внебюджет 40</p>
              </div>
              <div className='program__item'>
                <h5>Уровень образования</h5>
                <p>Бакалавриат</p>
              </div>
              <div className='program__item'>
                <h5>Форма обучения</h5>
                <p>Очная</p>
              </div>
              <div className='program__item'>
                <h5>Стоимость обучения</h5>
                <p>105 000 руб.</p>
              </div>
            </div>
          </div>

          <div className='more__program'>
            <h4 className='program__heading'>16.03.01 Техническая физика</h4>
            <div className='program__info'>
              <div className='program__item'>
                <h5>Количество мест</h5>
                <p>Бюджет 75</p>
                <p>Внебюджет 26</p>
              </div>
              <div className='program__item'>
                <h5>Уровень образования</h5>
                <p>Бакалавриат</p>
              </div>
              <div className='program__item'>
                <h5>Форма обучения</h5>
                <p>Очная</p>
              </div>
              <div className='program__item'>
                <h5>Стоимость обучения</h5>
                <p>130 000 руб.</p>
              </div>
            </div>
          </div>

          <div className='more__program'>
            <h4 className='program__heading'>
              27.04.04 Управление в технических системах
            </h4>
            <div className='program__info'>
              <div className='program__item'>
                <h5>Количество мест</h5>
                <p>Бюджет 29</p>
                <p>Внебюджет 40</p>
              </div>
              <div className='program__item'>
                <h5>Уровень образования</h5>
                <p>Магистратура</p>
              </div>
              <div className='program__item'>
                <h5>Форма обучения</h5>
                <p>Очная</p>
              </div>
              <div className='program__item'>
                <h5>Стоимость обучения</h5>
                <p>127 000 руб.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));
  return <ul className='rec__container'> {renderedItems} </ul>;
}

class Recommendations extends Component {
  render() {
    return (
      <div className='recommendations'>
        <h2 className='rec__header-grade'>Ваш средний балл {midgrade}</h2>
        <h3 className='rec__header'>
          На основе ваших интересов подобраны следующие ВУЗы
        </h3>
        <RecItem unis={unis}></RecItem>
      </div>
    );
  }
}

export default Recommendations;
