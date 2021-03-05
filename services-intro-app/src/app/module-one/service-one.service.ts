import { Injectable } from "@angular/core";

@Injectable()
export class ServiceOne {

    public numberValue: number;

    constructor() {
        this.numberValue = Math.round(Math.random() * 1000);
        console.log(`[ServiceOne] Constructor [${this.numberValue}]`);
    }
}
