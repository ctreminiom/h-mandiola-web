export default function () {
    return [
        {
            backgroundImage: require("@/assets/images/content-management/consecutives.png"),
            category: "User",
            categoryTheme: "info",
            title: "Edit | Create User",
            to: "/dashboard/security/ManageUser",
            body:
                "Edite o cree usuarios",
        },
        {
            backgroundImage: require("@/assets/images/content-management/rooms.png"),
            category: "Password",
            categoryTheme: "dark",
            title:
                "Change Password",
            to: "/dashboard/security/ChangePassword",
            body:
                "Cambie la contrasena de un usuario",
        }

    ];
}