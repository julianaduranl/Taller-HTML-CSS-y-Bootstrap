import { Cantante, Genero } from './cantante.js';
const ap = new Cantante(0, "Feid", "Salomón Villada Hoyos", "https://www.billboard.com/wp-content/uploads/2023/03/feature-feid-billboard-2023-bb3-devin-christopher-1-1260.jpg?w=1260&h=840&crop=1", "Feid es uno de los artistas colombianos más famosos en el país y en el mundo. Ha estado nominado tres veces en los Grammys Latinos, y ha ganado varios premios por álbum del año, colaboración del año, Top artista masculino, y Top Rising Star en los Premios Tu Musica Urbano", "19 de agosto de 1992", Genero.REGUETON, ["LUNA", "PERRO NEGRO", "CLASSY 101", "Feliz cumpleaños Ferxxo", "SI SABE FERXXO"], true, "Medellin", "https://open.spotify.com/artist/2LRoIwlKmHjgvigdNGBHNo");
console.log(ap);
let tabla = document.getElementById("tabla");
let boton = document.getElementById("boton");
let infoGeneral = document.getElementById("infoGeneral");
let imagen = document.getElementById("foto");
let link = document.getElementById("link");
let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let titulo4 = document.getElementById("titulo4");
let lista = document.getElementById("lista");
boton.onclick = guardarInfo;
mostrarDatosCantante(ap);
function mostrarDatosCantante(cantante) {
    let tbodytabla = document.createElement("tbody");
    tbodytabla.innerHTML = `
    <tr>
      <td>Nombre:</td>
      <td>${cantante.nombre}</td>
    </tr>
    <tr>
      <td>Ciudad Natal:</td>
      <td>${cantante.ciudad}</td>
    </tr>
    <tr>
      <td>Fecha nacimiento:</td>
      <td>${cantante.fecha_nacimiento}</td>
    </tr>
    <tr>
      <td>Genero:</td>
      <td>${cantante.genero}</td>
    </tr>`;
    tabla.appendChild(tbodytabla);
    let tbodyInfoGeneral = document.createElement("tbody");
    tbodyInfoGeneral.innerHTML = `${cantante.informacion}`;
    infoGeneral.appendChild(tbodyInfoGeneral);
    let tbodyImagen = document.createElement("tbody");
    tbodyImagen.innerHTML = `<img src="${cantante.imagen}" alt="${cantante.nombre}" width="500" height="333"/>`;
    imagen.appendChild(tbodyImagen);
    let tbodyLink = document.createElement("tbody");
    tbodyLink.innerHTML = `Esta información fue sacada del top 5 de <a href="${cantante.link}" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Spotify</a>.`;
    link.appendChild(tbodyLink);
    let tbodyTitulo1 = document.createElement("tbody");
    tbodyTitulo1.innerHTML = `${cantante.nombre_artistico}`;
    titulo1.appendChild(tbodyTitulo1);
    let tbodyTitulo2 = document.createElement("tbody");
    tbodyTitulo2.innerHTML = `${cantante.nombre_artistico}`;
    titulo2.appendChild(tbodyTitulo2);
    let tbodyTitulo3 = document.createElement("tbody");
    tbodyTitulo3.innerHTML = `${cantante.nombre_artistico}`;
    titulo3.appendChild(tbodyTitulo3);
    let tbodyTitulo4 = document.createElement("tbody");
    tbodyTitulo4.innerHTML = `${cantante.nombre_artistico}`;
    titulo4.appendChild(tbodyTitulo4);
    let tbodyLista = document.createElement("tbody");
    tbodyLista.innerHTML = `<ol>
    <p id="infoGeneral" class="fs-4 text-success">TOP 5 canciones del momento</p>
      <li>${cantante.canciones[0]}</li>
      <li>${cantante.canciones[1]}</li>
      <li>${cantante.canciones[2]}</li>
      <li>${cantante.canciones[3]}</li>
      <li>${cantante.canciones[4]}</li>
    </ol>`;
    lista.appendChild(tbodyLista);
}
function guardarInfo() {
    console.log("se guardaron los datos");
}
