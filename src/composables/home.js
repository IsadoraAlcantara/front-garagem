import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue';

export function useHome() {
  const home = shallowRef();

  const updateHome = () => {
    const width = window.innerWidth;
    if (width < 768) {
      home.value = defineAsyncComponent(() =>
        import('../components/templates/small/SmallMain.vue'),
      );
    } else {
      home.value = defineAsyncComponent(() =>
        import('../components/templates/large/LargeMain.vue'),
      );
    }
  };

  onMounted(() => {
    updateHome();
    window.addEventListener('resize', updateHome);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateHome);
  });

  return { home };
}