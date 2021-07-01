import htmlIcon from "../images/modal/modal-icons/html-icon.svg"
import cssIcon from "../images/modal/modal-icons/css-icon.svg"
import jsIcon from "../images/modal/modal-icons/javascript-icon.svg"
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
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
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
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    icons: [["React Native", reactIcon]],
    format: "one",
  },
  dataAnaltyics: {
    title: "Data Analytics",
    logo: dataMain,
    problems: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
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
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    icons: [
      ["Python", pythonIcon],
      ["Google Apps Script", appscriptIcon],
    ],
    format: "two",
  },
}

export default modalContent
