import React from 'react'
import { styled } from 'styled-components'
const FooterStyle = styled.div`
	background-color: #1e1c18;
	padding-top: 60px;
	padding-bottom: 60px;
	margin-top: 20px;
`;
const FooterBlock =styled.div`
 	background-color: #282725;
	padding: 40px 40px 10px 40px;
	border-radius: 10px;
  color:#fff;
`;
const FooterCopyRights=styled.div`

	padding-top: 19px;
	padding-bottom: 9px;
	font-size: 12px;
	color: #56575e;
	text-align: left;
	text-transform: uppercase;
	text-align: center;

 .copyright-content {
    padding: 12px;
    color: rgb(253,187,21,0.7);
  }
  
 `
function Footer() {
  return (

<FooterStyle>
    <div className="container">
      <FooterBlock >
        <p>We are the People of G_D of Israel. Our Lord Almighty provides us everything through WORD, for thousands of years ago, he transmitted his Holy Spirit and salvation through the Bible. From the printed books, each new medium democratized knowledge about the G_D and brought more people into the kingdom of G_D. We are the generation charged with the technology to share these invaluable texts from print to digital to explore G_D and to integrate our souls with him for the greater glory of G_D.</p>
        <p>It is an open platform to learn and understand biblical text in a comprehensive manner. We are assembling a free-living library of biblical, Jewish texts and their interconnections. With these digital texts, we can create new interactive interfaces for Web, tablet, and mobile, allowing more people to engage with the textual treasures of the word of G_D.</p>

        <FooterCopyRights>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="copyright-content">
                Designed &amp; Maintained by Bible Workshop Team <strong>©</strong> 2021. All rights reserved.
              </div>
            </div>
          </div>
        </FooterCopyRights>
        </FooterBlock>
      </div>

    
    </FooterStyle>
  )
}

export default Footer