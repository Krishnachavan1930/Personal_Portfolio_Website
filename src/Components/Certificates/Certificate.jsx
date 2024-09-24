import React, { useEffect } from 'react';
import './Certificate.css';
import certi from '../../assets/cer1.png';
import ITCORNERC from '../../assets/ITCORNERC.jpg';
import DSA from '../../assets/DSA.jpg';
import PYTHON from '../../assets/PYTHON.jpg';
import gsap from 'gsap';

const certificates = [
  {
    id: 1,
    image: DSA,
    description: 'Data Structures and Algorithms Certification',
    link: 'https://drive.google.com/your-link-for-dsa',
  },
  {
    id: 2,
    image: PYTHON,
    description: 'Python Programming Certification',
    link: 'https://drive.google.com/your-link-for-python',
  },
  {
    id: 3,
    image: ITCORNERC,
    description: 'IT Corner Certification',
    link: 'https://drive.google.com/your-link-for-itcornerc',
  },
  {
    id: 4,
    image: certi,
    description: 'JavaScript Essentials Certification',
    link: 'https://drive.google.com/your-link-for-js',
  },
];

const Certificates = () => {
  useEffect(() => {
    gsap.fromTo(
      '.certificate-card',
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'bounce.out',
      }
    );
  }, []);

  return (
    <section className="section" id="certificates">
      <div className="top-header">
        <h1>My Certificates</h1>
      </div>
      <div className="certificates-card">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.description} />
            <div className="certificate-info">
              <p>{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
