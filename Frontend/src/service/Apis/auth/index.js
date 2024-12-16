import request from "../request";

export const getMe = async () => {
    return request.get("/auth/me");
}