import React from 'react'

const NewsHeader = (img, date, title, description, link, linklabel) => {
  return (
    <div>
        <span className=''>
            <img alt='bluon news' src={img}/>
        </span>
        <span className='text'>
            <p className='date'>{date}</p>
            <h2 className='title'>{title}</h2>
            <h6 className='description'>{description}</h6>
            <a className='readmore' href={link}>Read More</a>
        </span>
    </div>
  )
}

export default NewsHeader