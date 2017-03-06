import {Component, OnInit} from '@angular/core';
import {MasterURLService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  title: string = 'Registro de Bodegas';
  nuevaBodega = {};
  bodegas = [];
  disabledButtons = {
    nuevaBodegaFormButton: false
  };

  constructor(private _http: Http, private _masterURL: MasterURLService) {

  };

  ngOnInit() {
    this._http.get(this._masterURL.url + "Bodega")
      .subscribe(
        (res: Response) => {
          console.log(res.json());
          this.bodegas = res.json()
            .map((value) => {
              value.cerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearBodega(formulario: NgForm) {
    this.disabledButtons.nuevaBodegaFormButton = true;
    this._http.post(this._masterURL.url + "Bodega", {
      nombre: formulario.value.nombre,
      direccion: formulario.value.direccion,
      capacidadEnToneladas: formulario.value.capacidadEnToneladas
    }).subscribe(
      (res) => {
        this.bodegas.push(res.json());
        this.nuevaBodega = {};
        this.disabledButtons.nuevaBodegaFormButton = false;
      },
      (err) => {
        this.disabledButtons.nuevaBodegaFormButton = false;
        console.log("Ocurrió un error", err);
      },
    );
  }

  borrarBodega(id: number) {
    this._http.delete(this._masterURL.url + "Bodega/" + id).subscribe(
      (res) => {
        let bodegaBorrada = res.json();
        this.bodegas = this.bodegas.filter(value => bodegaBorrada.id != value.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  actualizarBodega(bodega: any) {
    let parameters = {
      nombre: bodega.nombre,
      direccion: bodega.direccion,
      capacidadEnToneladas: bodega.capacidadEnToneladas
    };
    this._http.put(this._masterURL.url + "Bodega/" + bodega.id, parameters)
      .subscribe(
        (res) => {
          bodega.cerrado = !bodega.cerrado;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
