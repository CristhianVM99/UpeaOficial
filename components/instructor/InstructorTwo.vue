<template>
    <div class="edu-team-grid team-style-2">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <n-link to="/instructor/instructor-profile">
                        <img :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad" alt="" />
                    </n-link>
                </div>
                <ul class="team-share-info">
                    <!--<li v-for="(social, key) in instructor.socialLinks" :key="key">
                        <a :aria-label="social.name" :href="social.url">
                            <i :class="social.iconName"></i>
                        </a>
                    </li>-->
                </ul>
            </div>
            <div class="content">
                <h5 class="title">
                    <n-link to="/instructor/instructor-profile">{{ autoridad.nombre_autoridad }}</n-link>
                </h5>
                <span class="designation">{{ autoridad.cargo_autoridad }}</span>
                <!--<p>Descripcion</p>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['autoridad'],
        data() {
            return {
                url_api: process.env.APP_ROOT_API
            }
        },
        created() {
            console.log("url_api de instructor")
            console.log(this.url_api)
            
        },
    }
</script>