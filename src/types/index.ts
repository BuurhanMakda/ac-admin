export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

export type User = {
    _id: string;
    name: string;
    email: string;
    token: string;
    device_type: string;
}

export type AuthContextType = {
    isAuthenticated: boolean;
    user: null | User;
    isLoading: boolean;
    error: null | string;
    userLogin: Function;
    userLogout: Function;
};