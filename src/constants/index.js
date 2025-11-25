const navLinks = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Resume", type: "resume" }

];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.png",
    },
    {
        id: 2,
        img: "/icons/search.png",
    },
    {
        id: 3,
        img: "/icons/user.png",
    },
    {
        id: 4,
        img: "/icons/mode.png",
    },

];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio",
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Socials",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery",
        icon: "modern-photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact",
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Terminal",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: false,
    },
];

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },

};

const techStack = [
    {
        category: "Frontend",
        items: ["React", "Redux", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "Docker", "AWS", "Netlify", "Vercel"]
    },
    {
        category: "Other",
        items: ["Agile Methodologies", "Unit Testing", "CI/CD"]
    },
    {
        category: "Design",
        items: ["Figma", "Adobe XD", "Sketch"]
    },
    {
        category: "Languages",
        items: ["Python", "Java", "C++"]
    }
];

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "My Projects",
    icon: "/icons/briefcase.png",
    kind: "folder",
    children: [
        {
            id: 2,
            name: "Psuedo v2",
            icon: "/icons/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 3,
                    name: "My Resume.pdf",
                    icon: "/icons/pdf-file.png",
                    kind: "file",
                    fileType: "pdf",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 4,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-50",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 5,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-90",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
            ],
        },
        {
            id: 6,
            name: "Banana",
            icon: "/icons/folder.png",
            kind: "folder",
            position: "top-10 left-90",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 7,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
            ],
        },

    ]

}

const ABOUT_LOCATION = {
    id: 8,
    type: "about",
    name: "About",
    icon: "/icons/user.png",
    kind: "folder",
    children: [
        {
            id: 9,
            name: "My TikTok",
            icon: "/icons/tiktok-logo.png",
            kind: "file",
            fileType: "url",
            href: "https://www.tiktok.com/@codewithmega",
            position: "top-10 left-10",
            windowPosition: "top-[15vh] right-20"
        },
        {
            id: 10,
            name: "My YouTube",
            icon: "/icons/youtube-logo.png",
            kind: "file",
            fileType: "url",
            href: "https://www.youtube.com/@codewithmegaYT/",
            position: "top-10 left-50",
            windowPosition: "top-[15vh] right-20"
        },
        {
            id: 11,
            name: "My Github",
            icon: "/icons/github-logo.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/codewithmega",
            position: "top-10 left-90",
            windowPosition: "top-[15vh] right-20"
        },
    ]

}

const RESUME_LOCATION = {
    id: 12,
    type: "resume",
    name: "Resume",
    icon: "/icons/txt.png",
    kind: "folder",
    children: [
        {
            id: 13,
            name: "Nice Ecommerce Application",
            icon: "/icons/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 14,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 15,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 16,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
            ]
        },
    ]

}

const TRASH_LOCATION = {
    id: 17,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.png",
    kind: "folder",
    children: [
        {
            id: 18,
            name: "Nice Ecommerce Application",
            icon: "/icons/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 19,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 20,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
                {
                    id: 21,
                    name: "Nike Project.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },
            ]
        },
    ]

}

const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,

};

export { navLinks, locations, navIcons, dockApps, WINDOW_CONFIG, INITIAL_Z_INDEX, techStack };