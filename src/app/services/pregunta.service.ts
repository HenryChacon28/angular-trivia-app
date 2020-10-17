import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
    new Pregunta('Cual es la capital de China', [
      new Respuesta('Pekín', 1),
      new Respuesta('Hainan', 0),
      new Respuesta('Yunnan', 0),
      new Respuesta('Hubei', 0),
    ]),
    new Pregunta('Cual es la capital de Rusia', [
      new Respuesta('San Petersburgo', 0),
      new Respuesta('Vladivostok', 0),
      new Respuesta('Samara', 0),
      new Respuesta('Moscú', 1),
    ]),
    new Pregunta('Cual es la capital de libano', [
      new Respuesta('Sidón', 0),
      new Respuesta('Tiro', 0),
      new Respuesta('Beirut', 1),
      new Respuesta('Biblos', 0),
    ]),
    new Pregunta('Cual es la capital de Irak', [
      new Respuesta('Basora', 0),
      new Respuesta('Bagdad', 1),
      new Respuesta('Mosul', 0),
      new Respuesta('Nayaf', 0),
    ]),
    new Pregunta('Cual es la capital de Filipinas', [
      new Respuesta('Cebú', 0),
      new Respuesta('Dávao', 0),
      new Respuesta('Manila', 1),
      new Respuesta('Makati', 0),
    ]),
    new Pregunta('Cual es la capital de Turquia', [
      new Respuesta('Ankara', 1),
      new Respuesta('Estambul', 0),
      new Respuesta('Esmirna', 0),
      new Respuesta('Bursa', 0),
    ]),
    new Pregunta('Cual es la capital de Tailandia', [
      new Respuesta('Bankok', 1),
      new Respuesta('Chiang Mai', 0),
      new Respuesta('Ayutthaya', 0),
      new Respuesta('Chiang Rai', 0),
    ]),
    new Pregunta('Cual es la capital de Polonia', [
      new Respuesta('Cracovia', 0),
      new Respuesta('Breslavia', 0),
      new Respuesta('Varsovia', 1),
      new Respuesta('Sopot', 0),
    ]),
    new Pregunta('Cual es la capital de Rumania', [
      new Respuesta('Brasov', 0),
      new Respuesta('Constanza', 0),
      new Respuesta('Timisoara', 0),
      new Respuesta('Bucarest', 1),
    ]),
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}
