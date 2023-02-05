import React from 'react'
import { BsTwitter , BsInstagram} from 'react-icons/bs'
import { FaFacebook} from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <AiFillLinkedin href='https://www.linkedin.com/in/maha-azizi/' />
        <a href='https://www.linkedin.com/in/maha-azizi/'></a>
      </div>
        <div>
            <BsInstagram href='https://www.instagram.com/azizi.maha/'  />
        </div>
        <div>
            <FaFacebook href='https://www.facebook.com/maha.azizi.39'/>
        </div>

    </div>
  )
}

export default SocialMedia