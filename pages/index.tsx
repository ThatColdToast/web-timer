import {  Abel } from 'next/font/google'
import { useEffect, useState } from 'react'

const font = Abel({ subsets: ['latin'], weight: "400" })

export default function Home() {

  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [millis, setMillis] = useState()

  useEffect(() => {
    const target = new Date("5/7/2023 12:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      )
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60)) / (1000)
      )
      setSeconds(s)

      const mi = Math.floor(
        (difference % (1000))
      )
      setMillis(mi)
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-28 bg-gradient-to-br from-purple-950 from-25% to-black ${font.className}`}
    >
      <div className="text-4xl">
        <h1 className="">Time until something important:</h1>
        <p className="text-center">{days}:{hours}:{minutes}:{seconds}:{millis}</p>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div> */}
      </div>
    </main>
  )
}
