import React, { useRef } from 'react';
import './About.css';  // Import the CSS file

const Services = () => {
  const servicesRef = useRef([]);

  const services = [
    {
      title: 'Web Design',
      description: 'Creating visually appealing and user-friendly websites that leave a lasting impression.',
      icon: '🎨',
    },
    {
      title: 'Front-end Development',
      description: 'Building responsive and interactive user interfaces using modern web technologies.',
      icon: '💻',
    },
    {
      title: 'Back-end Development',
      description: 'Developing robust server-side applications and APIs to power your web solutions.',
      icon: '🔧',
    },
  ];

  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
      <div className="more_button">
        <a href="#" className="more_btn">View More</a>
      </div>
    </section>
  );
};

export default Services;
