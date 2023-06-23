<template>
    <div class="header-top-bar">
        <div class="container">
            <div class="header-top">
                <div class="header-top-left">
                    <ul class="header-info">
                        <li><a href="tel:+011235641231"><i class="icon-phone"></i>Call: {{ celular1 }}</a></li>
                        <li><a href="mailto:info@edublink.com" target="_blank"><i class="icon-envelope"></i>Email: {{ correo1 }}</a></li>
                    </ul>
                </div>
                <div class="header-top-right">
                    <ul class="header-info">                        
                        <li class="header-btn"><a :href="admin_link" target="_blank" class="edu-btn btn-secondary btn-medium">Ingresar <i class="icon-4"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useInstitucionStore } from '@/stores/store'
export default {
    data() {
        return {
            celular1: null,                
            correo1: null,
            admin_link: process.env.APP_ADMIN_API
        };
    },
    methods: {
        createdComponent(){
            this.celular1 = useInstitucionStore().institucion.institucion_celular1
            this.correo1 = useInstitucionStore().institucion.institucion_correo1
        }
    },
    created() {
        this.createdComponent()
    },
}
</script>