"use client"

import { useEffect, useState } from "react"
import BatteryInfo from "./components/BatteryInfo"
import Animation from "./components/animation"
import Link from "next/link"
import './loader.css'

export default function Home() {
  const [level, setLevel] = useState<number>(0)
  const [batteryHeight, setBatteryHeight] = useState<number>(262)
  const [isCharging, setIsCharging] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [chargeColor, setChargeColor] = useState<string>("#83da12")

  useEffect(() => {
    getBattery()
  }, [batteryHeight, getBattery, level])

  function calculateBatteryHeight(batteryLevel: number) {
    const maxHeight = 262; // Maximum height of the battery div
    const height = Math.round((batteryLevel / 100) * maxHeight);

    setBatteryHeight(height);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getBattery() {
    try {
      //@ts-ignore
      navigator.getBattery().then((battery) => {
        const updateBattery = () => {
          setLoading(false)
          setLevel(battery.level);
          setIsCharging(battery.charging);
          calculateBatteryHeight(battery.level * 100);

          const levelConvert = battery.level ? Math.round(battery.level * 100) : 0;

          if (levelConvert < 40 && levelConvert >= 20) {
            setChargeColor("#f4c210")
          } else if (levelConvert < 20 && levelConvert >= 0) {
            setChargeColor("#ef544e")
          } else {
            setChargeColor("#83da12")
          }
        };

        battery.addEventListener('chargingchange', updateBattery);
        battery.addEventListener('levelchange', updateBattery);

        updateBattery();
      });
    } catch (err) {
      console.warn('Your browser does not support this feature.');
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4 px-4 overflow-hidden">
      <video
        src={"video/bg_v2.mp4"}
        autoPlay
        loop
        playsInline
        className="pointer-events-none absolute left-0 top-0 min-h-screen w-full object-cover transition-opacity delay-1000 duration-1000"
      />

      {
        loading ?
          <div className="loader z-20"></div>
          :
          <>
            <BatteryInfo
              level={level ? Math.round(level * 100) : 0}
              isCharging={isCharging}
              height={batteryHeight}
            />
            <Link
              href={"https://github.com/mamad-1999"} target="_blank"
              className="fixed bottom-8 text-base font-semibold z-10">Mohammad Yousefvand
            </Link>
            <p className="fixed bottom-2 text-sm z-10">&copy; 2023 All Rights Reserved</p>
            <Animation color={chargeColor} />
          </>
      }

    </main >
  )
}
