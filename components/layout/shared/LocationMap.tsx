"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import to avoid SSR issues with Leaflet
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)
const Tooltip = dynamic(
  () => import('react-leaflet').then((mod) => mod.Tooltip),
  { ssr: false }
)

interface Location {
  name: string
  city: string
  state: string
  country: string
  countryCode: string
  position: [number, number]
}

const locations: Location[] = [
  {
    name: 'United States',
    city: 'Dover',
    state: 'Delaware',
    country: 'USA',
    countryCode: 'us',
    position: [39.158168, -75.524368], // Dover, Delaware coordinates
  },
  {
    name: 'India',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    countryCode: 'in',
    position: [23.0225, 72.5714], // Ahmedabad, Gujarat coordinates
  },
]

function getFlagUrl(countryCode: string) {
  return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`
}

export default function LocationMap() {
  const [mounted, setMounted] = useState(false)
  const [leafletReady, setLeafletReady] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (typeof window === 'undefined') return

    let cancelled = false

    ;(async () => {
      try {
        const leafletModule = await import('leaflet')
        const L = leafletModule.default ?? (leafletModule as any)

        // Fix for default marker icons in React Leaflet
        const iconModule = await import('leaflet/dist/images/marker-icon.png')
        const iconShadowModule = await import(
          'leaflet/dist/images/marker-shadow.png'
        )

        const iconUrl =
          (iconModule as any)?.default?.src ?? (iconModule as any)?.src ?? iconModule
        const shadowUrl =
          (iconShadowModule as any)?.default?.src ??
          (iconShadowModule as any)?.src ??
          iconShadowModule

        const defaultIcon = L.icon({
          iconUrl,
          shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })

        L.Marker.prototype.options.icon = defaultIcon

        if (!cancelled) setLeafletReady(true)
      } catch {
        // If Leaflet fails to load for any reason, keep the skeleton instead of crashing.
        if (!cancelled) setLeafletReady(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [mounted])

  if (!mounted || !leafletReady) {
    return (
      <div className="w-full h-[400px] rounded-xl bg-muted/30 animate-pulse flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-border/50 relative">
      <MapContainer
        center={[30, 0]} // Center position between both locations
        zoom={2}
        scrollWheelZoom={false}
        attributionControl={false}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Tooltip
              permanent
              direction="top"
              offset={[0, -12]}
              opacity={1}
              className="!bg-background/95 !text-foreground !border !border-border/60 !rounded-xl !shadow-lg !px-0 !py-0 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 px-4 py-3 min-w-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getFlagUrl(location.countryCode)}
                  alt={`${location.country} flag`}
                  width={28}
                  height={20}
                  className="h-5 w-7 rounded-sm border border-border/40 object-cover"
                  loading="lazy"
                />
                <div className="leading-tight">
                  <div className="font-semibold text-sm">{location.country}</div>
                  <div className="text-xs text-muted-foreground">
                    {location.city}, {location.state}
                  </div>
                </div>
              </div>
            </Tooltip>
            <Popup>
              <div className="p-2 min-w-[200px]">
                <div className="flex items-start gap-3 mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getFlagUrl(location.countryCode)}
                    alt={`${location.country} flag`}
                    width={32}
                    height={24}
                    className="h-6 w-8 rounded-sm border border-border/40 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{location.country}</h3>
                    <p className="text-sm text-gray-600">
                      {location.city}, {location.state}
                    </p>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
