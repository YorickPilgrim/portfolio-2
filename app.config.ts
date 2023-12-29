export default defineAppConfig({
  ui: {
    accordion: {
      wrapper: " ",
      item: {
        base: "",
        size: "text-base",
        color: "text-white dark:text-gray-100",
        padding: "p-10",
        icon: "",
      },
      transition: {
        enterActiveClass:
          "overflow-hidden transition-all duration-500 ease-out",
        leaveActiveClass:
          "overflow-hidden transition-all duration-500 ease-out",
      },
      default: {
        openIcon: "i-heroicons-chevron-down-20-solid",
        closeIcon: "",
        class: "mb-1.5",
        variant: "soft",
      },
      colors: {
        "cold-cookie": "#e7e6e2",
        "light-cookie": "#f5e1bf",
        gorch: "#d4a752",
        carrot: "#b44f1e",
        brown: "#1a1918",
      },
    },

    // accordion: {
    //   wrapper: "w-full flex flex-row",
    //   item: {
    //     base: "",
    //     size: "text-sm",
    //     color: "text-gray-500 dark:text-gray-400",
    //     padding: "pt-1.5 pb-3",
    //     icon: "ms-auto transform transition-transform duration-200",
    //   },
    //   transition: {
    //     enterActiveClass:
    //       "overflow-hidden transition-[height] duration-200 ease-out",
    //     leaveActiveClass:
    //       "overflow-hidden transition-[height] duration-200 ease-out",
    //   },
    //   default: {
    //     openIcon: "i-heroicons-chevron-down-20-solid",
    //     closeIcon: "",
    //     class: "mb-1.5 w-full",
    //     variant: "soft",
    //   },
    // },
  },
})
