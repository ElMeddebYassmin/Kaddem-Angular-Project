import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { left } from '@popperjs/core';
import { Universite } from 'app/models/Universite';
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';
declare var $: any;


@Component({
  selector: 'app-all-universite',
  templateUrl: './all-universite.component.html',
  styleUrls: ['./all-universite.component.scss']
})
export class AllUniversiteComponent implements OnInit {
universites:any;
dataSource = new MatTableDataSource<Universite>();

  constructor(private universiteService:UniversiteserviceService,@Inject(DOCUMENT) private doc: Document  ) { }

  ngOnInit(): void {
    this.universiteService.findAllUniversite().subscribe(
      (d)=>{
        console.log(d);
this.universites=d;
      }
    )
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6387af92daff0e1306da4b99/1gj50bndm';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
  }

  refresh():void {
    this.doc.defaultView.location.reload();
    this.showNotification("top","left");
}

Supprimer(id:number) {
  console.log("hii1")
  this.universiteService.deleteUniversite(id).subscribe(() => {
    console.log(id)
    this.dataSource.data = this.dataSource.data.filter(
        (universites: Universite) => universites.idUniversite !== id
    );
  });
  this.refresh();
}

showNotification(from, align){
  const type = ['','info','success','warning','danger'];

  const color = Math.floor((Math.random() * 4) + 1);

  $.notify({
      icon: "notifications",
      message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

  },{
      type: type[color],
      timer: 4000,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}
onPrint(divName) {
  const printContents = document.getElementById(divName).innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
}
