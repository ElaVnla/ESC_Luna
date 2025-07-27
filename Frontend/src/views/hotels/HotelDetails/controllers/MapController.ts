import { Map } from 'leaflet'
import { isOffCenter } from '../utils/MapsUtils'

export class MapController {
  private map: Map
  private initLat: number
  private initLng: number

  constructor(map: Map, initLat: number, initLng: number) {
    this.map = map
    this.initLat = initLat
    this.initLng = initLng
  }

  handleMove(): boolean {
    const { lat, lng } = this.map.getCenter()
    return isOffCenter(lat, lng, this.initLat, this.initLng)
  }

  recenterMap(): void {
    this.map.setView([this.initLat, this.initLng], this.map.getZoom())
  }
}
