<template>
  <div class="font-['Inter'] not-italic bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="text-[32px]/[40px]">Catalog</div>
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
  
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <div class="fixed inset-0 overflow-y-auto bg-black bg-opacity-90">
        <div
          class="flex justify-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="min-w-full transform overflow-hidden shadow-xl transition-all text-white"
            	>
              <div class="text-end">								
								<button 
									class="max-h-14 max-w-14 mr-12 mt-12 rounded-2xl px-2 py-2 bg-gray-50/[.15] hover:bg-gray-500"
									@click="closeModal"
									>										
									<span class="sr-only">Cancel</span>
									<svg 
										xmlns="http://www.w3.org/2000/svg" 
										fill="none" viewBox="0 0 20 20" 
										stroke-width="1.5" stroke="currentColor" 
										class="w-3 h-3 my-2 mx-2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>									
								</button>								
              </div>
              <div class="flex justify-center font-['Inter'] not-italic">
                <DialogTitle class="w-full max-w-[672px]">
                  <div class="md:flex justify-between font-semibold tracking-[-0.01em] mt-16 mb-3 ml-14 mr-14 text-[32px]/[40px]">
                    <div>{{dogsStore.image.title}}</div>
                    <div>#{{ dogsStore.id }}</div>
                  </div>
                  <div class="text-sm underline decoration-white mb-5 ml-14 mr-14">
                    <ul class="md:flex">
                      <li class="flex space-x-1 mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mt-1">
                          <path
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <a href="#">Owner</a>
                      </li>
                      <li class="flex space-x-1 mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mt-1">
                          <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                        <a href="#">Collection</a>
                      </li>
                      <li class="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mt-1">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                        <a @click="copyToClipboard">Share</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex items-center">
                    <div class="flex items-center text-center h-full w-full">												
											<button 													 
												class="inline-flex items-center rounded-2xl px-2 py-2 bg-gray-50/[.15] hover:bg-gray-500 mr-4"
												:disabled="currentDisabledPrevious"
												@click="goToImage(previousImageId)"                  
											>
												<span class="sr-only">Previous</span>
												<svg class="w-3 h-3 my-2 mx-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path
														fill-rule="evenodd"
														d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
														clip-rule="evenodd"
														/>
												</svg>
											</button>											
                      <div class="overflow-hidden rounded-2xl">                
                        <img
                          :src="dogsStore.image.image"
                          :alt="dogsStore.image.title" 
                          class="object-cover object-center" />                
                      </div>											
											<button													                          
												class="inline-flex items-center rounded-2xl px-2 py-2 bg-gray-50/[.15] hover:bg-gray-500 ml-4"
												:disabled="currentDisabledNext"
												@click="goToImage(nextImageId)"
											>												
												<span class="sr-only">Next</span>
												<svg class="w-3 h-3 my-2 mx-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path
														fill-rule="evenodd" 
														d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
														clip-rule="evenodd" />
												</svg>												
											</button>											
                    </div>
                  </div>
                  <div class="mt-4 mb-12 text-center">
                    <button
                      type="button"
                      class="h-full w-full max-w-[220px] min-h-[56px] text-[14px]/[12px] uppercase rounded-2xl bg-gray-50/[.15] font-bold"                  
                    >
                      Open Marketplace
                    </button>
                  </div>
                </DialogTitle>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import images, { useDogImageStore } from '@/stores/ImageStore'
import { mapStores } from 'pinia'
import { copyText } from 'vue3-clipboard'

export default defineComponent({
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
	mounted() {
		const id = this.$route.params.id;
		this.setImage(+id)
		this.isOpen = ref(true)
	},
  data() {
    return {
      isOpen: ref(true)
    }
  },
  computed: {
		...mapStores(useDogImageStore),
    images() {
      return images.imagesDogs
    },
    currentIdImage() {
      return this.dogsStore.id
    },
    currentImageURL() {
      return this.dogsStore.image.imageURL
    },
    currentPageURL() {
      const currentURL = window.location.href;
      return currentURL
    },
    currentDisabledPrevious() {
      return this.currentIdImage === this.images[0].id
    },
    currentDisabledNext() {
      return this.currentIdImage === this.images[this.images.length - 1].id
    },
		previousImageId() {
			const id = this.$route.params.id;
      let index = this.images.findIndex(item => item.id === (+id));
			if(index === 0) {
				return +id
			}
      const previousId = this.images[index - 1].id;
      return previousId
    },  
		nextImageId() {
			const id = this.$route.params.id;
      let index = this.images.findIndex(item => item.id === (+id));
			if(index === this.images.length - 1) {
				return +id
			}
      const nextId = this.images[index + 1].id;
      return nextId
    },
  },
  methods: {  
		closeModal() {
			navigateTo('/')
		},
		goToImage(id) {
			navigateTo(`/${id}`)
		},
    setImage(id) {
			this.dogsStore.setId(id);
      this.dogsStore.setImage(id);
    },  
    copyToClipboard() {        
      copyText(this.currentPageURL, undefined, (error, event) => {
          if (error) {
            alert('Can not copy')
            console.log(error)
          } else {
            alert('Copied')
          }
        })
    }
  }
})
</script>