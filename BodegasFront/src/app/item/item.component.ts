import {Component, OnInit} from '@angular/core';
import {MasterURLService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title: string = 'Lista de Items ';
  private _params: any;
  nuevoItem = {};
  items = [];
  disabledButtons = {
    nuevoItemFormButton: false
  };

  constructor(private _ActivatedRoute: ActivatedRoute, private _http: Http, private _masterURL: MasterURLService) {

  };

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._params = parametros;
        this._http.get(this._masterURL.url + 'Item?idBodega=' + this._params.idBodega)
          .subscribe(
            (res: Response) => {
              console.log(res.json());
              this.items = res.json()
                .map((value) => {
                  value.cerrado = true;
                  return value;
                });
            },
            (err) => {
              console.log(err)
            }
          )
      });
  }

  crearItem(formulario: NgForm) {
    this.disabledButtons.nuevoItemFormButton = true;
    this._http.post(this._masterURL.url + "Item", {
      nnombre: formulario.value.nombre,
      cantidad: formulario.value.cantidad,
      peso: formulario.value.peso,
      idBodega: this._params.idBodega
    }).subscribe(
      (res) => {
        let itemCreado = res.json();
        itemCreado.cerrado = true;
        this.items.push(itemCreado);
        this.nuevoItem = {};
        this.disabledButtons.nuevoItemFormButton = false;
      },
      (err) => {
        this.disabledButtons.nuevoItemFormButton = false;
        console.log("Ocurrió un error", err);
      },
    );
  }

  borrarItem(id: number) {
    this._http.delete(this._masterURL.url + "Item/" + id).subscribe(
      (res) => {
        let itemBorrado = res.json();
        this.items = this.items.filter(value => itemBorrado.id != value.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  actualizarItem(item: any) {
    let parameters = {
      nombre: item.nombre,
      cantidad: item.cantidad,
      peso: item.peso
    };
    this._http.put(this._masterURL.url + "Item/" + item.id, parameters)
      .subscribe(
        (res) => {
          item.cerrado = !item.cerrado;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
