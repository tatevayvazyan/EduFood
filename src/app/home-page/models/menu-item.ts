export interface MenuItem {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}

export enum Role {
    admin = "ADMIN",
    customer = "CUSTOMER"
}