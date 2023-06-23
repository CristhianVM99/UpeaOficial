<template>
    <div class="edu-course-area course-area-2 gap-tb-text bg-lighten03">
        <div class="container">
            <SectionTitle :preTitle='preTitle' :title='title' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-md-6 col-lg-4" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="evento in eventos" 
                    :key="evento.evento_id"
                >
                    <div class="edu-course course-style-1 hover-button-bg-white">
                        <div class="inner">
                            <div class="thumbnail">
                                <n-link to="/course/course-details">
                                    <img :src="url_api + '/Eventos/' + evento.evento_imagen" alt="">
                                </n-link>
                                <div class="time-top">
                                    <span class="duration"><i class="icon-61"></i>duration </span>
                                </div>
                            </div>
                            <div class="content">
                                <span class="course-level">{{ evento.evento_tipo }}</span>
                                <h5 class="title">
                                    <n-link to="/course/course-details">{{ evento.evento_titulo }}</n-link>
                                </h5>
                                <div class="course-rating">
                                    <div class="rating">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>                                
                                </div>
                                <div class="course-price">{{ evento.evento_fecha }}</div>                                
                            </div>
                        </div>
                        <div class="course-hover-content-wrapper">                            
                        </div>
                        <div class="course-hover-content">
                            <div class="content">                                
                                <span class="course-level">{{ evento.evento_tipo }}</span>
                                <h5 class="title">
                                    <n-link to="/course/course-details">{{ evento.evento_titulo }}</n-link>
                                </h5>
                                <div class="course-rating">
                                    <div class="rating">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                </div>
                                <div class="course-price">{{ evento.evento_lugar }}</div>
                                <p>{{ evento.evento_descripcion }}</p>
                                <ul class="course-meta">
                                </ul>
                                <n-link to="/course/course-details" class="edu-btn btn-secondary btn-small">Ver mas detalles <i class="icon-4"></i></n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <n-link to="/course/course-one" class="edu-btn">Ver mas Eventos<i class="icon-4"></i></n-link>
            </div>
        </div>
    </div>
</template>

<script>
    import courseData from '~/data/course';
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data () {
            return {
                courseData,
                preTitle: 'lo ultimo de ...',
                title: 'Eventos',
                eventos: useInstitucionStore().eventosUniversidad,
                url_api: process.env.APP_ROOT_API,
            }
        },
        mounted() {
            console.log("eventos de la universidad")
          console.log(this.eventos)  
        },
    }
</script>