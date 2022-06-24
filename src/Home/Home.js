import React from 'react'
import '../Home/Home.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";


const Home = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
        {/* Top Most Header Start */}
        <section>
            <div className='topHeaderBox'>
                <div className='topHeaderMain'>
                    <div className='logo_box'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.79 45.801">
  <defs>
    <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#ffe53b"/>
      <stop offset="1" stopColor="#ff2525"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="-0.15" y1="0.5" x2="0.85" y2="0.5"/>
  </defs>
  <g id="logo" transform="translate(-87 -53.6)">
    <g id="Group_55" data-name="Group 55" transform="translate(87 53.599)">
      <path id="Path_14" data-name="Path 14" d="M65.408,41.367c.214,6.269.394,14.671-5.66,18.463-5.639,3.531-12.61,1.645-16.642-3.261C39,51.586,36.185,45.36,33.122,39.726c-2.489-4.58-4.919-9.17-7.357-13.793-5.352,9.658-10.686,19.522-15.644,29.39H29.287c4.161,0,4.156,6.457,0,6.457H6.714c-.051,0-3.792-6.346-3.706-6.522C9.594,42,15.734,30.436,23.057,17.552a3.252,3.252,0,0,1,5.57,0C34.107,27.809,39.459,38.119,45.282,48.2c2.142,3.689,4.675,7.991,9.632,6.71,5.167-1.333,4.173-9.555,4.036-13.561C58.809,37.2,65.266,37.223,65.408,41.367Zm-3.274-8.878A3.784,3.784,0,1,0,58.351,28.7a3.783,3.783,0,0,0,3.783,3.783Z" transform="translate(-3.007 -15.978)" fill="url(#linear-gradient)"/>
      <path id="Path_15" data-name="Path 15" d="M11.65,114.257H34.227c4.156,0,4.161-6.457,0-6.457H15.061Z" transform="translate(-7.946 -68.456)" fill="url(#linear-gradient-2)"/>
    </g>
    <path id="Path_3631" data-name="Path 3631" d="M21.547,0,13.021-20.532H8.207L-.406,0H4.988L6.5-4.031h7.946L16.037,0ZM13.079-8H7.917l2.61-7.047Zm31.291-2.32c0-7.772-5.916-10.208-11.745-10.208H25.2V0h7.656C38.512,0,44.37-3.1,44.37-10.324Zm-5.162,0c0,4.582-3.277,6.032-6.815,6.032H30.044V-16.3h2.465C35.931-16.3,39.208-14.935,39.208-10.324ZM68.324,0,59.8-20.532H54.984L46.371,0h5.394l1.508-4.031h7.946L62.814,0ZM59.856-8H54.694l2.61-7.047ZM87.551-14.21c0-4.7-3.538-6.322-8.033-6.322h-7.54V0h4.959V-7.743H79.4C83.694-7.743,87.551-9.454,87.551-14.21Zm-4.959.029c0,1.943-1.711,2.494-3.567,2.494H76.937V-16.53h2.175C80.881-16.53,82.592-16.153,82.592-14.181Zm24.3-2.117v-4.234H90.335V-16.3h5.8V0h4.959V-16.3ZM117.8,0a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29Zm19.314-20.01a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29h-1.45a.421.421,0,0,1-.348-.2l-9.889-16.1q-.029-.087-.087-.073t-.058.1L127.078-.29a.256.256,0,0,1-.29.29h-1.479a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.45a.421.421,0,0,1,.348.2L137-4q.029.087.087.072t.058-.1Zm19.749-.29a.256.256,0,0,1,.29.29v1.247a.256.256,0,0,1-.29.29h-5.684a.1.1,0,0,0-.116.116V-.29a.256.256,0,0,1-.29.29h-1.479A.256.256,0,0,1,149-.29V-18.357a.1.1,0,0,0-.116-.116h-5.452a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29Zm17.4,1.508a.256.256,0,0,1-.29.29H163.3a.1.1,0,0,0-.116.116v7.163a.1.1,0,0,0,.116.116h7.482a.256.256,0,0,1,.29.29V-9.6a.256.256,0,0,1-.29.29H163.3a.1.1,0,0,0-.116.116v7.279a.1.1,0,0,0,.116.116h10.672a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29H161.414a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h12.557a.256.256,0,0,1,.29.29ZM178.959,0a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29v18.1a.1.1,0,0,0,.116.116h10.237a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29Zm16.472,0a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29v18.1a.1.1,0,0,0,.116.116h10.237a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29ZM211.9,0a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29Zm13.4.232a7.638,7.638,0,0,1-3.567-.8,5.836,5.836,0,0,1-2.393-2.248,6.439,6.439,0,0,1-.855-3.335v-8a6.439,6.439,0,0,1,.855-3.335,5.836,5.836,0,0,1,2.393-2.247,7.638,7.638,0,0,1,3.567-.8,7.779,7.779,0,0,1,3.553.783,5.713,5.713,0,0,1,2.393,2.19,6.068,6.068,0,0,1,.841,3.176v.377a.256.256,0,0,1-.29.29h-1.479a.256.256,0,0,1-.29-.29v-.348a4.149,4.149,0,0,0-1.29-3.161,4.8,4.8,0,0,0-3.437-1.218,4.787,4.787,0,0,0-3.451,1.247,4.325,4.325,0,0,0-1.3,3.277v8.12a4.277,4.277,0,0,0,1.334,3.277,4.931,4.931,0,0,0,3.509,1.247,4.8,4.8,0,0,0,3.378-1.16,4.011,4.011,0,0,0,1.262-3.1V-8.468a.1.1,0,0,0-.116-.116h-4.263a.256.256,0,0,1-.29-.29v-1.218a.256.256,0,0,1,.29-.29H231.8a.256.256,0,0,1,.29.29v3.741a6.341,6.341,0,0,1-1.841,4.843A6.905,6.905,0,0,1,225.3.232Zm24.737-19.024a.256.256,0,0,1-.29.29H239.076a.1.1,0,0,0-.116.116v7.163a.1.1,0,0,0,.116.116h7.482a.256.256,0,0,1,.29.29V-9.6a.256.256,0,0,1-.29.29h-7.482a.1.1,0,0,0-.116.116v7.279a.1.1,0,0,0,.116.116h10.672a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29H237.191a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h12.557a.256.256,0,0,1,.29.29Zm16.5-1.218a.256.256,0,0,1,.29-.29h1.479a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29h-1.45a.421.421,0,0,1-.348-.2l-9.889-16.1q-.029-.087-.087-.073t-.058.1L256.505-.29a.256.256,0,0,1-.29.29h-1.479a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29h1.45a.421.421,0,0,1,.348.2L266.423-4q.029.087.087.072t.058-.1ZM280.227.261a7.638,7.638,0,0,1-3.567-.8A5.807,5.807,0,0,1,274.268-2.8a6.574,6.574,0,0,1-.855-3.379v-7.975a6.439,6.439,0,0,1,.855-3.335,5.836,5.836,0,0,1,2.392-2.247,7.638,7.638,0,0,1,3.567-.8,7.755,7.755,0,0,1,3.567.783,5.8,5.8,0,0,1,2.392,2.2,6.228,6.228,0,0,1,.855,3.277.314.314,0,0,1-.087.232.278.278,0,0,1-.2.087l-1.479.087q-.29,0-.29-.261v-.087a4.314,4.314,0,0,0-1.3-3.292,4.82,4.82,0,0,0-3.451-1.233,4.787,4.787,0,0,0-3.451,1.247,4.325,4.325,0,0,0-1.3,3.277v8.12a4.325,4.325,0,0,0,1.3,3.277,4.787,4.787,0,0,0,3.451,1.247A4.82,4.82,0,0,0,283.678-2.8a4.314,4.314,0,0,0,1.3-3.292v-.058q0-.261.29-.261l1.479.087q.29,0,.29.261a6.361,6.361,0,0,1-.855,3.321,5.769,5.769,0,0,1-2.392,2.219A7.755,7.755,0,0,1,280.227.261ZM304.79-18.792a.256.256,0,0,1-.29.29H293.828a.1.1,0,0,0-.116.116v7.163a.1.1,0,0,0,.116.116h7.482a.256.256,0,0,1,.29.29V-9.6a.256.256,0,0,1-.29.29h-7.482a.1.1,0,0,0-.116.116v7.279a.1.1,0,0,0,.116.116H304.5a.256.256,0,0,1,.29.29V-.29a.256.256,0,0,1-.29.29H291.943a.256.256,0,0,1-.29-.29V-20.01a.256.256,0,0,1,.29-.29H304.5a.256.256,0,0,1,.29.29Z" transform="translate(170 88)" fill="#333"/>
  </g>
                        </svg>
                    </div>
                    <div className='header_options'>
                        <div className='selectBox'>
                            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Solutions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Solutions"
          onChange={handleChange}
        >
          <MenuItem value={10}>Adapt a Competitive Intelligence Process</MenuItem>
          <MenuItem value={20}>AdaptQ</MenuItem>
          <MenuItem value={30}>Adapt Edge</MenuItem>
        </Select>
      </FormControl>
                            </Box>
                        </div>
                        <p className='company'>Company</p>
                        <Button style={{height:'50px',fontSize:'18px',textTransform:'capitalize',backgroundColor:'#ff833b',}} variant="contained">Schedule a Demo</Button>
                        <p className='login_field'>Login</p>
                    </div>
                </div>
            </div>
            <hr className='headerHr' />
        </section>
        {/* Top Most Header Start */}

        {/* below Header Start */}
        <section>
            <div className='belowHeaderBox'>
                <div className='belowHeaderContentBox'>
                    <h2 className='headerHeading'>Establish Competitive Advantages to Win More Business</h2>
                    <p className='headerContent'>Collect and interpret competitive intelligence for accurate market analysis, nimble response times, and analytical foresight. This process will ensure you are positioned to do more than merely better understand your competitors. In fact it will allow you to counter their tactics, offset their strategy and overcome their market position – with sentience and savvy.</p>
                    <Button style={{margin:'30px 0',height:'50px',padding:'25px 40px',fontSize:'15px',textTransform:'capitalize',backgroundColor:'#ff833b',}} variant="contained">Schedule a Demo</Button>
                    <div className='headerBelowImg'>
                        <img src="https://imgur.com/AtlKiit.png" className="download_img"/>
                        <img src="https://imgur.com/thK22dd.png" className="download_img"/>    
                    </div>
                </div>
                <div className='belowHeaderImgBox'>
                  <img className='belowHeaderImg' src='https://adaptintel.com/assets/images/mainHead.svg' />
                </div>
            </div>
        </section>
        {/* below Header end */}

        {/* Achieve with Adapt start */}
        <section>
          <div className='achieveContainer'>
            <div className='achieveMore'>
              <span></span>
              <h3>Achieve more with Adapt</h3>
            </div>
            <div className='achieveBoxes'>
              <div className='achieveBox'>
                <img className='achieveImg' src='	https://adaptintel.com/assets/images/aicon1.svg' />
                <p className='achieveHeading'>Marketing</p>
                <p className='achieveText'>Pinpoint unique value propositions that help you dominate your market. After all, you know your customers’ problems better than anyone, and with the right data and discernment you can generate differentiated solutions to solve those challenges efficiently.</p>
              </div>
              <div className='achieveBox'>
                <img className='achieveImg' src='	https://adaptintel.com/assets/images/aicon2.png' />
                <p className='achieveHeading'>Sales Teams</p>
                <p className='achieveText'>Arm your sales team with sophisticated insights to overcome objections and highlight unique offerings. Provide them with the resources to ensure benefits are immediately understood and stand above other industry options.</p>
              </div>
              <div className='achieveBox'>
                <img className='achieveImg' src='	https://adaptintel.com/assets/images/aicon3.png' />
                <p className='achieveHeading'>Decision Making Support</p>
                <p className='achieveText'>C-suite leaders make vital business decisions on a daily basis. The success of their companies depend not only on making the best possible choices, but also using the best information. Enter Adapt. Accurate, relevant, and timely intelligence enable strategic wins when it matters most.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Achieve with Adapt end  */}

        {/* How it works start */}
        <section>
          <div className='howContainer'>
            <div className='achieveMore'>
              <span></span>
              <h3>How it Works</h3>
            </div>
            <div className='howContentBox'>
              <div className='howBox'>
                <div className='circleText'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{zIndex:'2'}} width="32" height="32" viewBox="0 0 54 54" className="dots-palce">
                            <g id="Group_5262" data-name="Group 5262" transform="translate(4069.676 2503)">
                              <circle id="Ellipse_794" data-name="Ellipse 794" cx="27" cy="27" r="27" transform="translate(-4069.676 -2503)" fill="red" className="dots"></circle>
                              <circle id="Ellipse_795" data-name="Ellipse 795" cx="19" cy="19" r="19" transform="translate(-4061.676 -2495)" fill="#fff"></circle>
                            </g>
                  </svg>
                  <h3>Discovery</h3>
                  <span className='howLine'></span>
                </div>
                <p className='how_text'>Define your most pressing business goals and challenges. This starts by asking a series of simple yet surgical questions about your company. What makes your product or service distinct? What qualities are differentiated and how are you underscoring this to your customers? What is the root cause of problems you face in business or operational environments? Which business challenges keep you up at night? This discovery process sets the stage for collecting relevant and actionable competitive intelligence to help achieve your corporate goals.</p>
              </div>
              <div className='howBox howBox2'>
                <div className='circleText'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{zIndex:'2'}} width="32" height="32" viewBox="0 0 54 54" className="dots-palce">
                            <g id="Group_5262" data-name="Group 5262" transform="translate(4069.676 2503)">
                              <circle id="Ellipse_794" data-name="Ellipse 794" cx="27" cy="27" r="27" transform="translate(-4069.676 -2503)" fill="red" className="dots"></circle>
                              <circle id="Ellipse_795" data-name="Ellipse 795" cx="19" cy="19" r="19" transform="translate(-4061.676 -2495)" fill="#fff"></circle>
                            </g>
                  </svg>
                  <h3>Collect, Document, and Disseminate Intel</h3>
                  <span className='howLine howLine2'></span>
                </div>
                <p className='how_text'>Leverage existing resources throughout your company to collect vital intelligence. After all, intelligence collection at its best is not about purchasing an expertise you don’t have, but curating and developing a skill set your staff already possesses. Additionally, eliminate disparate and incomplete information with no meaning - focus on only quality, actionable information.</p>
              </div>
              <div className='howBox howBox2'>
                <div className='circleText'>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{zIndex:'2'}} width="32" height="32" viewBox="0 0 54 54" className="dots-palce">
                            <g id="Group_5262" data-name="Group 5262" transform="translate(4069.676 2503)">
                              <circle id="Ellipse_794" data-name="Ellipse 794" cx="27" cy="27" r="27" transform="translate(-4069.676 -2503)" fill="red" className="dots"></circle>
                              <circle id="Ellipse_795" data-name="Ellipse 795" cx="19" cy="19" r="19" transform="translate(-4061.676 -2495)" fill="#fff"></circle>
                            </g>
                  </svg>
                  <h3>Rinse and Repeat</h3>
                </div>
                <p className='how_text'>Competitive intelligence is the most effective when implemented as a formal, recurring process. Evaluate new priorities and perpetually monitor customer needs, market trends, and new competitors. This process is an iterative cycle that will make your company increasingly alert, progressively more effective and ultimately positioned to assume market dominance.</p>
              </div>
            </div>
          </div>
        </section>
        {/* How it works end */}

        {/* Adapt core start */}
        <section>
          <div className='adaptContainer'>
            <div className='achieveMore'>
              <span></span>
              <h3>Adapt Core</h3>
            </div>
            <div className='adaptImgBox'>
              <div className='upperImgBox'>
                <div className='upperLeftBox'>
                  {/* <div> */}
                    <img className='upLeftmainImg' src='https://adaptintel.com/assets/images/adaptCore1.png'/>
                    <img className='growthImg' src='https://adaptintel.com/assets/images/business_growth.svg'/>
                    <img className='pigImg' src='https://adaptintel.com/assets/images/Identify%20New%20Streams%20of.svg' />
                  {/* </div> */}
                </div>
                <div className='upperRightBox'>
                  <h3>Competitive Edge</h3>
                  <p>Adapt's edge gives YOU the advantage. We provide clients with a proprietary intel process that saves time and money. Our method helps clients win business, stay ahead of the competition, and take command of their markets. This means MORE success, NEW opportunities to scale and GREATER capacity to reach customers.</p>
                </div>
              </div>
              <div className='lowerImgBox'>
                <div className='lowerLeftBox'>
                  <h3>Peer to Peer CI</h3>
                  <p>Empower employees to conquer the competition. How do you ask? Arm them with singular tools and techniques to amass sophisticated insight one conversation at a time.</p>
                </div>
                <div className='lowerRightBox'>
                  <img className='lowerMainImg' src='https://adaptintel.com/assets/images/peer_to_peer_bg.png' />
                  <img className='connectionsImg' src='https://adaptintel.com/assets/images/you%20have%20three%20new%20comments%20on%20your%20intel.svg' />
                  <img className='alertImg' src='	https://adaptintel.com/assets/images/You%20have%20new%20intel.svg' />
                  <img className='excellentImg' src='https://adaptintel.com/assets/images/excellentPerformance.svg' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Adapt core end */}

        {/* Single goal section start*/}
        <section>
          <div className='singleGoalContainer'>
            <div className='achieveMore singleHeading'>
              <span></span>
              <h3>Our single goal is to enable your business’ growth objectives</h3>
            </div>
            <div className='mainGoalDiv'>
              <div className='firstGoalDiv'>
                <div className='textDiv'>
                  <p className='redHead'>Discovery Phase</p>
                  <h3 className='blackHead'>Adapt a Competitive Intelligence Process</h3>
                  <p className='box_text_content'>Adapt gives you the tools to identify revenue opportunities and insights to the marketplace through human centric competitive intelligence. What does this mean? You already know your staff is your greatest resource. Adapt turns up your team’s resourcefulness by enabling them to collect information you need to answer your company’s most pressing business problems.</p>
                  <div className='learnBox'>
                    <p>Learn More</p>
                    <img className='arrowImg' src='https://adaptintel.com/assets/images/learnArrow.svg' />
                  </div>
                </div>
                <div className='imgDiv'>
                  <div className='mainImageBox1'>
                    <img className='mainImg1' src='https://adaptintel.com/assets/images/Discovery%20Phase.svg' />
                    <img className='childImg1' src='https://adaptintel.com/assets/images/total%20revenue.svg' />
                    <img className='childImg2' src='https://adaptintel.com/assets/images/insights.svg' />
                  </div>
                </div>
              </div>
              <div className='secondGoalDiv'>
                <div className='imgDiv'>
                  <div className='mainImgBox2'>
                    <img className='mainImg2' src='https://adaptintel.com/assets/images/adaptQ_bg.png' />
                    <img className='mobileImg1' src='https://adaptintel.com/assets/images/leaderboard.svg' />
                    <img className='mobileImg2' src='https://adaptintel.com/assets/images/KeyIntelQuestion.svg' />
                  </div>
                </div>
                <div className='textDiv secTextDiv'>
                  <p className='redHead'>Technology</p>
                  <h3 className='blackHead'>AdaptQ</h3>
                  <p className='box_text_content'>Adapt's mobile application, AdaptQ, offers clients the power to record essential competitive intel data on a sleek and user-friendly interface. Moreover, AdaptQ gives users access to a central repository of competitive intel for use on-demand.</p>
                  <div className='learnBox'>
                    <p>Learn More</p>
                    <img className='arrowImg' src='https://adaptintel.com/assets/images/learnArrow.svg' />
                  </div>
                </div>
              </div>
              <div className='thirdGoalDiv'>
                <div className='textDiv'>
                  <p className='redHead'>Technology</p>
                  <h3 className='blackHead'>AdaptEdge</h3>
                  <p className='box_text_content'>AdaptEdge is the web-based application and nerve center of Adapt's digital solution. All collected Peer-to-Peer intelligence filters from mobile applications into AdaptEdge for processing, analysis, and distribution.</p>
                  <div className='learnBox'>
                    <p>Learn More</p>
                    <img className='arrowImg' src='https://adaptintel.com/assets/images/learnArrow.svg' />
                  </div>
                </div>
                <div className='imgDiv'>
                  <div className='thirdImgBox'> 
                      <img className='dashImg1' src='https://adaptintel.com/assets/images/Ada.svg' />
                      <img className='dashiChildImg1' src='https://adaptintel.com/assets/images/Income_statement.svg' /> 
                      <img className='dashChildImg3' src='https://adaptintel.com/assets/images/primary_intel.svg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Single goal section end */}

        {/* FAQ's section start */}
        <section>
          <div className='faqContainer'>
            <div className='achieveMore faqHead'>
              <span></span>
              <h3 className='faqHeading'>FAQ's</h3>
            </div>
            <div className='queBox firstQbox'>
              <h3 className='qText'>What is Competitive Intelligence?</h3>
              <img className='nextImg' src='https://adaptintel.com/assets/images/arrowBack.svg' />
            </div>
            <hr className='qHr' />
            <div className='queBox'>
              <h3 className='qText'>How will Adapt improve my bottom line?</h3>
              <img className='nextImg' src='https://adaptintel.com/assets/images/arrowBack.svg' />
            </div>
            <hr className='qHr' />
            <div className='queBox'>
              <h3 className='qText'>Who benefits from Adapt's services?</h3>
              <img className='nextImg' src='https://adaptintel.com/assets/images/arrowBack.svg' />
            </div>
            <hr className='qHr' />
            <div className='queBox'>
              <h3 className='qText'>Will Adapt help me keep my finger on the pulse of my market space?</h3>
              <img className='nextImg' src='https://adaptintel.com/assets/images/arrowBack.svg' />
            </div>
            <hr className='qHr' />
            <div className='queBox'>
              <h3 className='qText'>How will Adapt help me retain and create more long standing customers?</h3>
              <img className='nextImg' src='https://adaptintel.com/assets/images/arrowBack.svg' />
            </div>
            <hr className='qHr' />
          </div>
        </section>
        {/* FAQ's section end */}       

        {/* Contact us form start */}  
        <section>
          <div className='contactContainer'>
            <div className='contactBox'>
            <div className='achieveMore contactHead'>
              <span></span>
              <h3 className='contactHeading'>Contact Us</h3>
              <p>Let us answer any questions, demonstrate our products, or help you maximize your business’ potential!</p>
            </div>
            </div>
            <div className='signupFormBox'>
              <div className="input_text firstInput">
                <input type="text" required/>
                <label>Full Name</label>
              </div>
              <div className="input_text">
                <input type="text" required/>
                <label>Email address</label>
              </div>
              <div className="input_text">
                <input type="number" required/>
                <label>Phone number</label>
              </div>
              <div className="input_text">
                <input type="text" required/>
                <label>Company name</label>
              </div>
              <div className='sendDiv'>
                <Button className='sendBtn' variant="contained">Send</Button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact us form end */}  

        {/* footer section start */}
        <section>
          <div className='footer'>
            <div className='footerHeader'>
              <h3 className='footerHeading'>Want to try our Adapt</h3>
              <Button style={{margin:'30px 0',borderRadius:'7px',height:'50px',padding:'25px 40px',fontSize:'15px',textTransform:'capitalize',backgroundColor:'#ff833b',}} variant="contained">Schedule a Demo</Button>
            </div>
            <div className='footerEnd'>
              <div className='footerImgDiv'>
                <div className='adaptLogoImg'>
                  <img className='footerImgLogo' src='https://adaptintel.com/assets/images/logo.svg' />
                </div>
                <p className='footerLogoText'>Our single goal is to enable your business’ growth objectives. We provide unique capabilities based on a proprietary competitive intelligence function that maximizes your existing resources to collect relevant business intelligence used to help answer your most critical business problems.</p>
              </div>
              <div className='solutionDiv'>
                <h3>Solutions</h3>
                <div className='solutions_child'>
                  <p>Adapt a Competitive Intelligence Process</p>
                  <p>Adapt Q</p>
                  <p>Adapt Edge</p>
                </div>
              </div>
              <div className='aboutDiv'>
                <h3>About Us</h3>
                <div className='solutions_child'>
                  <p>Company</p>
                  <p>Terms and Condition</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
              <div className='subscribeDiv'>
                <p>Subscribe to Our News & Updates</p>
                <div className='inputSubscribeDiv'>
                  <input type='text' placeholder='Email Address' />
                  <button>Subscribe</button>
                </div>
                <div className='headerBelowImg'>
                  <img src="https://imgur.com/AtlKiit.png" className="download_img foot_img"/>
                  <img src="https://imgur.com/thK22dd.png" className="download_img foot_img "/>    
                </div>
              </div>
            </div>
            <hr className='qHr footerHr' />
            <div className='last'>
              <p>© 2021 All rights reserved.</p>
              <div className='lastIconDiv'>
                <FaFacebookF/>
                <FaTwitter/>
                <FaLinkedinIn/>  
              </div>
            </div>
          </div>
        </section>
        {/* footer section end */}

    </div>
  )
}

export default Home