<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/other">Other</router-link>|
      <router-link to="/other1">Other1</router-link>|
      <router-link to="/wordcloud">wordcloud</router-link>|
      <router-link to="/ckeditor">ckeditor</router-link>|
      <router-link to="/quill">quill</router-link>
    </div>
    <keep-alive include="login">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
