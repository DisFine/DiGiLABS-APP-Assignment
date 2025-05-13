'use client';
import './globals.css';
import { Button } from "@/components/ui/button";
import useFcmToken from "@/hooks/useFcmToken";

export default function Home() {
  const { token, notificationPermissionStatus } = useFcmToken();

  const handleTestNotification = async () => {
    const response = await fetch("/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        title: "Test Notification",
        message: "This is a test notification!",
        link: "/",
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='App'>
      <div className="Hero">
        <div className="Page-Header">
          <div className="CompanyLogo"><img src="/lookscout.png" alt="LookScout" className='logo-img' /></div>
          <div className="Header-Container">
            <div className="left-side-container-part">
              <div className="btn-list">
                <div>Home</div>
                <div>Our Products</div>
                <div className="dropdown">
                  <div className="dropbtn">Resources ▼</div>
                  <div className="dropdown-content">
                    <a href="#">HELLO WORLD</a>
                    <a href="#">HELLO WORLD</a>
                    <a href="#">HELLO WORLD</a>
                  </div>
                </div>
                <div>Contacts</div>
              </div>
            </div>
            <div className="right-side-container-part">
              <div className="Login-btn">Login</div>
              <div className="SignUp-btn">SignUp</div>
            </div>
          </div>
          <div className="Menu-Icon">
            <img src="/navbar.png" alt="Menu" />
          </div>
        </div>
        <div className="Card">
          <div className="Base">
            <div className="Base-container1">
              <div className="Base-container2">
                <div className="Base-container3">
                  <h1 className='Base-h1'>Your Supercharged Design Workflow.</h1>
                  <p className='Base-p'>We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</p>
                  <Button
                    disabled={!token}
                    className="Send-Notification"
                    onClick={handleTestNotification}
                  >
                    Send Notification
                  </Button>
                </div>
                <div className="Base-container4">
                  <h3>Who support us.</h3>
                  <div className="Company-Logo-List">
                    <img src="/gitlab.png" alt="gitlab" className='smallLogo' />
                    <img src="/slack.png" alt="slack" className='smallLogo' />
                    <img src="/netflix.png" alt="netflix" className='smallLogo' />
                    <img src="/paypal.png" alt="paypal" className='smallLogo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="graphic">
            <img src="/Card.png" alt="card" className='Graphic-Image' />
          </div>
        </div>
      </div>
      <div className="Features">
        <div className="Block-Header">
          <h2 className='Features-h2'>Messaging for All</h2>
          <p className='Features-p'>User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div className="content-grid">
          <div className="content">
            <div className="icon"><img src="/icon1.png" alt="icon1" className='icon-img' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Easier Work Organization</h2>
              <p className='content-p'>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
          <div className="content">
            <div className="icon"><img src="/icon2.png" alt="icon2" className='icon-img' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Fast Connection</h2>
              <p className='content-p'>Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
          <div className="content">
            <div className="icon"><img src="/icon3.png" alt="icon3" className='icon-img adjust' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Streamlined Processes</h2>
              <p className='content-p'>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
          <div className="content">
            <div className="icon"><img src="/icon4.png" alt="icon4" className='icon-img' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Easier Integrations</h2>
              <p className='content-p'>Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
          <div className="content">
            <div className="icon"><img src="/icon5.png" alt="icon5" className='icon-img' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Marketing Analytics</h2>
              <p className='content-p'>Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
          <div className="content">
            <div className="icon"><img src="/icon6.png" alt="icon6" className='icon-img' /></div>
            <div className="textcontainer">
              <h2 className='content-h2'>Easier Work Organization</h2>
              <p className='content-p'>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
            </div>
            <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
          </div>
        </div>
      </div>
      <div className="LeftRight">
        <div className="LeftRight-Header">
          <h2 className='LeftRight-h2'>Redefining Product Features</h2>
          <p className='LeftRight-p'>Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>
        </div>
        <div className="LeftRight-container">
          <div className="LeftRight-LeftSide">
            <div className="LeftRight-LeftSide-Check">
              <div className="LeftRight-LeftSide-container">
                <div className="icon">
                  <img src="/icon7.png" alt="icon7" className='icon-img adjust' />
                </div>
                <div className="LeftRight-LeftSide-textcontainer">
                  <h2 className='LeftRight-LeftSide-h2'>Explore ideas together</h2>
                  <p className='LeftRight-LeftSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
              <div className="LeftRight-LeftSide-container">
                <div className="icon">
                  <img src="/icon8.png" alt="icon8" className='icon-img' />
                </div>
                <div className="LeftRight-LeftSide-textcontainer">
                  <h2 className='LeftRight-LeftSide-h2'>Bring those ideas to life</h2>
                  <p className='LeftRight-LeftSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
              <div className="LeftRight-LeftSide-container">
                <div className="icon">
                  <img src="/icon9.png" alt="icon9" className='icon-img' />
                </div>
                <div className="LeftRight-LeftSide-textcontainer">
                  <h2 className='LeftRight-LeftSide-h2'>Ship better outcomes</h2>
                  <p className='LeftRight-LeftSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="LeftRight-RightSide">
            <img src="/image1.png" alt="image1" className='RightSide-img' />
          </div>
        </div>
      </div>
      <div className="RightLeft">
        <div className="RightLeft-container">
          <div className="RightLeft-LeftSide">
            <img src="/image2.png" alt="image2" className='LeftSide-img' />
          </div>
          <div className="RightLeft-RightSide">
            <div className="RightLeft-RightSide-Check">
              <div className="RightLeft-RightSide-container">
                <div className="icon">
                  <img src="/icon7.png" alt="icon7" className='icon-img adjust' />
                </div>
                <div className="RightLeft-RightSide-textcontainer">
                  <h2 className='RightLeft-RightSide-h2'>Explore ideas together</h2>
                  <p className='RightLeft-RightSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
              <div className="RightLeft-RightSide-container">
                <div className="icon">
                  <img src="/icon8.png" alt="icon8" className='icon-img' />
                </div>
                <div className="RightLeft-RightSide-textcontainer">
                  <h2 className='RightLeft-RightSide-h2'>Bring those ideas to life</h2>
                  <p className='RightLeft-RightSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
              <div className="RightLeft-RightSide-container">
                <div className="icon">
                  <img src="/icon9.png" alt="icon9" className='icon-img' />
                </div>
                <div className="RightLeft-RightSide-textcontainer">
                  <h2 className='RightLeft-RightSide-h2'>Ship better outcomes</h2>
                  <p className='RightLeft-RightSide-p'>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                  <div className="More-btn">Learn More <img src="/arrow.png" alt="arrow" className='arrow-img' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonial">
        <div className="Testimonial-container">
          <div className="CompanyLogo"><img src="/lookscout-black.png" alt="LookScout-black" className='logo-black-img' /></div>
          <p className='Testimonial-container-p'>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!</p>
          <div className="CompanyLogo"><img src="/avatar.png" alt="avatar" className='logo-img' /></div>
        </div>
      </div>
      <div className="Blog">
        <div className="Blog-text-container">
          <h2 className='Blog-h2'>Latest Blog Posts</h2>
          <p className='Blog-p'>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>
        </div>
        <div className="Blog-Container">
          <div className="Blog-Inside-Container">
            <img src="/blog1.png" alt="blog1" className='blog-img' />
            <div className="Blog-Inside-text-Container">
              <h3 className='Blog-text-h3'>Organize your digital assets with a new methodology here.</h3>
              <p className='Blog-text-p'>Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.</p>
              <div className="Blog-Poster">
                <img src="/BlogPoster1.png" alt="BlogPoster1" className='BlogPoster-img' />
                <p>25 Apr</p>
              </div>
            </div>
          </div>
          <div className="Blog-Inside-Container">
            <img src="/blog2.png" alt="blog1" className='blog-img' />
            <div className="Blog-Inside-text-Container">
              <h3 className='Blog-text-h3'>Organize your digital assets with a new methodology here.</h3>
              <p className='Blog-text-p'>Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.</p>
              <div className="Blog-Poster">
                <img src="/BlogPoster2.png" alt="BlogPoster1" className='BlogPoster-img' />
                <p>25 Apr</p>
              </div>
            </div>
          </div>
          <div className="Blog-Inside-Container">
            <img src="/blog3.png" alt="blog1" className='blog-img' />
            <div className="Blog-Inside-text-Container">
              <h3 className='Blog-text-h3'>Organize your digital assets with a new methodology here.</h3>
              <p className='Blog-text-p'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .</p>
              <div className="Blog-Poster">
                <img src="/BlogPoster3.png" alt="BlogPoster1" className='BlogPoster-img' />
                <p>25 Apr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Logo-Section">
        <div className="Logo-Section-text-container">
          <h2 className='Logo-Section-h2'>Proud to Be Used By</h2>
          <p className='Logo-Section-p'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
        </div>
        <div className="Logo-Company">
          <img src="/company1.png" alt="company1" className='company-logo-img' />
          <img src="/company2.png" alt="company2" className='company-logo-img' />
          <img src="/company3.png" alt="company3" className='company-logo-img' />
          <img src="/company4.png" alt="company4" className='company-logo-img' />
          <img src="/company5.png" alt="company5" className='company-logo-img' />
          <img src="/company6.png" alt="company6" className='company-logo-img' />
        </div>
      </div>
      <div className="Call-To-Action">
        <div className="CTA-Text-Container">
          <h2 className='CTA-h2'>1% OF THE INDUSTRY</h2>
          <p className='CTA-p'>Welcome to your new digital reality that will rock your world truly at all throughout.</p>
        </div>
        <div className="CTA-Card">
          <form className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <div className="Assurance-list">
            <div className="Assurance">
              <img src="/tick.png" alt="tick" className='tick' />
              <h2 className='Assurance-h2'>Full Secure</h2>
            </div>
            <div className="Assurance">
              <img src="/tick.png" alt="tick" className='tick' />
              <h2 className='Assurance-h2'>24/7 Support</h2>
            </div>
            <div className="Assurance">
              <img src="/tick.png" alt="tick" className='tick' />
              <h2 className='Assurance-h2'>Done Deal</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-section f1">
            <img src="/lookscout.png" alt="LookScout" className="footer-logo" />
            <p className="footer-text">Generate outside the box thinking with the possibility to target the low.</p>
          </div>
          <div className="footer-section f2">
            <h4>Resources</h4>
            <ul>
              <li>Community</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="footer-section f3">
            <h4>Products</h4>
            <ul>
              <li>Integrations</li>
              <li>Solutions</li>
              <li>Features</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className="footer-section f4">
            <h4>Get Email Notifications</h4>
            <p className="footer-text">
              Generate outside the box thinking with the possibility to target the low
            </p>
            <form className="footer-email-form">
              <input type="email" placeholder="Enter email..." required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom" >
          <p>© 2023 Lookscout. All Rights Reserved.</p>
          <div className="social-icons" >
            <img src="/fb.png" alt="Facebook" />
            <img src="/google.png" alt="Google" />
            <img src="/apple.png" alt="Apple" />
            <img src="/insta.png" alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
