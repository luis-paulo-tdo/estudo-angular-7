import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule } from "@angular/material";

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
