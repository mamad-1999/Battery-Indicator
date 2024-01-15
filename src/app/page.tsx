"use client"

import { useEffect, useState } from "react"
import BatteryInfo from "./components/BatteryInfo"
import Link from "next/link"

export default function Home() {
  const [level, setLevel] = useState<number>(0)
  const [batteryHeight, setBatteryHeight] = useState<number>(262)
  const [isCharging, setIsCharging] = useState<boolean>(false)

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
          setLevel(battery.level);
          setIsCharging(battery.charging);
          calculateBatteryHeight(battery.level * 100);
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
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      {
        level ?
          <BatteryInfo
            level={level ? Math.round(level * 100) : 0}
            isCharging={isCharging}
            height={batteryHeight}
          />
          // eslint-disable-next-line react/no-unescaped-entities
          : <p className="text-center">I'm Sorry, Your Browser does not support Battery Manager</p>
      }
      <Link
        href={"https://github.com/mamad-1999"} target="_blank"
        className="fixed bottom-8 text-base font-semibold">Mohammad Yousefvand
      </Link>
      <p className="fixed bottom-2 text-sm">&copy; 2023 All Rights Reserved</p>
    </main >
  )
}
