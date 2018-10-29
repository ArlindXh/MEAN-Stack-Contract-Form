import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  //getting all the contracts from db
  getContracts() {
    return this.http.get(`${this.uri}/contracts`);
  }
  //getting one contract
  getContractById(id) {
    return this.http.get(`${this.uri}/contracts/${id}`)
  }

  //adding new contract
  addContract(titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria) {
    const contract = {
      titulliProkurimit: titulliProkurimit,
      dataPublikimit: dataPublikimit,
      dataNenshkrimit: dataNenshkrimit,
      vleraFillestare: vleraFillestare,
      vleraFinale: vleraFinale,
      drejtoria: drejtoria
    };
    return this.http.post(`${this.uri}/contracts/add`, contract);
  }

  updateContract(id, titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria) {
    const contract = {
      titulliProkurimit: titulliProkurimit,
      dataPublikimit: dataPublikimit,
      dataNenshkrimit: dataNenshkrimit,
      vleraFillestare: vleraFillestare,
      vleraFinale: vleraFinale,
      drejtoria: drejtoria
    };
    return this.http.put(`${this.uri}/contracts/update/${id}`, contract);
  }

  deleteContract(id) {
    return this.http.delete(`${this.uri}/contracts/delete/${id}`);
  }

}