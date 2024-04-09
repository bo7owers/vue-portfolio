<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
        <img :src="img" :alt="t('thumbnails.thumbnailAltText', { imgTitle: title })">
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
    flex-flow: column wrap;
    align-items: center;
    border-radius: var(--border-radius);
    margin-block: 1rem;
    border: 2px solid var(--dropdown-shadow1);
    padding: 0.75rem 1rem;
    background-color: var(--so-white);

    @media (min-width: 810px) {
        flex-flow: row nowrap;
    }

    & img {
        width: 18em;
        height: 11em;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    .ac-wrapper {
        display: flex;
        flex-flow: column wrap;
        margin-inline-start: 1rem;
    }

    a.action-link {
        margin-inline: auto;
    }



    &:nth-of-type(2n) {

        @media (min-width: 810px) {
            & img {
                order: 2;
            }
        }

        @container a-card (min-width: 800px) {
            & img {
                order: 1;
            }


            .ac-wrapper {
                order: 2;
            }


        }


        .ac-wrapper {
            margin-inline-end: 1rem;
        }
    }
}
</style>