import { Component, OnInit, Input } from '@angular/core';
import {DeviceService} from '../device.service';
declare var $: any;

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [DeviceService]
})
export class AccordionComponent implements OnInit {

  data;
  device_groups = [];


  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].device_groups;

      $(document).ready(function(){
       $('.innerItems.checkList').change(function(){
         var id = 'summery_' + $(this).attr('id');

          if($(this).is(':checked')){
            $('#'+id).show();
         }else{
           $('#'+id).hide();
         }
       })

       $('.groupItem').change(function(){
          if($(this).is(':checked')){
            $(this).closest('.mainPanel').find(".innerItems").each((ind,val)=>{
                 var id = 'summery_' + $(val).attr('id');
                  $('#'+id).show();
                  $(val).prop( "checked", true );
            })
          }else{
            $(this).closest('.mainPanel').find(".innerItems").each((ind,val)=>{
                  var id = 'summery_' + $(val).attr('id');
                  $('#'+id).hide();
                $(val).prop( "checked", false );
            })
          }
       });


    $('.select_protocol').each(function(){
        var name = $(this).attr('name');
        var id = $(this).attr('id');
        $('.summery_protocol').append('<li style="display:none;" id="summery_'+id+'" >'+name+'</li>')
    })
       $(document).on('change','.select_protocol',function(){
            var id = $(this).attr('id');
        if($(this).is(':checked')){
            $('#summery_'+id).show();
         }else{
           $('#summery_'+id).hide();
         }

        });


      })
  }
}
