<script setup>
import {
  IconMapPin,
  IconClock,
  IconChefHat,
  IconPhone,
  IconArrowRight,
} from "@tabler/icons-vue";
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-black">
    <!-- Background image -->
    <img
      src="/images/gallery/restaurant-1.webp"
      alt="La Maison restoran"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/55"></div>

    <!-- Left side darker gradient -->
    <div
  class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10"
></div>

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-28  lg:px-8"
    >
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <p
          class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
        >
          <span class="flex h-1 w-16 overflow-hidden">
            <span class="w-1/3 bg-[#0055A4]"></span>
            <span class="w-1/3 bg-white"></span>
            <span class="w-1/3 bg-[#EF4135]"></span>
          </span>

          Bainvenue à [Naziv restorana]
        </p>

        <!-- Heading -->
        <h1
          class="max-w-3xl text-4xl font-medium font-serif italic leading-[1.05] tracking-tight text-white/85 sm:text-5xl lg:text-6xl"
        >
          Ukus Francuske,
          <span class="text-gold"> u srcu grada. </span>
        </h1>

        <!-- Description -->
        <p class="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
          Doživite autentične ukuse francuske kuhinje, pažljivo pripremljene od
          svežih sastojaka u elegantnom i prijatnom ambijentu.
        </p>

        <!-- Buttons -->
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/meni"
            class="group flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#B8951F]"
          >
            Pogledaj meni

            <IconArrowRight
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </RouterLink>

          <a
            href="tel:+381601234567"
            class="flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            <IconPhone class="h-4 w-4" />

            Pozovi nas
          </a>
        </div>
      </div>

      <!-- Information row -->
      <div
        class="absolute bottom-0 left-6 right-6 border-t border-white/20 py-6 lg:left-8 lg:right-8"
      >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          <!-- Address -->
          <div
            class="flex items-center gap-4 sm:border-r sm:border-white/20 sm:pr-8"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]"
            >
              <IconMapPin class="h-5 w-5" />
            </div>

            <div>
              <p class="text-xs uppercase tracking-widest text-white/50">
                Adresa
              </p>

              <p class="mt-1 text-sm font-medium text-white">
                [Adresa restorana]
              </p>
            </div>
          </div>

          <!-- Working hours -->
          <div
            class="flex items-center gap-4 sm:border-r sm:border-white/20 sm:px-8"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]"
            >
              <IconClock class="h-5 w-5" />
            </div>

            <div>
              <p class="text-xs uppercase tracking-widest text-white/50">
                Radno vreme
              </p>

              <p class="mt-1 text-sm font-medium text-white">
                [Radno vreme restorana]
              </p>
            </div>
          </div>

          <!-- Cuisine -->
          <div class="flex items-center gap-4 sm:pl-8">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]"
            >
              <IconChefHat class="h-5 w-5" />
            </div>

            <div>
              <p class="text-xs uppercase tracking-widest text-white/50">
                Kuhinja
              </p>

              <p class="mt-1 text-sm font-medium text-white">
                Tradicionalna francuska
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
