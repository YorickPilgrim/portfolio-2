<script setup>
const { data: url } = await useFetch(
  `https://api.unsplash.com/photos/random/?client_id=wrm0jVPP3qRBBOTpizxj9gAQLz-j2wv_GYgEx5jNmIk`
)
const text =
  "В мире рандомных фотографий заключена невиданная красота. Каждый щелчок объектива — это уникальный момент, который уносит нас в неисследованный эстетический мир. Случайность становится художником, а рандомные кадры — воротами в удивительную палитру человеческого восприятия."
const ae = url.value.urls.regular
const items = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    // defaultOpen: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
]
</script>
<style lang="scss" scoped>
.index {
  display: flex;
  max-height: 384px;
}
@media (max-width: 1200px) {
  .index {
    display: block;
    max-height: none;
    padding: 80px 30px 0;
  }
  .el1,
  .el2,
  .el3 {
    width: 100%;
    margin: 10px 0;
  }
}
.bgc {
  background: #d4a752;
}
.par {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
</style>
<template>
  <div>
    <div
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      "
    >
      <div class="index">
        <div class="w-4/12 par overflow-hidden el1">
          <img
            src="../assets/photo/ice.png"
            alt=""
            class="w-m-400px h-full block div1"
          />
          <div class="div2">
            <div class="block" style="background-color: #e7e6e2; height: 20%">
              ㅤ
            </div>
            <div class="block" style="background-color: #f5e1bf; height: 20%">
              ㅤ
            </div>
            <div class="block" style="background-color: #d4a752; height: 20%">
              ㅤ
            </div>
            <div class="block" style="background-color: #b44f1e; height: 20%">
              ㅤ
            </div>
            <div class="block" style="background-color: #1a1918; height: 20%">
              ㅤ
            </div>
          </div>
        </div>

        <div
          class="w-4/12 bgimg block el2"
          :style="{ backgroundImage: 'url(' + ae + ')' }"
          style="
            z-index: 1;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
          "
        >
          <img
            style="z-index: 2"
            :src="ae"
            alt=""
            class="max-w-200 h-full max-height-200 block m-auto getimg"
          />
        </div>
        <UAccordion
          style="color: #e7e6e2"
          class="w-4/12 bgc text-xl p-1 el3"
          variant="solid"
          size="xl"
          :items="[
            {
              label: 'What is Nuxt UI?',
              content: text,
              color: 'carrot',
              size: 'xl',
              text: '',
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>
