
export const compareFiles = async () => {
    const newFilePath = 'list_electric_charger_2023-05-13.json';
    const oldFilePath = 'list_electric_charger_2023-05-01.json';
    const newData = JSON.parse(await Deno.readTextFile(newFilePath));
    const oldData = JSON.parse(await Deno.readTextFile(oldFilePath));

    const stationsMap = new Map();
    const stationsDiffIds = new Set();
    newData.fuel_stations.forEach((station: any) => {
        stationsDiffIds.add(station.id);
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            new: station
        });
    })
    oldData.fuel_stations.forEach((station: any) => {
        stationsDiffIds.has(station.id) ? stationsDiffIds.delete(station.id) : stationsDiffIds.add(station.id)
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            old: station
        })
    })
    stationsDiffIds.forEach(id => {
        console.log(stationsMap.get(id))
    })
}

compareFiles();