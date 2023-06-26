<template>
    <div class="edu-course course-style-4 course-style-8" :class="extraClass">
        <!-- PUBLICACIONES Y SERVICIOS UNIVERSITARIOS -->
        <!-- PUBLICACIONES ALL DE CARRERAS -->
        <div class="inner" v-if="tipo == 'publicaciones' || tipo == 'servicios' || tipo == 'All'">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.publicaciones_id }}">
                    <img  style="height:100%;width: 280px;object-fit: cover;" :src="url_api + '/Publicaciones/' + coleccion.publicaciones_imagen" :alt="coleccion.publicaciones_titulo">
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{  coleccion.publicaciones_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">{{ coleccion.publicaciones_documento }}</div>
                <h6 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.publicaciones_id }}">{{ coleccion.publicaciones_titulo }}</n-link>
                </h6>
                <!--<div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>-->
                <p>{{ coleccion.publicaciones_fecha }}</p>
                <!--<ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.publicaciones_id }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>      

        <!-- GACETAS UNIVERSITARIAS -->
        <!-- AUDITORIAS UNIVESITARIAS -->
        <div class="inner" v-if="tipo == 'gacetas' || tipo == 'auditorias'">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.gaceta_id }}">
                    <!--<img :src="'/images/course/course-type-06/' + course.image" :alt="course.alt">-->
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>Gaceta</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">{{ coleccion.gaceta_documento }}</div>
                <h6 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.gaceta_id }}">{{ coleccion.gaceta_titulo }}</n-link>
                </h6>
                <!--<div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>-->
                <p>{{  coleccion.gaceta_fecha }}</p>
                <!--<ul>ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.gaceta_id }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>

        <!-- EVENTOS UNIVERSITARIOS -->
        <div class="inner" v-if="tipo == 'eventos'">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.evento_id }}">
                    <img  style="height:100%;width: 280px;object-fit: cover;" :src="url_api + '/Eventos/' + coleccion.evento_imagen" alt="img" />
                </n-link>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{ coleccion.evento_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">{{ coleccion.evento_lugar }}</div>
                <h6 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.evento_id }}">{{ coleccion.evento_titulo }}</n-link>
                </h6>
                <!--<div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>-->
                <p>{{ coleccion.evento_fecha }}</p>
                <!--<ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.evento_id }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>

        <!-- VIDEOS UNIVERSITARIOS -->
        <div class="inner"  v-if="tipo == 'videos'">
            <div class="thumbnail">
                <iframe
                        :src="coleccion.video_enlace"
                        frameborder="0"                        
                        style="border-radius: 5px; width: 100%; height: 280px;"
                /> 
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>Video</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">Upea</div>
                <h6 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.video_id }}">{{ coleccion.video_titulo }}</n-link>
                </h6>
                <!--<div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>-->
                <!--<p>{{ course.excerpt2 }}</p>-->
                <!--<ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: coleccion.video_id }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
        </div>

        
        <!--<div class="hover-content-aside">
            <div class="content">
                <span class="course-level">{{ course.category }}</span>
                <h5 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h5>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }})</span>
                </div>
                <ul class="course-meta">
                    <li>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li>{{ course.duration }}</li>
                    <li>{{ course.level }}</li>
                </ul>
                <div class="course-feature">
                    <h6 class="title">What You’ll Learn?</h6>
                    <ul>
                        <li v-for="(feature, key) in course.features.slice(0, 3)" :key="key">{{ feature }}</li>
                    </ul>
                </div>
                <div class="button-group">
                    <a href="#" class="edu-btn btn-medium">Add to Cart</a>
                    <a href="#" class="wishlist-btn btn-outline-dark"><i class="icon-22"></i></a>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        props: ['extraClass', 'tipo', 'coleccion'],
        data() {
            return {
                url_api: process.env.APP_ROOT_API,
            };
        },
    }
</script>