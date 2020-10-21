import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { ContactoData } from "../_models/contacto-data.interface";

@Injectable({
    providedIn: "root",
})
export class CorporativosDetalleService {
    constructor(private http: HttpClient) {}

    updateContacto(
        idContacto: number,
        contacto: ContactoData
    ): Observable<any> {
        return this.http.put(
            `${environment.apiURL}/contactos/${idContacto}`,
            contacto
        );
    }

    deleteContacto(idContacto: number): Observable<any> {
        return this.http.delete(
            `${environment.apiURL}/contactos/${idContacto}`
        );
    }

    addContact(contacto: ContactoData): Observable<any> {
        return this.http.post(`${environment.apiURL}/contactos`, contacto);
    }
}
