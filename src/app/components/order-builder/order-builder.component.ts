import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-builder',
  templateUrl: './order-builder.component.html',
  styleUrls: ['./order-builder.component.scss']
})
export class OrderBuilderComponent implements OnInit {

  starterFormGroup: FormGroup;
  orderFormGroup: FormGroup;

  deliveryOptions: string[];

  constructor(private orderService: OrderService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.deliveryOptions = this.orderService.deliveryOptions;

    this.starterFormGroup = this.fb.group({
      name: ['', [Validators.pattern(/[a-zA-Z]+/g), Validators.required]],
      option: ['', Validators.required]
    });
    
    this.orderFormGroup = this.fb.group({

    });
  }

}
