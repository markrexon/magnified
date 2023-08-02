import React from 'react'
import banner from "../../assets/magnifyelshaddai_banner.jpg"
import { styled } from 'styled-components'
 
const ImageBanner = styled.div`
  .img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 80vh;
    font-size: 36px;
  }

  .h1 {
    position: absolute;
    top: 15%;
    left: 30%;
    transform: translate(-20%, -50%);
    font-weight: 500;
    color: #000;
  }

  .con {
    position: absolute;
    top: 50%;
    left: 58%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 768px) {
    .h1 {
      position: inherit !important;
      top: inherit !important;
      left: inherit !important;
      transform: inherit !important;
      padding: 20px;
      text-align: left;
      font-size: 23px !important;
      font-weight: bold !important;
      margin-bottom: -10px;
    }

    .con {
      position: inherit !important;
      top: inherit !important;
      left: inherit !important;
      transform: inherit !important;
      padding: 20px;
      text-align: left;
      font-size: 14px !important;
    }
  }
`;

 
function Hero() {
  return (
    
     <div style={{position:"relative"}} >
      <ImageBanner>
      <img className="img" src={banner}/> 
      <div className="h1">An understanding room for the words of Living G_D</div>

      <div className="con">
        <p>
            You search the Scriptures,
            for in them you think you
            have eternal life; and
            these are they which
            testify of Me.
            <span>(John 5:39)</span>
        </p>
        <p>
            For assuredly, I say to you,
            till heaven and earth pass away,
            one jot(YOD) or one tittle will by
            no means pass from the law
            till all is fulfilled.
            <span>(Mathew 5:18)</span>
        </p>
        <p>
            I will worship toward Your holy temple,
            And praise Your name
            For Your lovingkindness and Your truth;
            For You have magnified Your word above all Your name.
            <span>(Psalms 138:2)</span>
        </p>
        
        <span>-	Jesus Christ</span>

    </div>

      </ImageBanner>
     </div>
    
  )
}

export default Hero