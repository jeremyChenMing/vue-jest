<template>
  <div class="hello box">
    <h1>{{ msg }}</h1>
    <input v-model="value" placeholder="请输入名字" data-test="input" @keyup.enter="handle" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      value: ''
    }
  },
  methods: {
    handle() {
      if(this.value) {
        this.$emit('add', this.value)
        this.value = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello h1 {
  font-size: 20px;
}

a {
  color: #42b983;
}
input{
  line-height: 32px;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
}
</style>
