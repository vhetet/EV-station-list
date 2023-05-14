export type simplifiedStation = {
    access_code: string,
    access_days_time: string,
    date_last_confirmed: string,
    expected_date: string,
    fuel_type_code: string,
    id: number,
    open_date: string,
    station_name: string,
    updated_at: string,
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    street_address: string,
    zip: string,
    country: string,
    ev_connector_types: string[],
    ev_level1_evse_num: number | null,
    ev_level2_evse_num: number | null,
    ev_network: string,
}

export const cleanObj = (station: any): simplifiedStation => {
    return {
        access_code: station.access_code,
        access_days_time: station.access_days_time,
        date_last_confirmed: station.date_last_confirmed,
        expected_date: station.expected_date,
        fuel_type_code: station.fuel_type_code,
        id: station.id,
        open_date: station.open_date,
        station_name: station.station_name,
        updated_at: station.updated_at,
        latitude: station.latitude,
        longitude: station.longitude,
        city: station.city,
        state: station.state,
        street_address: station.street_address,
        zip: station.zip,
        country: station.country,
        ev_connector_types: station.ev_connector_types,
        ev_level1_evse_num: station.ev_level1_evse_num,
        ev_level2_evse_num: station.ev_level2_evse_num,
        ev_network: station.ev_network,
    }
}