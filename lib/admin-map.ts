const adminMap = [
    {
        id: 1,
        title: "Dashboard",
        icon: "/images/admin/dashboard.svg",
        link: "/admin",
    },
    {
        id: 2,
        title: "Data Manager",
        subList: [
            {
                title: "Manage Services",
                link: '/admin/data-manager/services',
                icon: "/images/admin/dashboard.svg",
            },
            {
                title: "Upload Data",
                link: '/admin/data-manager/upload-data',
                icon: "/images/admin/dashboard.svg",
            },
        ],
        icon: "/images/admin/dashboard.svg",
        link: "/",
    },
    {
        id: 3,
        title: "User Management",
        icon: "/images/admin/dashboard.svg",
        link: "/admin/user-management",
    },
    {
        id: 4,
        title: "Grant Letter",
        icon: "/images/admin/dashboard.svg",
        link: "/admin/grant-letter",
    },
];

export default adminMap;
