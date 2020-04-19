<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" @add="handleAdd" />
    <div class="box">
      <h2>正在执行</h2>
      <List
        :list="list"
        @handleDel="handleDel"
        @status="changeStatus"
        @edit="handleEdit"
        @blur="changeNormal"
      />
      <h2>已执行</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    List
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {},
  methods: {
    getData() {
      return axios.get("/api").then(result => result);
    },
    runCall(callback) {
      callback();
    },
    handleAdd(cell) {
      this.list.push({ value: cell, status: "div" });
    },
    handleDel(index) {
      this.list.splice(index, 1);
    },
    handleEdit(index, value) {
      this.list[index].value = value;
    },
    changeStatus(j) {
      let newList = [];
      this.list.forEach((item, index) => {
        if (index === j) {
          newList.push({
            status: "input",
            value: item.value
          });
        } else {
          newList.push({
            status: "div",
            value: item.value
          });
        }
      });
      this.list = newList;
    },
    changeNormal(j) {
      let newList = [];
      this.list.forEach((item, index) => {
        newList.push({
          status: "div",
          value: item.value
        });
      });
      this.list = newList;
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  padding: 10px 0;
}
.box h2 {
  margin-bottom: 10px;
}
.list {
  list-style-type: none;
  padding: 10px 0;
}
.list li {
  line-height: 32px;
  border-bottom: 1px solid red;
  padding-left: 10px;
}
</style>
