<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <button 
        class="max-h-14 max-w-14 rounded-2xl px-2 py-2 bg-gray-50/[.15] hover:bg-gray-500 mr-5"
      >
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3 my-2 mx-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="font-['Inter'] not-italic text-[32px]/[40px] inline-block">Kadena Bears</div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
        <NuxtLink v-for="image in images" @click="dogsStore.openModal(image.id)" :to="`/${image.id}`" :key="image.id" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="image.imageURL" :alt="image.infoUrl" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Kor Blockchain OG Badge</h3>
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