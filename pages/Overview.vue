<template>
    <div class="square mr-3">
        <div>
        </div>
        <div v-if="countryDetails">

            <div class="text-center h-full">
                <img class="h-3rem" v-if="countryDetails.coatOfArms && countryDetails.coatOfArms.png"
                    :src="countryDetails.coatOfArms.png" :alt="countryDetails.name.common" />
            </div>

            <div class="mt-4">
                <div class="text-4xl font-bold ml-4">{{ countryDetails.name.common }}</div>
                <div class="ml-4 border-bottom-1 border-200">{{ countryDetails.name.official }}</div>
            </div>
            <div class="mt-3"><img class="w-20rem border-1 border-200" :src="countryDetails.flags.svg"
                    :alt="countryDetails.name.common" />
            </div>

            <!-- <div class="text-center h-full">
                <img class="h-5rem" v-if="countryDetails.coatOfArms && countryDetails.coatOfArms.png"
                    :src="countryDetails.coatOfArms.png" :alt="countryDetails.name.common" />
            </div> -->

            <div class="h-full ml-4 mt-4"> <b>{{
                countryDetails.name.common }}</b>, officially known as <b>{{ countryDetails.name.official
                    }}</b>, is a
                country situated in <b>{{ countryDetails.subregion }}</b>. Its common name, <b>{{
                    countryDetails.name.common
                }}</b>,
                reflects its rich cultural and geographical heritage. Bordered by <b>
                    {{ countryDetails.borders ? countryDetails.borders.join(', ') : 'no countries because it is an'
                        +
                        ' island' }}
                </b>,
                <b>{{ countryDetails.name.common }}</b> boasts a diverse landscape that spans across
                <b>{{ countryDetails.region }}</b>.
                <br>
                <h3>Geography and Borders</h3>

                Covering an area of <b>{{ countryDetails.area }}</b> square kilometers, <b>{{
                    countryDetails.name.common }}</b> is
                a
                vibrant nation with a population of approximately <b>{{ countryDetails.population }}</b> people.
                The
                country
                is characterized by its captivating natural beauty, attracting visitors from around the globe.
                Its
                capital city, <b>{{ countryDetails.capital[0] }}</b>, serves as the political and economic hub,
                situated at a
                latitude and longitude of <b>{{ countryDetails.capitalInfo.latlng[0] }}</b> and
                <b>{{ countryDetails.capitalInfo.latlng[1] }}</b>, respectively.
                <br>
                <h3>Language and Culture</h3>
                <b>{{ countryDetails.languages.eng }}</b> is the official language of <b>{{
                    countryDetails.name.common }}</b>,
                reflecting its colonial history. The <b>{{ countryDetails.demonyms.eng.m }}</b> people, who are
                renowned for their warmth and hospitality. The nation celebrates a rich tapestry of cultures, with
                influences from <b>{{ countryDetails.region }}</b> communities.
                <br>
                <h3>Economy and Currency</h3>
                The <b><b>{{ countryDetails.currencies[Object.keys(countryDetails.currencies)[0]].name
                        }}</b></b>
                serves as
                the
                official currency of <b>{{ countryDetails.name.common }}</b>. The nation's economy is driven by
                industries
                such as <b>{{ countryDetails.region }}</b>, with significant natural resource reserves
                contributing
                to its
                economic growth.
                <br>
                <h3>Government and International Relations</h3>
                <b>{{ countryDetails.name.common }}</b> is an independent republic, recognized as a member of
                the
                United
                Nations and other international organizations. Governed as a <b>{{ countryDetails.status }}</b>
                republic,
                <b>{{ countryDetails.name.common }}</b> has a proud tradition of democratic governance and
                participation in
                global affairs.
                <br>
                <h3>National Symbols</h3>
                The flag of <b>{{ countryDetails.name.common }}</b> is a striking representation of its
                identity.
                The coat
                of arms further embodies the nation's spirit, depicting
                symbols of its heritage and aspirations.
                <br>
                <h3>Transportation and Time Zone</h3>
                <b>{{ countryDetails.name.common }}</b> follows a <b>{{ countryDetails.car.side }}</b>-hand
                driving
                system, with
                vehicle registration signs displaying "<b>{{ countryDetails.car.signs[0] }}</b>." The nation
                operates on
                the
                <b>{{ countryDetails.timezones[0] }}</b> time zone, ensuring synchronization with international
                standards.
                Visitors can explore <b>{{ countryDetails.name.common }}</b>'s diverse landscapes and vibrant
                culture
                through
                various transportation networks.
                <br><br>
                International Recognition and Sports
                <b>{{ countryDetails.name.common }}</b> participates in international events such as <b>{{
                    countryDetails.fifa
                }}</b>,
                representing the nation's passion for sports and competition. Its rich sporting heritage
                contributes
                to its global recognition and fosters connections with other nations.
                <br>
                <h3>Exploration and Tourism</h3>
                <b>{{ countryDetails.name.common }}</b>'s enchanting landscapes, diverse wildlife, and vibrant
                culture make
                it a destination worth exploring. Whether trekking through its pristine <b>{{
                    countryDetails.region
                }}</b>
                or
                immersing in its rich history, visitors to <b>{{ countryDetails.name.common }}</b> are sure to
                be
                captivated
                by its charm and allure.
                <br><br>
                For more information on <b>{{ countryDetails.name.common }}</b>, including maps and historical
                context,
                please visit the following links:
                <br>
                <ul>
                    <li ref="googleMapsRef">
                        Google Maps: <a :href="countryDetails.maps.googleMaps" target="_blank"> Explore {{
                            countryDetails.name.common }}</a>
                    </li>

                    <li ref="googleMapsRef">
                        OpenStreetMaps: <a :href="countryDetails.maps.openStreetMaps" target="_blank"> Discover {{
                            countryDetails.name.common }}</a>
                    </li>
                </ul>
            </div>

            <div class="col-12">
                <div class="text-center"><iframe width="90%" height="600" frameborder="0" style="border:0"
                        :src="openStreetMapUrl" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div v-else class="centered-content" style="width: 60vw; height: 30vh">
            <div class="text-center" style="margin-top: 35%">
                Please select a country from the list. <br>
                <img class="globe" src="/assets/images/globe.gif" alt="" width="50px">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { fetchFlagDetails } from '~/services/FlagsService';

// Prop for receiving the selected country name
const props = defineProps<{
    countryName: string;
}>();

// Reactive variable to store country details
const countryDetails = ref<any>(null);

// Fetch country details when the countryName prop changes
watch(() => props.countryName, async (newValue) => {
    if (newValue) {
        try {
            // Fetch country details using newValue (countryName)
            // Assign fetched details to countryDetails
            const details = await fetchFlagDetails(newValue);
            countryDetails.value = details[0];
        } catch (error) {
            console.error('Error fetching country details:', error);
        }
    }
});

const openStreetMapUrl = computed(() => {
    const lat = countryDetails.value.latlng[0];
    const lng = countryDetails.value.latlng[1];
    const bbox = `${lng - 2},${lat - 2},${lng + 2},${lat + 2}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
});
</script>

<style scoped>
.scrollable-content {
    max-height: 100%;
    overflow-y: auto;
}

.p-card {
    box-shadow: none;
}

img {
    float: right;
    margin: 5px;
}

.globe {
    float: none;
}

p {
    text-align: justify;
}
</style>
