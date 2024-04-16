export var Genero;
(function (Genero) {
    Genero["REGUETON"] = "Regueton";
    Genero["POP"] = "Pop";
    Genero["TROPIPOP"] = "Tropipop";
    Genero["ROCK"] = "Rock";
    Genero["SALSA"] = "Salsa";
    Genero["RAP"] = "Rap";
})(Genero || (Genero = {}));
export class Cantante {
    constructor(id, nombre_artistico, nombre, imagen, informacion, fecha_nacimiento, genero, canciones, activo, ciudad, link) {
        this.genero = genero;
        this.id = id;
        this.nombre_artistico = nombre_artistico;
        this.nombre = nombre;
        this.imagen = imagen;
        this.informacion = informacion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
        this.canciones = canciones;
        this.activo = activo;
        this.ciudad = ciudad;
        this.link = link;
    }
}
