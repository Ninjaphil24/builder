<script setup lang="ts">
    import { ref } from 'vue'
    import axios from 'axios'

    const secondColor = ref('#027be3')

    function reloadThemeCss() {
        const id = 'theme-css'
        let link = document.getElementById(id) as HTMLLinkElement | null

        if (link) {
            // Replace existing link
            const newHref = '/theme.css?v=' + Date.now()
            link.href = newHref
        } else {
            // Insert link if not found
            link = document.createElement('link')
            link.rel = 'stylesheet'
            link.id = id
            link.href = '/theme.css?v=' + Date.now()
            document.head.appendChild(link)
        }
    }

    function saveColor() {
        axios.post('/api/set-background', {
            color: secondColor.value
        })
            .then(res => {
                console.log('Saved!', res.data)
                reloadThemeCss()
            })
    }


</script>
<template>
    <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
            <q-input filled v-model="secondColor" :rules="['anyColor']" hint="With validation" class="my-input">
                <template v-slot:append>
                    <q-icon name="colorize" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-color v-model="secondColor" @update:model-value="saveColor" />
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .my-input {
        margin-top: 200px;
        max-width: 250px;
    }
</style>
