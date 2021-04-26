import {useRouter} from 'next/router'

export default function EventPage() {
  const router = useRouter();
  return (
    <div>
      <h1>My Event</h1>
      <h3>you typed {router.query.slug} query</h3>
      <button onClick={() => {
        router.push('/')
      }}>Go Home</button>
    </div>
  )
}

// test