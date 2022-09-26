<template>
    <div></div>
</template>


<script>
import { useRouter } from 'vue-router';
export default {
    name: "NotFoundComponent",
    setup() {
        const route = useRouter()
        route.push({ path: '/' })
        
    },
}
</script>