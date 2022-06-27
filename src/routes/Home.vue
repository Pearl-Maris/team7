<template>
  <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2>
</template>

<script>
export default {
  computed: {
    heropyMessage() {
      return this.$store.state.heropy.message
    }
  },
  created() {
    this.validateToken()
  },
  methods: {
    validateToken() {
      this.$store.dispatch('auth/validateToken')
    }
  }
}
</script>
