import React from 'react';
import './Model.css';

import image1 from '../../assets/load-profile-images/2d.png';
import image2 from '../../assets/load-profile-images/3d.png';
import image3 from '../../assets/load-profile-images/3d-back.png'


function Model() {
  return (
    <div className='model'>
        <div className='model__container'>

            <h1>2D and 3D Model</h1>
            <div className='twod__image'>
                <img src={image1} alt="2d"/>
            </div>

            <div className='twod__image'>
                <img src={image2} alt="3d"/>
            </div>

            <div className='twod__image'>
                <img src={image3} alt="3d-back"/>
            </div>
        </div>
  </div>
  ) 
}

export default Model;
