import * as jwt from 'jsonwebtoken' 
import React from 'react'
//get private key (.p8)

const GetReviews = () => {
    const id = '1357521880'; 
    get `https://api.appstoreconnect.apple.com/v1/apps/${id}/customerReviews`

   

  return (
    <div>GetReviews</div>
  )
}

export default GetReviews