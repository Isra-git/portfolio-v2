import React from 'react';

// Importamos FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Importamos los logos del stack
//import { techIcons } from '../../helpers/icons';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="left-wrapper">
        <hr className="linea-estilizada" />
        <div className="left-silk">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="right-wrapper">
        <section className="about-me">
          <p className="intro">
            Soy <strong>israDev</strong>, un <em>junior developer</em> motivado, curioso y con ganas
            de aportar ideas frescas. Me apasiona aprender, experimentar y construir aplicaciones
            que sean útiles, seguras y visualmente atractivas.
          </p>
        </section>
        <section className="education-section">
          <h2 className="education-subtitle">
            <FontAwesomeIcon icon={faKeyboard} /> Stack Tecnológico
          </h2>
          <div className="tech-stack-card">
            {/* Área Frontend */}
            <div className="stack-column">
              <div className="stack-label">Frontend</div>
              <div className="stack-content">
                <span className="tech-icon react">{/* <img src={techIcons.react} /> */}</span>
                <span className="tech-icon javascript"></span>
                <span className="tech-icon tailwind"></span>
                <span className="tech-icon css">{/* <img src={techIcons.css} /> */}</span>
                <span className="tech-icon html5"></span>
              </div>
            </div>

            {/* Área Backend */}
            <div className="stack-column">
              <div className="stack-label">Backend</div>
              <div className="stack-content">
                <span className="tech-icon Python"></span>
                <span className="tech-icon flask"></span>
                <span className="tech-icon fastapi"></span>
                <span className="tech-icon node"></span>
                <span className="tech-icon postman"></span>
              </div>
            </div>

            {/* Área Bases de Datos */}
            <div className="stack-column">
              <div className="stack-label">Databases</div>
              <div className="stack-content">
                <span className="tech-icon mysql"> MySQL</span>
                <span className="tech-icon postgresql"></span>
                <span className="tech-icon mongodb"></span>
                <span className="tech-icon"></span>
              </div>
            </div>

            {/* Área Otros */}
            <div className="stack-column">
              <div className="stack-label">DevOps / Otros</div>
              <div className="stack-content">
                <span className="tech-icon git"></span>
                <span className="tech-icon linux"></span>
                <span className="tech-icon Docker"></span>
              </div>
            </div>
          </div>
        </section>
        <section className="education-section">
          <h2 className="education-subtitle">
            <FontAwesomeIcon icon={faGraduationCap} /> Formación Académica y Desarrollo
          </h2>

          <div className="education-stack-card">
            {/* Columna Certificado */}
            <div className="stack-column">
              <div className="stack-label">Certificaciones</div>
              <div className="stack-content">
                <a
                  href="https://bottega.edu/full-stack-development-certificate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-link"
                >
                  Full Stack Development (Bottega University)
                </a>
              </div>
            </div>

            {/* Columna Grado Superior */}
            <div className="stack-column">
              <div className="stack-label">Grado Superior</div>
              <div className="stack-content">
                <a
                  href="https://www.fpbidasoa.eus/es/ciclos/electronica/gs-sistemas-de-telecomunicaciones-e-informaticos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-link"
                >
                  Sistemas de Informática y Telecomunicaciones
                </a>
              </div>
            </div>

            {/* Columna Desarrollo Continuo */}
            <div className="stack-column">
              <div className="stack-label">Autodidacta</div>
              <div className="stack-content">
                <span className="tech-tags">Linux, Git, TypeScript, FastAPI, etc.</span>
              </div>
            </div>

            {/* Columna Estudios Previos */}
            <div className="stack-column">
              <div className="stack-label">Previos</div>
              <div className="stack-content">
                <span className="tech-tags">Bachillerato Tecnológico Industrial</span>
              </div>
            </div>
          </div>
        </section>
        <section className="education-section">
          <h2 className="education-subtitle">Mis fortalezas</h2>
          <ul className="strengths">
            <li>✅ Aprendiz metódico y curioso</li>
            <li>🛠️ Conocimientos solidos en hardware, montaje y reparación</li>
            <li>🎨 Pasión por el diseño frontend y efectos CSS elegantes</li>
            <li>🖥️ Conocimientos sobre Backend y arquitectura de sistemas </li>
            <li>🔒 Interés en seguridad digital y buenas prácticas</li>
            <li>📚 Documentación clara y trabajo en equipo</li>
          </ul>
        </section>

        <section className="education-section">
          <h2 className="education-subtitle">Objetivos</h2>
          <p>
            Mi meta es crecer como <strong>desarrollador full stack</strong>, integrando frontend y
            backend con buenas prácticas de despliegue, seguridad y documentación. A corto plazo,
            estoy enfocado en completar mi formación y en desarrollar un proyecto capstone que
            refleje mi estilo y mis valores como profesional.
          </p>

          <p className="closing">
            🚀 En pocas palabras: soy un junior developer moderno, motivado y creativo, listo para
            transformar ideas en realidades digitales.
          </p>
        </section>
      </div>
    </div>
  );
}
