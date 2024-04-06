<script setup lang="ts">
defineProps({
    title: String,
    desc: String,
    href: String,
    img: String
})
</script>
<template>
    <div class="action-card">
        <img src="../assets/img/thumbnails/inc118.png" :alt="`Screenshot of ${title}`">
        <div class="ac-wrapper">
            <h4>{{ title }}</h4>
            <p>{{ desc }}</p>
            <a :href="href">See the project in action!</a>
        </div>
    </div>
</template>
<style scoped>
.action-card {
    --border-radius: 5px;
    display: flex;
    border-radius: var(--border-radius);
    margin-block: 1rem;
    border: 1px solid var(--dropdown-shadow1);
    padding: 0.75rem 1rem;

    & img {
        width: 20em;
        border-radius: var(--border-radius);
    }

    .ac-wrapper {
        display: flex;
        flex-flow: column wrap;
        margin-inline-start: 1rem;
    }

    a {
        margin-inline: auto;
    }

    /* if action card next to action card, switch image side */
    +.action-card {
        background-color: var(--brand-black);

        color: var(--solid-black);

        & img {
            order: 2;
        }

        .ac-wrapper {
            margin-inline-end: 1rem;
        }
    }
}

html.light-theme {
    .action-card {

        +.action-card,
        +.action-card h4,
        +.action-card a {
            color: #fff;
        }

        +.action-card a {
            &:hover {
                color: var(--dropdown-shadow1)
            }
        }
    }
}
</style>