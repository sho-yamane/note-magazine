<template lang="pug">
  header.GlobalHeader
    h1.GlobalHeader_Title スダンプ人気投票
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.GlobalHeader {
  width: 100%;
  background-image: url(../../assets/header.jpg);
  background-size: cover;
  background-position: center center;
  position: relative;
  border-bottom: 6px solid #1a1a1a;
  margin-bottom: 32px;
  &:before {
    content: '';
    padding-top: 66%;
    display: block;
  }
  &_Title {
    writing-mode: vertical-rl;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    position: absolute;
    top: 24px;
    right: 24px;
    text-shadow:
      black 2px 0px 0px, black -2px 0px 0px,
      black 0px -2px 0px, black 0px 2px 0px,
      black 2px 2px 0px, black -2px 2px 0px,
      black 2px -2px 0px, black -2px -2px 0px,
      black 1px 2px 0px, black -1px 2px 0px,
      black 1px -2px 0px, black -1px -2px 0px,
      black 2px 1px 0px, black -2px 1px 0px,
      black 2px -1px 0px, black -2px -1px 0px,
      black 1px 1px 0px, black -1px 1px 0px,
      black 1px -1px 0px, black -1px -1px 0px;
  }
}
</style>
