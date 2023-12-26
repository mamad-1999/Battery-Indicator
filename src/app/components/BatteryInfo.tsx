import React from "react";

type BatteryInfoProps = {
    level: number,
    height: number
}

const GREEN_CHARGE = "bg-gradient-to-r from-lime-400 from-5% via-lime-500 via-50% to-lime-600 to-90% "
const RED_CHARGE = "bg-gradient-to-r from-red-400 from-5% via-red-500 via-50% to-red-600 to-90% "
const YELLOW_CHARGE = "bg-gradient-to-r from-yellow-400 from-5% via-yellow-500 via-50% to-yellow-600 to-90% "

const BatteryInfo = ({ level, height }: BatteryInfoProps) => {
    return (
        <>
            <p className="mb-2 text-lg font-light">Battery Level</p>
            <h3 className="text-7xl font-bold mb-14">
                {level ? level! : 0}%
            </h3>
            <div className="flex items-center justify-center relative mb-14">
                <div className="w-[160px] h-[288px] border-[6px] border-slate-400 rounded-3xl relative before:absolute before:w-16 before:h-4 before:bg-slate-400 before:top-[-25px] before:left-[42px] before:rounded-md">
                </div>
                <div
                    style={{ height: `${height}px` }}
                    className={
                        `w-[133px] rounded-xl z-10 absolute bottom-3 
                        ${(level < 40 && level >= 20) ?
                            YELLOW_CHARGE :
                            (level < 20 && level >= 0) ?
                                RED_CHARGE :
                                GREEN_CHARGE}`}>
                </div>
            </div >
        </>
    );
};

export default BatteryInfo;
