import project01 from "./../../img/projects/01.jpg";
import project001 from "./../../img/projects/001.jpg";
import project01Big from "./../../img/projects/01-big.jpg";
import project001Big from "./../../img/projects/01-big.jpg";
import project02 from "./../../img/projects/02.jpg";
import project02Big from "./../../img/projects/02-big.jpg";
import project03 from "./../../img/projects/03.jpg";
import project03Big from "./../../img/projects/03-big.jpg";
import project04 from "./../../img/projects/04.jpg";
import project04Big from "./../../img/projects/04-big.jpg";

const projects = [
    {
        title: 'Game',
        skills: 'JavaScript, React',
        img: project01,
        imgBig: project01Big,
        gitHubLink: "https://github.com/ania0005/vite-myProject/tree/main/src/components/Game",
        siteLink: "https://ania0005.github.io/vite-myProject/#/gameview"
    },
    {
        title: 'Wetter',
        skills: 'JavaScript, React',
        img: project04,
        imgBig: project04Big,
        gitHubLink: "https://github.com/ania0005/vite-myProject/tree/main/src/components/Weather",
        siteLink: "https://ania0005.github.io/vite-myProject/#/weather"
    },
    {
        title: 'Wishlist',
        skills: 'TypeScript, JavaScript, Java, Spring, MySQL, React',
        img: project001,
        imgBig: project001Big,
        gitHubLink: "https://github.com/ania0005/Wishlist_project" 
        
    }, 
    {
        title: 'Cake Shop',
        skills: 'TypeScript, JavaScript, React, HTML, CSS',
        img: project02,
        imgBig: project02Big,
        gitHubLink: "https://github.com/ania0005/Online-cake-shop",
        siteLink: "https://ania0005.github.io/Online-cake-shop/"
    },
    {
        title: 'My portfolio',
        skills: 'JavaScript, React, HTML, CSS',
        img: project03,
        imgBig: project03Big,
        gitHubLink: "https://github.com/ania0005",
        siteLink: "https://ania0005.github.io/MyPortfolio/"
    }
];
export {projects};