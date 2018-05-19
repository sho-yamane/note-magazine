<template lang="pug">
  nav.Nav
    ul.Nav_Container
      li.Nav_List._about
        button.Nav_Btn(@click="clickNav('about')")
          icon(name="question-circle")
          span アバウト
      li.Nav_List._buy
        a.Nav_Btn(href="https://store.line.me/stickershop/product/1357769" target="_blank")
          icon(name="cart-plus")
          span 私は買う
      li.Nav_List._history
        button.Nav_Btn(@click="clickNav('history')")
          icon(name="history")
          span 投票履歴
      li.Nav_List._loginout
        button.Nav_Btn(v-if="!$store.state.oauth.login" @click="signIn")
          icon(name="sign-in-alt")
          span ログイン
        button.Nav_Btn(v-else @click="signOut")
          icon(name="sign-out-alt")
          span ログアウト
    .Nav_Content(:class="{_active: contentDisplay}")
      .Nav_ContentInner._about(v-if="navClickContent === 'about'")
        p
          | Vue.jsとFirebaseで構築したサンプルサイトです。
          a(href="https://note.sho-yamane.me/m/m88e71845c520" target="_blank") noteマガジン
          | で作り方の説明予定をしています。
          | 素材は
          a(href="https://twitter.com/sudarexyz") 茨城県の元気なラジオ屋さん
          |にお借りました。
      .Nav_ContentInner._history(v-if="navClickContent === 'history'")
        p 準備中
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FooterNav',
  data () {
    return {
      contentDisplay: false,
      navClickContent: null
    }
  },
  methods: {
    ...mapActions(['signIn', 'signOut']),
    clickNav (type) {
      if (!this.contentDisplay) {
        // 非表示の場合だす
        this.contentDisplay = true
        this.navClickContent = type
      } else if (this.contentDisplay && this.navClickContent === type) {
        // 表示の場合で同じボタンの場合は隠す
        this.contentDisplay = false
        this.navClickContent = null
      } else if (this.contentDisplay && this.navClickContent !== type) {
        // 表示の場合で違うボタンの場合は中身を変える
        this.navClickContent = type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Nav {
  &_Container {
    max-width: 402px;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 6px solid #1a1a1a;
    z-index: 10;
    font-size: 0;
  }
  &_List {
    width: 25%;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    &._about {
      background: #e70429;
    }
    &._buy {
      background: #59c836;
    }
    &._history {
      background: #0072be;
    }
    &._loginout {
      background: #fff000;
    }
  }
  &_Btn {
    appearance: none;
    padding: 8px 0 6px;
    cursor: pointer;
    outline: 0;
    transition: 0.2s ease-in;
    display: block;
    width: 100%;
    background: none;
    box-shadow: none;
    border: none;
    color: #fff;
    svg {
      display: block;
      margin: 0 auto 2px;
      width: auto;
      height: 12px;
      vertical-align: bottom;
      color: #1a1a1a;
    }
    span {
      display: block;
      text-shadow:
        black 1px 1px 0, black -1px -1px 0,/*右下、左上*/
        black -1px 1px 0, black 1px -1px 0,/*右上、左下*/
        black 0px 1px 0, black  0-1px 0,/*右、左*/
        black -1px 0 0, black 1px 0 0;/*上、下*/
    }
  }
  &_Content {
    max-width: 402px;
    width: 100%;
    height: calc(100vh - 52px);
    position: fixed;
    z-index: 9;
    top: 0;
    overflow-y: scroll;
    overflow-scrolling: touch;
    background: #fff;
    transition: 0.2s ease-in;
    transform: translateY(100vh);
    &._active {
      transform: translateY(0);
      transition: 0.2s ease-out;
    }
  }
  &_ContentInner {
    a {
      color: #0072be;
      text-decoration: underline;
    }
    &._about {
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 24px;
    }
    &._history {
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 24px;
    }
  }
}
</style>
