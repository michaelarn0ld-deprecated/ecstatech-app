import htmlIcon from "../images/modal/modal-icons/html-icon.svg"
import cssIcon from "../images/modal/modal-icons/css-icon.svg"
import jsIcon from "../images/modal/modal-icons/javascript-icon.svg"
import reactNative from "../images/modal/modal-icons/react-native.svg"
import reactIcon from "../images/modal/modal-icons/react-icon.svg"
import nodeIcon from "../images/modal/modal-icons/node-icon.svg"
import phpIcon from "../images/modal/modal-icons/laravel-icon.svg"
import pythonIcon from "../images/modal/modal-icons/python-icon.svg"
import tableauIcon from "../images/modal/modal-icons/tableau-icon.svg"
import appscriptIcon from "../images/modal/modal-icons/apps-script.svg"
import webMain from "../images/modal/modal-main/webdev-main.svg"
import mobileMain from "../images/modal/modal-main/mobile-main.svg"
import dataMain from "../images/modal/modal-main/data-main.svg"
import automationMain from "../images/modal/modal-main/automation-main.svg"

const modalContent = {
  webDev: {
    title: "Web Development",
    logo: webMain,
    problems: [
      "Tailored web experiences from scratch",
      "Website performance and code audits",
      "Integrated internal business tools",
      "Search engine optimization",
    ],
    icons: [
      ["HTML5", htmlIcon],
      ["CSS3", cssIcon],
      ["Javascript", jsIcon],
      ["React", reactIcon],
      ["Node", nodeIcon],
      ["Laravel", phpIcon],
    ],
    format: "three",
  },
  mobileDev: {
    title: "Mobile Apps",
    logo: mobileMain,
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
    title: "Data Analytics",
    logo: dataMain,
    problems: [
      "Gain insights from unused business data",
      "Discover trends that predict customer behavior",
      "Make business proactive instead of reactive",
      "Optimize business strategies and operations",
    ],
    icons: [
      ["Python", pythonIcon],
      ["Tableau", tableauIcon],
    ],
    format: "two",
  },
  automation: {
    title: "Automation",
    logo: automationMain,
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
