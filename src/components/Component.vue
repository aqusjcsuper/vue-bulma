<template>
  <div class="main">
    <img src="../assets/bulma.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="/components/tab/" target="_blank">Tab</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'component-list',
  data () {
    return {
      msg: 'Component List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
    width: 200px;
    height: 200px;
}

.main {
  text-align: center;
}
</style>
