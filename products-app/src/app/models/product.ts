import { Department } from "./department";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    department: Department;
}
