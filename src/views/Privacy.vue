<script setup lang="ts"></script>
<template>
    <h1>Privacy page</h1>
    <section id="statement">
        <h2>Privacy statement</h2>
        <p>I respect the privacy of you, the visitor. That is why I do not track you in any way. There may be some links
            to other websites that may track you but I explicitly will not.</p>
    </section>
    <section id="iframe-info" tabindex="-1">
        <h2>Iframe button?</h2>
        <p>In the home page, there is a 'Show iframe' button. That is because my video is hosted on YouTube and youtube
            adds trackers to the website. Therefore, I leave it up to you, if you want to load all the YouTube-dependent
            scripts that will load when the iframe is shown.</p>
        <p>Go to the <router-link to="/#show_iframe">Show iframe</router-link> section.</p>
    </section>
</template>