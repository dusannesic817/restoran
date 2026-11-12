<script setup>
import { ref } from "vue";
import {
  IconMenu2,
  IconX,
  IconPhone,
  IconCalendarEvent,
} from "@tabler/icons-vue";

const isOpen = ref(false);

const links = [
  { label: "Početna", to: "/" },
  { label: "Meni", to: "/meni" },
  { label: "O nama", to: "/#o-nama" },
  { label: "Galerija", to: "/#galerija" },

];

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <!-- Navbar -->
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl md:text-3xl font-medium tracking-tight text-gold font-serif italic"
      >
        [Naziv restorana]
      </RouterLink>

      <!-- Desktop navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
  v-for="link in links"
  :key="link.to"
  :to="link.to"
  class="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#D4AF37]"
>
  {{ link.label }}

  <span
    class="absolute -bottom-2 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
  ></span>
</RouterLink>
      </div>

      <!-- Desktop CTA -->
      <RouterLink
        to="/rezervacija"
        class="hidden items-center gap-2 rounded-full border border-[#D4AF37] px-7 py-2.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:bg-[#D4AF37] hover:text-white md:flex"
      >
        <IconPhone 
          class="h-4 w-4"
          stroke="1.8"
        />

        Rezerviši
      </RouterLink>

      <!-- Mobile button -->
      <button
        type="button"
        aria-label="Otvori meni"
        class="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] md:hidden"
        @click="isOpen = true"
      >
        <IconMenu2 class="h-5 w-5" />
      </button>
    </nav>
  </header>

  <!-- Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
      @click="closeMenu"
    ></div>
  </Transition>

  <!-- Sidebar -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-250 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <aside
      v-if="isOpen"
      class="fixed right-0 top-0 z-[60] flex h-full w-[85%] max-w-sm flex-col border-l border-[#D4AF37]/30 bg-[#e5e5d2] p-6 shadow-2xl md:hidden"
    >
      <!-- Sidebar header -->
      <div class="flex items-center justify-between">
        <RouterLink
          to="/"
          class="text-2xl font-medium tracking-tight text-gray-900 font-serif italic"
          @click="closeMenu"
        >
          [Naziv <span class="text-gold">restorana]</span>
        </RouterLink>

        <button
          type="button"
          aria-label="Zatvori meni"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gray-900 transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
          @click="closeMenu"
        >
          <IconX class="h-5 w-5" />
        </button>
      </div>

      <!-- Links -->
      <div class="mt-12 flex flex-col gap-2">
        <RouterLink
  v-for="link in links"
  :key="link.to"
  :to="link.to"
  class="rounded-xl border border-transparent px-4 py-3.5 text-base font-medium text-gray-700 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:text-[#B8951F]"
  @click="closeMenu"
>
  {{ link.label }}
</RouterLink>
      </div>

      <!-- Bottom -->
      <div class="mt-auto border-t border-gold/20 pt-6">
       

        <RouterLink
          to="/rezervacija"
          class="flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#B8951F]"
          @click="closeMenu"
        >
          <IconPhone class="h-5 w-5" />

          Rezerviši
        </RouterLink>
      </div>
    </aside>
  </Transition>
</template>