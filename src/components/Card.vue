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
    width: 15rem;
    border: 2px solid var(--brand-black);
    border-radius: 0.75rem;
    padding: 1rem 1.5rem;
    background-color: var(--so-white);


    @media (min-width: 1600px) {
        width: 20rem;
    }

    .card-title {
        text-align: left;
        word-break: keep-all;
    }


    .card-img {
        width: 100%;
        object-fit: cover;
    }

    .card-footer {
        margin: auto;
        display: flex;

        .btn {
            margin-inline: auto;
            width: 100%;
            padding-block: 0.25rem;
            color: var(--btn-color);

            &:visited {
                color: var(--btn-color);
            }

            &:hover {
                color: var(-btn-hover-color);
            }
        }
    }
}

html {
    &.light-theme {
        a:not(.btn) {
            color: var(--brand-blue);

            &:hover,
            &:visited {
                color: var(--tertiary-color);
            }
        }
    }

    &.dark-theme {
        a:not(.btn) {
            color: var(--brand-pink);

            &:hover,
            &:visited {
                color: var(--dropdown-shadow1);
            }
        }
    }
}
</style>