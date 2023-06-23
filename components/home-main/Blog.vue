<template>
    <div class="edu-blog-area blog-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle :preTitle='preTitle' :title='title' alignment='section-center' />

            <div class="row g-5">
                <div 
                    class="col-lg-4 col-md-6 col-12" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="servicio in servicios" :key="servicio.servicio_id"
                >
                    <BlogPostOne :servicio="servicio" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="-1.4" imgSrc="/images/about/shape-02.png" />
            <MouseMove addClassName="shape-2" dataDepth="2.5" />
            <MouseMove addClassName="shape-3" dataDepth="-2.3" imgSrc="/images/counterup/shape-05.png" />
        </ul>
    </div>
</template>

<script>    
    import { useInstitucionStore } from '@/stores/store'
    import blogData from '~/data/blog';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            BlogPostOne: () => import('@/components/blog/BlogPostOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                blogData,
                preTitle: 'Upea',
                title: 'Servicios',
                servicios: useInstitucionStore().servicios
            }
        }
    }
</script>