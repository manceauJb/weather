import cookies from "js-cookie";
import { User } from "./userInterface";

export const getUserFromCookie = (): User | null => {
    const cookie = cookies.get("auth");
    if (!cookie) return null;
    return JSON.parse(cookie);
};

export const setUserCookie = (user: User) => {
    const json = JSON.stringify(user);
    cookies.set("auth", json, { expires: 1 / 24 });
};

export const removeUserCookie = () => cookies.remove("auth");
