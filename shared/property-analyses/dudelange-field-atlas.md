# Dudelange Field Atlas

The tracker is available at `/prospecting`. It stores property outreach records in the existing local SQLite database and renders them over an interactive, pitched MapLibre city model centered on Dudelange.

## Current data path

- `prospect_properties` in `db/lumina.sqlite3` is the source of truth.
- `/api/prospecting/properties` provides list, create, update, and delete operations.
- `/api/prospecting/geocode` resolves Dudelange addresses with OpenStreetMap Nominatim.
- `/api/prospecting/address-search` returns Dudelange-only autocomplete results from Luxembourg Geoportail, with a direct browser fallback when the local server cannot make outbound requests.
- When geocoding is offline, the record is still captured near central Dudelange and tagged `Needs map check`.
- CSV export is generated in the browser from the current canonical records.
- Selecting an address adds a temporary map pin, draws a geodesic 200-meter radius, fits the 3D camera to that area, and offers a prefilled `Add to territory` handoff.

## 3D city renderer

- Luxembourg ACT's current CC0 orthophoto WMTS supplies the official aerial ground layer.
- `public/data/dudelange-buildings.geojson` contains 7,015 real OpenStreetMap building footprints clipped to Dudelange's municipal bounds, so building geometry does not depend on a live vector-style server.
- Each footprint is extruded using its mapped height, mapped floor count, or a conservative building-type default.
- `scripts/build-dudelange-geojson.mjs` reproduces the optimized GeoJSON from an Overpass `out geom` export.
- The local building mesh remains visible if the satellite tile service is unavailable.

## Official Luxembourg LOD2 upgrade

The map component keeps the basemap style and building extrusion isolated from the prospect database. To replace the OSM building mesh with official BD-L-BATI3D geometry:

1. Export the Dudelange extent from ACT2BIM or the national BD-L-BATI3D dataset.
2. Convert the CityGML/LOD2 geometry to 3D Tiles with 3DCityDB tooling or `py3dtiles`.
3. Publish the tileset behind a static or 3DCityDB tile endpoint.
4. Replace the `dudelange-3d-buildings` MapLibre layer in `components/ProspectingMap.tsx` with a Cesium/3DCityDB viewer layer.
5. Preserve `prospect_properties.id` as the CRM key and add a `building_gml_id` column for the official building identifier.

This keeps outreach data independent from the renderer, so importing official geometry does not require migrating contacts, notes, tags, or follow-up history.
