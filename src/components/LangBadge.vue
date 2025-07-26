
<script setup>

const props = defineProps({
    lang: {
        type: String,
        required: false,
        default: "Python",
    },
    image: {
        type: String,
        required: false,
        default: "python.svg",
    }    
})

const icons = import.meta.glob('@/assets/images/skills/*.svg', { eager: true, import: 'default' });
const langIcon = icons[`/src/assets/images/skills/${props.image}`];

</script>

<template>
    <div class="lang-badge">
        <svg height="100" width="100">
            <polygon points="2,20 98,2 80,98 2,98" class="badge" id="badge"/>
        </svg>
        <p class="language">{{ props.lang }}</p>
        <img :src="langIcon" class="lang-img">
    </div>
</template>

<style scoped lang="scss">
    .lang-badge {
        position: relative;
        width: 100px;
        // border: white solid 6px;
    }

    .lang-img {
        position: absolute;
        top: 18px;
        left: 20px;
        width: 50px;
    }

    .badge {
        stroke: white;
        stroke-width: 2;
        fill: black;
    }

    .language {
        position: absolute;
        bottom: 0;
        left: 2px;
        width: 83px;
        text-align: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        border-top: 2px solid white;
        clip-path: url(#badge-clip);
    }
</style>