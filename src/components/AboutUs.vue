<script setup>
import { IconArrowUpRight, IconChefHat, IconLeaf } from "@tabler/icons-vue";
</script>

<template>
  <section id="o-nama" class="scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
    >
      <!-- Text -->
      <div class="max-w-xl">
        <!-- Eyebrow -->
        <p
            class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-900"
          >
            <span class="flex h-1 w-16 overflow-hidden">
              <span class="w-1/3 bg-[#0055A4]"></span>
              <span class="w-1/3 bg-white"></span>
              <span class="w-1/3 bg-[#EF4135]"></span>
            </span>

            O nama
          </p>

        <!-- Heading -->
        <h2
          class="font-serif italic text-4xl font-medium leading-tight text-gray-900 sm:text-5xl"
        >
          Mesto gde se
          <span class="italic text-gold"> tradicija </span>
          susreće sa savremenim.
        </h2>

        <!-- Description -->
        <div class="mt-7 space-y-4 text-base leading-7 text-gray-600">
          <p>
            [Naziv restorana] je nastao iz ljubavi prema francuskoj kuhinji, dobrom vinu
            i trenucima koji se pamte. Verujemo da restoran nije samo mesto za
            obrok, već prostor u kojem se ljudi povezuju.
          </p>

          <p>
            Naš meni spaja tradicionalne francuske ukuse sa modernim pristupom,
            koristeći pažljivo odabrane sezonske sastojke i jednostavne tehnike
            koje stavljaju kvalitet namirnica u prvi plan.
          </p>
        </div>

        <!-- Features -->
        <div class="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold bg-gold/5 text-gold"
            >
              <IconChefHat class="h-5 w-5" stroke="1.6" />
            </div>

            <div>
              <h3 class="font-semibold text-gray-900">Pažljivo pripremljeno</h3>

              <p class="mt-1 text-sm leading-6 text-gray-600">
                Svako jelo nastaje sa pažnjom prema detaljima.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 text-[#B8951F]"
            >
              <IconLeaf class="h-5 w-5" stroke="1.6" />
            </div>

            <div>
              <h3 class="font-semibold text-gray-900">Sveži sastojci</h3>

              <p class="mt-1 text-sm leading-6 text-gray-600">
                Biramo sezonske i kvalitetne namirnice.
              </p>
            </div>
          </div>
        </div>

        <!-- Link -->
        <RouterLink
          to="/o-nama"
          class="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-gold"
        >
          Rezervišite sto

          <IconArrowUpRight
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </RouterLink>
      </div>

      <!-- Image -->
      <div class="relative">
        <!-- Gold frame -->
        <div
          class="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-gold"
        ></div>

        <div class="relative overflow-hidden rounded-2xl">
          <img
            src="/images/gallery/tresjolie.webp"
            alt="Enterijer restorana La Maison"
            class="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px]"
          />

          <!-- Image overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          ></div>

          <!-- Small badge -->
          <div
            class="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-black/40 px-10 py-4 backdrop-blur-md"
          >
            <p class="text-xs uppercase tracking-[0.2em] text-white/60">
              Bienvenue
            </p>

            <p class="mt-1 font-display text-xl italic text-white">[Naziv restorana]</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
