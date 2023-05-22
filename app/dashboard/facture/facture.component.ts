import { Component, ViewEncapsulation } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { EventService } from 'src/app/services/event.service';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FactureComponent {
  events:any
  constructor(private eventsService:EventService,private factureService:FactureService,private toast: HotToastService) {}
  ngOnInit() {
this.eventsService.getAll().subscribe(res=>{
  this.events=res;
})



const element1 = document.getElementById("header1");
element1.setAttribute("hidden","true");
const element2 = document.getElementById("ftco-footer");
element2.setAttribute("hidden","true");
}
ngOnDestroy() {
const element1 = document.getElementById("header1");
element1.removeAttribute("hidden");
const element2 = document.getElementById("ftco-footer");
element2.removeAttribute("hidden");
}
create(id){
  let data={
    payement:"chéque"
    
  }
id=1;
  this.factureService.addFacture(id,data).subscribe(res=>{

this.toast.success('Voucher created with success')
  })

  
}
}
