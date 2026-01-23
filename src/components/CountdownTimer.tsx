import {useState, useEffect} from 'react'

const target = new Date('2026-02-09T00:00:00').getTime()

const CountdownTimer = () => {
  const [time, setTime] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        clearInterval(interval)
        setTime({days: 0, hours: 0, minutes: 0, seconds: 0})
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
      const minutes = Math.floor(diff / (1000 * 60)) % 60
      const seconds = Math.floor(diff / 1000) % 60

      setTime({days, hours, minutes, seconds})
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="font-tech text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest glow-amber animate-flicker">
      {formatNumber(time.days)}:{formatNumber(time.hours)}:
      {formatNumber(time.minutes)}:{formatNumber(time.seconds)}
    </div>
  )
}

export default CountdownTimer
