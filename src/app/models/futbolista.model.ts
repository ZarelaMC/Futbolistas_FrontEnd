import { Posicion } from "./posicion.model";

export class Futbolista {
    idFutbolista?: number;
    nombres?: string;
    apellidos?: string;
    fechaNacimiento?: Date;
    caracteristicas?: string;
    posicion?: Posicion;
}
