import htmlIcon from "../images/modal/modal-icons/html-icon.svg"
import cssIcon from "../images/modal/modal-icons/css-icon.svg"
import jsIcon from "../images/modal/modal-icons/javascript-icon.svg"
import reactNative from "../images/modal/modal-icons/react-native.svg"
import reactIcon from "../images/modal/modal-icons/react-icon.svg"
import phpIcon from "../images/modal/modal-icons/laravel-icon.svg"
import laravelIcon from "../images/modal/modal-icons/php-icon.svg"
import mysqlIcon from "../images/modal/modal-icons/mysql-icon.svg"
import pythonIcon from "../images/modal/modal-icons/python-icon.svg"
import appscriptIcon from "../images/modal/modal-icons/apps-script.svg"
import webMain from "../images/modal/modal-main/webdev-main.svg"
import mobileMain from "../images/modal/modal-main/mobile-main.svg"
import dataMain from "../images/modal/modal-main/data-main.svg"
import automationMain from "../images/modal/modal-main/automation-main.svg"

const modalContent = {
  webDev: {
    title: "Frontend Apps",
    logo: webMain,
    content:
      "You deserve a pixel-perfect web presence that reflects how awesome your business is! A good website should be functional, fast, and secure. Whether your project is dynamic and complex, or is a smaller landing page, I work closely with you to make sure we hit the mark.",
    problems: [
      "Tailored web experiences from scratch",
      "E-commerce site setup and maintenance",
      "Updating and maintaining an existing website",
      "Search engine optimization",
    ],
    icons: [
      ["HTML5", htmlIcon],
      ["CSS3", cssIcon],
      ["Javascript", jsIcon],
      ["React", reactIcon],
    ],
    format: "two",
  },
  mobileDev: {
    title: "Mobile Apps",
    logo: mobileMain,
    content:
      "A strong mobile application can play a critical role in the success of your business. I stay up to date with the latest in app development practices to create personalized mobile experiences. The result? You deliver a robust product to meet the needs of your users.",
    problems: [
      "Cross-platform apps built for iOS and Android",
      "Pixel-perfect user experiences",
      "Adding features to existing apps",
      "Application performance and code audits",
    ],
    icons: [["React Native", reactNative]],
    format: "one",
  },
  dataAnaltyics: {
    title: "Backend Services",
    logo: dataMain,
    content:
      "While data can be one of a business’s most valuable assets, managing and accessing it when you need it can seem like a daunting task. Let me take care of the headache and set up the infrastructure you need to turn information into action.",
    problems: [
      "User registration and authentication",
      "Creating, reading, updating, and deleting data",
      "Utilizing data inside of a website or application",
      "Optimize business processes and operations",
    ],
    icons: [
      ["PHP", phpIcon],
      ["MySQL", mysqlIcon],
      ["Laravel", laravelIcon],
    ],
    format: "three",
  },
  automation: {
    title: "Automation",
    logo: automationMain,
    content:
      "Repetitive, manual processes within your business are not only tedious but can also be a source of error and inconsistency. I help fix this by building business solutions that integrate, automate, and extend your Google Workspace or Microsoft Office environments.",
    problems: [
      "Streamline business procedures",
      "Automate report generation and distribution.",
      "Find and rectify manual errors",
      "Eliminate time-intensive repetitive processes",
    ],
    icons: [
      ["Python", pythonIcon],
      ["Apps Script", appscriptIcon],
    ],
    format: "two",
  },
}

export default modalContent
