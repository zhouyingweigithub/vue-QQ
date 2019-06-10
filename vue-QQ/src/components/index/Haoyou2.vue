<template>
    <div v-show="index==1">
        1
    </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    var _this = this; //兄弟组件通信
    this.bus.$on("fenlei", function(title) {
      _this.index = title;
    });
  },
};
</script>

<style scoped>
</style>