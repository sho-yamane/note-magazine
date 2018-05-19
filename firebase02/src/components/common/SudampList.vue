<template lang="pug">
  .SudampList
    .SudampList_Elem(v-for="(vote, key) in votes" :key="key")
      .SudampList_ElemNo {{key + 1}}
      img(:src="`/static/sudamp/line_sudamp_01_${key}-1.jpg`")
      .SudampList_VoteNum
        span(:id="`js-voteNum-${key}`") {{vote.num}}
        span.SudampList_VoteNumUnit 票
      button.SudampList_VoteBtn._disable(v-if="$store.state.vote.status")
        span(v-if="$store.state.vote.id === key") 本日投票済
        span(v-else) -
      button.SudampList_VoteBtn._active(v-else-if="!$store.state.vote.status && $store.state.oauth.login" @click="postVote({voteId: key, uid: $store.state.user.uid})") 投票する
      button.SudampList_VoteBtn._login(v-else-if="!$store.state.vote.status && !$store.state.oauth.login" @click="signIn") ログインして投票
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SudampList',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['votes'])
  },
  mounted () {
    this.fetchVotesData()
  },
  methods: {
    ...mapActions(['signIn', 'postVote', 'fetchVotesData'])
  }
}
</script>

<style lang="scss" scoped>
.SudampList {
  display: flex;
  flex-wrap: wrap;
  border-top: 6px solid #1a1a1a;
  padding-bottom: 52px;
  &_Elem {
    width: 50%;
    position: relative;
    &:nth-child(odd){
      border-right: 3px solid #1a1a1a;
      border-bottom: 6px solid #1a1a1a;
    }
    &:nth-child(even){
      border-left: 3px solid #1a1a1a;
      border-bottom: 6px solid #1a1a1a;
    }
    img {
      vertical-align: bottom;
    }
    &:nth-last-child(1) {
      border-bottom: none;
    }
    &:nth-last-child(2) {
      border-bottom: none;
    }
  }
  &_ElemNo {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    background: #1a1a1a;
  }
  &_VoteNum {
    padding: 8px 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  &_VoteNumUnit {
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
  }
  &_VoteBtn {
    appearance: none;
    padding: 8px 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    outline: 0;
    transition: 0.2s ease-in;
    display: block;
    width: 100%;
    &:hover {
      transition: 0.2s ease-out;
    }
    &._active {
      border: 3px solid #58ca32;
      background: #58ca32;
      color: #fff;
      &:hover {
        background: #fff;
        color: #58ca32;
      }
    }
    &._login {
      border: 3px solid #0072be;
      background: #0072be;
      color: #fff;
      &:hover {
        background: #fff;
        color: #0072be;
      }
    }
    &._disable {
      cursor: default;
      border: 3px solid #eaeaea;
      background: #eaeaea;
      color: #1a1a1a;
    }
  }
}
</style>
