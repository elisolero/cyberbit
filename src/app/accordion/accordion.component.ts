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

    //Append Protocol Items for Summery
    $('.select_protocol').each(function(){
        var name = $(this).attr('name');
        var id = $(this).attr('id');
        $('.summery_protocol').append('<li style="display:none;" id="summery_'+id+'" >'+name+'</li>')
    });

    //On change Protocol Items for Summery
    $(document).on('change','.select_protocol',function(){

      var id = $(this).attr('id');
      if($(this).is(':checked')){
        $('#summery_'+id).show();
      }else{
        $('#summery_'+id).hide();
      }
    });

    //Append Time Items for Summery
    $('.select_time').each(function(){
        var name = $(this).attr('name');
        var id = $(this).attr('id');
        $('.summery_time').append('<li style="display:none;" id="summery_'+id+'" >'+name+'</li>')
    });

    //On change Time Items for Summery
    $(document).on('change','.select_time',function(){

      var id = $(this).attr('id');
      if($(this).is(':checked')){
        $('#summery_'+id).show();
      }else{
        $('#summery_'+id).hide();
      }
    });

    $('#clearData').click(()=>{
        $("[type=checkbox]").each((ind,val)=>{
         if($(val).is(':checked'))
              $(val).click();
        });
    })


var str;

var strDevice = '';
var strProtocol = '';
var strTime = '';
  
  //onClick get all params and submit
  $('#startLearning').click((e)=>{
    e.preventDefault();
    strDevice += '?devices=';

      $('.innerItems').each((ind,val)=>{
            if($(val).is(":checked")){
              strDevice += $(val).val() + ',';
            }
      }).promise().done(()=>{
          strProtocol += '&protocols=';
          $('.select_protocol').each((ind2,val2)=>{
            if($(val2).is(":checked")){
              strProtocol += $(val2).val() + ',';
            }
          }).promise().done( ()=>{
            $('.select_time').each((ind3,val3)=>{
             strTime = '&times=';
              if($(val3).is(":checked")){
                  strTime += $(val3).val() + ',';
              }
            });
          }).promise().done(()=>{
            var pathArray = location.href.split( '/' );
            var protocol = pathArray[0];
            var host = pathArray[2];
            var url = protocol + '//' + host+strDevice+strProtocol+strTime;

            window.location.href =url;
            // console.log(strDevice,strProtocol,strTime)
          });
      });      
  })

      })
  }
}
