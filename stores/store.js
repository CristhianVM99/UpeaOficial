import { defineStore } from "pinia";

export const useInstitucionStore = defineStore("Institucion", {
  state: () => ({    
    frase: 'La Universidad del pueblo y para el pueblo',
    url_api: process.env.APP_ROOT_API,

    institucion: null,    
    carreras: null,
    menuAreasyCarreras: null,
    publicacionesCarreras: null,
    publicacionesUniversidad: null,
    eventosUniversidad: null,
    gacetasUniversidad: null,
    videosUniversidad: null,
    linksCarreras:[
      {
        carrera: 'SISTEMAS',
        link: 'https://sistemas.upea.bo/paginaInicio'
      },
      {
        carrera:'AGRONOMÍA',
        link: 'https://agronomia.upea.bo/upea/1bwWgdqBKdnOLibXZExG725pL'
      },
      {
        carrera: 'ARQUITECTURA',
        link: 'http://www.arquitectura.upea.edu.bo/l'
      },
      {
        carrera: 'EDUCACIÓN',
        link: 'https://educacionparvularia.upea.bo/'
      },
      {
        carrera: 'DESARROLLO',
        link: 'https://inscripcionesdesarrollo.upea.bo/'
      },
      {
        carrera: 'COMUNICACIÓN',
        link: 'https://comunicacion.upea.bo/'
      },
      {
        carrera: 'CONTADURÍA',
        link: 'https://virtualcontaduria.upea.bo/'
      },
      {
        carrera: 'DERECHO',
        link: 'https://virtualderecho.upea.bo/'
      },
      {
        carrera: 'ENFERMERÍA',
        link: 'https://virtualenfermeria.upea.bo/'
      },
      {
        carrera: 'HISTORIA',
        link: 'https://inscripcioneshistoria.upea.bo/'
      },
      {
        carrera: 'CIVIL',
        link: 'https://ingenieriacivil.upea.bo/paginaInicio'
      },
      {
        carrera: 'PRODUCCIÓN',
        link: 'https://virtualproduccion.upea.bo/'
      },
      {
        carrera: 'IDIOMAS',
        link: 'https://virtuallinguistica.upea.bo/'
      },
      {
        carrera: 'MEDICINA',
        link: 'https://virtualmedicina.upea.bo/'
      },
      {
        carrera: 'SOCIOLOGÍA',
        link: 'https://virtualsociologia.upea.bo/'
      },
      {
        carrera: 'TRABAJO',
        link: 'https://inscripcionestrabajosocial.upea.bo/'
      },
      {
        carrera: 'VETERINARIA',
        link: 'http://www.veterinaria.upea.edu.bo/l'
      },
      {
        carrera: 'ECONOMÍA',
        link: 'https://economia.upea.bo/upea/ygrxaP5LklJgwUbQvJOnGX1Ql'
      },
      {
        carrera: 'PETROQUÍMICA',
        link: 'https://virtualpetroquimica.upea.bo/'
      },
      {
        carrera: 'ADMINISTRACIÓN',
        link: 'https://virtualadministracion.upea.bo/'
      },
      {
        carrera: 'ODONTOLOGÍA',
        link: 'https://inscripcionesodontologia.upea.bo/'
      },
      {
        carrera: 'ELECTRÓNICA',
        link: 'https://virtualelectronica.upea.bo/'
      },
      {
        carrera: 'PLASTICAS',
        link: 'https://virtualartesplasticas.upea.bo/'
      },
      {
        carrera: 'POLITICAS',
        link: 'https://virtualpoliticas.upea.bo/'
      },
      {
        carrera: 'TEXTIL',
        link: 'https://virtualtextil.upea.bo/'
      },
      {
        carrera: 'PARVULARIA',
        link: 'https://educacionparvularia.upea.bo/'
      },
      {
        carrera: 'ELECTRICA',
        link: 'https://inscripcioneselectrica.upea.bo/'
      },
      {
        carrera: 'AUTOTRONICA',
        link: 'https://virtualautotronica.upea.bo/'
      },
      {
        carrera: 'PECUARIA',
        link: 'http://www.izip.upea.edu.bo/l'
      },
      {
        carrera: 'AMBIENTAL',
        link: 'https://inscripcionesambiental.upea.bo/'
      },
      {
        carrera: 'DIETETICA',
        link: 'https://inscripciones.upea.bo/'
      },
      {
        carrera: 'COMERCIO',
        link: 'https://virtualcomercio.upea.bo/'
      },
      {
        carrera: 'TURISTICA',
        link: 'http://www.gth.upea.edu.bo/l'
      },
      {
        carrera: 'PSICOLOGIA',
        link: 'https://virtualpsicologia.upea.bo/'
      },
      {
        carrera: 'CIENCIAS FISICAS',
        link: 'https://virtualfisicas.upea.bo/'
      },
      {
        carrera: 'PSICOMOTRICIDAD Y DEPORTES',
        link: 'https://inscripcionespsicomotricidad.upea.bo/'
      },        
    ],
    servicios:[
      {
         servicio_id: 1, 
         titulo: 'Radio Upea',
         descripcion: 'Escuchalos todos los sabados de 15:00 a 16:00 por la 100 FM.',
         calendario: 'Marzo 8, 2021',
         institucion: 'Upea',
         imagen: '/images/servicios/serv01.jpg',
      },
      {
         servicio_id: 2,
         titulo: 'Veterianaria',
         descripcion: 'La Clinica Veterinaria Upea Difunde sus Servicios a la Poblacion.',
         calendario: 'Diciembre 6, 2020',
         institucion: 'Upea',
         imagen: '/images/servicios/serv02.jpg',
      },
      {
         servicio_id: 3, 
         titulo: 'Odontologia',
         descripcion: 'Clinica Odonotologica de la Upea ofrece sus Servicios a la Poblcación.',
         calendario: 'Noviembre 28, 2019',
         institucion: 'Upea',
         imagen: '/images/servicios/serv03.jpeg',
      },
      {
         servicio_id: 4,
         titulo: "Jisk'a Wawa",
         descripcion: 'Centro de Desarrollo Infantil, reanuda sus servicios con la Upea.',
         calendario: 'Marzo 4, 2019',
         institucion: 'Upea',
         imagen: '/images/servicios/serv04.jpg',
      }
      
    ],
    
  }),
  actions:{
    asignarInstitucion(colection){
      this.institucion = colection
    },
    asignarCarreras(colection){
      this.carreras = colection
    },
    asignarMenuAreasyCarreras(colection){
      this.menuAreasyCarreras = colection
    },
    asignarPublicacionesCarreras(colection){
      this.publicacionesCarreras = colection
    },
    asignarPublicacionesUniversidad(colection){
      this.publicacionesUniversidad = colection
    },
    asignarEventosUniversidad(colection){
      this.eventosUniversidad = colection
    },
    asignarGacetasUniversidad(colection){
      this.gacetasUniversidad = colection
    },
    asignarVideosUniversidad(colection){
      this.videosUniversidad = colection
    }
  }
});
