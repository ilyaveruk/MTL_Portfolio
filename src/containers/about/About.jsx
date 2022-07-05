import React from 'react';
import './about.css';
import Feature from '../../components/feature/Feature';

const about = () => {
    return (
        <div className="mtl__about section__margin" id="about">
            <div className="mtl__about-feature">
                <Feature title="What is MTL-3D" text="MTL developed the core technology and products required to successfully replace mechanical
                    inspection systems. This patented technology implements laser, tactile sensor, innovative optics and
                    image processing to enable fast and high precision measurement of complicated and free-form parts
                    and the ability to bring automated inspection and quality control systems into the production floor." />
            </div>
            <div className="mtl__about-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="mtl__about-container">
                <Feature title="Blazer" text="Measuring machine that changed the game rules. Developed by the best engineers at metrological scope." />
                <Feature title="Knowledgebase" text="Since 1997, MTL 3D Ltd. has been a development engineering company. We are proud to be a part of teams who lead the way towards a more efficient future with innovative ideas, game-changing technology, and transparency. " />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    );
};

export default about;