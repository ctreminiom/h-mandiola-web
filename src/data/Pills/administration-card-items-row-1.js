export default function () {
    return [
        {
            backgroundImage: require("@/assets/images/content-management/consecutives.png"),
            category: "Consecutives",
            categoryTheme: "info",
            title: "Consecutives",
            to: "/dashboard/administration/consecutives",
            body:
                "Lista de consecutivos",
        },
        {
            backgroundImage: require("@/assets/images/content-management/rooms.png"),
            category: "Rooms",
            categoryTheme: "dark",
            title:
                "Rooms",
            to: "/dashboard/administration/rooms",
            body:
                "Lista de habitaciones",
        }

    ];
}