import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from "@angular/material";

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
