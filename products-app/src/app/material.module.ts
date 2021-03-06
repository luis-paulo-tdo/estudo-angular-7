import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatTabsModule } from "@angular/material";
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
        MatSlideToggleModule,
        MatTabsModule
    ]
})
export class MaterialModule { }
