import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Phone} from '../shared/models/phone.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PhonesService} from '../shared/services/phones.service'

import {Router} from '@angular/router';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {
  @Input() edPhone: Phone;
  @Output() editFlag = new EventEmitter<boolean>();
  addForm: FormGroup;
  disabled_form = false;
  constructor(private phonesService: PhonesService,
              private router: Router) { }

  ngOnInit() {
    if (isNullOrUndefined(this.edPhone)) {
      this.edPhone = {title: "", article: "", price: null, manufact: "",
        year: "", orders: null, camera: "", screen: "", id: 0};
    }
    console.log(this.edPhone);
    this.addForm = new FormGroup( {
      title: new FormControl({value: this.edPhone.title, disabled: this.disabled_form}, [Validators.required]),
      article: new FormControl({value: this.edPhone.article, disabled: this.disabled_form}, [Validators.required]),
      price: new FormControl({value: this.edPhone.price, disabled: this.disabled_form}, [Validators.required]),
      manufact: new FormControl({value: this.edPhone.manufact, disabled: this.disabled_form}, [Validators.required]),
      year: new FormControl({value: this.edPhone.year, disabled: this.disabled_form}, [Validators.required]),
      orders: new FormControl({value: this.edPhone.orders, disabled: this.disabled_form}, [Validators.required]),
      camera: new FormControl({value: this.edPhone.camera, disabled: this.disabled_form}, [Validators.required]),
      screen: new FormControl({value: this.edPhone.screen, disabled: this.disabled_form}, [Validators.required])
    });
  }

  onSave() {
    console.log(this.edPhone.id);
    if (this.edPhone.id) {
      let phone = new Phone (this.addForm.value.title, this.addForm.value.article,
                             this.addForm.value.price, this.addForm.value.manufact,
                             this.addForm.value.year, this.addForm.value.orders,
                             this.addForm.value.camera, this.addForm.value.screen,
        this.edPhone.id);
      this.phonesService.onEditPhone(phone);
      this.editFlag.emit(false);
    }
    else {
      let phone = new Phone (this.addForm.value.title, this.addForm.value.article,
        this.addForm.value.price, this.addForm.value.manufact,
        this.addForm.value.year, this.addForm.value.orders,
        this.addForm.value.camera, this.addForm.value.screen);
      console.log(phone);
      this.phonesService.onAddPhone(phone);
      this.router.navigate([`/list`]); /* возвращаемся к списку */
    }
  }

}
