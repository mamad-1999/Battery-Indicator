"use client"

import { useEffect, useState } from "react"
import BatteryInfo from "./components/BatteryInfo"

type BatteryType = {
  level?: number | undefined
}

export default function Home() {
  const [battery, setBattery] = useState<BatteryType | undefined>()
  const [batteryHeight, setBatteryHeight] = useState<number>(262)

  useEffect(() => {
    getBattery()
  }, [batteryHeight, getBattery, battery?.level])

  function calculateBatteryHeight(batteryLevel: number) {
    // Ensure battery level is within the valid range (0 to 100)
    const clampedBatteryLevel = Math.max(0, Math.min(batteryLevel, 100));

    // Calculate the height based on the battery level
    const maxHeight = 262; // Maximum height of the battery div
    const height = (clampedBatteryLevel / 100) * maxHeight;

    setBatteryHeight(height);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getBattery() {
    try {
      //@ts-ignore
      const battery = await navigator.getBattery();
      setBattery(battery)
      calculateBatteryHeight(battery.level * 100)
      console.log(battery);
    } catch (err) {
      console.warn('Your browser not support this feature.');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <BatteryInfo level={battery ? battery.level! * 100 : 0} height={batteryHeight} />
    </main >
  )
}
