<template>
    <div id="main-wrapper" class="main-wrapper">
        <Header showHeaderTop="true" />
        
        <Banner />        
        
        <About />

        <VideoSection />

        <Institucion />        

        <Autoridades />        
        
        <PublicacionesCarreras />             
        
        <Publicaciones extraClass="event-area-2" />
        
        <ContactInfo />

        <Eventos />                
        
        <CTA addClassName="online-academy-cta-wrapper" />

        <Servicios />
        
        <FooterOne />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'    
    export default { 
        async asyncData({ $axios }) {
            try {
                const useInstitucion = useInstitucionStore()     
                const publicacionesCarreras = [];                       

                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const carreras  = await $axios.$get('api/upeacarrera')                                                 
                const menuAreasyCarreras = await $axios.$get('/api/area')
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)
                const eventosUniversidad = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
                const gacetasUniversidad = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
                const videosUniversidad = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)

                useInstitucion.asignarInstitucion(institucion.Descripcion)                   
                useInstitucion.asignarCarreras(carreras)  
                useInstitucion.asignarMenuAreasyCarreras(menuAreasyCarreras)                           
                useInstitucion.asignarPublicacionesCarreras(publicacionesCarreras)
                useInstitucion.asignarPublicacionesUniversidad(publicacionesUniversidad)
                useInstitucion.asignarEventosUniversidad(eventosUniversidad)
                useInstitucion.asignarGacetasUniversidad(gacetasUniversidad)
                useInstitucion.asignarVideosUniversidad(videosUniversidad)

                return { institucion, carreras, eventosUniversidad }
            } catch (e) {
                console.log(e)
            }
        },      
        data() {
            return {
                index: null,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    pagination: false,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    navigation: {
                        nextEl: ".swiper-btn-nxt",
                        prevEl: ".swiper-btn-prv"
                    }
                },                
            }
        }, 
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            About: () => import("@/components/home-main/About"),
            Banner: () => import("@/components/home-online-academy/Banner"),
            PublicacionesCarreras: () => import("@/components/home-online-academy/Course"),
            Autoridades: () => import("@/components/home-online-academy/Instructor"),
            Institucion: () => import("@/components/home-online-academy/FAQ"),
            Publicaciones: () => import("@/components/event/EventSectionOne"),
            ContactInfo: () => import("@/components/home-online-academy/ContactInfo"),
            CTA: () => import("@/components/cta/CTAOne"),
            FooterOne: () => import("@/components/footer/FooterOne"),
            VideoSection: () => import("@/components/home-university/Video"),
            Eventos: () => import("@/components/home-distant-learning/Course"),
            Servicios: () => import("@/components/home-main/Blog"),
            
        },
        head() {
            return {
                title: this.institucion.Descripcion.institucion_iniciales+" | "+this.institucion.Descripcion.institucion_nombre
            }
        },  
        methods: {     

        },
        created() {              
            console.log("los eventos")
            console.log(this.eventosUniversidad)
        },                 
    }
</script>