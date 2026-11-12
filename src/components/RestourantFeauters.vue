<script setup>
import {
  IconChefHat,
  IconGlass,
  IconSparkles,
  IconMichelinStarGreen 
} from "@tabler/icons-vue";

const features = [
  {
    title: "Pažljivo kuvana jela",
    description:
      "Sveži, sezonski sastojci i recepti pripremani sa strašću.",
    icon: IconChefHat,
  },
  {
    title: "Bar bez kompromisa",
    description:
      "Autorski kokteli, vrhunska vina i klasici u najboljem izdanju.",
    icon: IconGlass,
  },
  {
    title: "Za posebne prilike",
    description:
      "Idealan ambijent za proslave, sastanke i veče za pamćenje.",
    icon: IconSparkles,
  },
  {
    title: "Prijatna atmosfera",
    description:
      "Idealan ambijent za proslave, sastanke i veče za pamćenje.",
    icon: IconMichelinStarGreen ,
  },
];
</script>

<template>
  <section class=" py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-black/5"
        >
          <!-- Decorative gold line -->
          <div
            class="absolute left-0 top-0 h-1 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
          ></div>

          <!-- Icon -->
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 text-[#B8951F] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-white"
          >
            <component :is="feature.icon" class="h-6 w-6" stroke="1.6" />
          </div>

          <!-- Content -->
          <h3 class="mt-7 text-xl font-medium text-gray-900">
            {{ feature.title }}
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            {{ feature.description }}
          </p>

          <!-- Bottom accent -->
          <div class="mt-7 flex items-center gap-2">
            <span class="h-px w-8 bg-[#D4AF37]"></span>

            <span
              class="text-xs font-semibold uppercase tracking-widest text-[#B8951F]"
            >
              [Naziv restorana]
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>