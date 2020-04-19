<template>
  <div class="box">
    <div class="title" data-test="count">{{list.length}}</div>
    <ul>
      <li v-for="(item, index) in list" :key="index" data-test="item" @click="handleStatus(index)">
        <b v-if="item.status === 'div'">{{item.value}}</b>
        <input
          ref="cell"
          v-else
          v-model="item.value"
          @blur.prevent="handleBlue"
          @input="handleEdit(index,$event)"
          data-test="input"
        />
        <span data-test="dele" @click="handle(index)">-</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list",
  props: ["list"],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handle(index) {
      this.$emit("handleDel", index);
    },
    handleStatus(index) {
      const _this = this;
      this.$emit("status", index);
      this.$nextTick(function() {
        _this.$refs.cell[0].focus();
      });
    },
    handleEdit(index, e) {
      this.$emit("edit", index, e.target.value);
    },
    handleBlue(index) {
      this.$emit("blur", index);
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  color: #808080;
  width: 200px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 20px;
  }
  li {
    margin: 0;
    padding: 0;
    background-color: #ffc;
    line-height: 32px;
    padding: 0 10px;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 10px;
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 100%;
      left: 0;
      top: 0;
      background-color: royalblue;
    }
    span {
      position: absolute;
      background-color: red;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      overflow: hidden;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      line-height: 18px;
      color: #fff;
      font-weight: bolder;
      font-size: 30px;
    }
    input {
      width: 80%;
    }
  }
  .title {
    font-size: 14px;
    color: #000;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #ccc;
    float: right;
  }
}
</style>