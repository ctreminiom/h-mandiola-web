export default function () {
    return [
        {
            backgroundImage: require("@/assets/images/content-management/activities.png"),
            category: "Activities",
            categoryTheme: "warning",
            to: "/dashboard/administration/activities",
            title: "Activities",
            body:
                "Lista de actividades",
        },
        {
            backgroundImage: require("@/assets/images/content-management/prices.png"),
            category: "Prices",
            categoryTheme: "dark",
            to: "/dashboard/administration/prices",
            title: "Prices",
            body:
                "Lista de precios",
        },
        {
            backgroundImage: require("@/assets/images/content-management/clients.png"),
            category: "Clients",
            categoryTheme: "primary",
            to: "/dashboard/administration/clients",
            title: "Clients",
            body:
                "Lista de clientes",
        }
    ];
}