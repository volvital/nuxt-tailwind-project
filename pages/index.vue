<template>
  <div class="font-['Inter'] not-italic bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="text-[32px]/[40px] text-center">Catalog</div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
        <NuxtLink v-for="image in images" :to="`/${image.id}`" :key="image.id" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="image.image" :alt="image.title" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{image.title}}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">#{{ image.id }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import images, { useDogImageStore } from '@/stores/ImageStore'
import { mapStores } from 'pinia'

export default {
  computed: {
		...mapStores(useDogImageStore),
    images() {
      return images.imagesDogs
    }
  }
}
</script>