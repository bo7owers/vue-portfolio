<script setup lang="ts">

defineProps({
    cardTitle: String,
    url: String,
    urlDesc: String
})

</script>
<template>
    <div class="card">
        <h3 class="card-title">{{ cardTitle }}</h3>
        <div class="card-body">
            <img src="../assets/img/thumbnails/inc118.png" alt="" class="card-img">
            <slot name="cardBody"></slot>
        </div>
        <div class="card-footer">
            <a :href="url" class="btn btn-primary" target="_blank" rel="noopener noreferrer">{{ urlDesc }}</a>
        </div>

    </div>

</template>

<style scoped>
.card {
    display: flex;
    flex-flow: row wrap;
    max-width: 20rem;
    border: 2px solid var(--brand-black);
    border-radius: 0.75rem;
    padding: 1rem 1.5rem;

    .card-img {
        width: 100%;
        object-fit: cover;
    }

    .card-footer {
        margin-inline: auto;
        display: flex;

        .btn {
            margin-inline: auto;
            width: 100%;
        }
    }
}
</style>