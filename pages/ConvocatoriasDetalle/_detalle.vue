<template>
    <div id="main-wrapper" class="main-wrapper">

        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='$route.params.detalle' v-if="$route.params.detalle != 'All'" />
        <BreadCrumbTwo title='Publicacion' v-if="$route.params.detalle == 'All'" />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div 
                            class="blog-standard-each-item"                             
                        >
                            <BlogPostStandard :coleccion="coleccion" :tipo="$route.params.detalle"/>
                        </div>

                        <!--<div v-if="getPaginateCount > 1">
                            <pagination 
                                class="edublink-vue-pagination mt--0" 
                                v-model="currentPage" 
                                :per-page="perPage" 
                                :records="blogData.blogs.length"
                                @paginate="paginateClickCallback"
                                :page-count="getPaginateCount" 
                                :options="paginationOptions"
                            />
                        </div>-->
                    </div>

                    <div class="col-lg-4">
                        <BlogSidebarOne :tipo="$route.params.detalle" :blogItems="blogData.blogs" :categories="blogData.categories" :archives="blogData.archives" :tags="blogData.tags" />
                    </div>
                </div>
            </div>
        </section>        

        <FooterOne />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    import blogData from '~/data/blog';
    export default {
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            BlogSidebarOne: () => import('@/components/sidebar/BlogSidebarOne'),
            BlogPostStandard: () => import('@/components/blog/BlogPostStandard'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)                   
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
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
            if(useInstitucionStore().carreras == null){
                const carreras  = await $axios.$get('api/upeacarrera')    
                useInstitucion.asignarCarreras(carreras)  
            }        
        },
        data () {
            return {
                blogData,
                currentPage: 1,
                perPage: 5,
                paginationOptions: {
                    texts: {
                        nextPage: '',
                        prevPage: ''
                    }
                },
                coleccion: {},
                id_coleccion: this.$route.query.id,
                publicaciones: useInstitucionStore().publicacionesUniversidad,
                publicacionesCarreras : useInstitucionStore().publicacionesCarreras,
                gacetas: useInstitucionStore().gacetasUniversidad,
                eventos: useInstitucionStore().eventosUniversidad,
                videos: useInstitucionStore().videosUniversidad,
                carreras: useInstitucionStore().carreras,
            }
        },
        computed: {
            getItems() {
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.blogs.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.blogData.blogs.length / this.perPage );
            }
        },                
        methods: {
            async getCarreraPublicaciones(id) {
            const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                if(Object.keys(response).length > 0){        
                    response.forEach(element => {        
                        this.publicacionesCarreras.push(element)
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
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            },
            createdComponent(){                
                switch (this.$route.params.detalle) {
                    case 'publicaciones':
                        this.publicaciones.forEach(e => {
                            if(e.publicaciones_id == this.id_coleccion){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'gacetas':
                        this.gacetas.forEach(e => {
                            if(e.gaceta_id == this.id_coleccion){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'eventos':
                        this.eventos.forEach(e => {
                            if(e.evento_id == this.id_coleccion){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'videos':
                        this.videos.forEach(e => {
                            if(e.video_id == this.id_coleccion){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'All':
                        if(useInstitucionStore().publicacionesCarreras == null){
                            this.getCarreraPublicaciones()
                        }
                        this.publicacionesCarreras.forEach(e => {
                            if(e.publicaciones_id == this.id_coleccion){
                                this.coleccion = e
                            }
                        });
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
                title: 'Blog Standard'
            }
        },
    }
</script>

