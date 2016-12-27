<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <button @click="handleClick">更改data</button>
        </div>
        <div>
            <button @click="handleDestroy">销毁组件</button>
        </div>
        <div>
            <button @click="handleChangeShow">changeShow</button>
            <div v-if="show">
                <Test/>
            </div>
        </div>
    </div>
</template>

<script>
import Test from './test.vue'

let i = 0;
export default {
  data () {
    return {
      msg: 'Hello World~!',
      show: true
    }
  },
  components: {
    Test
  },
  methods: {
    handleClick() {
        this.msg = 'World Hello @@@';
    },
    handleDestroy() {
        this.$destroy();
    },
    handleChangeShow() {
        this.show = !this.show;
    }
  },
  beforeCreate() {
    i++;
    console.log(`${i}. beforeCreate方法被调用;\n组件实例刚被创建，组件属性计算之前，如data属性等; 此时不能获取到data的值`);
  },
  created() {
    i++;
    console.log(`${i}. created方法被调用;\n组件实例创建完成，属性已绑定，但DOM还未生成，$el属性还不存在; 此时已经能够获取到data的值`);
  },
  beforeMount() {
    i++;
    console.log(`${i}. beforeMount方法被调用;\n模板编译\\挂载之前`);
  },
  mounted() {
    i++;
    console.log(`${i}. mount方法被调用;\n模版编译\\挂载之后`);
    console.log(document.getElementById('testVue'));
  },
  beforeUpdate() {
    i++;
    console.log(`${i}. beforeUpdate方法被调用;\n组件更新之前`);
  },
  updated() {
    i++;
    console.log(`${i}. updated方法被调用;\n组件更新之后`);
  },
  beforeDestroy() {
    i++;
    console.log(`${i}. beforeDestroy方法被调用;\n组件销毁前调用`);
  },
  destroyed() {
    i++;
    console.log(`${i}. destroyed方法被调用;\n组件销毁后调用`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
  color: #42b983;
}
</style>
