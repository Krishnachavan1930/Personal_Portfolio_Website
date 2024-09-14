import React from 'react';
import './Certificate.css'
import certi from '../../assets/cer1.png'
import ITCORNERC from '../../assets/ITCORNERC.jpg'
import DSA from '../../assets/DSA.jpg'
import PYTHON from '../../assets/PYTHON.jpg'


const Certificates = () => {
    return (
        <section className="section" id="certificates">
            <div className="top-header">
                <h1>My Certificates</h1>
            </div>
            <div className="certificates-card">
                <img src={DSA} alt="static" />
                <img src={PYTHON} alt="responsive" />
                <img src={ITCORNERC} alt="dynamic" />
                <img src={certi} alt="JS essentials" />
            </div>
        </section>
    );
}

export default Certificates;
