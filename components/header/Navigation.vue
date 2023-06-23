<template>
    <ul class="mainmenu">
        <li class="has-droupdown"><n-link to="/">Inicio</n-link>
            <ul class="submenu">
                <li><n-link to="/about-us-two">About</n-link></li>
                <li><n-link to="/contact-me">Contact</n-link></li>                
            </ul>
        </li>
        <li class="has-droupdown"><n-link to="">Areas y Carreras</n-link>
            <ul class="mega-menu">                               
                <li v-for="(area, id_area) in menuAreasyCarreras" :key="id_area">
                    <h6 class="menu-title">{{ area.area }}</h6>
                    <ul class="submenu">
                        <li v-for="(carrera, id_carrera) in area.carreras" :key="id_carrera">
                            <a :href="getLinkCarrera(carrera.nombre_simple)" target="_blank">{{ carrera.carrera }}</a>
                        </li>                        
                    </ul>
                </li>
            </ul>
        </li>

        <li class="has-droupdown"><n-link to="">Unidades Administrativas</n-link>
            <ul class="mega-menu">
                <li>
                    <h6 class="menu-title">rectorado</h6>
                    <ul class="submenu">
                        <li><n-link to="/about-us-one">Unidad de Titulos y Diplomas</n-link></li>                        
                    </ul>                    
                </li>
                <li>
                    <h6 class="menu-title">vicerectorado</h6>
                    <ul class="submenu">
                        <li><n-link to="/gallery-grid">vicerectorado</n-link></li>
                        <li><n-link to="/gallery-masonry">unidad de sistemas de informacion y estadistica</n-link></li>
                        <li><n-link to="/event/event-grid">registros y admiciones</n-link></li>
                    </ul>
                </li>
                <li>
                    <h6 class="menu-title">extension universitaria</h6>
                    <ul class="submenu">
                        <li><n-link to="/shop">Shop</n-link></li>
                    </ul>
                </li>                
            </ul>            
        </li>

        <li class="has-droupdown"><n-link to="">Avisos</n-link>
            <ul class="submenu">
                <li><n-link to="/convocatorias/publicaciones">publicaciones</n-link></li>
                <li><n-link to="/convocatorias/gacetas">gacetas</n-link></li>
                <li><n-link to="/convocatorias/eventos">eventos</n-link></li>
                <li><n-link to="/convocatorias/videos">videos</n-link></li>                
            </ul>
        </li>
        <li class="has-droupdown"><n-link to="">Mas</n-link>
            <ul class="submenu">
                <li><n-link to="/contact-us">repositorio institucional</n-link></li>
                <li><n-link to="/contact-us">disbec</n-link></li>
                <li><n-link to="/contact-us">mi biblioteca upea</n-link></li>
                <li><n-link to="/contact-us">radio upea</n-link></li>
                <li><n-link to="/contact-us">tv upea</n-link></li>
                <li><n-link to="/convocatorias/auditorias">auditoria</n-link></li>
            </ul>
        </li>
    </ul>
</template>
<script>
    import { useInstitucionStore } from '@/stores/store'
    export default{
        data() {
            return {
                menuAreasyCarreras: useInstitucionStore().menuAreasyCarreras,
                linksCarreras: useInstitucionStore().linksCarreras
            }
        },
        methods: {
            getLinkCarrera(links){
                let link = ""
                this.linksCarreras.forEach(element =>{        
                    if(element.carrera == links){
                        link = element.link
                    }
                })
                return link
            }
        },
    }
</script>