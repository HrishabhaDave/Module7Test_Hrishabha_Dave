import React from 'react'
import './footer.css'
import Insta from '../Assets/Insta.svg'
import Twitter from '../Assets/Twitter.svg'
import FB from '../Assets/fb.svg'

function Footer() {

    const [userEmail, setUserEmail] = React.useState('')
  
  const handleSubmitEmail=()=>{
    if(userEmail === '')
    {
      alert('Please enter your Email')
      return;
    }
    fetch('https://hrishabha-moduletest7-default-rtdb.asia-southeast1.firebasedatabase.app//moduleTest7.json',
    {method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userEmail: userEmail,
    })}
    )
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      setUserEmail('')
      alert('Email submitted successfully')
    })
  }
  return (
    <div>
        <div className='footer-header'>
            <div className='footer-name'>
                AccioJob
            </div>
            <div className='footer-icons'>
                <img src={FB}/>
                <img src={Insta}/>
                <img src={Twitter}/>
            </div> 
        </div>
        <div className='footer-header'>
            <div>
                <div className='footer-sub-header'>
                    Company Info
                </div>
                <div className='footer-suf-header'>
                    About Us <br/> <br/>
                    Carrier <br/><br/>
                    We are hiring <br/><br/>
                    Blog 
                </div>
            </div>
            <div>
                <div className='footer-sub-header'>
                    Legal
                </div>
                <div className='footer-suf-header'>
                    About Us <br/><br/>
                    Carrier <br/><br/>
                    We are hiring <br/><br/>
                    Blog 
                </div>
            </div>
            <div>
                <div className='footer-sub-header'>
                    Features
                </div>
                <div className='footer-suf-header'>
                    Business Marketing <br/><br/>
                    User Analytic <br/><br/>
                    Live Chat <br/><br/>
                    Unlimited Support
                </div>
            </div>
            <div>
                <div className='footer-sub-header'>
                    Resources
                </div>
                <div className='footer-suf-header'>
                    IOS & Android <br/><br/>
                    Watch a Demo <br/><br/>
                    Customer <br/><br/>
                    API 
                </div>
            </div>
            <div>
                <div className='footer-sub-header'>
                    Get In Touch <br/>
                </div>
                <div className='footer-text'>    
                    <input 
                    value={userEmail}
                    onChange={(e)=>setUserEmail(e.target.value)}
                    type='text' placeholder='Your Email'/>
                    <button onClick={handleSubmitEmail}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div className='subfooter'>
            Made with 💗 at AccioJob
        </div>
    </div>
  )
}

export default Footer