<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';
import ExternalLink from '../components/ExternalLink.vue'
import Card from '../components/Card.vue'
import ActionCard from '../components/ActionCard.vue'

const { t, locale } = useI18n()

const showIframe = ref<boolean>(false)

const courses = {
    main: {
        inc118: {
            title: 'Fostering an Inclusive Workplace',
            href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC118&cm_locale=en',
            desc: 'Access in the Learning Platform',
            body:
                ['Use a custom, gulp-based workflow to create interactive activities.',
                    'Use React Email to design engaging emails that are being sent to learners using the Brightspace Intelligent Agent System.',
                    'Use release conditions to tailor the learner experience for students.',
                    'Test pages for accessibility errors and fix them.'],
            img: `./thumbnails/inc118.png`
        },
        inc101: {
            title: 'Introduction to Gender-based Analysis Plus (GBA Plus)',
            href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC101&cm_locale=en',
            desc: 'Access in the Learning Platform',
            body: [
                `Collaborate with Instructional Designer (ID) to prototype a branching activity using Figma.`,
                ` Program activity in a way that Brightspace's What you see is what you get (WYSIWYG) HTML editor will allow IDs to edit its content without the need of a Multimedia Technician.`,
                `Test pages for accessibility errors and fix them.`,
            ],
            img: `./thumbnails/inc101.png`
        }
    },
    wmt203: {
        title: 'Mental Health and the Workplace: Raising Awareness',
        href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=WMT203&cm_locale=en',
        desc: 'Access in the Learning Platform',
        body: [
            ` Assist with the creation an Interactive Toolkit using Vue Js.`,
            ` Add an interactive video player that will dynamically ask questions based on the content of the video.`,
            ` Build a bilingual glossary.`,
            `Test pages for accessibility errors and fix them.`,
        ],
        img: `./thumbnails/wmt203.png`
    }
}


const frCourses = {
    main: {
        inc118: {
            title: 'Favoriser un milieu de travail inclusif',
            href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC118&cm_locale=fr',
            desc: 'Vue dans la plateforme d\'apprentissage',
            body:
                [`Utiliser un flux de travail personnalisé, basé sur gulp, pour créer des activités interactives.`,
                    `Utiliser React Email pour concevoir des courriels attrayants qui sont envoyés aux apprenants à l'aide du système d'agent intelligent Brightspace.`,
                    `Utiliser les conditions de libération pour adapter l'expérience de l'apprenant aux étudiants.`,
                    `Tester les pages pour détecter les erreurs d'accessibilité et les corriger.`,],
            img: `./thumbnails/inc118_fr.png`
        },
        inc101: {
            title: 'Introduction à l\'analyse comparative entre les sexes plus (ACS Plus) ',
            href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC101&cm_locale=fr',
            desc: 'Vue dans la plateforme d\'apprentissage',
            body: [
                ` Collaborer avec le concepteur pédagogique pour créer un prototype d'activité à embranchements à l'aide de Figma.`,
                `Programmer l'activité de manière à ce que l'éditeur HTML WYSIWYG (Ce que vous voyez est ce que vous obtenez en anglais) de Brightspace permette aux concepteur pédagogiques de modifier son contenu sans l'aide d'un technicien multimédia.`,
                `Tester les pages pour détecter les erreurs d'accessibilité et les corriger.`,
            ],
            img: `./thumbnails/inc101_fr.png`
        }
    },
    wmt203: {
        title: 'La santé mentale et le milieu de travail : accroître la sensibilisation ',
        href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=WMT203&cm_locale=fr',
        desc: 'Vue dans la plateforme d\'apprentissage',
        body: [
            ` Aider à la création d'une boîte à outils interactive en utilisant Vue Js.`,
            `Ajouter un lecteur vidéo interactif qui posera dynamiquement des questions basées sur le contenu de la vidéo.`,
            `Créer un glossaire bilingue.`,
            `Tester les pages pour détecter les erreurs d'accessibilité et les corriger.`,
        ],
        img: `./thumbnails/wmt203_fr.png`
    }
}

const projects = {
    gift: {
        title: 'Interactive Gift Label',
        desc: `It's a fun, little web app that allows you to customise holiday labels for those times when you are wrapping presents and forget to buy labels. Just remember to allow background colors when printing!`,
        href: `https://bo7owers.github.io/aov-gift-label/`,
        img: `./thumbnails/gift-label.png`
    },
    tree: {
        title: 'Vue Christmas Tree',
        desc: `Used some Vue Js directives to render the same component while creating an HTML and CSS Christmas tree. `,
        href: `https://bo7owers.github.io/2022-christmas-tree-lights-problem/`,
        img: `./thumbnails/tree.png`
    }
}

const frProjects = {
    gift: {
        title: 'Interactive Gift Label',
        desc: `C'est une petite application web amusante qui vous permet de personnaliser des étiquettes de vacances pour les moments où vous emballez des cadeaux et oubliez d'acheter des étiquettes. N'oubliez pas d'autoriser les couleurs d'arrière-plan lors de l'impression !`,
        href: `https://bo7owers.github.io/aov-gift-label/`,
        img: `./thumbnails/gift-label.png`
    },
    tree: {
        title: 'Vue Christmas Tree',
        desc: `J'ai utilisé quelques directives Vue Js pour rendre le même composant tout en créant un arbre de Noël HTML et CSS.`,
        href: `https://bo7owers.github.io/2022-christmas-tree-lights-problem/`,
        img: `./thumbnails/tree.png`
    }
}
</script>
<template>
    <h1>{{ t('portfolioView.portfolioHeading') }}</h1>

    <div class="portfolio-content" v-if="locale === 'en'">
        <section id="courses">
            <h2>Some courses I have worked on with <abbr title="Canada School of Public Service">CSPS</abbr></h2>
            <p>Most things I have built are for Canadian Public Servants, because of that, they can only be accessed
                through the <abbr title="Canada School of Public Service">CSPS</abbr> Learning Platform. You can find
                links to some of the courses I contrubuted in this page.</p>
            <div class="action-card-container">
                <div class="main-courses">
                    <ActionCard v-for="(course, index) in courses.main" :key="index" :title="course.title"
                        :desc="course.desc" :href="course.href" :img="course.img" :card-body="course.body">
                    </ActionCard>
                </div>
                <div class="last-course">
                    <ActionCard :title="courses.wmt203.title" :desc="courses.wmt203.desc" :href="courses.wmt203.href"
                        :img="courses.wmt203.img" :card-body="courses.wmt203.body" />
                </div>
            </div>


        </section>
        <section id="personal_projects">
            <h2>Multimedia projects</h2>
            <section id="vue_advent">
                <h3>Advent of Vue 2022</h3>
                <p>For the 2022 holiday season, I created some projects, here are some that I think worked out the best:
                </p>

                <div class="card-container">
                    <Card v-for="(project, index) in projects" :key="index" :cardTitle="project.title"
                        :url="project.href" :img="project.img">
                        <template #cardBody>
                            <p>{{ project.desc }}</p>
                        </template>
                    </Card>
                </div>
            </section>

            <section id="j_school">
                <h3>Video</h3>
                <p>Back when I was in school, I experimented with photography, writing and videography.</p>
                <p>
                    One example is a
                    <ExternalLink
                        href="https://glueottawa.com/2019/01/30/aikido-is-a-peaceful-martial-art-that-will-change-the-students-lives-completely/"
                        description="video story" /> about Aikido that was published by Glue Ottawa.
                </p>
                <h3>Demo Reel</h3>
                <p id="show_iframe" tabindex="-1">You can find a quick demo reel showcasing my areas of expertice by
                    selecting the "Show
                    iframe" button
                    that follows. Visit the <router-link to="/privacy#iframe-info">privacy page</router-link> to learn
                    why.
                </p>
                <button @click="showIframe = !showIframe" class="btn btn-primary">Show iframe</button>
                <div aria-live="polite">
                    <div class="portfolio-iframe" v-if="showIframe">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/SXbIE0TMe50?si=z-3rQh4SbM4oWNIZ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </section>
    </div>
    <div class="portfolio-content" v-else-if="locale === 'fr'">
        <section id="courses">
            <h2>Quelques cours sur lesquels j'ai travaillé avec l'<abbr
                    title="École de la fonction publique du Canada">EFPC</abbr></h2>
            <p>La plupart des cours que j'ai créés sont destinés aux fonctionnaires canadiens, c'est pourquoi ils ne
                sont
                accessibles que via la plateforme d'apprentissage de l'<abbr
                    title="École de la fonction publique du Canada">EFPC</abbr>. Sur cette page, vous trouverez des
                liens
                vers certains des cours auxquels j'ai contribué.</p>
            <div class="action-card-container">
                <div class="main-courses">
                    <ActionCard v-for="(course, index) in frCourses.main" :key="index" :title="course.title"
                        :desc="course.desc" :href="course.href" :img="course.img" :card-body="course.body">
                    </ActionCard>
                </div>
                <div class="last-course">
                    <ActionCard :title="frCourses.wmt203.title" :desc="frCourses.wmt203.desc"
                        :href="frCourses.wmt203.href" :img="frCourses.wmt203.img" :card-body="frCourses.wmt203.body" />
                </div>
            </div>


        </section>
        <section id="personal_projects">
            <h2>Projets multimédias</h2>
            <section id="vue_advent">
                <h3>L'avènement de Vue JS 2022</h3>
                <p>Pour les fêtes de fin d'année 2022, j'ai créé quelques projets, dont voici ceux qui me semblent les
                    plus
                    réussis :
                </p>

                <div class="card-container">
                    <Card v-for="(project, index) in frProjects" :key="index" :cardTitle="project.title"
                        :url="project.href" :img="project.img">
                        <template #cardBody>
                            <p>{{ project.desc }}</p>
                        </template>
                    </Card>
                </div>
            </section>

            <section id="j_school">
                <h3>Vidéo</h3>
                <p>Lorsque j'étais à l'école, j'ai expérimenté la photographie, l'écriture et la vidéographie.</p>
                <p>
                    Par exemple, j'ai réalisé une
                    <ExternalLink
                        href="https://glueottawa.com/2019/01/30/aikido-is-a-peaceful-martial-art-that-will-change-the-students-lives-completely/"
                        description="vidéo (en anglais seulement)" /> sur l'aïkido qui a été publiée par Glue Ottawa.
                </p>
                <h3>Bobine démo</h3>
                <p id="show_iframe" tabindex="-1">Vous pouvez trouver une brève bande démo (en anglais seulement)
                    présentant mes domaines
                    d'expertise en
                    sélectionnant le bouton "Afficher l'iframe" qui suit
                    qui suit. Visitez le site <router-link to="/privacy#iframe-info">page de
                        confidentialité</router-link>
                    pour apprendre pourquoi.
                </p>
                <button @click="showIframe = !showIframe" class="btn btn-primary">Afficher l'iframe</button>
                <div aria-live="polite">
                    <div class="portfolio-iframe" v-if="showIframe">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/SXbIE0TMe50?si=z-3rQh4SbM4oWNIZ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </section>
    </div>
    <div class="portfolio-content" v-else-if="locale === 'es'">
        <p>es</p>
    </div>
    <div class="portfolio-content" v-else>
        <p>Content not found</p>
    </div>

</template>

<style scoped>
.portfolio-content {
    display: grid;
    grid-template-columns: 0.25fr 1fr 1fr 0.25fr;

    & section {

        &#courses {
            grid-column: 1/5;
        }

        &#personal_projects {
            grid-column: 1/5;
            display: grid;
            grid-template-columns: 0.25fr 1fr 1fr 0.25fr;

            h2 {
                grid-column: 1/5;
            }
        }

        &#vue_advent {
            /* background-color: aqua; */
            grid-column: 2/4;
        }

        &#j_school {
            /* background-color: antiquewhite; */
            grid-column: 1/5;
            grid-row: 3/4;
            display: flex;
            flex-flow: column wrap;

            & .btn {
                margin-inline-end: auto;
            }

            & [aria-live='polite'] {
                margin-inline: auto;
            }
        }
    }
}

.card-container {
    display: grid;
    gap: 1.25rem 1.5rem;
    justify-content: center;
    max-width: 35rem;
    margin-inline: auto;


    @media (min-width: 810px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 40em;
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1rem;
        max-width: 70em;
    }

    @media(min-width: 1600px) {
        max-width: 85em;
        margin-inline: auto;
    }
}

.action-card-container {
    container-type: inline-size;
    container-name: a-card;

}

@container a-card (min-width: 500px) {
    .main-courses {
        display: block;
    }
}

@container a-card (min-width: 800px) {
    .main-courses {
        display: flex;
        column-gap: 0.5rem;

        .action-card {
            flex-flow: column wrap;
            width: 50%;
        }
    }
}
</style>