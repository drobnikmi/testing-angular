export interface DogModel {
    status: string,
    message: {
        [key: string]: string[]
    };
}
