<template>
    <div class="edu-event event-style-1">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/event/event-details">
                    <img style="height:462px;object-fit: cover;" :src="url_api + '/Publicaciones/' + publicacion.publicaciones_imagen" alt="" />
                </n-link>
                <div class="event-time">
                    <span><i class="icon-33"></i>{{ splitYear(publicacion.publicaciones_fecha) }}</span>
                </div>
            </div>
            <div class="content">
                <div class="event-date">
                    <span class="day">{{ splitDay(publicacion.publicaciones_fecha) }}</span>
                    <span class="month">{{ splitMonth(publicacion.publicaciones_fecha) }}</span>
                </div>
                <h5 class="title">
                    <n-link to="/event/event-details">{{ publicacion.publicaciones_titulo }}</n-link>
                </h5>
                <ul class="event-meta">
                    <li><i class="icon-40"></i>{{ direccion }}</li>
                </ul>
                <div class="read-more-btn">
                    <n-link class="edu-btn btn-small btn-secondary" to="/event/event-details">Ver mas detalles<i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'    
    export default {
        props: ['publicacion'],
        data() {
            return {
                direccion : useInstitucionStore().institucion.institucion_direccion,
                url_api: process.env.APP_ROOT_API, 
                año: null,
                mes: null,
                dia: null,
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