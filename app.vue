<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <a 
        class="h-14 w-14 relative inline-flex items-center rounded-2xl px-3 py-3 bg-gray-50/[.15] hover:bg-gray-500 focus:z-20 focus:outline-offset-0 mr-5"
      >
        <span class="sr-only">Previous</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
        </svg>
      </a>
      <div class="font-bolt text-3xl inline-block py-5">Kadena Bears</div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
        <a v-for="image in images" @click="openModal(image.id)" :key="image.id" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="image.imageURL" :alt="image.infoUrl" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Kor Blockchain OG Badge</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">#{{ image.id }}</p>
        </a>
      </div>
    </div>
  </div>
  
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <div class="fixed inset-0 overflow-y-auto bg-black bg-opacity-90">
        <div
          class=" flex justify-center"
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
              class="aspect-h-1 max-w-full transform overflow-hidden shadow-xl transition-all text-white"
            >
              <div class=" text-end">
                <button 
                  class="relative h-14 w-14 mr-12 mt-12 rounded-2xl px-3 py-3 bg-gray-50/[.15] hover:bg-gray-500 focus:z-20 focus:outline-offset-0"
                  @click="closeModal"
                >
                  <span class="sr-only">Cancel</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 20 20" 
                    stroke-width="1.5" stroke="currentColor" 
                    class="relative w-2 h-2 my-3 mx-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class=" text-center">
                <div class="flex justify-between mt-16 mb-3 ml-20 mr-20 text-3xl/10 leading-6">
                  <div>Kor Blockchain Badge</div>
                  <div>#{{ currentIdImage }}</div>
                </div>           
              
                <div class="text-sm underline decoration-white mb-5 ml-20">
                  <ul class="flex sm:flex-none">
                    <li class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a class="mr-6" href="#">Owner</a>
                    </li>
                    <li class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                      <a class="mr-6" href="#">Collection</a>
                    </li>
                    <li class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                      <a class="mr-6" @click="copyToClipboard">Share</a>
                    </li>
                  </ul>
                </div> 
              </div>
              
                <div  class="text-center">
                  <div class="flex items-center m-auto text-center">
                    <button 
                      :disabled="currentDisabledPrevious"
                      @click="decrementId(currentIdImage)" 
                      class="h-14 w-14 relative inline-flex items-center rounded-2xl px-6 py-3 bg-gray-50/[.15] hover:bg-gray-500 focus:z-20 focus:outline-offset-0 mr-5"                  
                    >
                      <span class="sr-only">Previous</span>
                      <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                          clip-rule="evenodd"
                          />
                      </svg>
                    </button>
                    <div class="overflow-hidden rounded-2xl xl:aspect-h-8 xl:aspect-w-7">                
                      <img
                        :src="currentImageURL"
                        :alt="image.infoUrl" class="h-full w-full object-cover object-center group-hover:opacity-75" />                
                    </div>
                    <button
                      :disabled="currentDisabledNext"  
                      @click="incrementId(currentIdImage)" 
                      class="h-14 w-14 relative inline-flex items-center rounded-2xl px-6 py-6 bg-gray-50/[.15] hover:bg-gray-500 focus:z-20 focus:outline-offset-0 ml-5"
                    >
                      <span class="sr-only">Next</span>
                      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fill-rule="evenodd" 
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              <div class="m-auto mt-4 mb-12 text-center">
                <button
                  type="button"
                  class="h-14 w-55 py-5.5 px-9 text-sm rounded-2xl bg-gray-50/[.15] font-medium hover:bg-gray-500 focus:outline-offset-0"                  
                >
                  OPEN MARKETPLACE
                </button>
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

import { copyText } from 'vue3-clipboard'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data() {
    return {
      id: 0,
      image: {},
      isOpen: ref(false),      
      JSON: [
        {
          "id": 22,
          "imageURL": "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/22",
          "infoUrl": "https://mintit.studio/collections/the-angel-doggos/tokens/7aF_qxgXMriS8o1ppiMk8cDiSPbghtYpl-YpELvVNVk"
        },
        {
          "id": 23,
          "imageURL": "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/23",
          "infoUrl": "https://mintit.studio/collections/the-angel-doggos/tokens/4ACtieCCzMd8Di23k0L17I-K5bHxGge2vX5MqVd2yRM"
        },
        {
          "id": 24,
          "imageURL": "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/24",
          "infoUrl": "https://mintit.studio/collections/the-angel-doggos/tokens/Z9JQw5u1ZTEf5MBR7rsL9EkW8PcZgg3AJCXxF1Fg3_E"
        },
        {
          "id": 25,
          "imageURL": "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/25",
          "infoUrl": "https://mintit.studio/collections/the-angel-doggos/tokens/gX-vvvXBQQSgCoIqVmrOU7oMpV85WNhP1TCtHa4BXRQ"
        },
        {
          "id": 26,
          "imageURL": "https://d2cnuwplk0vy10.cloudfront.net/nft-image/angel-doggos@kadena/26",
          "infoUrl": "https://mintit.studio/collections/the-angel-doggos/tokens/mSR_DrsiBwMB9CiY_tKrLuNgALC57_vGSOjl09K8KU"
        }  
      ]
    }
  },
  computed: {
    images() {
      return this.JSON
    },
    currentIdImage() {
      return this.id
    },
    currentImageURL() {
      return this.image?.imageURL
    },
    currentPageURL() {
      const currentURL = window.location.href;
      return currentURL
    },
    currentDisabledPrevious() {
      return this.currentIdImage === this.JSON[0].id ? true : false
    },
    currentDisabledNext() {
      return this.currentIdImage === this.JSON[this.JSON.length - 1].id ? true : false
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false;
    },
    setImage(id, JSON) {
      let image = JSON.find(item => item.id == id);
      this.image = image;
    },
    openModal(id) {
      this.isOpen = true;
      this.id = id;
      this.setImage(id, this.JSON);
    },
    incrementId(id) {
      id++;
      this.id = id;
      this.setImage(id, this.JSON);
    },
    decrementId(id) {
      id--;
      this.id = id;
      this.setImage(id, this.JSON);
    },
    copyToClipboard() {        
      copyText(this.currentPageURL, undefined, (error, event) => {
          if (error) {
            alert('Can not copy')
            console.log(error)
          } else {
            alert('Copied')
            console.log(event)
          }
        })
    }
  }
}
</script>