<template>
  <div class="flex parent">
    <div v-for="photo in mymass" class="childi">
      <div
        @click="pohnah(photo.urls.regular), gote(photo.id)"
        :key="photo.id"
        style="
          color: aqua;
          place-self: center;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
          padding: 100px;
          cursor: pointer;
        "
        :style="{ backgroundImage: `url(${photo.urls.regular})` }"
      ></div>
    </div>
    <div>
      <div
        :class="{ block: isModalOpen }"
        class="modal"
        style="overflow: hidden; background-color: #000000e6"
      >
        <div class="modal-content">
          <div class="mini-cont">
            <div>
              <img :src="refUrl" alt="" />
            </div>
            <div class="cont-text" style="padding: 20px; color: black">
              <p>lolololol</p>
              <p class="liltext">
                some content here Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Quam ipsa ea quae aliquid? Eos inventore nobis
                quae culpa deserunt atque.
              </p>
              <button class="btn" @click="addLink()">add to fav</button>
              <a v-if="isModalOpen" :href="link + refDown + downloadlink">
                <button>save this pic</button>
              </a>
              <!-- <a v-if="isModalOpen" :href="link + refDown + likeLink">
                <button style="color: aqua">save this pic</button>
              </a> -->
            </div>
          </div>
          <span @click="closeModal" class="close">&times;</span>
        </div>
      </div>
    </div>
  </div>
  <button
    style="
      background-color: rgb(255 255 255 / 0%);
      display: block;
      margin: 0 auto 30px;
    "
    @click="loadMorePhotos()"
  >
    загрузить еще
  </button>
</template>

<script setup>
//id
// const newId = ref("")
// const massID = ref([])
//all
const newLink = ref("")
const myData = ref([])
const photoId = ref()

onMounted(() => {
  // Чтение данных из localStorage при монтировании компонента
  if (localStorage.getItem("myData")) {
    myData.value = JSON.parse(localStorage.getItem("myData"))
  }
})

const addLink = () => {
  if (newLink.value.trim() !== "") {
    // Используйте префикс `$` внутри темплейта
    myData.value.push(newLink.value)

    newLink.value = "" // Очистка поля ввода

    // Сохранение данных в localStorage при каждом изменении
    localStorage.setItem("myData", JSON.stringify(myData.value))
  }

  // if (newId.value.trim() !== "") {
  //   massID.value.push(newId.value)
  //   newId.value = ""
  //   localStorage.setItem("massID", JSON.stringify(massID.value))
  // }
  isModalOpen.value = false
}

function gote(aga) {
  refDown.value = aga
  // newLink.value = aga
  // console.log(ob)
  photoId.value = aga
  newId.value = aga
}

const link = "https://unsplash.com/photos/"
const downloadlink =
  "/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAwODcyOTA3fA&force=true"
// const likeLink =
//   "/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAwODcyOTA3fA&force=true"
const refUrl = ref(null)
const refDown = ref(null)

const isModalOpen = ref(false)
function pohnah(url) {
  refUrl.value = url
  isModalOpen.value = true //true false
  newLink.value = url
}

const closeModal = () => {
  isModalOpen.value = false
}
const { data: url } = await useFetch(
  `https://api.unsplash.com/photos/random?count=9&client_id=wrm0jVPP3qRBBOTpizxj9gAQLz-j2wv_GYgEx5jNmIk`
  // 'https://api.unsplash.com/photos/random?count=8&client_id=dOr70LR7IxcflAmv0Uo5QF1oBm39_6tXJkZPih9fE0k'
)

const mymass = ref(url)
const page = ref(1)
const loadMorePhotos = async () => {
  page.value++
  const { data: newPhotos } = await useFetch(
    `https://api.unsplash.com/photos/random?count=9&page=${page}&client_id=wrm0jVPP3qRBBOTpizxj9gAQLz-j2wv_GYgEx5jNmIk`
  )
  mymass.value = [...mymass.value, ...newPhotos.value]
}
</script>

<style lang="scss" scoped>
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
// .btn {
//   background-color: rgb(149 69 69);
//   color: rgb(255 193 0);
// }
.parent {
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 0 20px;
  // text-align: -webkit-center;
}
.childi {
  margin: 40px 15px;
  width: 30%;
  height: 170px;
  // background-color: tan;
}
.modal-content img {
  width: 70%;
}

/* Стили для модального окна и контента */
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
.mini-cont {
  display: flex;
}
.mini-cont img {
  width: 100%;
  max-height: 720px;
}
@media (max-width: 750px) {
  .childi {
    width: 100%;
  }
  .parent {
    padding: 35px 0 20px;
  }
  .mini-cont {
    display: block;
  }
  .mini-cont img {
    width: auto;
    max-height: 200px;
    margin: 0 auto;
  }
  .mini-cont button {
    margin: 5px;
    padding: 2px 15px;
  }
  .cont-text {
    text-align: center;
  }
}
</style>
<!-- / -->
