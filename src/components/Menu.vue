<script setup>
import Navbar from "@/components/Navbar.vue";

const categories = [
  {
    name: "Predjela",
    
    items: [
      {
        name: "Soupe à l'oignon",
        description: "Francuska supa od luka sa gratiniranim sirom",
        price: "890 RSD",
      },
      {
        name: "Escargots de Bourgogne",
        description: "Puževi sa puterom, belim lukom i peršunom",
        price: "1.490 RSD",
      },
      {
        name: "Terrine de Foie",
        description: "Pašteta od pačje džigerice sa domaćim hlebom",
        price: "1.690 RSD",
      },
      {
        name: "Salade de Chèvre",
        description: "Mladi kozji sir, salata, orasi i med",
        price: "1.190 RSD",
      },
    ],
  },

  {
    name: "Glavna jela",
    
    items: [
      {
        name: "Coq au Vin",
        description: "Piletina sporo kuvana u crnom vinu i začinima",
        price: "2.490 RSD",
      },
      {
        name: "Boeuf Bourguignon",
        description: "Govedina u burgundskom vinu sa šampinjonima",
        price: "3.190 RSD",
      },
      {
        name: "Filet de Saumon",
        description: "Pečeni losos sa kremastim sosom od limuna",
        price: "2.790 RSD",
      },
      {
        name: "Confit de Canard",
        description: "Pačiji batak sa krompirom i aromatičnim začinima",
        price: "2.890 RSD",
      },
    ],
  },

  {
    name: "Paste i rižoto",
    
    items: [
      {
        name: "Risotto aux Champignons",
        description: "Kremasti rižoto sa šumskim pečurkama",
        price: "1.890 RSD",
      },
      {
        name: "Tagliatelle aux Truffes",
        description: "Domaća pasta sa tartufima i parmezanom",
        price: "2.390 RSD",
      },
      {
        name: "Ravioli au Fromage",
        description: "Ravioli punjeni sirom u kremastom sosu",
        price: "1.790 RSD",
      },
    ],
  },

  {
    name: "Deserti",
    
    items: [
      {
        name: "Crème Brûlée",
        description: "Krem od vanile sa karamelizovanom koricom",
        price: "890 RSD",
      },
      {
        name: "Tarte Tatin",
        description: "Topla karamela i jabuke uz kremu od vanile",
        price: "990 RSD",
      },
      {
        name: "Mousse au Chocolat",
        description: "Mousse od tamne čokolade i svežih bobica",
        price: "890 RSD",
      },
    ],
  },

  {
    name: "Vina",
    
    items: [
      {
        name: "Chardonnay",
        description: "Belo vino, Francuska · 0.75 l",
        price: "2.400 RSD",
      },
      {
        name: "Sauvignon Blanc",
        description: "Belo vino, Loire · 0.75 l",
        price: "2.600 RSD",
      },
      {
        name: "Bordeaux Rouge",
        description: "Crveno vino, Bordeaux · 0.75 l",
        price: "3.200 RSD",
      },
      {
        name: "Rosé de Provence",
        description: "Rosé vino, Provence · 0.75 l",
        price: "2.800 RSD",
      },
    ],
  },

  {
    name: "Pića",
    
    items: [
      {
        name: "Espresso",
        description: "Italijanska kafa",
        price: "280 RSD",
      },
      {
        name: "Café Crème",
        description: "Espresso sa toplim mlekom",
        price: "390 RSD",
      },
      {
        name: "Fresh Lemonade",
        description: "Sveže ceđeni limun, nana i voda",
        price: "450 RSD",
      },
      {
        name: "Eau Minérale",
        description: "Gazirana ili negazirana voda",
        price: "320 RSD",
      },
    ],
  },
];
</script>

<template>
  <main>
    <!-- Hero -->
    <section
      class="relative flex min-h-[60vh] items-center overflow-hidden bg-black"
    >
      <!-- Background -->
      <img
        src="/images/gallery/menu-hero.webp"
        alt="La Maison restoran"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <!-- Overlay -->
      <div class="absolute inset-0  bg-gradient-to-r from-black/60 via-black/35 to-black/10"></div>

      <div
        class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/30"
      ></div>

      <!-- Navbar -->
      <Navbar />

      <!-- Hero content -->
      <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div class="max-w-3xl">
          <!-- French flag -->
          <p
            class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            <span class="flex h-1 w-16 overflow-hidden">
              <span class="w-1/3 bg-[#0055A4]"></span>
              <span class="w-1/3 bg-white"></span>
              <span class="w-1/3 bg-[#EF4135]"></span>
            </span>

            Bon appétit
          </p>

          <h1
            class="font-serif italic text-5xl font-medium leading-tight text-white/70 sm:text-5xl lg:text-6xl"
          >
            Naš
            <span class="italic text-gold"> meni </span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-md">
            Pažljivo odabrana jela, kvalitetni sastojci i ukusi inspirisani
            tradicionalnom francuskom kuhinjom.
          </p>
        </div>
      </div>
    </section>

    <!-- Menu -->
    <section class="py-20 sm:py-24 lg:py-28">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <!-- Intro -->
        <div class="mb-16 max-w-2xl">
          <!-- Eyebrow -->
          <div class="flex items-center gap-3">
            <span class="h-px w-10 bg-gold"></span>

            <p
              class="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            >
              La carte
            </p>
          </div>

          <!-- Heading -->
          <h2
            class="mt-3 font-serif text-4xl font-medium italic text-gray-900 sm:text-5xl"
          >
            Izaberite nešto
            <span class="text-[#B8951F]"> posebno </span>
          </h2>
        </div>

        <!-- Categories -->
        <div class="space-y-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <section v-for="category in categories" :key="category.name">
            <!-- Category heading -->
            <div class="mb-8">
              <h3
                class="font-display italic text-3xl font-medium text-gray-900"
              >
                {{ category.name }}
              </h3>

              <p class="mt-2 text-sm text-gray-600">
                {{ category.description }}
              </p>

              <div class="mt-4 h-px w-full bg-gold/30"></div>
            </div>

            <!-- Items -->
            <div class="space-y-6">
              <div
                v-for="item in category.items"
                :key="item.name"
                class="group"
              >
                <div class="flex items-baseline gap-4">
                  <!-- Name -->
                  <h4
                    class="font-display italic text-xl font-medium text-gray-900 transition-colors duration-200 group-hover:text-gold"
                  >
                    {{ item.name }}
                  </h4>

                  <!-- Dots / line -->
                  <div
                    class="h-px flex-1 border-t border-dashed border-gray-300"
                  ></div>

                  <!-- Price -->
                  <span class="shrink-0 text-sm font-semibold text-gold">
                    {{ item.price }}
                  </span>
                </div>

                <!-- Description -->
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
