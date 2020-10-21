import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { map } from "rxjs/operators";
import { CorporativosService } from "./_services/corporativos.service";

@Component({
    selector: "app-corporativos",
    templateUrl: "./corporativos.component.html",
    styleUrls: ["./corporativos.component.scss"],
})
export class CorporativosComponent implements OnInit {
    public ColumnMode = ColumnMode;
    public limitRef = 10;
    public rows = [];

    public searchForm: FormGroup;

    constructor(
        private corporativosService: CorporativosService,
        private spinner: NgxSpinnerService,
        private fb: FormBuilder
    ) {
        this.initializeSearchForm();
    }

    ngOnInit(): void {
        this.getTableData();
    }

    private getTableData(): void {
        this.spinner.show();
        this.corporativosService
            .getCorporativos()
            .pipe(
                map(({ data }) => {
                    return data.map((element) => {
                        const {
                            id,
                            S_NombreCorto: nombreCorto,
                            S_NombreCompleto: nombreCompleto,
                            S_LogoURL: logoURL,
                            S_SystemUrl: url,
                            D_FechaIncorporacion: incorporacion,
                            created_at: creadoEn,
                            user_created: { S_Nombre: creadoPor },
                            asignado: { S_Nombre: asignadoA },
                            S_Activo: status,
                        } = element;

                        return {
                            id,
                            nombreCorto,
                            nombreCompleto,
                            logoURL,
                            url: `https://devschoolcloud.com/sa/#/${url}`,
                            incorporacion,
                            creadoEn,
                            creadoPor,
                            asignadoA,
                            status,
                        };
                    });
                })
            )
            .subscribe((registers: []) => {
                this.rows = registers;
                this.rows = [...this.rows];
                this.spinner.hide();
            });
    }

    private initializeSearchForm(): void {
        this.searchForm = this.fb.group({
            listStatus: [{ value: "todos", disabled: true }],
            createdBy: [{ value: "todos", disabled: true }],
            assignedTo: [{ value: "todos", disabled: true }],
        });
    }
}
