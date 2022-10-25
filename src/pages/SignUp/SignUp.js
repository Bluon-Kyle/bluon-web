import React from 'react'
import ButtonNav from '../../components/common/ButtonNav/ButtonNav'
import Distrubutors from '../Distrubutors/Distrubutors'
import arrow from '../../assets/icons/arrow.svg'
const SignUp = () => {

  const button = () => {
     return <ButtonNav to='/RequestSignUp' color='primary'>
              <div className="button-arrow">
                Sign up for BluonLive <img alt="arrow" src={arrow} />
              </div>
            </ButtonNav>}  

  return (
    <div className='sign-up-page'>
        <Distrubutors signup={true} buttonNav={button} />
    </div>
  )
}

export default SignUp