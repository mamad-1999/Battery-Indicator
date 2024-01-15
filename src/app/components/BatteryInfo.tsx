import React from "react";

type BatteryInfoProps = {
    level: number,
    height: number,
    isCharging: boolean
}

const GREEN_CHARGE = "bg-gradient-to-r from-lime-400 from-5% via-lime-500 via-50% to-lime-600 to-90% "
const RED_CHARGE = "bg-gradient-to-r from-red-400 from-5% via-red-500 via-50% to-red-600 to-90% "
const YELLOW_CHARGE = "bg-gradient-to-r from-yellow-400 from-5% via-yellow-500 via-50% to-yellow-600 to-90% "

const BatteryInfo = ({ level, height, isCharging }: BatteryInfoProps) => {
    const chargeColor = level < 40 && level >= 20 ? YELLOW_CHARGE : level < 20 && level >= 0 ? RED_CHARGE : GREEN_CHARGE;

    return (
        <>
            <div className="flex flex-col justify-center items-center mb-6">
                <p className="mb-2 text-lg font-light">Battery Level</p>
                <h3 className="text-7xl font-bold">
                    {level ?? 0}<span className="text-5xl">%</span>
                </h3>
            </div>
            <div className="flex items-center justify-center relative">
                <div className="w-[160px] h-[288px] border-[6px] border-slate-400 rounded-3xl relative before:absolute before:w-16 before:h-4 before:bg-slate-400 before:top-[-25px] before:left-[42px] before:rounded-md"></div>
                <div style={{ height: `${height}px` }} className={`w-[133px] rounded-xl z-10 absolute bottom-3 ${chargeColor}`}></div>
            </div>
            {isCharging && (
                <div className="flex justify-center items-center gap-2 mb-14">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-7 h-7 animate-pulse stroke-lime-800"
                    >
                        <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
                        <line x1="23" y1="13" x2="23" y2="11"></line>
                        <polyline points="11 6 7 12 13 12 9 18"></polyline>
                    </svg>
                    <p className="font-normal">
                        Charging<span className="animate-pulse">...</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default BatteryInfo;
