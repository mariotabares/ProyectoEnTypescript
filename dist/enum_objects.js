"use strict";
//Enum Para crear listas
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 0] = "User";
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["SuperAdmin"] = 2] = "SuperAdmin";
})(Roles || (Roles = {}));
// Object 
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
