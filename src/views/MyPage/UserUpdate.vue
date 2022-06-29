<template>
  <h2>회원정보</h2>
  <div>
    <dl>
      <dt>
        이메일
      </dt>
      <dd>
        {{ email }}
      </dd>
    </dl>
    <dl>
      <dt>
        기본정보
      </dt>
      <dd>
        {{ displayName }}
        <RouterLink to="/my-page/edit-name">
          <button>수정</button>
        </RouterLink>
      </dd>
    </dl>
    <dl>
      <dt>
        비밀번호
      </dt>
      <dd>
        <RouterLink to="/my-page/edit-password">
          <button>수정</button>
        </RouterLink>
      </dd>
    </dl>
  </div>



  <img
    width="100"
    :src="profileImg"
    alt="profileImg" />
  <RouterView />
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', [
      'email',
      'displayName',
      'profileImg'
    ])
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
