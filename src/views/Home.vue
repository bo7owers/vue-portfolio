<script lang="ts" setup>
import ExternalLink from '../components/ExternalLink.vue'
import { useI18n } from 'vue-i18n'
interface person {
    name: String
    lName: String
    age?: Number
}

const rene: person = {
    name: 'Rene',
    lName: 'Torres',
    age: 29,
}

const { t } = useI18n()
</script>

<template>
    <h1>{{ t('homeHeading') }}</h1>

    <h2>{{ rene.name }} {{ rene.lName }}</h2>
    <p>
        I am a web developer who wanst to make the web accessible to everybody.
        <ExternalLink
            pageName="7orresrene"
            href="https://vue.7orresrene.com"
            description="My website's beta version"
        />
    </p>

    <div class="main-img"></div>
    <input type="text" name="test" id="test" />
    <button class="btn">button</button>
    <button class="btn btn-primary">Hello pramary</button>
    <button class="btn btn-secondary">Hello there secondary</button>
</template>
