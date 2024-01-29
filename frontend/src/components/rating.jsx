import React from 'react'

const Rating = ({value, text}) => {
  return (
    <>
        <span style={{color:'gold'}}>
        <i className={ value>=1   ?"fa-solid fa-star" : value>=.5 ? "fa-regular fa-star-half-stroke" : "fa-solid fa-star"}></i>
        </span>
        <span style={{color:'gold'}}>
        <i className={ value>=2   ?"fa-solid fa-star" : value>=1.5 ? "fa-regular fa-star-half-stroke" : "fa-solid fa-star"}></i>
        </span>
        <span style={{color:'gold'}}>
        <i className={ value>=3  ?"fa-solid fa-star" : value>=2.5 ? "fa-regular fa-star-half-stroke" : "fa-solid fa-star"}></i>
        </span>
        <span style={{color:'gold'}}>
        <i className={ value>=4   ?"fa-solid fa-star" : value>=3.5 ? "fa-regular fa-star-half-stroke" : "fa-solid fa-star"}></i>
        </span>
        <span style={{color:'gold'}}>
        <i className={ value>=5  ?"fa-solid fa-star" : value>=4.5 ? "fa-regular fa-star-half-stroke" : "fa-solid fa-star"}></i>
        </span>
         &nbsp; <span>{text && text}</span>
    </>
  )
}

export default Rating