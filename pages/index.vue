<script setup lang="ts">
const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "basil:cloud-upload-outline",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "ri:lock-line",
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "ic:twotone-loop",
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "humbleicons:fingerprint",
  },
];

useSeoMeta({
  title: "Nuxt Starter Template",
  description:
    "A starter template for Nuxt 3 with Tailwind CSS, Apollo Client.",
  ogTitle: "Nuxt Starter Template",
  ogDescription:
    "A starter template for Nuxt 3 with Tailwind CSS, Apollo Client",
  ogImage: "/images/Nuxt_starter_meta_img.png",
  ogUrl: "https://nuxt-3-starter-template-gold.vercel.app/",
  twitterTitle: "Nuxt Starter Template",
  twitterDescription:
    "A starter template for Nuxt 3 with Tailwind CSS, Apollo Client",
  twitterImage: "/images/Nuxt_starter_meta_img.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="bg-white dark:bg-gray-700">
    <main class="isolate">
      <!-- Hero section -->
      <div class="relative pt-14">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#74ff7e] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="py-24 sm:py-32 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1
                class="text-5xl font-semibold tracking-tight text-balance text-gray-700 sm:text-7xl"
              >
                Kickstart Your Project
              </h1>
              <h1
                class="text-5xl font-semibold tracking-tight text-balance text-green-500 sm:text-7xl"
              >
                With Nuxt 3
              </h1>

              <p class="mt-8 text-pretty text-gray-500">
                Nuxt is an
                <a
                  href="https://go.nuxt.com/github"
                  target="_blank"
                  class="hover:underline"
                  >open source framework</a
                >
                that makes web development intuitive and powerful.
              </p>
              <p class="text-pretty text-gray-500">
                Create performant and production-grade full-stack web apps and
                websites with confidence.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  class="flex gap-x-2 group rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Get started
                  <div
                    aria-hidden="true"
                    class="group-hover:translate-x-1 duration-200"
                  >
                    →
                  </div></a
                >
                <a
                  href="#"
                  class="text-sm/6 font-semibold text-gray-900 flex items-center gap-x-1"
                  >Nuxt in 100 Seconds
                  <Icon name="carbon:play-outline" class="text-xl"
                /></a>
              </div>
            </div>
            <!-- <div class="mt-16 flow-root sm:mt-24">
              <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4"
              >
                <img
                  src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  class="rounded-md ring-1 shadow-2xl ring-gray-900/10"
                />
              </div>
            </div> -->
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8aff90] to-[#655bf9] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
        <div class="mt-16 flex justify-center">
          <p
            class="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 ring-inset hover:ring-gray-900/20"
          >
            <span class="hidden md:inline"
              >Transistor saves up to $40,000 per year, per employee by working
              with us.</span
            >
            <a href="#" class="font-semibold text-green-600"
              ><span class="absolute inset-0" aria-hidden="true" /> Read our
              case study <span aria-hidden="true">&rarr;</span></a
            >
          </p>
        </div>
      </div>

      <!-- Feature section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base/7 font-semibold text-gree-600">Deploy faster</h2>
          <p
            class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
          >
            Everything you need to deploy your app
          </p>
          <p class="mt-6 text-lg/8 text-pretty text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="relative pl-16"
            >
              <dt class="text-base/7 font-semibold text-gray-900">
                <div
                  class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-500"
                >
                  <Icon
                    :name="feature.icon"
                    aria-hidden="true"
                    class="size-6 text-white"
                  />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base/7 text-gray-600">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Testimonial section -->
      <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div
          class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"
        >
          <img
            class="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
            alt=""
          />
          <div class="absolute inset-0 bg-gray-500/90 mix-blend-multiply" />
          <div
            class="absolute -top-56 -left-80 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-1097/845 w-[68.5625rem] bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div
            class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-1097/845 w-[68.5625rem] bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-25"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div class="relative mx-auto max-w-2xl lg:mx-0">
            <img
              class="h-12 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
              alt=""
            />
            <figure>
              <blockquote
                class="mt-6 text-lg font-semibold text-white sm:text-xl/8"
              >
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.”
                </p>
              </blockquote>
              <figcaption class="mt-6 text-base text-white">
                <div class="font-semibold">Judith Black</div>
                <div class="mt-1">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="relative -z-10 my-32 px-6 lg:px-8">
        <div
          class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
          >
            Boost your productivity. Start using our starter template today.
          </h2>
        </div>
        <div
          class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#46ff68] to-[#43ff36] opacity-40"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
      </div>
    </main>
  </div>
</template>
