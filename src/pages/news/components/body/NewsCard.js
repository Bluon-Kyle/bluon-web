import React from 'react'

const NewsCard = (imgsrc, imgalt, date, label, link, linklabel) => {
  return (
    <div>
        <div>
            <img alt={imgalt} src={imgsrc}/>
        </div>
        <div>
            <p>{date}</p>
            <h2>{label}</h2>
            <a href={link}>{linklabel}</a>
        </div>
    </div>
  )
}

export default NewsCard