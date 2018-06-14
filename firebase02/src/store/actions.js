import firebase from 'firebase/app'

export default {
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
  signOut ({ commit }) {
    firebase.auth().signOut().then(() => {
      alert('ログアウトしました')
      // Vuexのstateを初期化
      commit('STATE_INIT')
    })
  },
  // ログインしているかチェック
  loginCheck ({ commit }) {
    // 現在ログインしているユーザーを取得する
    // https://firebase.google.com/docs/auth/web/manage-users?hl=ja
    firebase.auth().onAuthStateChanged(user => {
      // ログインしているユーザーがいれば…
      if (user) {
        // ログイン状態をtrueにする
        commit('UPDATE_OAUTH', true)
        // ユーザー情報を更新する
        commit('UPDATE_USER', {uid: user.uid, displayName: user.displayName, photoURL: user.photoURL})
        // FirebaseのDBにユーザー情報があるか確認する、なければユーザー登録
        this.dispatch('checkUser', user.uid)
        // 投票してるか確認
        this.dispatch('voteStatusCheck', user.uid)
      }
      commit('UPDATE_LOADING', false)
    })
  },
  // ユーザー情報がDBにあるか確認するなければユーザー登録
  checkUser ({ commit }, uid) {
    return new Promise(resolve => {
      const db = firebase.database()
      const userRef = db.ref('users/' + uid)
      userRef.on('value', snapshot => {
        if (snapshot.val() === null) {
          userRef.update({signIn: true})
        }
        resolve()
      })
    })
  },
  // votesテーブルのデータ取得
  fetchVotesData ({ commit }) {
    const db = firebase.database()
    const votesRef = db.ref('votes')
    votesRef.on('value', snapshot => {
      commit('UPDATE_VOTES', snapshot.val())
    })
  },
  // 今日投票したか確認
  voteStatusCheck ({ commit }, uid) {
    const today = new Date()
    const db = firebase.database()
    // 今日の日付で投票しているか確認する
    const userVoteRef = db.ref('users/' + uid + '/' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
    userVoteRef.on('value', snapshot => {
      if (snapshot.val() !== null) {
        // データがあれば投票しているので投票済&投票番号を取得してdataに保持
        commit('UPDATE_VOTE', {id: snapshot.val().voteId, voteStatus: true})
      } else {
        // 投票していなければfalse
        commit('UPDATE_VOTE', {id: null, voteStatus: false})
      }
    })
  },
  async postVote ({ commit }, {voteId, uid}) {
    const db = firebase.database()
    const voteRef = db.ref('votes')
    const nowVote = await this.dispatch('checkVoteNum', voteId)
    const today = new Date()

    // +1投票
    voteRef.child(voteId).update({
      num: nowVote + 1
    })
    // 投票情報
    let userArr = {}
    userArr[today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()] = {
      voteId: voteId,
      voteTime: today,
      voteStatus: true
    }
    const userCheckRef = db.ref('users/' + uid)
    userCheckRef.update(userArr)
    // モーダルでシェアボタン表示
    commit('UPDATE_MODALSHERE', true)
  },
  checkVoteNum ({commit}, voteId) {
    return new Promise(resolve => {
      const db = firebase.database()
      const votesRef = db.ref('votes/' + voteId)
      votesRef.on('value', snapshot => {
        resolve(snapshot.val().num)
      })
    })
  }
}
