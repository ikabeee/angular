import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { DecimalPipe, JsonPipe } from '@angular/common';
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc( 100vh - 64px);
    }

    #controls {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 25px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }

  `,
})
export class FullscreenMapPageComponent implements AfterViewInit {
  //Local Reference to the map div element
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);

  zoom = signal(14);
  coordinates = signal({
    lng: -74.5,
    lat: 40,
  });
  // Se define el zoom como un efecto que se ejecuta cada vez que cambia el valor de zoom
  zoomEffect = effect(() => {
    if (!this.map()) return;

    this.map()?.setZoom(this.zoom());
    // this.map()?.zoomTo(this.zoom());
  });
  // Se construye el mapa al iniciar la vista
  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;
    const { lat, lng } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    this.mapListeners(map);
  }
  // Escucha los eventos del mapa y actualiza las señales correspondientes
  mapListeners(map: mapboxgl.Map) {
    // Se escucha el evento de zoom del mapa
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });
    // Se escucha el evento de movimiento del mapa
    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center);
    });
    // Se escucha el evento de carga del mapa
    map.on('load', () => {
      console.log('Map loaded');
    });
    //Controles de mapbox
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());

    this.map.set(map);
  }
}