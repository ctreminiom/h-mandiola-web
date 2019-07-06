export default function () {
    return [
        {
            backgroundImage: require("@/assets/images/content-management/logs.png"),
            category: "Logs",
            categoryTheme: "warning",
            to: "/dashboard/queries/logs",
            title: "Logs",
            body:
                "Detalle de bitacora",
        },
        {
            backgroundImage: require("@/assets/images/content-management/errors.png"),
            category: "Errors",
            categoryTheme: "dark",
            to: "/dashboard/queries/errors",
            title: "Errors",
            body:
                "Detalle de errores",
        },
        {
            backgroundImage: require("@/assets/images/content-management/active-clients.png"),
            category: "Clients",
            categoryTheme: "primary",
            to: "/dashboard/queries/clients",
            title: "Clients",
            body:
                "Detalle de clientes",
        },
        {
            backgroundImage: require("@/assets/images/content-management/rooms-ready.png"),
            category: "Rooms",
            categoryTheme: "info",
            to: "/dashboard/queries/rooms",
            title: "Rooms",
            body:
                "Detalle de habitaciones",
        }
    ];
}