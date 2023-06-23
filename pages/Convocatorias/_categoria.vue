<template>
    <div id="main-wrapper" class="main-wrapper">

        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='$route.params.categoria'  v-if="$route.params.categoria != 'All'"/>
        <BreadCrumbTwo title='Publicaciones  Carreras'  v-if="$route.params.categoria == 'All'"/>
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">Encontramos <span>{{ cantidad }}</span> {{ $route.params.categoria }} para ti</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="layout-switcher">
                            <label>Grid</label>
                            <ul class="switcher-btn">
                                <li><n-link to="/course/course-two" class="active"><i class="icon-53"></i></n-link></li>
                                <li><n-link to="/course/course-four"><i class="icon-54"></i></n-link></li>
                            </ul>
                        </div>
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- publicaciones -->
                <div class="row g-5" v-if="$route.params.categoria == 'publicaciones'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(publicacion) in publicaciones" :key="publicacion.publicaciones_id"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="publicacion" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- publicaciones de las carreras-->
                <div class="row g-5" v-if="$route.params.categoria == 'All'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(publicacion) in publicacionesAll" :key="publicacion.publicaciones_id"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="publicacion" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- gacetas -->
                <div class="row g-5" v-if="$route.params.categoria == 'gacetas'">
                    <div 
                        class="col-md-6 col-lg-4"                                                
                        v-for="(gaceta) in gacetas" :key="gaceta.gaceta_id"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="gaceta" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- eventos -->
                <div class="row g-5" v-if="$route.params.categoria == 'eventos'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(evento) in eventos" :key="evento.evento_id"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="evento" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- videos -->
                <div class="row g-5" v-if="$route.params.categoria == 'videos'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(video) in videos" :key="video.video_id"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="video" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!--<div class="load-more-btn">
                    <button 
                        class="edu-btn"
                        @click="loadMore" 
                        v-if="defaultNumberOfCourses < courseData.courses.length"
                    >
                        Ver mas<i class="icon-56"></i>
                    </button>
                </div>-->
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    import courseData from '~/data/course';
    export default {
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            CourseTypeTwo: () => import('@/components/course/CourseTypeTwo'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)   
        
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
            if(useInstitucionStore().carreras == null){
                const carreras  = await $axios.$get('api/upeacarrera')    
                useInstitucion.asignarCarreras(carreras)  
            }
            if(useInstitucionStore().publicacionesUniversidad == null){                
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarPublicacionesUniversidad(publicacionesUniversidad)
            }
            if(useInstitucionStore().gacetasUniversidad == null){
                const gacetasUniversidad = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarGacetasUniversidad(gacetasUniversidad)                
            }
            if(useInstitucionStore().eventosUniversidad == null){
                const eventosUniversidad = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarEventosUniversidad(eventosUniversidad)
            }
            if(useInstitucionStore().videosUniversidad == null){
                const videosUniversidad = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)                                    
                useInstitucion.asignarVideosUniversidad(videosUniversidad)   
            }                                    
        },
        data() {
            return {
                courseData,
                defaultNumberOfCourses: 9,
                publicaciones: [],
                publicacionesAll:useInstitucionStore().publicacionesCarreras,
                gacetas: [],
                eventos: [],
                videos: [],
                carreras: useInstitucionStore().carreras,
                cantidad: 0,
            }
        },
        computed: {
            courses() {
                return this.courseData.courses.slice( 0, this.defaultNumberOfCourses );
            }
        },
        methods: {
            loadMore() {
                this.defaultNumberOfCourses += 4;
            },
            async getCarreraPublicaciones(id) {
            const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                if(Object.keys(response).length > 0){        
                    response.forEach(element => {        
                        this.publicacionesAll.push(element)
                    });
                }                
            },
            async getPublicacionesCarreraAll() {
            try {
                this.carreras.forEach((carrera) => {
                    this.getCarreraPublicaciones(carrera.carrera_id)
                })
            } catch (e) {
                console.log(e)
            }
            },
            createdComponent(){
                switch (this.$route.params.categoria) {
                    case 'publicaciones':
                            this.publicaciones = useInstitucionStore().publicacionesUniversidad                            
                            this.cantidad = Object.keys(this.publicaciones).length
                        break;
                    case 'gacetas':
                            this.gacetas = useInstitucionStore().gacetasUniversidad
                            this.cantidad = Object.keys(this.gacetas).length
                        break;
                    case 'eventos':
                            this.eventos = useInstitucionStore().eventosUniversidad
                            this.cantidad = Object.keys(this.eventos).length
                        break;
                    case 'videos':
                            this.videos = useInstitucionStore().videosUniversidad
                            this.cantidad = Object.keys(this.videos).length
                        break;
                    case 'All':
                        if(useInstitucionStore().publicacionesCarreras == null){
                            this.getPublicacionesCarreraAll()  
                        }
                            this.publicacionesAll = useInstitucionStore().publicacionesCarreras
                            this.cantidad = Object.keys(this.publicacionesAll).length
                        break;
                    default:
                        break;
                }
            }
        },
        created() {
            this.createdComponent()
        },
        head() {
            return {
                title: 'Course Style 2'
            }
        }
    }
</script>