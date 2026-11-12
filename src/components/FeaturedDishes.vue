<script setup>
import { IconArrowUpRight } from "@tabler/icons-vue";
/*const dishes = [
  {
    name: "Coq au Vin",
    description:
      "Tradicionalna francuska piletina sporo kuvana u crnom vinu sa aromatičnim povrćem.",
    price: "2.490 RSD",
    image: "/images/dishes/food-1.webp",
  },
  {
    name: "Boeuf Bourguignon",
    description:
      "Govedina pripremana u burgundskom vinu sa šampinjonima i svežim začinima.",
    price: "3.190 RSD",
    image: "/images/dishes/food-2.jpg",
  },
  {
    name: "Filet de Saumon",
    description:
      "Pažljivo pečen filet lososa uz kremasti sos od limuna i sezonsko povrće.",
    price: "2.790 RSD",
    image: "/images/dishes/food-2.jpg",
  },
  {
    name: "Crème Brûlée",
    description:
      "Klasičan francuski desert od vanile sa hrskavom karamelizovanom koricom.",
    price: "890 RSD",
    image: "/images/dishes/food-1.webp",
  },
];*/
const dishes = [
  {
    name: "Coq au Vin",
    description:
      "Tradicionalna francuska piletina sporo kuvana u crnom vinu sa aromatičnim povrćem.",
    price: "2.490 RSD",
    image: `${import.meta.env.BASE_URL}images/dishes/food-1.webp`,
  },
  {
    name: "Boeuf Bourguignon",
    description:
      "Govedina pripremana u burgundskom vinu sa šampinjonima i svežim začinima.",
    price: "3.190 RSD",
    image: `${import.meta.env.BASE_URL}images/dishes/food-2.jpg`,
  },
  {
    name: "Filet de Saumon",
    description:
      "Pažljivo pečen filet lososa uz kremasti sos od limuna i sezonsko povrće.",
    price: "2.790 RSD",
    image: `${import.meta.env.BASE_URL}images/dishes/food-2.jpg`,
  },
  {
    name: "Crème Brûlée",
    description:
      "Klasičan francuski desert od vanile sa hrskavom karamelizovanom koricom.",
    price: "890 RSD",
    image: `${import.meta.env.BASE_URL}images/dishes/food-1.webp`,
  },
];
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div
        class="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
      >
        <div class="max-w-2xl">
          <p
            class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-900"
          >
            <span class="flex h-1 w-16 overflow-hidden">
              <span class="w-1/3 bg-[#0055A4]"></span>
              <span class="w-1/3 bg-white"></span>
              <span class="w-1/3 bg-[#EF4135]"></span>
            </span>

            Meni
          </p>

          <h2
            class="font-serif italic text-4xl font-medium leading-tight text-gray-900 sm:text-5xl"
          >
            Jela koja
            <span class="italic text-gold"> izdvajamo </span>
          </h2>

          <p class="mt-4 max-w-xl text-base leading-7 text-gray-600">
            Od tradicionalnih francuskih klasika do pažljivo osmišljenih
            deserata — izdvojili smo nekoliko favorita naših gostiju.
          </p>
        </div>

        <RouterLink
          to="/meni"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#B8951F]"
        >
          Pogledaj ceo meni

          <IconArrowUpRight
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </RouterLink>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="dish in dishes"
          :key="dish.name"
          class="group overflow-hidden rounded-2xl border border-gray-200 bg-white/40"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="dish.image"
              :alt="dish.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Content -->
          <div class="p-4">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="font-display text-xl font-medium text-gray-900">
                {{ dish.name }}
              </h3>

              <span class="shrink-0 text-sm font-semibold text-gold">
                {{ dish.price }}
              </span>
            </div>

            <p class="mt-2 text-sm leading-6 text-gray-600">
              {{ dish.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
