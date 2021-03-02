import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule } from "@angular/material";
import { MatIconModule, MatInputModule, MatListModule, MatSelectModule } from "@angular/material";

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
