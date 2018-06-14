<template lang="pug">
  .Description
    h2.Description_txt
      | 1日1回ログインして
      br
      | 最強のスダンプに投票しよう
    .Description_btns
      // LINEストさへのリンク
      a.Description_btn._line(href="https://store.line.me/stickershop/product/1357769" target="_blank") スダンプを買う
      // ログインしてなかったらログインボタン
      button.Description_btn._login(v-if="!oauth.login" @click="signIn") ログイン
      // ログインしてたらログアウトボタン
      button.Description_btn._logout(v-else @click="signOut") ログアウト
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Description',
  computed: {
    ...mapGetters(['oauth'])
  },
  methods: {
    // actions参照
    ...mapActions(['signIn', 'signOut'])
  }
}
</script>

<style lang="scss" scoped>
.Description {
  margin-bottom: 32px;
  &_txt {
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 18px;
  }
  &_btns {
    text-align: center;
  }
  &_btn {
    appearance: none;
    border-radius: 24px;
    padding: 8px 24px;
    cursor: pointer;
    font-size: 12px;
    outline: 0;
    transition: 0.2s ease-in;
    display: inline-block;
    &:first-child {
      margin-right: 16px;
    }
    &:hover {
      transition: 0.2s ease-out;
    }
    &._login {
      color: #fff;
      background-color: #0072bf;
      border: 3px solid #0072bf;
      &:hover {
        color: #0072bf;
        background-color: #fff;
      }
    }
    &._logout {
      color: #fff;
      background-color: #f56c6c;
      border: 3px solid #f56c6c;
      &:hover {
        color: #f56c6c;
        background-color: #fff;
      }
    }
    &._line {
      color: #fff;
      background-color: #00b84f;
      border: 3px solid #00b84f;
      &:hover {
        color: #00b84f;
        background-color: #fff;
      }
    }
  }
}
</style>
