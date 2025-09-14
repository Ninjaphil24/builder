<script setup lang="ts">
    import { ref } from 'vue'

    const drawer = ref(false)
</script>


<template>
    <div>
        <q-layout view="lHh Lpr lFf">
            <q-header elevated class="bg-secondary text-white">
                <!-- Floating Button -->
                <q-btn fab color="primary" icon="tune" class="fixed-bottom-right q-mb-lg q-mr-lg"
                    @click="drawer = !drawer" />

                <!-- Drawer -->
                <q-drawer v-model="drawer" side="right" overlay bordered :width="280">
                    <q-list>
                        <q-item clickable v-ripple>
                            <q-item-section>
                                <q-item-label>Dummy Action</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-drawer>
            </q-header>
        </q-layout>
    </div>
</template>


<style scoped>
    .fixed-bottom-right {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 2000;
    }
</style>
