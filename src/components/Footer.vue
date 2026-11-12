<script setup>
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-vue";

const links = [
  { label: "Početna", to: "/" },
  { label: "Meni", to: "/meni" },
  { label: "O nama", to: "/o-nama" },
  { label: "Galerija", to: "/galerija" },
  { label: "Kontakt", to: "/kontakt" },
];
</script>

<template>
  <footer class="border-t border-gray-100 bg-gray-950">
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">

      <!-- TOP -->
      <div
        class="flex flex-col gap-8 border-b border-gray-200 pb-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Logo -->
        <RouterLink
          to="/"
          class="font-serif italic text-3xl font-medium text-gold"
        >
          [Naziv restorana]
        </RouterLink>
        <!-- Social -->
        <div class="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:border-[#d79e3d] hover:bg-[#d79e3d] hover:text-white"
          >
            <IconBrandInstagram class="h-5 w-5" stroke="1.6" />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:border-[#d79e3d] hover:bg-[#d79e3d] hover:text-white"
          >
            <IconBrandFacebook class="h-5 w-5" stroke="1.6" />
          </a>

          <a
            href="#"
            aria-label="TikTok"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 hover:border-[#d79e3d] hover:bg-[#d79e3d] hover:text-white"
          >
            <IconBrandTiktok class="h-5 w-5" stroke="1.6" />
          </a>
        </div>
      </div>



      <!-- BOTTOM -->
      <div
        class="flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} [Naziv restorana]. Sva prava zadržana.
        </p>

        <p>
          Created by
          <a
            href="https://www.instagram.com/dule9/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gold transition-all duration-300 hover:text-white underline">NextLevel</a>
        </p>

        <p>
          Vrhunska kuhinja · [Lokacija restorana] 
        </p>
      </div>

    </div>
  </footer>
</template>