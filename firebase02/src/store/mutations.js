export default {
  STATE_INIT: (state) => {
    state.user = {
      uid: '',
      displayName: '',
      photoURL: ''
    }
    state.vote = {
      id: null,
      status: false
    }
    state.oauth = {
      login: false
    }
  },
  UPDATE_LOADING: (state, loadingStatus) => {
    state.loading = loadingStatus
  },
  UPDATE_OAUTH: (state, loginStatus) => {
    state.oauth.login = loginStatus
  },
  UPDATE_VOTE: (state, {id, voteStatus}) => {
    if (voteStatus) {
      state.vote.id = id
      state.vote.status = voteStatus
    } else {
      state.vote.status = voteStatus
    }
  },
  UPDATE_VOTES: (state, obj) => {
    state.votes = obj
  },
  UPDATE_USER: (state, {uid, displayName, photoURL}) => {
    state.user.uid = uid
    state.user.displayName = displayName
    state.user.photoURL = photoURL
  },
  UPDATE_MODALSHERE: (state, modalStatus) => {
    state.modal.share = modalStatus
  }
}
