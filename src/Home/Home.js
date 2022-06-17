import React from 'react'
import '../Home/Home.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
                    <Button style={{margin:'30px 0',height:'50px',fontSize:'18px',textTransform:'capitalize',backgroundColor:'#ff833b',}} variant="contained">Schedule a Demo</Button>
                    <div className='headerBelowImg'>
                        <img src="https://imgur.com/AtlKiit.png" className="download_img"/>
                        <img src="https://imgur.com/thK22dd.png" className="download_img"/>    
                    </div>
                </div>
                <div className='belowHeaderImgBox'>

                </div>
            </div>
        </section>
        {/* below Header end */}
    </div>
  )
}

export default Home