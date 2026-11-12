<script setup>
import { IconStarFilled, IconBrandGoogle } from "@tabler/icons-vue";

const reviews = [
  {
    name: "Milica J.",
    date: "pre 2 nedelje",
    text: "Predivan ambijent i još bolja hrana. Sve je bilo pažljivo pripremljeno, a osoblje izuzetno ljubazno. Sigurno ćemo se vratiti.",
  },
  {
    name: "Marko P.",
    date: "pre mesec dana",
    text: "Jedan od najboljih restorana koje smo posetili. Odličan izbor vina, atmosfera je prijatna, a jela zaista posebna.",
  },
  {
    name: "Ana M.",
    date: "pre 2 meseca",
    text: "Savršeno mesto za večeru. Hrana je ukusna, servis odličan i sve deluje veoma pažljivo osmišljeno. Topla preporuka.",
  },
];
</script>

<template>
  <section class=" py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Header -->
      <div class="mx-auto mb-14 max-w-2xl text-center">
        <div class="mb-5 flex items-center justify-center gap-3">
          <span class="h-px w-10 bg-[#d79e3d]"></span>

          <div class="flex items-center gap-2 text-[#d79e3d]">
           
            <span
              class="text-xs font-semibold uppercase tracking-[0.25em]"
            >
              Google recenzije
            </span>
          </div>

          <span class="h-px w-10 bg-gold"></span>
        </div>

        <h2
          class="text-4xl font-medium tracking-tight text-gray-900 sm:text-4xl"
        >
          Reči naših gostiju
        </h2>

        <!-- Rating -->
        <div class="mt-6 flex items-center justify-center gap-3">
          <div class="flex gap-1 text-gold">
            <IconStarFilled
              v-for="i in 5"
              :key="i"
              class="h-4 w-4"
            />
          </div>

          <span class="text-sm font-semibold text-gray-900">
            4.9
          </span>

          <span class="text-sm text-gray-400">
            · Google Reviews
          </span>
        </div>
      </div>

      <!-- Reviews -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="review in reviews"
          :key="review.name"
          class="rounded-2xl border border-gray-200 bg-white/40  p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d79e3d]/40"
        >
          <!-- Stars -->
          <div class="flex gap-1 text-gold">
            <IconStarFilled
              v-for="i in 5"
              :key="i"
              class="h-4 w-4"
            />
          </div>

          <!-- Review -->
          <p class="mt-6 text-sm leading-7 text-gray-600 font-display italic">
            "{{ review.text }}"
          </p>

          <!-- Author -->
          <div class="mt-7 flex items-center justify-between border-t border-gray-400 pt-5">
            <div>
              <p class="text-sm font-semibold text-gray-900">
                {{ review.name }}
              </p>

              <p class="mt-1 text-xs text-gray-400">
                {{ review.date }}
              </p>
            </div>

            <IconBrandGoogle
              class="h-5 w-5 text-gold"
            />
          </div>
        </article>
      </div>

    </div>
  </section>
</template>