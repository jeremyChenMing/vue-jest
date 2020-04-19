<template>
  <div class="about">
    <h1>This is an about page!!!</h1>
    <el-button>按钮</el-button>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.name" :name="item.id" v-for="item in tabNames" :key="item.id"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "32",
      active: "32",
      tabNames: [
        { name: "分户查验", id: "32", type: "FHCY" },
        { name: "承接查验", id: "33", type: "CYCJ" }
      ]
    };
  },
  methods: {
    handleClick(tab) {
      if (this.active !== this.activeName) {
        console.log("123");
      }
      console.log(tab);
      // this.activeName = tab;
    }
  },
  mounted() {
    const Loading = this.$loading({
      lock: true,
      background: "rgba(0, 0, 0, 0.7)"
    });
    console.log(Loading)
  }
};
</script>
