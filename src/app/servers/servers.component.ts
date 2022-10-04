import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    // properties
    serverCreationStatus = "no server was created";
    serverName="Server name";
    servercreated = false;
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
      this.servercreated= true;
      this.serverCreationStatus = "the server was created by name" + this.serverName;
      console.log(this.serverCreationStatus)
  }
  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;

  }

}
