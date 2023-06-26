<template>
    <div id="main-wrapper" class="main-wrapper">

        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='title' />
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">La Universidad Publica de El Alto cuenta con <span>{{ count_carreras }}</span> carreras</h6>
                    </div>
                    <!--<div class="sorting-right">
                        <div class="layout-switcher">
                            <label>Grid</label>
                            <ul class="switcher-btn">
                                <li><n-link to="/course/course-one" class="active"><i class="icon-53"></i></n-link></li>
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
                    </div>-->
                </div>

                <div class="row g-5">
                    <div 
                        class="col-md-6 col-lg-4 col-xl-3"
                        v-for="carrera in carreras" 
                        :key="carrera.carrera_id"
                    >
                        <CourseTypeOne :coleccion="carrera" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!--<div class="load-more-btn">
                    <button 
                        class="edu-btn"
                        @click="loadMore" 
                        v-if="defaultNumberOfCourses < courseData.courses.length"
                    >
                        Load More <i class="icon-56"></i>
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
            CourseTypeOne: () => import('@/components/course/CourseTypeOne'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        async asyncData({ $axios }) {                        
            const useInstitucion = useInstitucionStore()                        
            if(useInstitucionStore().carreras == null){
                let carreras  = await $axios.$get('api/upeacarrera')                                        
                carreras.forEach(car => {
                    let links = []
                    links.push($axios.$get('/api/linksIntExtAll/'+car.carrera_id))
                    car.links = links
                });
                useInstitucion.asignarCarreras(carreras)                                          
            }
        },
        data() {
            return {
                courseData,
                defaultNumberOfCourses: 8,
                title: useInstitucionStore().titleCarreras,
                carreras: useInstitucionStore().carreras,
                count_carreras: Object.keys(useInstitucionStore().carreras).length,
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
        },
        head() {
            return {
                title: 'UPEA | Carreras'
            }            
        }
    }
</script>