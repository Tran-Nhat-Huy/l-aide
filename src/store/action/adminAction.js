import actionType from "./actionType";

export const adminLoginSuccess = (adminInfo) => ({
    type: actionType.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo,
});

export const adminLoginFailure = () => ({
    type: actionType.ADMIN_LOGIN_FAILURE,
});

export const processLogout = () => ({
    type: actionType.PROCESS_LOGOUT,
});

export const userLoginSuccess = (userInfo) => ({
    type: actionType.USER_LOGIN_SUCCESS,
    userInfo: userInfo,
});
