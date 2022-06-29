<template>
  <MyPageHeader />
  <MyPageLNB />
  <h2>마이페이지</h2>
  <RouterLink to="/my-page/update">
    회원정보
  </RouterLink>
  <RouterView />
</template>

<script>
import MyPageHeader from '~/components/MyPageHeader'
import MyPageLNB from '~/components/MyPageLNB'

export default {
  components: { MyPageHeader, MyPageLNB }
}
</script>
