<template>
  <div class="min-h-screen bg-white text-gray-800 mt-[88px]">
    <section
      class="py-32 bg-cover bg-center text-white hero"
    >
      <div class="container mx-auto px-4 text-center" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow">
          Welcome to WebStdy
        </h1>
        <p class="text-lg md:text-xl mt-4 text-white drop-shadow">
          WebSTDY Software House is a Web Development, Mobile Development, and Digital Marketing registered company.
        </p>
        <div class="mt-8">
          <UButton class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 cursor-pointer" size="lg">
            Get Started
          </UButton>
        </div>
      </div>
    </section>

    <section class="py-20 services">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-fuchsia-500">
          Our Services
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <UCard class="hover:shadow-xl transition duration-300" data-aos="flip-right" data-aos-delay="200">
            <template #header>
              <h3 class="text-xl font-semibold text-fuchsia-500 text-center">Web Development</h3>
            </template>
            <p>
              Build blazing-fast websites using the latest Nuxt 3 technologies and modern design.
            </p>
          </UCard>

          <UCard class="hover:shadow-xl transition duration-300" data-aos="flip-right" data-aos-delay="400">
            <template #header>
              <h3 class="text-xl font-semibold text-fuchsia-500 text-center">UI/UX Design</h3>
            </template>
            <p>
              Craft beautiful, user-friendly interfaces with Tailwind CSS and Nuxt UI components.
            </p>
          </UCard>

          <UCard class="hover:shadow-xl transition duration-300" data-aos="flip-right" data-aos-delay="600">
            <template #header>
              <h3 class="text-xl font-semibold text-fuchsia-500 text-center">SEO Optimization</h3>
            </template>
            <p>
              Boost your website's visibility with performance-driven SEO strategies.
            </p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="py-16 bg-fuchsia-400 text-white -mb-16 contact-us">
      <div class="container mx-auto px-4 text-center" data-aos="zoom-in">
        <h2 class="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p class="text-lg mb-6">Launch your project with WebStdy Today!</p>
        <UButton class="text-white bg-fuchsia-500 hover:bg-fuchsia-700 cursor-pointer" variant="soft" size="lg" >
          Contact Us
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
  useHead({
    title: 'Home',
    meta : [
      {name: 'description', content: 'This is WebStdy Home Page'}
    ]
  })
</script>

<style  scoped>
.hero {
  background-image: linear-gradient(to right, #e12afbdd, #a855f7cc), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80');
}
</style>