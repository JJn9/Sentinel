<template>
  <div id="app">
    <div id="nav-wrapper">
      <nav class="nav">
        <div class="nav-item">🚀</div>
        <router-link to="/" class="title">Sentinel</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0px;
  padding: 0px;
  height: 100%;
  min-height: 100%;
  min-height: 100vh;
  background-color: #040d21;
  a {
    text-decoration: none;
    color: #ffffff;
  }
}

#nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 10px 0 10px;
  height: 60px;
  // background-color: #1b2037;
  margin-bottom: 40px;

  .nav {
    display: flex;
    align-items: center;
    height: 80%;
    .title {
      font-family: "Inconsolata", monospace;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      height: 100%;
    }

    .nav-item {
      display: flex;
      align-items: center;
      color: #ffffff;
      margin-right: 10px;
      height: 100%;
      border-bottom: 2px solid transparent;
    }
    // .router-link-exact-active {
    //   border-color: #fda05e;
    // }
  }
}
</style>
