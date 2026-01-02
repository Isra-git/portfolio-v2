import React, { Fragment } from 'react';

import SilkTitle from '../navigation/silk-title.js';

import contactImg from '../../../static/assets/images/contact/contact2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <Fragment>
      <SilkTitle title="Contacta Conmigo" />
      <div
        className="contact-wrapper"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      >
        <div className="contact-card">
          <div className="contact-card-header">
            <h1>israDev</h1>
          </div>

          <div className="contact-card-content">
            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-text">
                <a href="mailto:villar_80@hotmail.com">villar_80@hotmail.com</a>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="contact-text">
                <a href="https://github.com/Isra-git" target="new">
                  israDev
                </a>
              </div>
            </div>

            {/* para cuando lo añada -_>

           <div className="contact-info">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="contact-text">
              <a>Linkedin (proximamente)</a>
            </div>
          </div> */}

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-text">605 72 29 48</div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-text">Irun -Guipuzcoa- 20300</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
