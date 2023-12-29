<template>
  <div>
    <div class="cont">
      <div>
        <a href="https://www.youtube.com/watch?v=32ML7JgI7ZE" target="_blank">
          <img style="width: 300px" src="../assets/photo/food.png" alt="" />
        </a>
      </div>
      <div class="cont-text">
        <a href="#">
          <P>Number: <span>+7 700 524 03 01</span> </P>
        </a>
        <a
          target="_blank"
          href="https://wa.clck.bar/77005240301?text=nice%20port"
        >
          <p>WhatsUP: <span>here</span></p>
        </a>
        <a target="_blank" href="https://www.instagram.com/yorick_pilgrim/">
          <p>Instagram: <span>yorick_pilgrim</span></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
img {
  transition: 0.5s;
}
img:hover {
  scale: 1.1;
  transition: 0.5s;
}
p {
  padding: 10px 0;
  font-style: italic;
}
span {
  transition: 0.5s;
}
a:hover {
  span {
    transition: 0.5s;
    color: #d4a752;
  }
}
.cont {
  display: flex;
  justify-content: space-between;
  padding: 0 25%;
}
.cont-text {
  font-size: 24px;
  align-self: center;
  padding-bottom: 15px;
}
@media (max-width: 1200px) {
  .cont {
    display: block;
    padding: 0 10%;
  }
  .cont img {
    margin: 0 auto;
  }
  .cont-text {
    text-align: center;
  }
}
</style>
