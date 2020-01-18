import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Phone} from '../shared/models/phone.model';
import {PhonesService} from '../shared/services/phones.service';

@Component({
  selector: 'app-phone-view',
  templateUrl: './phone-view.component.html',
  styleUrls: ['./phone-view.component.css']
})
export class PhoneViewComponent implements OnInit {
  @Input() inPhone: Phone;
  @Output() delPhone = new EventEmitter<number>(); /* отправляем наверх */
  editFlag: boolean;
  constructor(private phonesService: PhonesService ) { }

  ngOnInit() {
  }

  onDelPhone () {
    this.delPhone.emit(this.inPhone.id);
  }
  ordersUp () {
    this.inPhone.orders ++;
    this.phonesService.on_edit_phone(this.inPhone);
  }
}
