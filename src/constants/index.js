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
        icon: "facetime.png",
        canOpen: true,
    },
    {
        id: "gallery",
        name: "Gallery",
        icon: "modern-photos.png",
        canOpen: true,
    },
    {
        id: "resume",
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
    gallery: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
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
            icon: "/icons/new-folder.png",
            kind: "folder",
            windowPosition: "top-8 right-13",
            position: "top-10 left-5",
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
            name: "Coming Soon...",
            icon: "/icons/new-folder.png",
            kind: "folder",
            position: "top-10 left-90",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 7,
                    name: "What is coming soon.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    subtitle: "Something is coming soon... - CodeWithMEGA"
                },
            ],
        },

    ]

}

const ABOUT_LOCATION = {
    id: 8,
    type: "about",
    name: "My Socials",
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
    name: "AI Revolution",
    icon: "/icons/txt.png",
    kind: "folder",
    children: [
        {
            id: 22,
            name: "Some AI Achievements.txt",
            icon: "/icons/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-40",
            subtitle: `AI has reached major achievements in recent years. It can now understand and generate human like language create realistic images and videos and help doctors detect diseases earlier. AI also made progress in robotics self driving systems and game playing showing strong reasoning and decision making abilities. These achievements prove how fast AI is advancing and how deeply it is shaping technology and daily life.`
        },
        {
            id: 13,
            name: "Top AI Secrets",
            icon: "/icons/new-folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[15vh] right-20",
            children: [
                {
                    id: 14,
                    name: "How AI Learns.txt",
                    icon: "/icons/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    subtitle: `AI learns by analyzing large amounts of data.  
It uses a model to make predictions or decisions.  
The model compares its predictions to correct answers.  
It adjusts internal parameters based on errors it made.  
This training repeats many times to improve performance.  
Eventually the AI can make accurate predictions on new data.
`
                },
                {
                    id: 15,
                    name: "Amazon HQ.jpeg",
                    icon: "/icons/amazon-hq.jpeg",
                    kind: "file",
                    fileType: "txt",
                    image: "/icons/amazon-hq.jpeg",
                    position: "top-10 left-50",
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
                    name: "BAGEL.png",
                    icon: "/icons/google.jpg",
                    image: "/icons/google.jpg",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-80",
                    description: [
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                        "The Nike BANANA Cost a lot more than Adidas bananas",
                    ]
                },{
                    id: 16,
                    name: "Nvidia HQ.png",
                    icon: "/icons/nvidia.jpg",
                    image: "/icons/nvidia.jpg",
                    kind: "file",
                    fileType: "txt",
                    position: "top-40 left-10",
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
    icon: "/icons/bin.png",
    kind: "folder",
    children: [
        {
            id: 18,
            name: "Nice Ecommerce Application",
            icon: "/icons/new-folder.png",
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