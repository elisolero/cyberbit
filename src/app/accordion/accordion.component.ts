import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../device.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [DeviceService]
})
export class AccordionComponent implements OnInit {

  data;

  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    this.data =  this.deviceService.getDevices();
    console.log(this.data)
  }

}
