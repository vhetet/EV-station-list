import { cleanObj } from "./utils.ts";


const baseUrl = 'https://developer.nrel.gov/api/alt-fuel-stations/v1';
const format = 'json';
const zipCode = [60007,60018,60068,60106,60131,60176,60601,60602,60603,60604,60605,60606,60607,60608,60609,60610,60611,60612,60613,60614,60615,60616,60617,60618,60619,60620,60621,60622,60623,60624,60625,60626,60628,60629,60630,60631,60632,60633,60634,60636,60637,60638,60639,60640,60641,60642,60643,60644,60645,60646,60647,60649,60651,60652,60653,60654,60655,60656,60657,60659,60660,60661,60706,60707,60714,60804,60827];
const apikey = 'cAXTbjoMsUgFhfBDbuWVWVFX9ipNuowMDrRfS63W';
const fuelType = 'ELEC';

const url = `${baseUrl}?format=${format}&zip=${zipCode.join(',')}&fuel_type=${fuelType}&api_key=${apikey}`;

const writeList = async () => {
    const res = await fetch(url)
    if (res.ok) {
        const data = await res.json();
        // data.fuel_stations = data.fuel_stations.map((station: any) => cleanObj(station))
        await Deno.writeTextFile(`list_electric_charger_${(new Date()).toISOString().split('T')[0]}.json`, JSON.stringify(data, null, 2));
    }
}

writeList();