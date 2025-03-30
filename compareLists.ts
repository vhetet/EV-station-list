type FuelStation = {
    id: string;
    name: string;
    address: string;
    [key: string]: any; // Add this if there are additional unknown properties
};

type ChargerData = {
    fuel_stations: FuelStation[];
};

export const compareFiles = async (): Promise<void> => {
    const newFilePath = 'list_electric_charger_2023-05-13.json';
    const oldFilePath = 'list_electric_charger_2023-05-01.json';

    // Parse JSON files with proper types
    const newData: ChargerData = JSON.parse(await Deno.readTextFile(newFilePath));
    const oldData: ChargerData = JSON.parse(await Deno.readTextFile(oldFilePath));

    const stationsMap = new Map<string, { new?: FuelStation; old?: FuelStation }>();
    const stationsDiffIds = new Set<string>();

    // Process new data
    newData.fuel_stations.forEach((station: FuelStation) => {
        stationsDiffIds.add(station.id);
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            new: station,
        });
    });

    // Process old data
    oldData.fuel_stations.forEach((station: FuelStation) => {
        stationsDiffIds.has(station.id)
            ? stationsDiffIds.delete(station.id)
            : stationsDiffIds.add(station.id);
        stationsMap.set(station.id, {
            ...stationsMap.get(station.id),
            old: station,
        });
    });

    // Log differences
    stationsDiffIds.forEach((id) => {
        console.log(stationsMap.get(id));
    });
};

compareFiles();