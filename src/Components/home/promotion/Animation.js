import React from 'react';
import Zoom from 'react-reveal/Zoom'
import Homekit from '../../../Resources/images/homekit.png';
import Alwaykit from '../../../Resources/images/alwaykit.png';
import Thirdkit from '../../../Resources/images/thirdkit.png';
const PromotionAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                    <div>
                        <span>PUMA KIT</span>
                        <span>2021/2022</span>
                    </div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{background:`url(${Homekit}) no-repeat`}}></div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{background:`url(${Alwaykit}) no-repeat`}}></div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{background:`url(${Thirdkit}) no-repeat`}}></div>
                </Zoom>
                
            </div>
            
        </div>
    );
};

export default PromotionAnimation;