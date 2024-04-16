export enum Genero{
    REGUETON= "Regueton",
    POP="Pop",
    TROPIPOP="Tropipop",
    ROCK="Rock",
    SALSA="Salsa",
    RAP="Rap"
}

export class Cantante{

    id: number;
    nombre_artistico: string;
    nombre: string;
    imagen: string;
    informacion: string;
    fecha_nacimiento: string;
    canciones:string[];
    activo:boolean;
    ciudad: string;
    link: string;
    constructor (id: number, nombre_artistico: string, nombre: string, imagen: string, informacion: string, fecha_nacimiento: string, public genero: Genero, canciones:string[], activo:boolean,ciudad:string,link:string) {
        this.id = id;
        this.nombre_artistico = nombre_artistico;
        this.nombre = nombre;
        this.imagen = imagen;
        this.informacion = informacion;
        this.fecha_nacimiento=fecha_nacimiento;
        this.genero=genero
        this.canciones=canciones;
        this.activo=activo;
        this.ciudad=ciudad;
        this.link=link;
    }


}
