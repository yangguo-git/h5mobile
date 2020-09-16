
<template>
  <div class="wrapper">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods:{
      onClickLeft(){

      },
       onClickRight(){
          
      }
  }

};
</script>

<style scoped lang="less">
.wrapper {
  font-size: 20px;
}
</style>