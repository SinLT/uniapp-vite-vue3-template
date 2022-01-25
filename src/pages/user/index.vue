<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text-test" @click="onTest">
      <text class="test1">{{ test }}</text>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

const store = useStore()

const title = $ref('User')
let fontColor = $ref('red')
const test = $computed(() => store.state.home.test)
const onTest = () => {
  store.commit('SET_TEST')
  fontColor = 'blue'
}

onLoad((option) => {
  console.log(option.id)
  console.log(option.name)
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: $uni-color-primary;
}
.text-test {
  margin-top: 40upx;
  .test1 {
    color: v-bind('fontColor');
  }
}
</style>
