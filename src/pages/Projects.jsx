import React, { useState, useEffect } from 'react';
import {FaHtml5,FaJsSquare,FaReact, FaGithub} from 'react-icons/fa';
import { LuScreenShare } from "react-icons/lu";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Actual project data with unique IDs across categories
  const projectData = {
    html: [
      {
        id: "html_1",
        title: "Wedding Planner Website",
        description: "A comprehensive website that showcases all the services offered by wedding planners. Users can explore various packages, view testimonials, and get in touch with planners to make their special day memorable. The site features a user-friendly interface, making it easy to navigate through different sections, including services, pricing, and contact information.",
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1qfNE885_nvv5_MEtKr1btQ8CWSJFC7lB?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/wedding_planners_website.git",
      },
      {
        id: "html_2",
        title: "Hungry Buds Restaurant Website",
        description: "This website provides a complete overview of the Hungry Buds restaurant, including its menu, special offers, and reservation options. Users can easily browse through the menu, view images of dishes, and read reviews. The design is responsive, ensuring a seamless experience on both desktop and mobile devices.",
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/15BPDVA0VluyVdxsOQsc7PnAaI_RCQYgq?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/food_website.git",
      },
    ],
    javascript: [
      {
        id: "js_1",
        title: "Real-time Weather Update Website",
        description: "This website provides accurate real-time weather updates for various locations. Users can enter their city and receive current weather conditions, forecasts, and alerts. The site utilizes a weather API to fetch data, ensuring users have the most up-to-date information at their fingertips.",
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/1GrdgxPbf7Z1pKR2zZgpKETvyQ2MbIcTv?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/realtime_weather_update.git",
      },
      {
        id: "js_2",
        title: "Simple Calculator",
        description: "A straightforward calculator that can perform basic arithmetic operations. Users can input numbers and select operations to get results instantly. The design is clean and intuitive, making it easy for anyone to use, regardless of their technical background.",
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "exampleurl",
        sourceCodeUrl: "https://github.com/medamvishnu27/Simple-calculator.git",
      },
      {
        id: "js_3",
        title: "BMI Calculator",
        description: "Easily calculate your Body Mass Index (BMI) with this simple and accurate tool. Enter your height and weight, and instantly receive your BMI result along with a healthy weight range interpretation.",
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/18nrWi2hn8ODj7ZgwmJeWiQZHyOELEXJ4?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/BMI-_calculator.git",
      },
      {
        id: "js_4",
        title: " Random Quote Generator",
        description: "Find inspiration and motivation with a daily dose of wisdom. This generator delivers a new and insightful quote each time you refresh, offering words to live by and spark creativity.",
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/1btX3ZaQdgvOORhRsZdqYFlnmi6j_HTZT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Quote-generator.git",
      },
      {
        id: "js_5",
        title: "Stopwatch",
        description: "Time yourself with precision using this sleek and easy-to-use stopwatch. Track elapsed time, record lap times, and reset with a single click. Ideal for sports, work, or any activity requiring accurate timekeeping.",
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Stop_watch.git",
      }
    ],
    react: [
      {
        id: "react_1",
        title: "CA Profiles",
        description: "A one-stop solution for all Chartered Accountants' data. Users can hire accountants and solve their financial problems efficiently. The platform offers a user-friendly interface, allowing users to navigate through profiles, read reviews, and contact professionals directly.",
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/CAProfiles.git",
      },
      {
        id: "react_2",
        title: "Expense Tracker",
        description: "An elegant tracker that helps users monitor their expenses according to different categories. Users can add, edit, and delete expenses, providing a clear overview of their spending habits. The application is designed to be intuitive and visually appealing.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1AbUpjSbpjaQdE88B0jeEJ0tJPM36o3W3?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Expense-Tracker.git",
      },
      {
        id: "react_3",
        title: "E-commerce Website",
        description: "A foundation for your online store. This e-commerce website provides essential features to start selling products online, including product catalogs, shopping carts, and secure checkout.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1LUo-C7COsjD5bZVt-5RXEavQqzCoH0MP?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Ecommarce_project.git",
      },
      {
        id: "react_4",
        title: "Music App",
        description: "Discover, explore, and enjoy your favorite music. This app allows you to create playlists, stream music, and discover new artists with an intuitive and engaging interface.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1_3dfWZFP_SdICaCYZo-O2kwvounkwn1l?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Music-app.git",
      },
      {
        id: "react_5",
        title: "Task Management Application",
        description: "Stay organized and productive with this powerful task management application. Create to-do lists, set reminders, track progress, and collaborate with others to achieve your goals.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1St0GBFzjNi8g_eD6e8s6f2ZQKGRkcKkT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Task_mangment_application.git",
      },
      {
        id: "react_6",
        title: "Quiz App",
        description: "Test your web development skills with this comprehensive quiz app. Covering fundamental concepts of HTML, CSS, Bootstrap, and React, the app features multiple-choice questions, detailed explanations, and score tracking. Challenge yourself, identify areas for improvement, and solidify your understanding of these core web technologies.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/19xo9DVmGpRMFW1DnPEJ6K4twQabOute0?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/QuizApp_React.git",
      },
    ],
  };

  useEffect(() => {
    // Set projects based on selected category
    const fetchData = () => {
      if (selectedCategory === 'All') {
        setProjects([...projectData.html, ...projectData.javascript, ...projectData.react]);
      } else {
        setProjects(projectData[selectedCategory.toLowerCase()] || []);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects-container" data-aos="zoom-in-up">
      <h2 className='title-project '>Some <span className='about-title-name'>Projects </span> I've Built</h2>

      <div className="category-buttons ">
        <span className='category-btn mx-2 ' onClick={() => handleCategoryChange('All')}> 
          All
        </span>
        <span className='category-btn mx-2 ' onClick={() => handleCategoryChange('Html')}> 
          <span><FaHtml5 /></span>
          HTML
        </span>
        <span className='category-btn mx-2 ' onClick={() => handleCategoryChange('React')}> 
          <span><FaReact /></span> React.js
        </span>
        <span className='category-btn mx-2 ' onClick={() => handleCategoryChange('Javascript')}> 
          <span><FaJsSquare /></span> JavaScript
        </span>
      </div>

      <div className="project-cards mx-3">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p className='text-white'>{project.description}</p>
            <div className="project-details  text-end py-2">
              {project.technologies.map((tech, index) => (
                <span key={`${project.id}_${tech}_${index}`}>{tech}</span>
              ))}
            </div>
            <div className="link-buttons">
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className='mx-2 my-4 text-white'>
                View Screenshots
                <span className='mx-2 text-white'><LuScreenShare /></span>
              </a>
              <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className='mx-2 my-4 text-white'>
                Source Code <span className='fs-5 fw-bold mx-1 text-white'><FaGithub /></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
