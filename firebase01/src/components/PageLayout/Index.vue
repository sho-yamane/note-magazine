<template lang="pug">
  .Index
    // .Loadingを消す場合のアニメーション対応（css参照）
    transition(name="fade01")
      // loginCheck()が終わるまで待機
      .Loading(v-if="loading")
        p
          // "Loading"というテキストを一文字ずつspanに入れる（アニメーション対応）
          span(v-for="txt in 'Loading'") {{txt}}
    // .Containerを出す場合のアニメーション対応（css参照）
    transition(name="fade02")
      // loginCheck()が終了したら表示
      .Container(v-if="!loading")
        // ログインしている場合はユーザー情報表示
        .User(v-if="oauth.login")
          // 画像
          img.User_Img(:src="user.photoURL" :alt="user.displayName")
          // 名前
          .User_Name {{user.displayName}}
          // ログアウトボタン
          button.Btn._signOut(@click="signOut") ログアウト
        // ログインしていない場合はログインボタン表示
        .Login(v-else)
          button.Btn._signIn(@click="signIn") ソーシャルログイン
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Index',
  data () {
    return {
      loading: true,
      user: {
        displayName: '',
        photoURL: ''
      },
      oauth: {
        login: false
      }
    }
  },
  mounted () {
    // 最初にログインチェック
    this.loginCheck()
  },
  methods: {
    // 新規アカウント登録 or ログイン
    signIn () {
      // 今回はGoogleの場合
      const provider = new firebase.auth.GoogleAuthProvider()
      // Facebookの場合は
      // const provider = new firebase.auth.FacebookAuthProvider()
      // Twitterの場合は
      // const provider = new firebase.auth.TwitterAuthProvider()

      // リダイレクト型のサインイン画面を出す
      firebase.auth().signInWithRedirect(provider)
    },
    // ログアウト
    signOut () {
      firebase.auth().signOut().then(() => {
        alert('ログアウトしました')
        // ログイン状態をfalseにする
        this.oauth.login = false
        // ユーザー情報を空にする
        this.user.displayName = ''
        this.user.photoURL = ''
      })
    },
    // ログインしているかチェック
    loginCheck () {
      // 現在ログインしているユーザーを取得する
      // https://firebase.google.com/docs/auth/web/manage-users?hl=ja
      firebase.auth().onAuthStateChanged(user => {
        // ログインしているユーザーがいれば…
        if (user) {
          // ログイン状態をtrueにする
          this.oauth.login = true
          // ユーザー情報を保持する
          this.user.displayName = user.displayName // 名前
          this.user.photoURL = user.photoURL // アイコン画像のURL
        }
        // Loading画面を解除
        this.loading = false
      })
    }
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
    span {
      @for $i from 1 through 7 {
        &:nth-child(#{$i}) {
          animation: 1s loadingText $i * 0.1s infinite;
        }
      }
    }
  }
}

.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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

.Btn {
  appearance: none;
  border-radius: 24px;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 12px;
  outline: 0;
  transition: 0.2s ease-in;
  &:hover {
    transition: 0.2s ease-out;
  }
  &._signIn {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover {
      color: #409eff;
      background-color: #fff;
    }
  }
  &._signOut {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover {
      color: #f56c6c;
      background-color: #fff;
    }
  }
}

/*******************************/
/** anim & transition
/*******************************/

@keyframes loadingText {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
