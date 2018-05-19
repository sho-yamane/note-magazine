<template lang="pug">
  .Index
    // .Loadingを消す場合のアニメーション対応（css参照）
    transition(name="fade01")
      // loginCheck()が終わるまで待機
      .Loading(v-if="$store.state.loading")
        p
          // "Loading"というテキストを一文字ずつspanに入れる（アニメーション対応）
          span(v-for="txt in 'Loading'") {{txt}}
    // .Containerを出す場合のアニメーション対応（css参照）
    transition(name="fade02")
      // loginCheck()が終了したら表示
      .Container(v-if="!$store.state.loading")
        global-header
        description
        // ログインしている場合はユーザー情報表示
        // .User(v-if="oauth.login")
          // 画像
          img.User_Img(:src="user.photoURL" :alt="user.displayName")
          // 名前
          .User_Name {{user.displayName}}
          // ログアウトボタン
          button.Btn._signOut(@click="signOut") ログアウト
        // ログインしていない場合はログインボタン表示
        // .Login(v-else)
          button.Btn._signIn(@click="signIn") ソーシャルログイン
        sudamp-list
        footer-nav
        modal-share
</template>

<script>
import { mapActions } from 'vuex'
import SudampList from '../common/SudampList'
import GlobalHeader from '../common/GlobalHeader'
import Description from '../common/Description'
import FooterNav from '../common/FooterNav'
import ModalShare from '../common/ModalShare'

export default {
  name: 'Index',
  components: {ModalShare, FooterNav, Description, GlobalHeader, SudampList},
  data () {
    return {
    }
  },
  mounted () {
    // 最初にログインチェック
    this.loginCheck()
  },
  methods: {
    ...mapActions(['loginCheck'])
  }
}
</script>

<style lang="scss" scoped>
.Loading {
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  p {
    font-size: 18px;
    font-weight: 700;
    span {
      display: inline-block;
      @for $i from 1 through 7 {
        &:nth-child(#{$i}) {
          animation: 1s loadingText $i * 0.1s infinite;
        }
      }
    }
  }
}

.Container {
  width: 100%;
  min-height: 100vh;
}

.User {
  display: inline-block;
  padding: 32px 48px;
  border-radius: 3px;
  border: 1px solid #eaeaea;
  &_Img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: block;
    vertical-align: bottom;
    margin: 0 auto 16px;
  }
  &_Name {
    text-align: center;
    font-size: 16px;
    margin: 0 auto 16px;
  }
}

/*******************************/
/** anim & transition
/*******************************/

@keyframes loadingText {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.fade01-enter-active, .fade01-leave-active {
  transition: opacity 1s;
}
.fade01-enter, .fade01-leave-to {
  opacity: 0;
}

.fade02-enter-active, .fade02-leave-active {
  transition: 1s opacity 1s;
}
.fade02-enter, .fade02-leave-to {
  opacity: 0;
}
</style>
