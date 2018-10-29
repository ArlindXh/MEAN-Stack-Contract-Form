import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private contractService: ContractService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm = this.fb.group({
      titulliProkurimit: ['', Validators.required],
      dataPublikimit: ['', Validators.required],
      dataNenshkrimit: ['', Validators.required],
      vleraFillestare: ['', Validators.required],
      vleraFinale: ['', Validators.required],
      drejtoria: ['', Validators.required],


    });
  }

  addContract(titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria) {
    this.contractService.addContract(titulliProkurimit, dataPublikimit, dataNenshkrimit, vleraFillestare, vleraFinale, drejtoria).subscribe(() => {
      this.router.navigate(['/contracts']);
    });
  }

  ngOnInit() {
  }

}
