import React from 'react'

const WorksItems = ({item, link}) => {
  return (
   <div className="work__card" key={item.id}>
   <a href={item.link} target="_blank" rel='noreferrer'>
    <img src={item.image} alt="" className="work__img" />
   </a>
   <h3 className="work__title">{item.title}</h3>
   <a href={item.link} target="_blank" rel='noreferrer' className="work__button">
    click me <i className="bx bx-right-arrow-alt work__button-icon"></i>
   </a>
   </div>
  )
}

export default WorksItems
