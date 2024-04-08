<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
</script>
<template>
    <div class="avatar-container">
        <img src="/avatars/memoji.png" :alt="locale !== 'en' ? 'Avatar de René Torres' : 'René Torres Avatar'"
            class="avatar">
    </div>

</template>

<style scoped>
.avatar-container {
    border-radius: 50%;
    position: relative;
    height: 50em;

    /* &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 12em;
        height: 12em;
        border: 3px solid var(--brand-blue);
        border-radius: 50%;
        left: 25px;
        top: -7px;
        z-index: -1;
    } */

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 12em;
        height: 12em;
        border: 3px solid var(--brand-pink);
        border-radius: 50%;
        left: -2px;
        top: -7px;
        z-index: -1;
    }
}

.avatar {
    border: 3px solid var(--brand-blue);
    border-radius: 50%;
    height: 25%;

}
</style>