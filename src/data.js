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
            // {
            //     title: "Blog",
            //     url: "/Blog"
            // },
            {
                title: "Contact",
                url: "/Contact"
            },
        ]
    },
    heroSection: {
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
                hookScreen: "/mockups/encryptor/hook",
                name: "The Encryptor",
                logo: "/mockups/encryptor/logo.png",
                brief: "An app that allows users to read and write secret messages.",
                role: "Sole Developer & Designer",
                summary: `An iOS App made to encrypt and decrypt text using a series of cypher shifts, and
                alphabets randomly constructed. The app itself is not a messenger, but a tool that will transform
                the standard English alphabet into something unreadable, then back to readable.`,
                technologies: [
                    "Swift",
                    "Xcode",
                    "Model View Controller(MVC)",
                    "Core Data",
                    "UiKit",
                    "Light/Dark Support"

                ],
                homeScreen: "/mockups/encryptor/home",
                howItWorks: [
                    {img: "/mockups/encryptor/howto", title: "Write Messages", summary: "Users can write messages"},
                    {img: "", title: "Read Messages", summary: "Users can read messages"}
                ],
                previews: [
                    "/mockups/encryptor/encryptor",
                    "/mockups/encryptor/howto",
                    "/mockups/encryptor/about",
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
            // {   
            //     name: "Geographi",
            //     role: "Sole Developer & Designer",
            //     summary: `An iOS App and game intended for teaching the user to recognize every countries'
            //     flag through memorization based mini games. The data used for the App is pulled from a 
            //     publically available API and munipulated to fit whats needed in my app.`,
            //     hookScreen: "/mockups/encryptor/hook",
            //     homeScreen: "/mockups/encryptor/home",
            //     previews: [
            //         "/iPhone.png",
            //         "/iPhone.png",
            //         "/iPhone.png",
            //     ],
            //     technologies: [
            //         "Swift",
            //         "Xcode",
            //         "Model View Controller(MVC)",
            //         "Core Data",
            //         "UiKit",
            //         "API Integration",

            //     ],
            //     links: [
            //         {
            //             title: "View Project",
            //             url: "https://www.google.com/"
            //         },
            //         {
            //             title: "View Code",
            //             url: "https://www.google.com/"
            //         },
            //     ],
            //     projectType: "On iOS Store",
            //     appType: "iOS",
            // },
            // {   
            //     name: "Movie Database",
            //     role: "Sole Developer & Designer",
            //     summary: `A spin off the typical first API Integration App everyone makes at some point. 
            //     This App saves the last 5 movies you have viewed, as well as follows best practices for hitting 
            //     an API.`,
            //     hookScreen: "/mockups/encryptor/hook",
            //     homeScreen: "/mockups/encryptor/home",
            //     previews: [
            //         "/iPhone.png",
            //         "/iPhone.png",
            //         "/iPhone.png",
            //     ],
            //     technologies: [
            //         "Swift",
            //         "Xcode",
            //         "Model View Controller(MVC)",
            //         "Core Data",
            //         "UiKit",
            //         "API Integration",

            //     ],
            //     links: [
            //         {
            //             title: "View Project",
            //             url: "https://www.google.com/"
            //         },
            //         {
            //             title: "View Code",
            //             url: "https://www.google.com/"
            //         },
            //     ],
            //     projectType: "Personal Project",
            //     appType: "iOS",
            // },
        ],
    },
    resumeSection: {
        experiences: [
            {type: "work", title: "Apprentice", company:"General Assembly", date: "Mar 2023 - Jun 2023", description: "Software Engineering Bootcamp"},
            {type: "work", title: "Independent Developer", company:"Self Employed", date: "2020 - Present", description: "Self taught iOS development. Designing, developing, deploying apps."},
            {type: "work", title: "Florist", company:"Angelones Florist", date: "Feb 2021 - Present", description: "General Florist"},
            {type: "education", title: "Bootcamp", company:"General Assembly", date: "Mar 2023 - Jun 2023", description: "Bootcamp and apprenticeship. JavaScript, React, HTML, CSS."},    
            {type: "education", title: "Async Course", company:"Udemy", date: "Completed Jan 2022", description: "iOS 14 & Swift - The Complete iOS Developer Bootcamp"},    
            {type: "education", title: "Associates Degree", company:"Raritan Valley Community College", date: "Sep 2017 - May 2020", description: "General Studies: Arts & Sciences"},
        ]
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
        outsideWork: {
            title: "Outside of Work",
            subjects: ["Hobbies","Interests"],
            all: [{
                category:"hobbies",title: "Soccer/Sports", summary: `In reality I have played just about every sport, 
                and time to time still play others but most of the time I play soccer.`},
                {category:"hobbies",title: "Billiards", summary: `Fell in love with this game in college, a great way
                for me to blow off smoke and exercise my mind and body at the same time.`},
                {category:"hobbies",title: "Language Learning", summary: `I grew up immersed in a diverse friend group.
                I love learning of other cultures and traditions and what better way than learning
                the basics of their language?`},
                {category:"hobbies",title: "Cooking", summary: `This is a fairly new hobby for me, but I found that
                trying to cook different foods is fun, and beneficial to keep clean things in my body.`},
                {category:"interests",title: "Music", summary: `There is such a wide and diverse range of music available
                to everyone at the touch of a botttom. I love finding rabbit holes of new genres/artists I
                enjoy.`},
                {category:"interests",title: "Photography/Videography", summary: `With plans to make these a hobby one 
                day. However, for now I am happy to observe quality landscape shots.`},
                {category:"interests",title: "History", summary: `I always found it interesting how things came to be. There 
                are so many interesting people and places to learn of as well.`},
                {category:"interests",title: "Nature", summary: `Getting out and feeling/watching the natural world 
                is a core interest of mine. I have kept various animals over the years like ducks and even an iguana.`},
            ]
        }
    },
    blogPage: {
        colors: ["#680568b3","#8b6c06b3",,"#068b35b3"],
        blogs: [
            {
                num:"1",
                header: {
                    title: "My experience learning about prefetching and batches",
                    subject: "iOS development", 
                    date: "Jul 18, 2023", 
                    img: ""
                },
            },
            {
                num:"2",
                header: {
                    title: "My experience learning about prefetching and batches",
                    subject: "iOS development", 
                    date: "Jul 18, 2023", 
                    img: ""
                },
            },
            {
                num:"3",
                header: {
                    title: "My experience learning about prefetching and batches",
                    subject: "iOS development", 
                    date: "Jul 18, 2023", 
                    img: ""
                },
            },
        ]
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