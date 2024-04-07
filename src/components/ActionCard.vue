<script setup lang="ts">
defineProps({
    title: String,
    desc: String,
    href: String,
    img: String,
    cardBody: Array
})
</script>
<template>
    <div class="action-card">
        <img src="../assets/img/thumbnails/inc118.png" :alt="`Screenshot of ${title}`">
        <div class="ac-wrapper">
            <h4>{{ title }}</h4>



            <ul>
                <li v-for="(item, index) in cardBody" :key="index">
                    {{ item }}
                </li>
            </ul>

            <a :href="href" class="action-link">{{ desc }}</a>
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
    background-color: var(--brand-black);

    color: var(--solid-black);

    /* ul {
        background-color: yellow;
    } */

    & li {
        color: var(--solid-black);
    }

    & h4 {
        color: var(--solid-black);
    }

    & img {
        width: 20em;
        border-radius: var(--border-radius);
    }

    .ac-wrapper {
        display: flex;
        flex-flow: column wrap;
        margin-inline-start: 1rem;
    }

    a.action-link {
        margin-inline: auto;

        &:hover,
        &:visited,
        &:active {
            color: var(--so-white);
        }
    }



    &:nth-of-type(2n) {
        background-color: var(--so-white);

        h4,
        a,
        p,
        li {
            color: var(--brand-black);
        }

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

        h4,
        a,
        p,
        li {
            color: var(--so-white);
        }

        h4 {
            color: var(--so-white);
        }

        &:nth-of-type(2n) {

            a,
            h4,
            p,
            li {
                color: var(--solid-black);
            }

            & a:hover {
                color: var(--dropdown-shadow1)
            }
        }
    }
}
</style>