<template>
  <footer>
    <div class="inner">
      <div class="logo">
        <RouterLink to="/">LOGO</RouterLink>
      </div>
      <p class="copy">2022 ⓒ COMPANY NAME Corp.</p>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background:#f6f6f6;
  text-align: center;
  padding:3rem 0;
  .logo {
    position:relative;
    height: 100%;
    a{
      font-size:4rem;
    }
  }
}
</style>
