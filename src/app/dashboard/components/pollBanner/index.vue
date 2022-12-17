<script setup lang="ts">
    import { useRouter } from "vue-router";
    import DataPollServices from '@/app/dashboard/views/pollLayout/services'

    const dataPollServices = new DataPollServices(useRouter());
    await dataPollServices.getPollById()
    const dataPollOption = dataPollServices.poll.options
</script>
<template>
    <template v-for="option in dataPollOption" :key="option.file">
        <div v-if="(option._id === `012` && option.value === true && option.premium === true)">
            <img :src="option.file" alt="" srcset="" class="w-100 shadow">
        </div>
    </template>
</template>
