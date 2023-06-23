<template>
    <div class="edu-blog blog-style-1">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/blog/blog-details">
                    <img :src="servicio.imagen" :alt="servicio.titulo">
                </n-link>
            </div>
            <div class="content position-top">
                <div class="read-more-btn">
                    <n-link to="/blog/blog-details" class="btn-icon-round">
                        <i class="icon-4"></i>
                    </n-link>
                </div>
                <div class="category-wrap">
                    <n-link to="/blog/blog-masonry" class="blog-category">{{ servicio.institucion }}</n-link>
                </div>
                <h5 class="title"><n-link to="/blog/blog-details">{{ servicio.titulo }}</n-link></h5>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ servicio.calendario }}</li>
                </ul>
                <p>{{ servicio.descripcion }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['servicio']
    }
</script>