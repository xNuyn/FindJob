import request from "../request";

export const updateUser = async (id, dtoUser) => {
    return request.patch(`/users/${id}`, dtoUser);
}
