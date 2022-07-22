import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { fontWeight } from '@mui/system';

var syrup = require("../assets/figma/syrup.png");
var thumb = require("../assets/figma/thumb.png");
var chat = require("../assets/figma/chat.png");
var thumbgrip = require("../assets/figma/thumbgrip.png");

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span style={{ color: 'black' }} onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...Read More" : " ...Show Less"}
            </span>
        </p>
    );
};

export default function Mainpage() {
    const [value, setValue] = React.useState(5);

    return (
        <div style={{ display: 'flex', width: 'equal' }} className='main-container'>
            <div style={{ width: '50%' }} className='start-container'>
                <div style={{ display: 'flex', marginLeft: '100px' }}>
                    <div style={{ border: '1px solid #D3D3D3', borderRadius: '20px', marginTop: '20px', position: 'absolute', overflow: 'hidden' }}>
                        <img src={syrup} />
                    </div>
                    <div style={{ marginTop: '40px', display: 'flex' }}>
                        <Card sx={{ height: '200px', width: '515px', display: 'flex',borderRadius:'15px' }}>
                            <div style={{ width: '30%' }}></div>
                            <div style={{ width: '70%'}}>
                                <div style={{ width: '80%', margin: '0 auto' }}>
                                    <div>
                                        Item 1
                                    </div>
                                    <div style={{fontSize:'10px'}}><span style={{fontSize:'10px',color:'grey'}}>By</span> Global Ex Change</div>
                                    <div className='bottom-spacer' style={{margin:'10px'}}></div>
                                    <div style={{ fontSize: '12px',color:'grey',fontWeight:'100px' }}><ReadMore>Lorem ipsum dolor sit amet, consecture adipiscing elit. Lorem ipsum dolor sit amet, consecture adipiscing elit</ReadMore></div>
                                    <div className='bottom-spacer' style={{margin:'10px'}}></div>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <span style={{width:'70%'}}>$5.31 <span style={{fontSize:'10px',color:'grey'}}>USD</span></span>
                                        <span style={{width:'30%',textAlign:'center'}}>
                                            <img style={{height:'10px',width:'5px'}} src={thumbgrip}/>
                                            <img style={{marginRight:'20px'}} src={thumb}/>
                                            <img src={chat}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div style={{ width: '50%' }} className='end-container'>
            <div style={{ display: 'flex', marginLeft: '100px' }}>
                    <div style={{ border: '1px solid #D3D3D3', borderRadius: '20px', marginTop: '20px', position: 'absolute', overflow: 'hidden' }}>
                        <img src={syrup} />
                    </div>
                    <div style={{ marginTop: '40px', display: 'flex' }}>
                        <Card sx={{ height: '200px', width: '515px', display: 'flex',borderRadius:'15px' }}>
                            <div style={{ width: '30%' }}></div>
                            <div style={{ width: '70%'}}>
                                <div style={{ width: '80%', margin: '0 auto' }}>
                                    <div>
                                        Item 1
                                    </div>
                                    <div style={{fontSize:'10px'}}><span style={{fontSize:'10px',color:'grey'}}>By</span> Global Ex Change</div>
                                    <div className='bottom-spacer' style={{margin:'10px'}}></div>
                                    <div style={{ fontSize: '12px',color:'grey',fontWeight:'100px'  }}><ReadMore>Lorem ipsum dolor sit amet, consecture adipiscing elit. Lorem ipsum dolor sit amet, consecture adipiscing elit</ReadMore></div>
                                    <div className='bottom-spacer' style={{margin:'10px'}}></div>
                                    <div>
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <span style={{width:'70%'}}>$5.31  <span style={{fontSize:'10px',color:'grey'}}>USD</span></span>
                                        <span style={{width:'30%',textAlign:'center'}}>
                                            <img style={{height:'10px',width:'5px'}} src={thumbgrip}/>
                                            <img style={{marginRight:'20px'}} src={thumb}/>
                                            <img src={chat}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
