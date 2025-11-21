const navLinks = [
    {id: 1, name: "Portfolio"},
    {id: 2, name: "Contact"},
    {id: 3, name: "Projects"}

];

const navIcons = [
    {
        id: 1,
        img: "/public/icons/wifi.png",
    },
    {
        id: 2,
        img: "/public/icons/search.png",
    },
    {
        id: 3,
        img: "/public/icons/user.png",
    },
    {
        id: 4,
        img: "/public/icons/mode.png",
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
        name: "Articles",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery",
        icon: "photos.png",
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
        name: "Skills",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: false,
    },
]

export { navLinks, navIcons, dockApps };