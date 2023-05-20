import { writable } from "svelte/store";

export const cdmBaseUrl = writable("https://localhost:5001");

export const cdmAccToken = writable("");

export const availableDevicesIdName = writable("");


export const availableDevices = writable([]);
