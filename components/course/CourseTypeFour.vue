<template>
    <div class="edu-course course-style-4" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <img style="height:200px;width: 200px;object-fit: cover;" :src="url_api + '/Publicaciones/' + publicacion.publicaciones_imagen" alt="" />                    
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{ publicacion.publicaciones_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">${{ splitMonth(publicacion.publicaciones_fecha) }}</div>
                <h6 class="title">
                    <n-link to="/course/course-details">{{ publicacion.publicaciones_titulo }}</n-link>
                </h6>                               
            </div>
        </div>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['extraClass','publicacion'],
        data() {
            return {          
                url_api: process.env.APP_ROOT_API,                 
                direccion : useInstitucionStore().institucion.institucion_direccion,
            }
        },
        methods: {            
            splitYear(fecha) {
            const [year] = fecha.split('-');
            return parseInt(year);
            },
            
            splitMonth(fecha) {
            const [, month] = fecha.split('-');
            return this.getMonthName(parseInt(month));
            },
            
            splitDay(fecha) {
            const [, , day] = fecha.split('-');
            return parseInt(day);
            },
            
            getMonthName(month) {
            const monthNames = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ];
            return monthNames[month - 1];
            },
                        
        }
    }
</script>