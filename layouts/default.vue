<template>
  <div
    style="
      height: 100vh;
      flex-direction: column;
      justify-content: space-between;
    "
    class="flex"
  >
    <Appheader />
    <main>
      <slot />
    </main>
    <Appfooter />
  </div>
</template>
<script></script>
