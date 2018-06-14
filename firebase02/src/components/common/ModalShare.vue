<template lang="pug">
  // 投票すると$store.state.modal.shareをtrueにするので._activeがaddされる
  .ModalShare(:class="{_active: modal.share}")
    // maskとcloseボタンどっちクリックしても閉じるようにする
    .ModalShare_Mask(@click="clickClose")
    .ModalShare_Close(@click="clickClose")
      icon(name="times")
    .ModalShare_Content
      .ModalShare_Txt
        span 投票完了
        span
          | シェアして
          br
          | あなたの推しスダンプを広めよう
      .ModalShare_Share
        // $store.state.vote.id + 1をしているのはidが0-23だが見せ方の番号1-24のため
        a(target="_blank" :href="`https://twitter.com/share?url=${shareUrl}&text=${$store.state.vote.id + 1}番のスダンプに投票しました！今最強のスダンプが決まる！スダンプ人気投票サイト`")
          icon(name="brands/twitter")
          span ツイートする
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalShare',
  data () {
    return {
      shareUrl: location.href
    }
  },
  computed: {
    ...mapGetters(['modal'])
  },
  methods: {
    clickClose () {
      // mutations参照
      // $store.state.modal.shareをfalseにする
      this.$store.commit('UPDATE_MODALSHERE', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.ModalShare {
  &._active {
    .ModalShare_Mask {
      visibility: visible;
      opacity: 1;
      transition: 0.2s ease-out;
    }
    .ModalShare_Close {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      transition: 0.2s ease-out;
    }
    .ModalShare_Content {
      visibility: visible;
      opacity: 1;
      transition: 0.2s ease-out;
    }
  }
  &_Mask {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 10;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in;
  }
  &_Close {
    position: fixed;
    top: 32px;
    right: 32px;
    z-index: 11;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    transition: 0.2s ease-in;
    svg {
      width: auto;
      height: 32px;
      color: #fff;
    }
  }
  &_Content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 12;
    padding: 32px;
    width: 300px;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    background: #fff;
    border-radius: 6px;
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease-in;
  }
  &_Txt {
    margin-bottom: 16px;
    span {
      display: block;
      &:nth-child(1) {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      &:nth-child(2) {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  &_Share {
    a {
      background: #55acee;
      color: #fff;
      padding: 8px 16px;
      display: inline-block;
      border-radius: 6px;
      font-size: 14px;
      span {
        font-weight: 700;
      }
      svg {
        position: relative;
        top: -1px;
        margin-right: 8px;
        width: auto;
        height: 14px;
      }
    }
  }
}
</style>
