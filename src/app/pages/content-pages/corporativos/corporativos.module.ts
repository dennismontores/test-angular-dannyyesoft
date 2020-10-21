import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CorporativosRoutingModule } from "./corporativos-routing.module";
import { CorporativosComponent } from "./corporativos.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CorporativosRoutingModule,
        NgxDatatableModule,
    ],
    exports: [CorporativosComponent],
    declarations: [CorporativosComponent],
    providers: [],
})
export class CorporativosModule {}
