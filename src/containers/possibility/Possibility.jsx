import React from 'react';
import './possibility.css';
import robotImage from '../../assets/robot.png';

const Possibility = () => {
    return (
        <div className="mtl__possibility section__padding" id="possibility">
            <div className="mtl__possibility-image">
                <img src={robotImage} alt="possibility" />
            </div>
            <div className="mtl__possibility-content">
                <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            </div>
        </div>
    );
};

export default Possibility;