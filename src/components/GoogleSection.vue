<script setup>
import {
  IconMapPin,
  IconClock,
  IconPhone,
  IconArrowUpRight,
} from "@tabler/icons-vue";
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
      >
        <!-- LEFT -->
        <div>
          <p
            class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-900"
          >
            <span class="flex h-1 w-16 overflow-hidden">
              <span class="w-1/3 bg-[#0055A4]"></span>
              <span class="w-1/3 bg-white"></span>
              <span class="w-1/3 bg-[#EF4135]"></span>
            </span>

            Lokacija
          </p>

          <h2
            class="max-w-lg font-serif italic text-4xl font-medium leading-tight text-gray-900 sm:text-5xl"
          >
            Pronađite nas
            <span class="font-serif italic text-gold">
              u srcu grada.
            </span>
          </h2>

          <p class="mt-6 max-w-lg text-base leading-7 text-gray-600">
            Svratite na ručak, večeru ili čašu dobrog vina. Čekamo vas u
            prijatnom ambijentu [Naziv restorana] restorana.
          </p>

          <!-- INFO -->
          <div class="mt-9 space-y-6">
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d79e3d]/30 bg-[#d79e3d]/5 text-[#d79e3d]"
              >
                <IconMapPin class="h-5 w-5" stroke="1.6" />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                >
                  Adresa
                </p>

                <p class="mt-1 text-sm font-medium text-gray-800">
                  [Adresa restorana]
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d79e3d]/30 bg-[#d79e3d]/5 text-[#d79e3d]"
              >
                <IconClock class="h-5 w-5" stroke="1.6" />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                >
                  Radno vreme
                </p>

                <p class="mt-1 text-sm font-medium text-gray-800">
                  [Radno vreme restorana]
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold"
              >
                <IconPhone class="h-5 w-5" stroke="1.6" />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                >
                  Rezervacije
                </p>

                <a
                  href="tel:+381601234567"
                  class="mt-1 block text-sm font-medium text-gray-800 transition-colors hover:text-gold"
                >
                  [Broj telefona restorana]
                </a>
              </div>
            </div>
          </div>

          <!-- BUTTON -->
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pariska+24+Beograd"
            target="_blank"
            rel="noopener noreferrer"
            class="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            Otvori u Google Maps

            <IconArrowUpRight
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              stroke="1.8"
            />
          </a>
        </div>

        <!-- RIGHT / MAP -->
        <div
          class="relative h-[560px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=[Adresa+restorana]"
            class="h-full w-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
