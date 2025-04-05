import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <h1 className='sid'>News</h1>
      <hr></hr>
      <h2>Genres</h2>
      <div>
        <ul>
          <a href='/'>
          <div className='holder'>
            <li >
              <WhatshotIcon fontSize='large'/>
             <a href='/'>Trending</a>
           </li>
          </div>
          </a>

          <a href='/global'>
          <div className='holder'>
            <li>
              <PublicIcon fontSize='large'/>
              <a href='/Global'>Global</a>
            </li>
          </div>
          </a>


          <a href='/Country'>
          <div className='holder'>
            <li>
              <FlagIcon fontSize='large'/>
              <a href='/Country'>Country</a>
            </li>
          </div>
          </a>

          <a href='/Economy'>
          <div className='holder'>
            <li>
              <AttachMoneyIcon fontSize='large'/>
              <a href='/Economy'>Economy</a>
            </li>
          </div>
          </a>

          <a href='/Sports'>
          <div className='holder'>
            <li>
              <SportsSoccerIcon fontSize='large'/>
              <a href='/Sports'>Sports</a>
            </li> 
          </div>
          </a>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar
