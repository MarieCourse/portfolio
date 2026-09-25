import React from 'react'
import './Skills.sass';
import { FaCss3Alt, FaGitlab, FaHtml5, FaJsSquare, FaNodeJs, FaShopify, FaVuejs } from 'react-icons/fa'

function Skills() {
  return (
    <div className="content skills">
      <h2>Mes compétences</h2>
      <div className="skills__icons">
        <FaCss3Alt className="icon"/>
        <FaHtml5 className="icon"/>
        <FaVuejs className="icon"/>
        <FaJsSquare className="icon"/>
        <FaNodeJs className="icon"/>
        <FaGitlab className="icon"/>
        <FaShopify className="icon"/>
      </div>
    </div>
  );
}

export default Skills;
