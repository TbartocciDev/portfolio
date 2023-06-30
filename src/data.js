const iconColor = "ffffff"
const iconSize = 128
const contactLinkColor = "ffffff"
const contactLinkSize = 128
const trelloColor = "325df9"
const expressColor = "ffffff"

const Data = {
    nav: {
        logoURL: "",
        pageName: "Tommy Bartocci",
        links: [
            {
                title: "Home",
                url: "/"
            },
            {
                title: "About",
                url: "/About"
            },
            {
                title: "Contact",
                url: "/Contact"
            },
        ]
    },
    homePage: {
        introSection: {
            header: "Greetings, I'm Tommy!",
            subheader: "Software Engineer from New Jersey.",
            summary: "I specialize in iOS and web development.",
            statusData: {
                status: "open",
                info: "Looking for a new opportunity"
            }
        },
        projectsSection: {
            header: "Applications",
            subheader: "A selection of things I've built",
            projects: [
                {   
                    name: "Some App",
                    role: "Sole Developer & Designer",
                    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum`,
                    hookScreen: "",
                    homeScreen: "/mockups/home",
                    previews: [
                        "/mockups/encryptorrdark.png",
                        "/mockups/howtodark.png",
                        "/mockups/aboutdark.png",
                    ],
                    technologies: [
                        "Xcode",
                        "Swift",
                        "UiKit",
                        "API Integration",
                        "Core Data",
                        "Xcode",
                        "Swift",
                        "UiKit",
                        "API Integration",
                    ],
                    links: [
                        {
                            title: "View Project",
                            url: "https://www.google.com/"
                        },
                        {
                            title: "View Code",
                            url: "https://www.google.com/"
                        },
                    ],
                    projectType: "On iOS Store",
                    appType: "iOS",
                },
                {   
                    name: "The Encryptor",
                    role: "Sole Developer & Designer",
                    summary: `An iOS App made to encrypt and decrypt text using a series of cypher shifts, and
                    alphabets randomly constructed. The app itself is not a messenger, but a tool that will transform
                    the standard English alphabet into something unreadable, then back to readable.`,
                    hookScreen: "/mockups/hook.png",
                    homeScreen: "/mockups/home",
                    previews: [
                        "/mockups/encryptor",
                        "/mockups/howto",
                        "/mockups/about",
                    ],
                    technologies: [
                        "Swift",
                        "Xcode",
                        "Model View Controller(MVC)",
                        "Core Data",
                        "UiKit",
                        "Light/Dark Support"

                    ],
                    links: [
                        {
                            title: "View Project",
                            url: "https://www.google.com/"
                        },
                        {
                            title: "View Code",
                            url: "https://www.google.com/"
                        },
                    ],
                    projectType: "On iOS Store",
                    appType: "iOS",
                },
                {   
                    name: "Geographi",
                    role: "Sole Developer & Designer",
                    summary: `An iOS App and game intended for teaching the user to recognize every countries'
                    flag through memorization based mini games. The data used for the App is pulled from a 
                    publically available API and munipulated to fit whats needed in my app.`,
                    hookScreen: "",
                    previews: [
                        "/iPhone.png",
                        "/iPhone.png",
                        "/iPhone.png",
                    ],
                    technologies: [
                        "Swift",
                        "Xcode",
                        "Model View Controller(MVC)",
                        "Core Data",
                        "UiKit",
                        "API Integration",

                    ],
                    links: [
                        {
                            title: "View Project",
                            url: "https://www.google.com/"
                        },
                        {
                            title: "View Code",
                            url: "https://www.google.com/"
                        },
                    ],
                    projectType: "On iOS Store",
                    appType: "iOS",
                },
                {   
                    name: "Movie Database",
                    role: "Sole Developer & Designer",
                    summary: `A spin off the typical first API Integration App everyone makes at some point. 
                    This App saves the last 5 movies you have viewed, as well as follows best practices for hitting 
                    an API.`,
                    hookScreen: "",
                    previews: [
                        "/iPhone.png",
                        "/iPhone.png",
                        "/iPhone.png",
                    ],
                    technologies: [
                        "Swift",
                        "Xcode",
                        "Model View Controller(MVC)",
                        "Core Data",
                        "UiKit",
                        "API Integration",

                    ],
                    links: [
                        {
                            title: "View Project",
                            url: "https://www.google.com/"
                        },
                        {
                            title: "View Code",
                            url: "https://www.google.com/"
                        },
                    ],
                    projectType: "Personal Project",
                    appType: "iOS",
                },
            ]

        }
    },
    aboutPage: {
        introSection: {
            header: "About",
            summary: `Developing applications is something that truly fascinates me on a daily basis, each task is like 
            solving a piece to a puzzle. I love learning about new technologies and concepts along the way as well.`,
            background: `I believe my background helped shape me for this type of industry. I grew up in two different worlds: 
            One with creative freedom that my family provided me,
            and one with discipline and work ethic the world of sports provided me.`,
            finalWords: "Thank you for visiting my website! If you have any projects, comments or suggestions, please reach out!"
        },
        descriptionSection: {
            intro: "An NJ based devloper who...",
            possibleDescriptions: [
                {string: "is an animal lover", emoji:"🐿"},
                {string: "is a big Star Wars nerd", emoji:"🔭"},
                {string: "loves the great outdoors", emoji:"🏔"},
                {string: "admires architecture", emoji:"🕌"},
                {string: "tries new foods", emoji:"🧆"},
                {string: "loves music", emoji:"🎧"},
                {string: "is a sports fanatic", emoji:"⚽️🏈🏀"},
                {string: "craves adventure", emoji:"🛣️"},
                {string: "reads often", emoji:"📚"},
                {string: "cherishes friends and family", emoji:"👨‍👩‍👧‍👦"},
            ]
        }, 
        technologiesSection: {
            header: "Technologies",
            technologies: [
                {name: "Swift", url:"https://icongr.am/devicon/swift-original.svg?size=128&color=currentColor"},
                {name: "React", url:"https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"},
                {name: "JavaScript", url:"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"},
                {name: "Python", url:"https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"},
                {name: "HTML", url:"https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"},
                {name: "CSS", url:"https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"},
                {name: "Django", url:"https://icongr.am/devicon/django-original.svg?size=128&color=currentColor"},
                {name: "Express", url:"https://icongr.am/devicon/express-original.svg?size="+iconSize+"&color="+expressColor},
                {name: "Trello", url:"https://icongr.am/devicon/trello-plain.svg?size="+iconSize+"&color="+trelloColor},
                {name: "Git", url:"https://icongr.am/devicon/git-original.svg?size=128&color=currentColor"},
                {name: "Heroku", url:"https://icongr.am/devicon/heroku-original.svg?size=128&color=currentColor"},
                {name: "MongoDB", url:"https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"},
            ]

        },
        outsideSection: {

        }
    }
}
const Old = {
    home: {
        title: "Tommy Bartocci",
        intro: "I am a NJ based devloper who...",
    },
    apps: {
        header: "Applications",
        subheader: "Some iOS and web apps that I'm proud of",
        projects: [
            {
                title: "The encryptor",
                summary: "An iOS app desgined to manually encrypt, and decrypt text using custom alphabets.",
                githubLink: "",
                liveLink: "",
                technologies: [
                    
                ]
            },
            {
                title: "Geographi",
                summary: "An iOS game that involves the flags of each country, and the correct spelling.",
                githubLink: "",
                technologies: [
                    
                ]
            },
            {
                title: "tommybartocci.com",
                // summary: `Previously my website was hosted by squarespace becuase it was a quick fix to scale up something. 
                // However, it didn't reflect my skills as a developer and it was very limited in actually design aspects. 
                // The obvious next step for me was to build my own site from scratch and voila, here it is.`,
                summary: "My own personal website. Designed and coded by me",
                githubLink: "",
                liveLink: "",
                technologies: [
                    {name: "React", iconURL:"https://icongr.am/material/react.svg?size="+iconSize+"&color="+iconColor},
                    {name: "JavaScript", iconURL:"https://icongr.am/devicon/javascript-plain.svg?size="+iconSize+"&color="+iconColor},
                    {name: "HTML", iconURL:"https://icongr.am/devicon/html5-plain.svg?size="+iconSize+"&color="+iconColor},
                    {name: "CSS", iconURL:"https://icongr.am/devicon/css3-plain.svg?size="+iconSize+"&color="+iconColor},
                    {name: "Git", iconURL:"https://icongr.am/devicon/git-plain.svg?size="+iconSize+"&color="+iconColor},
                ]
            },
        ]
    },
    skills: {
        header: "Skills & Tools",
        subheader: "Some skills, tools and technologies I use to make ideas become reality:",
        list:[
            {name: "Swift", iconURL:"https://icongr.am/devicon/swift-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "React", iconURL:"https://icongr.am/material/react.svg?size="+iconSize+"&color="+iconColor},
            {name: "Python", iconURL:"https://icongr.am/devicon/python-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "JavaScript", iconURL:"https://icongr.am/devicon/javascript-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "HTML", iconURL:"https://icongr.am/devicon/html5-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "CSS", iconURL:"https://icongr.am/devicon/css3-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Django", iconURL:"https://icongr.am/devicon/django-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Express", iconURL:"https://icongr.am/devicon/express-original.svg?size="+iconSize+"&color="+iconColor},
            {name: "Git", iconURL:"https://icongr.am/devicon/git-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Heroku", iconURL:"https://icongr.am/devicon/heroku-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "MongoDB", iconURL:"https://icongr.am/devicon/mongodb-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Trello", iconURL:"https://icongr.am/devicon/trello-plain.svg?size="+iconSize+"&color="+iconColor},
        ],
        originalList: [
            {name: "Swift", iconURL:"https://icongr.am/devicon/swift-original.svg?size=128&color=currentColor"},
            {name: "React", iconURL:"https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"},
            {name: "JavaScript", iconURL:"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"},
            {name: "Python", iconURL:"https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"},
            {name: "HTML", iconURL:"https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"},
            {name: "CSS", iconURL:"https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"},
            {name: "Django", iconURL:"https://icongr.am/devicon/django-original.svg?size=128&color=currentColor"},
            {name: "Express", iconURL:"https://icongr.am/devicon/express-original.svg?size="+iconSize+"&color="+expressColor},
            {name: "Trello", iconURL:"https://icongr.am/devicon/trello-plain.svg?size="+iconSize+"&color="+trelloColor},
            {name: "Git", iconURL:"https://icongr.am/devicon/git-original.svg?size=128&color=currentColor"},
            {name: "Heroku", iconURL:"https://icongr.am/devicon/heroku-original.svg?size=128&color=currentColor"},
            {name: "MongoDB", iconURL:"https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"},
        ]
    },
    contact: {
        header: "Contact",
        subheader: "Want to get in touch? Feel free to contact me",
        salutations: `Thank you for checking out my site. I hope to get the opportunity to build something amazing together!
        Or are you feeling social? Feel free to reach out through the links below and let's chat.`,
        contactLinks: [
            {
                title: "LinkedIn",
                photoURL: "https://icongr.am/material/linkedin.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://www.linkedin.com/in/thomas-bartocci-884957162"
            },
            {
                title: "Github",
                photoURL: "https://icongr.am/material/github.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://github.com/TbartocciDev"
            },
            {
                title: "Resume",
                photoURL: "https://icongr.am/material/pdf-box.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://drive.google.com/file/d/1GX8n5eQKGboTRypYrEGAp5It0A7L9CEE/view?usp=sharing"
            },
            {
                title: "Email",
                photoURL: "https://icongr.am/material/email-outline.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: ""
            }
        ]
    },
}

module.exports = { Data }