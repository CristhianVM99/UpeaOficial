<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <Header showHeaderTop="true" />

        <BreadCrumbOne pageTitle='Acerca de nosotros' title='Universidad Publica de El Alto' />

        <Features />

        <VideoSection />

        <FooterOne />
    </div>
</template>

<script>    
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            Features: () => import('@/components/about-us-two/Features'),
            VideoSection: () => import('@/components/about-us-two/Video'),            
            FooterOne: () => import("@/components/footer/FooterOne")
        },   
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
        },    
        head() {
            return {
                title: 'Sobre Nosotros',                
            }
        }
    }
</script>