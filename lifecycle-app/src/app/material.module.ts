import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule } from "@angular/material";
import { MatSlideToggleModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule } from "@angular/material";

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule { }
