<template>
  <!-- <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2> -->
  <KeyVisual />
</template>

<script>
import KeyVisual from './keyVisual.vue'

export default {
    computed: {
        heropyMessage() {
            return this.$store.state.heropy.message;
        }
    },
    created() {
        this.validateToken();
    },
    methods: {
        validateToken() {
            this.$store.dispatch("auth/validateToken");
        }
    },
    components: { KeyVisual }
}
</script>
