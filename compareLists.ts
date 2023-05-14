
export const compareFiles = async () => {
    const newFilePath = 'list_electric_charger_2023-05-13.json';
    const oldFilePath = 'list_electric_charger_2023-05-01.json';
    // console.log({filePath})
    // Use fs.access() to check if the file exists
    const newData = JSON.parse(await Deno.readTextFile(newFilePath));
    const oldData = JSON.parse(await Deno.readTextFile(oldFilePath));
    // const stationsIdList = new Set();


    const stationsMap = new Map();
    newData.fuel_stations.forEach(station => {
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            new: station
        });
    })
    oldData.fuel_stations.forEach(station => {
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            old: station
        })
    })
}

compareFiles();