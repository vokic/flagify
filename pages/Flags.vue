<template>
  <div v-if="flags.length > 0">

    <!-- Filter field -->
    <IconField iconPosition="left" class="mb-3 mt-2 mr-2">
      <InputIcon class="pi pi-search"> </InputIcon>
      <InputText v-model="searchQuery" placeholder="Search countries" class="w-full h-3rem" />
    </IconField>

    <!-- Filtered flags -->
    <DataView :value="filteredFlags" paginator :rows="5">
      <template #list="flags">
        <div v-for="(item, index) in flags.items" :key="index" class="col-12 m-0 p-2">
          <div class="grid border-top-1	border-300 grid-item">
            <!-- Flag details -->
            <div class="col-7">
              <div class="col-12">
                <div class="text-xl font-bold">{{ item.name.common }}</div>
                <div class="font-italic mb-3">{{ item.name.official }}</div>
                <div class="">
                  <div class="mt-1" v-if="Array.isArray(item.capital)"><span class="">Capital:</span> {{ item.capital[0]
                    }}</div>
                </div>
              </div>
            </div>

            <div class="col-1">
              <div class="h-full flex align-items-center justify-content-center"><img class="w-3rem pr-2"
                  v-if="item.coatOfArms && item.coatOfArms.png" :src="item.coatOfArms.png" :alt="item.name.common" />
              </div>
            </div>

            <div class="col-3">
              <div class="h-full flex align-items-center justify-content-center"><img
                  class="w-7rem border-1 border-200 max-h-4rem" :src="item.flags.png" :alt="item.name.common" /></div>
            </div>

            <div class="col-1">
              <div class="flex align-items-center justify-content-center h-full cursor-pointer icon-container mr-3"
                @click="showCountryDetails(item.name.common)">
                <img src="/assets/icons/chevron-circle-right.svg" width="40rem" class="filter-grey" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { fetchFlags } from '~/services/FlagsService';
import type Flags from '~/types/flags.d.ts';

// Custom event
const emit = defineEmits(['showCountryDetails']);

// Function to emit the custom event with the country name
const showCountryDetails = (countryName: string) => {
  emit('showCountryDetails', countryName);
};

// const showCountryDetails = (countryName: string) => {
//   console.log(countryName);
// };

// Reactive variables
const flags = ref<Flags[]>([]);
const searchQuery = ref<string>('');

// Fetch flags data on component mount
onMounted(async () => {
  try {
    const data = await fetchFlags();
    flags.value = data;
  } catch (error) {
    console.error('Error fetching flags:', error);
  }
});

// Filter flags based on the search query
const filteredFlags = computed(() => {
  const query = searchQuery.value?.toLowerCase();
  return !query
    ? flags.value
    : flags.value.filter(item =>
      item.name.common.toLowerCase().includes(query)
    );
});

</script>

<style scoped>
.icon-container img {
  visibility: hidden;
}

/* Show the icon on hover */
.grid-item:hover img {
  visibility: visible;
}

/* Color the SVG */
.filter-grey {
  filter: brightness(0) saturate(100%) invert(92%) sepia(9%) saturate(250%) hue-rotate(152deg) brightness(82%) contrast(87%);
}
</style>
