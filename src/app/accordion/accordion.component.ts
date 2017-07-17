import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../device.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [DeviceService]
})
export class AccordionComponent implements OnInit {

  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    return this.deviceService.devices;
  }

}
