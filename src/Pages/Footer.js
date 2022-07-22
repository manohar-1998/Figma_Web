import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export default function Footer() {

  return (
    <>
      <div className='footer-section' style={{
        position: 'fixed',
        bottom: '0',
        height: '50px',
        width: '100%',
        backgroundColor: '#464B4E',
        color: 'white',
        textAlign: 'center',
      }}>
        <div style={{marginTop:'15px'}}>
          <span>Launch Your Own CBD Business</span>
          <span><ClearIcon style={{ float: 'right', marginRight: '20px' }} /></span>
        </div>
      </div>
    </>
  );
}
