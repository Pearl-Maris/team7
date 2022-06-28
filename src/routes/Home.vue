<template>
  <KeyVisual />
</template>

<script>
import KeyVisual from './keyVisual.vue'

export default {
    components: { KeyVisual },
    computed: {
        heropyMessage() {
            return this.$store.state.heropy.message 
        }
    },
    created() {
        this.validateToken()
    },
    methods: {
        async validateToken() {
            await this.$store.dispatch('auth/validateToken')
        }
    } 
}
</script>
