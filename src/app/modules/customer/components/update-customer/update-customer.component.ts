import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../models/CustomerDTO";
import {Observable, Subject} from "rxjs";
import {debounceTime, map} from "rxjs/operators";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  dataArray: any[] = [];

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.http.get<any>('http://localhost:3000/api/v1/customer/search', {
        headers: {text: value.search}
      }).subscribe(responseData => {
        this.dataArray = responseData.data;
      }, error => {
        console.log(error);
      })

    });
  }

  searchForm = new FormGroup({
    search: new FormControl(null)
  });

  customerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
    avatar: new FormControl(null, [Validators.required]),
  });

  updateCustomer() {
    let dto = new CustomerDTO(
      this.customerForm.get('name')?.value,
      this.customerForm.get('address')?.value,
      Number(this.customerForm.get('salary')?.value),
      this.customerForm.get('avatar')?.value,
    );
    this.http.post<any>('http://localhost:3000/api/v1/customer/update', {
      name: dto.name,
      address: dto.address,
      salary: dto.salary,
      avatar: dto.avatar,
    }).subscribe(response => {
      this.open(response.data.name + ' - ' + response.message);
    }, error => {
      console.log(error)
    });
  }


  private open(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 3000
    });
  }


  searchUniqueData() {
    let selectedId = '';
    for (const temp of this.dataArray) {
      if (temp.name === this.searchForm.get('search')?.value) {
        selectedId = temp._id;
        break;
      }
    }/* don't use this with a real project*/

    this.http.get<any>('http://localhost:3000/api/v1/customer/get', {
      headers: {id: selectedId}
    }).subscribe(respose => {
      if (respose.data !== null) {
        this.customerForm.patchValue({
          name: respose.data.name,
          address: respose.data.address,
          salary: respose.data.salary,
          avatar: respose.data.avatar
        })
      }
    })
  }
}
