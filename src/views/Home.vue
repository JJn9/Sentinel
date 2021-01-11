<template>
  <div class="container-fluid">
    <div class="row center-lg center-md center-sm center-xs">
      <div class="col">
        <h2 id="main-title">Explore Mars with real-time data.</h2>
      </div>
    </div>
    <div class="row infos">
      <div class="sub-nav self-center">
        <a class="subnav-item">About Mars</a>
        <a class="subnav-item">Weather</a>
        <a class="subnav-item">History</a>
      </div>
      <div class="content self-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
        repellendus consequatur voluptatibus unde possimus fuga optio molestias
        omnis, illo dolorem, labore, molestiae veritatis cum? Eum et vitae
        laudantium neque dolorum.
      </div>
    </div>
    <img src="../assets/bubbles.png" id="bubbles" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.infos {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 20;
  .sub-nav {
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 40px;
    background-color: #e4e6f2;
    border-radius: 8px;
    margin-bottom: 30px;

    .subnav-item {
      font-family: "Inconsolata", monospace;
      font-weight: bold;
      color: #040d21;
      &:not(:last-child) {
        margin-right: 80px;
      }
    }
  }
  .content {
    width: 50%;
  }
}

#bubbles {
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 50%;
  transform: translate(-50%);
  filter: sepia(100%) saturate(0%) brightness(100%) hue-rotate(0deg);
  opacity: 0.7;
}

#main-title {
  position: relative;
  text-align: center;
  z-index: 20;
  text-transform: uppercase;
  width: 600px;
  background: -webkit-linear-gradient(-70deg, #f9c784, #fda05e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800 !important;
  line-height: 1;
  letter-spacing: -0.025em !important;
  font-size: 64px;
}

@media screen and (max-width: 840px) {
  .sub-nav {
    width: 80% !important;
  }

  .content {
    width: 80% !important;
  }
}
</style>
