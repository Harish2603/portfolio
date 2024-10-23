import React from "react";
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import cts from '../images/cts.png';
import nlcil from '../images/NLC.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FaBookOpen } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';


const Experience = () => {
    
  return (
    <div className="edu-container">
        <br /><br /><br /><br /><br /><br />
    <VerticalTimeline className="vertical-timeline--top">
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="AUG 2021 - Jul 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} color=""/>}
       
       
      >
        <div className="desribe-block">
        <img src={cts} alt="cts" className="cts" height={100} />
        {/* <h2 className="vertical-timeline-element-title">Master's</h2><br /> */}<br /><br />
        <h2 className="head-content">Programmer Analyst - Full Time</h2> <br />
        <h2>Cognizant, Chennai, Tamil Nadu, India</h2><br />
        <h3>As a Software Engineer I worked in Full stack application development team </h3>
        <ul className="body-content"><br />
          <li>Contributed to the development of a full-stack application to track drug trials, renewals, and compliance timelines,
improving operational efficiency by 25% </li><br />
          <li>Formulated secure backend APIs with Spring Boot and designed React dashboards for real-time trial progress tracking</li><br />
          <li>Containerized the app with Docker and deployed it on AWS EC2 with auto-scaling and CloudWatch monitoring,
achieving 99.9% uptim</li><br />
          <li>Managed CI/CD pipelines in Jenkins, running automated tests using JUnit and Chai to validate code before integration,
improving code quality and reducing manual effort </li><br />
          <li>Generated test cases covering all functionalities and edge-cases of the application using Junit, mocha and chai</li><br />
          <li>Automated renewal notifications and reminders using AWS SES and SNS, streamlining communication and reducing
manual tracking efforts across teams</li><br />
        </ul>
        </div>
      </VerticalTimelineElement>
     
      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Aug 2020 - Jul 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBookOpen />} 
        
       
        
      >
        <div className="desribe-block" >
        <img src={cts} alt="cts" className="cts" height={100} />
       <br /><br />
        <h2 className="head-content">Programmer Analyst Trainee</h2> <br />
        <h2>Cognizant, Chennai, Tamil Nadu, India</h2><br />
        <h3>As a Programmer Analyst Trainee I designed and developed a fully functioning website using spring </h3>
        <ul className="body-content"><br />
          <li>As a team of 6 we designed an end-to-end commercial insurance website to view coverage and buy insurance policy using Java, HTML/CSS, Spring MVC, and MySQL</li><br />
          <li>Implemented microservice architecture to ensure scalability, maintainability and modularity of the platform</li><br />
          <li>Designed Continuous Integration/ Continuous Delivery pipeline to deploy the microservices to Amazon Web Services using S3, EC2, ECS, Code Commit, Code Deploy, Docker</li><br />
          <li>Created test cases covering all functionalities and edge-cases of the application using JUnit</li><br />

        </ul>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: '#afb4ba', color: '#fff' ,fontFamily:  'Times'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jun 2019- Jul 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBook />} 
       
        
      >
        <div className="desribe-block" >
        <img src={nlcil} alt="nlcil" className="nlcil" height={100} />
        <br /><br />
        <h2 className="head-content">Web developer - Internship</h2> <br />
        <h2>NLCIL, Neyveli, Tamil Nadu, India</h2><br />
        <h3>As a Intern I designed a web application using PHP and mysql </h3>
        <ul className="body-content"><br />
          <li>As a Intern I learned and developed front end for employee payment system using PHP</li><br />
          <li>Used mysql for backend to support the data transactions</li><br />
        </ul>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default Experience;
