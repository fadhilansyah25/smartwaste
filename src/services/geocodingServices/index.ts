import {GeocodeTypes} from './domain';

class GeocodingService {
  async reverseGeocoding(
    position: GeocodeTypes.Position,
  ): Promise<GeocodeTypes.LocationAddress> {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position[1]}&lon=${position[0]}&addressdetails=1&limit=1`,
    );
    const data = await response.json();
    return data;
  }

  async searchLocationByQuery(
    query: string,
  ): Promise<GeocodeTypes.SearchLoc[]> {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&countrycodes=ID&addressdetails=1`,
    );
    const data = await response.json();
    return data;
  }
}

export default new GeocodingService();
