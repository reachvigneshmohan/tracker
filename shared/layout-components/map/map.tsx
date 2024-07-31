"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Toolbox from "./map-toolbox";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlnbmVzaC10aGlzIiwiYSI6ImNseGpkbjFwYTFuYjIycHNqc21xNWt1bGoifQ.QcxIEZMExpg4wxStaJeSuw";

type Asset = {
  id: number;
  name: string;
  coordinates: [number, number];
  type: "car" | "truck";
};

const dummyAssets: Asset[] = [
  {
    id: 1,
    name: "Gateway of India",
    coordinates: [72.8347, 18.922],
    type: "car",
  },
  {
    id: 2,
    name: "Marine Drive",
    coordinates: [72.82298756873004, 18.943424185282392],
    type: "truck",
  },
  {
    id: 3,
    name: "Chhatrapati Shivaji Terminus",
    coordinates: [72.8365, 18.9402],
    type: "car",
  },
  {
    id: 4,
    name: "Bandra-Worli Sea Link",
    coordinates: [72.8171, 19.0456],
    type: "truck",
  },
  {
    id: 5,
    name: "Haji Ali Dargah",
    coordinates: [72.808, 18.9826],
    type: "car",
  },
  {
    id: 6,
    name: "Siddhivinayak Temple",
    coordinates: [72.8311, 19.0176],
    type: "truck",
  },
  { id: 7, name: "Juhu Beach", coordinates: [72.826, 19.0989], type: "car" },
  {
    id: 8,
    name: "Colaba Causeway",
    coordinates: [72.8265, 18.922],
    type: "truck",
  },
  {
    id: 9,
    name: "Wankhede Stadium",
    coordinates: [72.8288, 18.9389],
    type: "car",
  },
  {
    id: 10,
    name: "Powai Lake",
    coordinates: [72.9054, 19.1196],
    type: "truck",
  },
  {
    id: 11,
    name: "Sanjay Gandhi National Park",
    coordinates: [72.9154, 19.2164],
    type: "car",
  },
  {
    id: 12,
    name: "Elephanta Caves",
    coordinates: [72.9316, 18.9633],
    type: "truck",
  },
  { id: 13, name: "Chor Bazaar", coordinates: [72.8259, 18.967], type: "car" },
  {
    id: 14,
    name: "Mumbai Zoo (Jijamata Udyan)",
    coordinates: [72.8416, 18.9756],
    type: "truck",
  },
  {
    id: 15,
    name: "Versova Beach",
    coordinates: [72.8068, 19.1323],
    type: "car",
  },
  {
    id: 16,
    name: "Bandra Fort",
    coordinates: [72.815, 19.0503],
    type: "truck",
  },
  {
    id: 17,
    name: "Mumbai High Court",
    coordinates: [72.8296, 18.9369],
    type: "car",
  },
  {
    id: 18,
    name: "Hanging Gardens of Mumbai",
    coordinates: [72.8055, 18.9553],
    type: "truck",
  },
  { id: 19, name: "Film City", coordinates: [72.8679, 19.1698], type: "car" },
  {
    id: 20,
    name: "Phoenix Marketcity",
    coordinates: [72.8852, 19.0902],
    type: "truck",
  },
];

const dummyGeofences: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.82, 19.01],
            [72.83, 19.01],
            [72.83, 19.02],
            [72.825, 19.025],
            [72.82, 19.02],
            [72.82, 19.01],
          ],
        ],
      },
      properties: {
        name: "Geofence 1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.835, 18.92],
            [72.845, 18.92],
            [72.845, 18.93],
            [72.84, 18.935],
            [72.835, 18.93],
            [72.835, 18.92],
          ],
        ],
      },
      properties: {
        name: "Geofence 2",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.85, 19.05],
            [72.86, 19.05],
            [72.86, 19.06],
            [72.855, 19.065],
            [72.85, 19.06],
            [72.85, 19.05],
          ],
        ],
      },
      properties: {
        name: "Geofence 3",
      },
    },
  ],
};

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [72.8777, 19.076],
        zoom: 10,
      });
      console.log("Map initialized");
      map.current.on("load", () => {
        map.current?.resize();

        // Add markers for dummy assets
        dummyAssets.forEach((asset) => {
          if (map.current) {
            new mapboxgl.Marker({ element: createMarkerElement(asset.type) })
              .setLngLat(asset.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(asset.name)) // Add popups
              .addTo(map.current);
          }
        });

        // Add geofences to the map
        if (map.current) {
          map.current.addSource("geofences", {
            type: "geojson",
            data: dummyGeofences,
          });

          map.current.addLayer({
            id: "geofences-layer",
            type: "fill",
            source: "geofences",
            layout: {},
            paint: {
              "fill-color": "#888888",
              "fill-opacity": 0.4,
            },
          });

          map.current.addLayer({
            id: "geofences-outline",
            type: "line",
            source: "geofences",
            layout: {},
            paint: {
              "line-color": "#000000",
              "line-width": 2,
            },
          });
        }
      });
    }
  }, []);
  useEffect(() => {
    if (mapContainer.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (map.current) {
          console.log("Resizing map");
          map.current.resize();
        }
      });

      resizeObserver.observe(mapContainer.current);

      return () => {
        if (mapContainer.current) {
          resizeObserver.unobserve(mapContainer.current);
        }
      };
    }
  }, []);
  const createMarkerElement = (type: "car" | "truck") => {
    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = `url(/assets/images/map-icons/${type}.png)`; // Adjust the path as necessary
    el.style.width = "32px";
    el.style.height = "32px";
    el.style.backgroundSize = "100%";
    return el;
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div ref={mapContainer} style={{ height: "100%" }} />
      <Toolbox />
    </div>
  );
};

export default Map;
