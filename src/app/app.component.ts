import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeeklySvc';

  usuarios:any[] = [];

  constructor(
    private svcUsuarios: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getUnUsuario(3);
  }

  getAllUsers(){
    this.svcUsuarios.getAllUsers().subscribe((resp:any)=>{
      this.usuarios = resp.data;
      console.log(resp);
    })
  }

  getUnUsuario(id:number){
    this.svcUsuarios.getUnUsuario(id).subscribe((resp:any)=>{
      console.log(resp);
    })
  }
}
