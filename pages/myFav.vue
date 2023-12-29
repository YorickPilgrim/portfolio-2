<!-- pages/another-page.vue -->
<template>
  <div class="cont">
    <ul class="flex justify-center" style="flex-wrap: wrap">
      <li
        @click="openModal(link)"
        v-for="link in reversedData"
        :key="link"
        :id="link"
      >
        <img style="scale: 95%" :src="link" alt="" />
      </li>
    </ul>
  </div>
  <div
    :class="{ block: isModalOpen }"
    class="modal"
    style="overflow: hidden; background-color: #000000e6"
  >
    <div class="modal-content">
      <div class="mini-cont">
        <div>
          <img :src="modalLink" alt="" />
        </div>
        <div class="cont-text">
          <p>lolololol</p>
          <p>
            some content here Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quam ipsa ea quae aliquid? Eos inventore nobis
            quae culpa deserunt atque.
          </p>
          <button class="btn" @click="deletePhoto()">delete from fav</button>
          <a v-if="isModalOpen" :href="modalLink" target="_blank">
            <button>open this pic</button>
          </a>
          <!-- <a v-if="isModalOpen" :href="link + refDown + likeLink">
                <button style="color: aqua">save this pic</button>
              </a> -->
        </div>
      </div>
      <span @click="closeModal" class="close">&times;</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const myData = ref([])
const reversedData = computed(() => myData.value.slice().reverse())

onMounted(() => {
  // Чтение данных из localStorage при монтировании компонента
  // if (localStorage.getItem("myData")) {
  //   myData.value = JSON.parse(localStorage.getItem("myData"))
  // }

  const storedLinks = JSON.parse(localStorage.getItem("myData")) || []
  myData.value = storedLinks
})

const isModalOpen = ref(false)
const modalLink = ref(null)

function openModal(link) {
  isModalOpen.value = true
  modalLink.value = link
}
const closeModal = () => {
  isModalOpen.value = false
}
function deletePhoto() {
  isModalOpen.value = false
  const element = document.getElementById(modalLink.value)
  if (element) {
    element.remove()
  }

  // localStorage.removeItem("myData") вр 3

  // myData.value = myData.value.filter((item) => item !== modalLink) вр2
  // localStorage.setItem("myData", JSON.stringify(myData.value))

  let storedArray = JSON.parse(localStorage.getItem("myData")) || []

  // Находим индекс элемента, который нужно удалить (содержащего "lol")
  let indexToRemove = storedArray.indexOf(modalLink.value)

  // Проверяем, что элемент найден
  if (indexToRemove !== -1) {
    // Удаляем элемент по индексу
    storedArray.splice(indexToRemove, 1)

    // Сохранение обновленного значения в локальном хранилище
    localStorage.setItem("myData", JSON.stringify(storedArray))
  } else {
    console.warn("Элемент 'lol' не найден в массиве.")
  }
}
</script>
<style scoped lang="scss">
div {
  color: antiquewhite;
}
li {
  width: 30%;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
}
/* Стили для модального окна и контента */
button {
  background-color: rgb(165, 163, 163);
  color: rgb(0, 255, 255);
  margin: 25px 15px 0 0;
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 50px;
  transition: 0.5s;
  &:hover {
    background-color: rgb(149 69 69);
    color: rgb(255 193 0);
    transition: 0.5s;
  }
}
.mini-cont {
  display: flex;
}
.mini-cont img {
  width: 100%;
  max-height: 665px;
}
.cont-text {
  color: black;
  padding: 20px;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* background-color: rgb(0 0 0 / 13%); */
}

.cont {
  padding: 30px 0;
}
.modal-content {
  background-color: #fefefe;
  /* margin: 15% auto; */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
  margin-top: 15%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 70px;
  display: flex;
}

/* Стиль для кнопки закрытия */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

.block {
  display: block;
}

@media (max-width: 750px) {
  li {
    width: 100%;
    height: auto;
  }
  .cont {
    padding: 60px 0 0;
  }
  .cont-text {
    text-align: center;
    font-size: 15px;
  }
  .mini-cont {
    display: block;
  }
  .mini-cont img {
    width: auto;
    margin: 0 auto;
    max-height: 200px;
  }
  .mini-cont button {
    margin: 5px;
    padding: 2px 15px;
  }
}
</style>
