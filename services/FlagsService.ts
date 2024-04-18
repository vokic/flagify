// services/flagsService.ts

import axios from "axios";

export async function fetchFlags() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching flags:", error);
    throw error;
  }
}

export async function fetchFlagDetails(countryName: string) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${countryName}:`, error);
    throw error;
  }
}
