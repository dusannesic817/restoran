<script setup>
import { ref } from "vue";
import { IconArrowUpRight } from "@tabler/icons-vue";

const images = [
  {
    src: "/images/gallery/tresjolie.webp",
    alt: "Enterijer restorana",
    class: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery/restaurant-5.jpg",
    alt: "Specijalitet restorana",
    class: "",
  },
  {
    src: "/images/gallery/restaurant-1.jpg",
    alt: "Detalj enterijera",
    class: "",
  },
  {
    src: "/images/gallery/restaurant-4.avif",
    alt: "Serviranje hrane",
    class: "md:col-span-2",
  },
  {
    src: "/images/gallery/restaurant-3.jpg",
    alt: "Jelo restorana",
    class: "",
  },
  {
    src: "/images/gallery/restaurant-2.jpg",
    alt: "Ambijent restorana",
    class: "",
  },
  {
    src: "/images/gallery/restaurant-1.webp",
    alt: "Specijalitet kuće",
    class: "md:col-span-2",
  },
];

const selectedImage = ref(null);

const openImage = (image) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};
</script>


<template>
  <section id="galerija" class="scroll-mt-24 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div
        class="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <p
            class="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-950"
          >
            <span class="flex h-1 w-16 overflow-hidden">
              <span class="w-1/3 bg-[#0055A4]"></span>
              <span class="w-1/3 bg-white"></span>
              <span class="w-1/3 bg-[#EF4135]"></span>
            </span>

            Naš restoran
          </p>

          <h2
            class="max-w-xl text-4xl font-serif italic font-medium tracking-tight text-gray-900 md:text-5xl"
          >
            [Naziv restorana]
            <span class="font-serif italic text-[#D4AF37]">atmosfera</span>
          </h2>
        </div>

       
      </div>

      <!-- Gallery -->
      <div
        class="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
      >
        <button
          v-for="(image, index) in images"
          :key="image.src"
          type="button"
          :class="[
            image.class,
            'group relative overflow-hidden rounded-2xl text-left',
          ]"
          @click="openImage(image)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40"
          ></div>

          <!-- Gold border -->
          <div
            class="absolute inset-3 rounded-xl border border-[#D4AF37]/0 transition duration-500 group-hover:border-[#D4AF37]"
          ></div>

          <!-- Icon -->
          <div
            class="absolute bottom-6 right-6 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <IconArrowUpRight class="h-5 w-5" />
          </div>

          <!-- Number -->
          <span
            class="absolute left-6 top-6 text-sm font-medium text-white opacity-0 transition duration-500 group-hover:opacity-100"
          >
            0{{ index + 1 }}
          </span>
        </button>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <Transition name="fade">
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
      @click.self="closeImage"
    >
      <button
        type="button"
        class="absolute right-6 top-6 text-3xl text-white transition hover:text-[#D4AF37]"
        @click="closeImage"
      >
        ×
      </button>

      <img
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        class="max-h-[90vh] max-w-6xl rounded-xl object-contain"
      />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
