import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';


import { Contract } from '../../models/contract.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  // used to store the contracts so that we can display it on the table later on
  contracts: Contract[];
  displayedColumns = ['titulliProkurimit', 'dataPublikimit', 'dataNenshkrimit', 'vleraFillestare', 'vleraFinale', 'drejtoria', 'actions'];

  // injecting services
  constructor(private contractService: ContractService, private router: Router) { }

  ngOnInit() {
    //getting all the contracts on init
    this.fetchContracts();

  }

  fetchContracts() {
    this.contractService
      .getContracts()
      .subscribe((data: Contract[]) => {
        this.contracts = data;
        console.log('Data requested...');
        console.log(this.contracts)
      })
  }

  editContract(id) {
    this.router.navigate([`/edit/${id}`]);

  }

  deleteContract(id) {
    this.contractService.deleteContract(id).subscribe(() => {
      //updating contracts after we deleted one by calling fetchcontracts
      this.fetchContracts();
    });
  }

}
