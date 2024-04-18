<template>
    <Splitter style="height: calc(100vh - 16px); box-sizing: border-box; overflow-y-auto">
        <SplitterPanel :size="35" :minSize="35">
            <!-- Flags component -->
            <Flags @showCountryDetails="setSelectedCountryName" />
        </SplitterPanel>
        <SplitterPanel class="overflow-y-auto" :size="65">
            <!-- Overview component -->
            <Overview :countryName="selectedCountryName" />
        </SplitterPanel>
    </Splitter>
</template>


<script setup lang="ts">
import Flags from '~/pages/Flags.vue';
import Overview from '~/pages/Overview.vue';
import { ref } from 'vue';



// Reactive variable to store selected country name
const selectedCountryName = ref('');

// Handle the custom event and set the selected country name
const setSelectedCountryName = (countryName: string) => {
    selectedCountryName.value = countryName;
};
</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.nav {
    flex: 0 0 30%;
    /* Set navigation width */
}

.content {
    flex: 1;
    /* Take remaining space */
}

.p-splitter {
    border: none;
    margin: 0;
    padding: 0
}
</style>