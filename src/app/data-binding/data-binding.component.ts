import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    allowNewServer = false;
    // properties
    serverCreationStatus = "no server was created";
    serverName="Server name";
  constructor() { 
      setTimeout(()=>{
          this.allowNewServer = true;
      }, 2000)
      console.log(this.allowNewServer)

  }

  ngOnInit(): void {
  }

  // method syntax methodName(){}
  // [innerText]={{"onCreateServer"}}
  onCreateServer(){
      this.serverCreationStatus = "the server was created by name" + "";
      console.log(this.serverCreationStatus)
  }
  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;

  }

}
