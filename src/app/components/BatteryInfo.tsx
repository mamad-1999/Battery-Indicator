import React from "react";

type BatteryInfoProps = {
    level: any,
    height: number
}

const BatteryInfo = ({ level, height }: BatteryInfoProps) => {
    return (
        <>
            <h3 className="text-7xl font-bold mb-14">{level ? level! : 0}%</h3><div className="flex items-center justify-center relative">
                <div className="w-[160px] h-[288px] border-8 border-gray-700 rounded-3xl relative before:absolute before:w-14 before:h-4 before:bg-gray-700 before:top-[-27px] before:left-[42px] before:rounded-md"></div>
                <div style={{ height: `${height}px` }} className={`w-[133px] rounded-xl z-10 absolute bottom-3 ${(level < 40 && level >= 20) ? "bg-yellow-500" : (level < 20 && level >= 0) ? "bg-red-500" : "bg-lime-600"}`}></div>
            </div >
        </>
    );
};

export default BatteryInfo;
