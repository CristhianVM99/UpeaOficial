<template>
    <div id="main-wrapper" class="main-wrapper">

        <!-- SECCION DE HEADER DE LA PAGINA -->
        <Header showHeaderTop="true" />
        
        <!-- SECCION DE LA UNIVERSIDAD PRINCIPAL DEL NOMBRE -->
        <Banner />        
        
        <!-- INFORMACION DE LA LUCHA DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Information />

        <!-- VIDEO INSTITUCION DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Video />

        <!-- INFORMACION DE LA UNIVERSIDAD PUBLICA DE EL ALTO MISION - VISION - OBJETIVOS. -->
        <Information_mvo />        

        <!-- AUTORIDADES DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Autoridades />        
        
        <!-- PUBLICACIONES DE LAS CARRERAS -->
        <PublicacionesCarreras />             
        
        <!-- PUBLICACIONES DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <PublicacionesUpea extraClass="event-area-2" />
        
        <!-- CONTACTO DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Contacto />

        <!-- EVENTOS DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Eventos />                        

        <!-- SERVICIOS DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Servicios />
        
        <!-- SECCION DE FOOTER -->
        <FooterOne />
    </div>
</template>

<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    /* EXPORT DEFAULT: exportacion del index */  
    export default { 
        async asyncData({ $axios }) {
            try {
                /* CONSULTA API: recuperamos los datos de la API desde aqui. */
                let publicaciones = []
                let servicios = []
                let auditorias =  []
                let gacetas = []


                const useInstitucion = useInstitucionStore()     
                const publicacionesCarreras = [];                       
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const carreras  = await $axios.$get('api/upeacarrera')                                                 
                carreras.forEach(async car => {
                    car.links.push(await $axios.$get('/api/linksIntExtAll/'+car.carrera_id)) 
                });                
                const menuAreasyCarreras = await $axios.$get('/api/area')
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)                
                const eventosUniversidad = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
                const gacetasUniversidad = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
                const videosUniversidad = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)

                /* CLASIFICACION DE GACETAS */
                gacetasUniversidad.forEach(gac => {
                    if(gac.gaceta_titulo.includes('AUDITORIA')){
                        auditorias.push(gac)
                    }else{
                        gacetas.push(gac)
                    }
                });

                /* CLASIFICACION DE PUBLICACIONES */
                publicacionesUniversidad.forEach(pub => {
                    switch (pub.publicaciones_tipo) {
                        case 'SERVICIO':
                            servicios.push(pub)
                            break;
                        case 'PUBLICACION':
                            publicaciones.push(pub)
                            break;
                        default:
                            publicaciones.push(pub)
                            break;
                    }
                });

                /* ASIGNAR DATOS: ingresamos datos al stores para que los demas componente puedan y tengan acceso a los mismos */
                useInstitucion.asignarInstitucion(institucion.Descripcion)                   
                useInstitucion.asignarCarreras(carreras)  
                useInstitucion.asignarMenuAreasyCarreras(menuAreasyCarreras)                           
                useInstitucion.asignarPublicacionesCarreras(publicacionesCarreras)
                useInstitucion.asignarPublicacionesUniversidad(publicaciones)
                useInstitucion.asignarServiciosUniversidad(servicios)
                useInstitucion.asignarAuditoriasUniversidad(auditorias)
                useInstitucion.asignarEventosUniversidad(eventosUniversidad)
                useInstitucion.asignarGacetasUniversidad(gacetas)
                useInstitucion.asignarAuditoriasUniversidad(auditorias)
                useInstitucion.asignarVideosUniversidad(videosUniversidad)
                return { institucion }
            } catch (e) {
                /*publicaciones de los errores en la consola. */
                console.log(e)
            }
        },              
        components: {
            /* COMPONENTES: visualizacion de todos los componentes para la pagina principal que estamos usando acorde a sus carrera. */
            Header: () => import("@/components/header/HeaderThree"),
            Banner: () => import("@/components/home-online-academy/Banner"),
            Information: () => import("@/components/home-main/About"),            
            Video: () => import("@/components/home-university/Video"),
            Information_mvo: () => import("@/components/home-online-academy/FAQ"),
            Autoridades: () => import("@/components/home-online-academy/Instructor"),            
            PublicacionesCarreras: () => import("@/components/home-online-academy/Course"),            
            PublicacionesUpea: () => import("@/components/event/EventSectionOne"),
            Contacto: () => import("@/components/home-online-academy/ContactInfo"),
            Eventos: () => import("@/components/home-distant-learning/Course"),            
            Servicios: () => import("@/components/home-main/Blog"),
            FooterOne: () => import("@/components/footer/FooterOne"),                                                
        },
        head() {
            return {
                /* TITULO DE LA PAGINA PRINCIPAL */
                title: this.institucion.Descripcion.institucion_iniciales+" | "+this.institucion.Descripcion.institucion_nombre
            }
        },                  
    }
</script>