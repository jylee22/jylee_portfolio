import React from 'react';
import Bootstrap from '../../portfolio/logo/Bootstrap';
import CSS3 from '../../portfolio/logo/CSS3';
import Eclipse from '../../portfolio/logo/Eclipse';
import Excel from '../../portfolio/logo/Excel';
import Figma from '../../portfolio/logo/Figma';
import Git from '../../portfolio/logo/Git';
import GitHub from '../../portfolio/logo/GitHub';
import HTML5 from '../../portfolio/logo/HTML5';
import Illustrator from '../../portfolio/logo/Illustrator';
import Java from '../../portfolio/logo/Java';
import JQuery from '../../portfolio/logo/JQuery';
import JS from '../../portfolio/logo/JS';
import MariaDB from '../../portfolio/logo/MariaDB';
import Oracle from '../../portfolio/logo/Oracle';
import Photoshop from '../../portfolio/logo/Photoshop';
import PowerPoint from '../../portfolio/logo/PowerPoint';
import Python from '../../portfolio/logo/Python';
import ReactLogo from '../../portfolio/logo/ReactLogo';
import SASS from '../../portfolio/logo/SASS';
import Spring from '../../portfolio/logo/Spring';
import VSCode from '../../portfolio/logo/VSCode';
import Vue from '../../portfolio/logo/Vue';
import Word from '../../portfolio/logo/Word';
import XD from '../../portfolio/logo/XD';
import Zeplin from '../../portfolio/logo/Zeplin';

const Skills = () => {

  return(
    <div className="skills">
      <div className="content-header sub">
        <h3 className="title">SKILLS</h3>
      </div>
      <div className="content-body">
        <div className="skill-list">
          <h3 className="title">Frontend</h3>
          <ul className="skill-item">
            <li className="item"><HTML5 /></li>
            <li className="item"><CSS3 /></li>
            <li className="item"><SASS /></li>
            <li className="item"><JS /></li>
            <li className="item"><JQuery /></li>
            <li className="item"><ReactLogo /></li>
            <li className="item"><Vue /></li>
            <li className="item"><Bootstrap /></li>
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="title">Backend</h3>
          <ul className="skill-item">
            <li className="item"><Java /></li>
            <li className="item"><Spring /></li>
            <li className="item"><Python /></li>
            <li className="item"><Oracle /></li>
            <li className="item"><MariaDB /></li>
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="title">Version Control</h3>  
          <ul className="skill-item">
            <li className="item"><Git /></li>
            <li className="item"><GitHub /></li>
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="title">Communication</h3>
          <ul className="skill-item">
            <li className="item"><Zeplin /></li>
            <li className="item"><Figma /></li>
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="title">Design Tool</h3>
          <ul className="skill-item">
            
            <li className="item"><Photoshop /></li>
            <li className="item"><Illustrator /></li>
            <li className="item"><XD /></li>
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="title">Edit Tool</h3>  
          <ul className="skill-item">
            <li className="item"><Word /></li>
            <li className="item"><PowerPoint /></li>
            <li className="item"><Excel /></li>
            <li className="item"><VSCode /></li>
            <li className="item"><Eclipse /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;