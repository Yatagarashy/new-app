import React from 'react'

import Photo1 from '../images/teachers/1.Юневич Михаил Дмитриевич.jpg'
import Photo2 from '../images/teachers/2. Захаренко Иван Иванович.jpg'
import Photo3 from '../images/teachers/3.Тарасевич Виктор Константинович.jpg'
import Photo4 from '../images/teachers/4.Архипцова Любовь Михайловна.jpg'
import Photo5 from '../images/teachers/5. Лукашевич Римма Александровна.jpg'
import Photo6 from '../images/teachers/6. Раковец Павел Семенович.jpg'
import Photo7 from '../images/teachers/7.Киселевич Григорий Максимович.jpg'
import Photo8 from '../images/teachers/8. Выгонская Роза Израилевна.jpg'
import Photo9 from '../images/teachers/9. Юркевич Захар Семенович.jpg'
import Photo10 from '../images/teachers/10.Болотин Ефим Евсеевич.jpg'
import Photo11 from '../images/teachers/11. Володько Любовь Васильевна.jpg'
import Photo12 from '../images/teachers/12. Шумовская Антонина Семёновна.jpg'
import Photo13 from '../images/teachers/13. Голомако Григорий Иванович.jpg'
import Photo14 from '../images/teachers/14. Гельфер Борис Вениаминович.jpg'
import Photo15 from '../images/teachers/15. Ильич Фома Максимович.jpg'
import Photo16 from '../images/teachers/16.Янковский Иван Павлович.jpg'
import Photo17 from '../images/teachers/17. Баглай Иван Фёдорович.jpg'
import Photo18 from '../images/teachers/18. Веремейчик Михаил Иванович.jpg'
import Photo19 from '../images/teachers/19. Бушков Илья Залмонович.jpg'
import Photo20 from '../images/teachers/20. Зайцев Степан Гргорьевич.jpg'
import Photo21 from '../images/teachers/21. Буевская Мария Моисеевна.jpg'
import Photo22 from '../images/teachers/22. Булгаков Иван Петрович.jpg'
import Photo23 from '../images/teachers/23.Гулевич Николай Владимирович.jpg'
import Photo24 from '../images/teachers/24. Шумовский Станислав Францевич.jpg'
import Photo25 from '../images/teachers/25. Захаренко Евгения Александровна.jpg'
import Photo26 from '../images/teachers/26. Кондрусевич Екатерина Борисовна.jpg'
import Photo27 from '../images/teachers/27. Рабинович Борис Фалкович.jpg'
import Photo28 from '../images/teachers/28. Чёрный Геннадий Ефимович.jpg'
import Photo29 from '../images/teachers/29. Терехович Пётр Юльевич.jpg'



const TeachersFrontsPage = () => {
  return (
    <div className='teachers_page'>
        <div className='container'>
            <section>
                <h1 style={{textAlign: 'center', fontSize: '40px'}} className='bold'>Учителя Фронтовики</h1>
                <div className='teacher_block'>
                    <img src={Photo1} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Юневич Михаил Дмитриевич</h1>
                        <p>директор школы 1944 -1949 гг.</p>
                        <p>Участник Великой  Отечественной войны Партизан, бригада Гуляеева</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Захаренко Иван Иванович</h1>
                        <p>директор школы 1949 -1966 гг.</p>
                        <p>Участник Великой  Отечественной войны Лейтенант, Крымский фронт, I Белорусский фронт</p>
                    </div>
                    <img src={Photo2} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo3} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Тарасевич Виктор Константинович</h1>
                        <p>директор школы 1968 – 1975 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, Западный фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Архипцова Любовь Михайловна</h1>
                        <p>воспитатель ГПД  1961 гг.</p>
                        <p>Праведница народов мира </p>
                    </div>
                    <img src={Photo4} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo5} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Лукашевич Римма Александровна</h1>
                        <p>завуч  1954-1956 гг.</p>
                        <p>Участница Великой  Отечественной войны Партизанка Узденский район</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Раковец Павел Семёнович</h1>
                        <p>завуч  1961-1963 гг.</p>
                        <p>Участник Великой  Отечественной войны Старшина, Ленинградский фронт, Калининский фронт</p>
                    </div>
                    <img src={Photo6} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo7} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Киселевич Григорий Максимович</h1>
                        <p>организатор внеклассной работы  1976-1985 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, II Белорусский фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Выгонская (Брум) Роза Израилевна</h1>
                        <p>учитель немецкого языка 1950-1974 гг.</p>
                        <p>Участница Великой  Отечественной войны Переводчица, Полесское партизанское соединение  1942-1944 гг.</p>
                    </div>
                    <img src={Photo8} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo9} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Юркевич Захар Семёнович</h1>
                        <p>учитель истории и географии 1945-1956 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, Западный фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Болотин Ефим Евсеевич</h1>
                        <p>учитель истории с 1959</p>
                        <p>Участник Великой  Отечественной войны Начальник штаба отряда им. Щорса бригады №37.им Пархоменко</p>
                    </div>
                    <img src={Photo10} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo11} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Володько (Царик) Любовь Васильевна</h1>
                        <p>учитель начальных классов  1957- г</p>
                        <p>Участница Великой  Отечественной войны Партизанка, бригада Гуляеева</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Шумовская Антонина Семёновна</h1>
                        <p>учитель белорусского языка и литературы 1945 -1972 гг.</p>
                        <p>Участница Великой  Отечественной войны партизанка, отряд Цыкункова (Буденного)</p>
                    </div>
                    <img src={Photo12} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo13} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Голомако Григорий Иванович</h1>
                        <p>учитель математики 1960-1974 гг.</p>
                        <p>Участник Великой  Отечественной войны Капитан, Северо-Западный фронт, II Украинский фронт, Украинский фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Гельфер Борис Вениаминович</h1>
                        <p>учитель физики 1950-1968 гг.</p>
                        <p>Участник Великой  Отечественной войны Гвардии старший лейтенант, Западный фронт</p>
                    </div>
                    <img src={Photo14} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo15} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Ильич Фома Максимович</h1>
                        <p>учитель биологии 1945 -1964 гг.</p>
                        <p>Участник Великой  Отечественной войны Партизан, связной отряда Шваякова Рядовой, III Белорусский фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Янковский Иван Павлович</h1>
                        <p>учитель математики с 1961-1970 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, Западный фронт</p>
                    </div>
                    <img src={Photo16} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo17} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Баглай Иван Федорович</h1>
                        <p>учитель математики 1956-1960 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, I Белорусский фронт</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Веремейчик Михаил Иванович</h1>
                        <p>учитель начальной военной подготовки с 1954 гг.</p>
                        <p>Участник Великой  Отечественной войны капитан технической службы, 309 истребительная авиационная дивизия</p>
                    </div>
                    <img src={Photo18} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo19} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Бушков Илья Залмонович</h1>
                        <p>учитель физики 1961-1971 гг.</p>
                        <p>Участник Великой  Отечественной войны «Дитя войны», партизанский отряд Долидовича Любаньский район</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Зайцев Степан Григорьевич</h1>
                        <p>учитель физики с 1964 гг.</p>
                        <p>Участник Великой  Отечественной войны лейтенант, Краснознаменный Балтийский флот</p>
                    </div>
                    <img src={Photo20} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo21} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Буевская Мария Моисеевна</h1>
                        <p>учитель математики с 1952 г.</p>
                        <p>Участница Великой  Отечественной войны, «Дитя войны», партизанская бригада №258 им. Куйбышева</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Булгаков Иван Петрович</h1>
                        <p>учитель рисования и черчения 1963-1968 гг.</p>
                        <p>Участник Великой  Отечественной войны Рядовой, Западный фронт</p>
                    </div>
                    <img src={Photo22} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo23} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Гулевич Николай Владимирович</h1>
                        <p>учитель трудового обучения с 1958 гг.</p>
                        <p>Участник Великой  Отечественной войны Партизан, отряд им. Щорса бригады №37 им. Пархоменко</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Шумовский Станислав Францевич</h1>
                        <p>учитель русского языка и литературы  1963-1966 гг.</p>
                        <p>Участник Великой  Отечественной войны Редактор подпольной районной газеты «Сацыялістычная вёска»</p>
                    </div>
                    <img src={Photo24} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo25} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Захаренко Евгения Александровна</h1>
                        <p>учитель белорусского языка и литературы 1949-1966 гг.</p>
                        <p>Участница Великой  Отечественной войны Связная отряда им. Щорса бригады №37 им. Пархоменко</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Кондрусевич Екатерина Борисовна </h1>
                        <p>Учитель русского языка и литературы</p>
                        <p>«Дитя войны», партизанский отряд Цыкункова (Будённого)</p>
                    </div>
                    <img src={Photo26} width={300} height={400} alt=""/>
                </div>
                <div className='teacher_block'>
                    <img src={Photo27} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Рабинович Борис Фалкович</h1>
                        <p>Завуч 1951 - 1954</p>
                        <p>Старшина, Краснознамённый Балтийский флот</p>
                    </div>
                </div>
                <div className='teacher_block'>
                    <div className='teacher_info left'>
                        <h1>Терехович Петр Юльевич </h1>
                        <p>учитель химии 1944-1969 гг.</p>
                        <p>Участник Великой  Отечественной войны/партизан</p>
                    </div>
                    <img src={Photo28} width={300} height={400} alt=""/>
                </div> 
                <div className='teacher_block'>
                    <img src={Photo29} width={300} height={400} alt=""/>
                    <div className='teacher_info right'>
                        <h1>Красякова Елена Ивановна</h1>
                        <p>учитель химии 1944-1969 гг.</p>
                        <p>Участница Великой  Отечественной войны Партизанка</p>
                    </div>
                </div>
            </section>
           
        </div>
    </div>
  )
}

export default TeachersFrontsPage