import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactMapGl, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'

export default function EventMap({evt}) {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 41.34440380234907, 
    longitude: 69.31312093704767,
    width: '100%',
    height: '500px',
    zoom: 12
  })

  useEffect(() => {
    Geocode.fromAddress(evt.address).then(
      res => {
        const {lat, lng} = res.results[0].geometry.location
        console.log(lat, lng)
        setLat(lat)
        setLng(lng)
        setViewport({...viewport, latitude: lat, longitude: lng})
        setLoading(false)
      },
      error => {
        console.error(error)
      }
    )
  }, [])

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  if (loading) return false

  console.log(lat, lng)

  return (
  <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
    onViewportChange={vp => setViewport(vp)}>
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src='/images/pin.svg' width={30} height={30} />
      </Marker>
    </ReactMapGl>
  )
}
