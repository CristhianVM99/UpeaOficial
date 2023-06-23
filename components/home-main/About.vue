<template>
    <div id="about">
        <div class="gap-bottom-equal edu-about-area about-style-1">
            <div class="container edublink-animated-shape">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image-gallery">
                            <img class="main-img-1" src="/images/universidad/oficial/fondoabout.jpg" alt="About Image">
                            <div class="video-box">
                                <div class="inner">
                                    <div class="thumb">
                                        <img src="/images/universidad/upeaabout2.jpg" alt="About Image">
                                        <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                            <a @click="index = imageIndex" class="popup-icon video-popup-activation">
                                                <i class="icon-18"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="loading-bar">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="award-status bounce-slide">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icon-21"></i>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">22+</h6>
                                        <span class="subtitle">Años</span>
                                    </div>
                                </div>
                            </div>
                            
                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-36.png" />
                                <MouseMove addClassName="shape-2" dataDepth="-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-37.png" />
                                <MouseMove addClassName="shape-3" dataDepth="1" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-02.png" />
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <SectionTitle :preTitle="inciales" :title='title' :subTitle='descripcion' alignment='section-left' />

                            <ul class="features-list" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                                <li>                                    
                                    <p>{{ primerPunto }}</p>
                                </li>
                                <li>                                    
                                    <p>{{ segundoPunto }}</p>
                                </li>
                                <li>
                                    <p>{{ tercerPunto }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-1 circle" dataDepth="-2.3" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
                </ul>
            </div>
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                items: [
                    {
                        src: useInstitucionStore().institucion.institucion_link_video_vision
                    }
                ],
                inciales:'',
                title: 'desafiando barreras "La lucha imparable de la Universidad Pública de El Alto"',
                descripcion: 'La Universidad Pública de El Alto, ubicada en la ciudad de El Alto en Bolivia, ha sido una institución educativa que ha desafiado numerosas barreras a lo largo de su historia. Fundada en el año 2000, esta universidad ha sido un símbolo de lucha y perseverancia para la comunidad de El Alto y ha brindado oportunidades educativas a miles de estudiantes que de otro modo no hubieran tenido acceso a la educación superior.',
                primerPunto:'Inclusión educativa para comunidades marginadas.',
                segundoPunto:'Valoración de la diversidad cultural y étnica.',
                tercerPunto:'nvestigación científica y desarrollo local sostenible.',
                index: null
            }
        },
        methods: {
            createdComponent(){
                const useInstitucion = useInstitucionStore()
                this.inciales =  useInstitucion.institucion.institucion_iniciales                                            
            }
        },
        created() {  
            this.createdComponent()          
        },
    }
</script>