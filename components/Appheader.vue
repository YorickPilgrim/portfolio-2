<template>
  <div style="width: 80%" class="shirok">
    <ul
      class="flex justify-between bg-black"
      style="margin: 0 auto; align-items: center; margin-top: 20px"
    >
      <nuxt-link to="/">
        <li
          :class="{ scaleNone: $route.path === '/' }"
          class="scale"
          @click="wtf"
        >
          <img src="../assets/photo/logo.png" alt="" style="width: 120px" />
        </li>
      </nuxt-link>
      <nuxt-link to="Gogo">
        <li :class="{ 'new-style': $route.path === '/Gogo' }" @click="wtf1">
          go
        </li>
      </nuxt-link>
      <nuxt-link to="myFav">
        <li :class="{ 'new-style': $route.path === '/myFav' }" @click="wtf2">
          myFav
        </li>
      </nuxt-link>
      <nuxt-link to="contacts">
        <li :class="{ 'new-style': $route.path === '/contacts' }" @click="wtf3">
          contacts
        </li>
      </nuxt-link>
      <a href="https://www.youtube.com/watch?v=rnjbemXGNmw">
        <li style="cursor: pointer; padding: 10px">u're</li>
      </a>
    </ul>
  </div>
  <div class="menu">
    <input type="checkbox" id="burger-checkbox" class="burger-checkbox" />
    <label
      @click="toggleMenu()"
      for="burger-checkbox"
      class="burger"
      style="position: absolute; left: 15px; top: 25px; z-index: 4"
    ></label>
    <ul class="menu-list">
      <nuxt-link to="/"
        ><li @click="toggleMenu()">
          <a href="#" class="menu-item">home</a>
        </li></nuxt-link
      >
      <nuxt-link to="/Gogo"
        ><li @click="toggleMenu()">
          <a href="#" class="menu-item">go</a>
        </li></nuxt-link
      >
      <nuxt-link to="/myFav"
        ><li @click="toggleMenu()">
          <a href="#" class="menu-item">myFav</a>
        </li></nuxt-link
      >
      <nuxt-link to="/contacts"
        ><li @click="toggleMenu()">
          <a href="#" class="menu-item">contacts</a>
        </li></nuxt-link
      >

      <li @click="toggleMenu()">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=rnjbemXGNmw"
          class="menu-item"
          >u're</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
let go = ref(false)
let myFav = ref(false)
let soc = ref(false)
const wtf = () => {
  go.value = false
  myFav.value = false
  soc.value = false
}
const wtf1 = () => {
  go.value = true
  myFav.value = false
  soc.value = false
}
const wtf2 = () => {
  go.value = false
  myFav.value = true
  soc.value = false
}
const wtf3 = () => {
  go.value = false
  myFav.value = false
  soc.value = true
}

function toggleMenu() {
  const menuList = document.querySelector(".menu-list")
  menuList.classList.toggle("active")
  const burger = document.querySelector(".burger-checkbox")
  burger.classList.toggle("active")
  const burger2 = document.querySelector(".burger")
  burger2.classList.toggle("active")
}
</script>

<style lang="scss" scoped>
.new-style {
  color: #d4a752;
  &:hover {
    font-size: 16px;
    // scale: 0;
  }
}
.scale {
  transition: 0.2s;
}
.scale:not(.scaleNone):hover {
  scale: 1.2;
  transition: 0.2s;
}
li {
  transition: 0.2s;
  cursor: pointer;
  padding: 10px;
  &:hover {
    // scale: 1.5;
    font-size: 24px;
    transition: 0.2s;
  }
}

ul li,
div,
a {
  color: white;
  place-self: center;
}
</style>

<style scoped>
.menu {
  display: none;
}
@media (max-width: 700px) {
  .menu {
    display: block;
  }
  .shirok {
    display: none;
  }
}
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}
.burger {
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;
}
.burger::before,
.burger::after {
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #ffffff;
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #ffffff;
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
}
.burger::after {
  bottom: 0;
  transition: bottom 0.3s 0.15s, transform 0.3s;
}
/* .burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}
.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
} */
.burger-checkbox.active + .burger::after {
  top: 1px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
}
.burger-checkbox.active + .burger::before {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom 0.3s, transform 0.3s 0.15s;
}
.burger.active::before {
  box-shadow: none;
}

.menu-list {
  z-index: 2;
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  gap: 12px;
  padding: 42px 0;
  margin: 0;
  background: orange;
  list-style-type: none;
  transform: translateX(-100%);
  transition: 0.3s;
  width: 200px;
}
.menu-item {
  display: block;
  padding: 8px;
  color: white;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
}
.menu-item:hover {
  background: rgba(255, 255, 255, 0.2);
}
/* .burger-checkbox:checked ~ .menu-list {
  transform: translateX(0);
} */
.menu-list.active {
  transform: translateX(0);
}
</style>
