import {  Abel } from 'next/font/google'
import { useEffect, useState } from 'react'

const font = Abel({ subsets: ['latin'], weight: "400" })

export default function Home() {

  const [days, setDays] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [millis, setMillis] = useState<number>(0)

  useEffect(() => {
    const target = new Date("5/7/2023 20:00:00")

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
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-28 bg-gradient-to-br from-purple-950 from-25% to-black ${font.className}`}
    >
      <title>Important Timer</title>
      <div className="text-4xl">
        <h1 className="text-white">Time until something important:</h1>
        <p className="text-center text-white">{days}:{hours}:{minutes}:{seconds}</p>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div> */}
      </div>
    </main>
  )
}
