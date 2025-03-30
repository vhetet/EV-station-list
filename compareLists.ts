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
    // Read all files in the current directory
    const files: string[] = [];
    for await (const file of Deno.readDir(".")) {
        if (file.isFile && file.name.startsWith("list_electric_charger_") && file.name.endsWith(".json")) {
            files.push(file.name);
        }
    }

    // Sort files by date in descending order (latest first)
    files.sort((a, b) => b.localeCompare(a));

    if (files.length < 2) {
        console.error("Not enough files to compare. At least two JSON files are required.");
        return;
    }

    // Select the two latest files
    const [newFilePath, oldFilePath] = files;

    console.log(`Comparing files: ${newFilePath} and ${oldFilePath}`);

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

    console.log(`Done comparing files: ${newFilePath} and ${oldFilePath}`);
};

compareFiles();