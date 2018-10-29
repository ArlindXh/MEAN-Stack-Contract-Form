import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ContractService } from '../../services/contract.service';
import { Contract } from '../../models/contract.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  contract: any = {};
  updateForm: FormGroup;

  constructor(
    private contractService: ContractService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      titulliProkurimit: ['', Validators.required],
      dataPublikimit: ['', Validators.required],
      dataNenshkrimit: ['', Validators.required],
      vleraFillestare: ['', Validators.required],
      vleraFinale: ['', Validators.required],
      drejtoria: ['', Validators.required],


    });
  }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.contractService.getContractById(this.id).subscribe(res => {
        this.contract = res;
        this.updateForm.get('titulliProkurimit').setValue(this.contract.titulliProkurimit);
        this.updateForm.get('dataPublikimit').setValue(this.contract.dataPublikimit);
        this.updateForm.get('dataNenshkrimit').setValue(this.contract.dataNenshkrimit);
        this.updateForm.get('vleraFillestare').setValue(this.contract.vleraFillestare);
        this.updateForm.get('vleraFinale').setValue(this.contract.vleraFinale);
        this.updateForm.get('drejtoria').setValue(this.contract.drejtoria);
      });
    });
  }

  updateContract(titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria) {
    this.contractService.updateContract(this.id, titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria).subscribe(() => {
      this.snackBar.open('Contract Updated Successfully!', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/contracts']);
    });
  }
}


