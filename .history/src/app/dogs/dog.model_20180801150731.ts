export interface UserModel {
    status: string,
    message: {
        [key: string]: string[]
    };
}
