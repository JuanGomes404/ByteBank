import { Transferencia } from './../services/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {


  @Output()  aoTransferir = new EventEmitter<Object>();
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(): void {
    console.log('Solicitada nova transfêrencia');
    const valorEmitir: Transferencia = {valor: this.valor, destino : this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));


  }

  limparCampos(): void{
    this.valor = 0;
    this.destino = 0;
  }
}
