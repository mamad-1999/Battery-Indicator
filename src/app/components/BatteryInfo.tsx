import React from "react";

type BatteryInfoProps = {
    level: number,
    height: number,
    isCharging: boolean
}

const GREEN_CHARGE = "bg-gradient-to-r from-lime-300 from-5% via-lime-400 via-50% to-lime-500 to-90% "
const RED_CHARGE = "bg-gradient-to-r from-red-300 from-5% via-red-400 via-50% to-red-500 to-90% "
const YELLOW_CHARGE = "bg-gradient-to-r from-yellow-300 from-5% via-yellow-400 via-50% to-yellow-500 to-90% "

const BatteryInfo = ({ level, height, isCharging }: BatteryInfoProps) => {
    const chargeColor = level < 40 && level >= 20 ? YELLOW_CHARGE : level < 20 && level >= 0 ? RED_CHARGE : GREEN_CHARGE;

    return (
        <>
            <div className="flex flex-col justify-center items-center mb-6 z-10">

                <p className="mb-2 text-lg font-light">Battery Level</p>
                <h3 className="text-7xl font-bold">
                    {level ?? 0}<span className="text-5xl">%</span>
                </h3>
            </div>
            <div className="flex items-center justify-center relative">
                <div className="w-[160px] h-[288px] border-[6px] border-slate-400 border-opacity-70 rounded-3xl relative before:absolute before:w-16 before:h-4 before:bg-slate-400 before:top-[-25px] before:left-[42px] before:rounded-md before:bg-opacity-70"></div>
                <div style={{ height: `${height}px` }} className={`w-[133px] rounded-xl absolute bottom-3 ${chargeColor}`}></div>
            </div>
            {isCharging && (
                <div className="flex justify-center items-center gap-2 mb-14">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-lime-600 animate-pulse" height="1em" viewBox="0 0 576 320">
                        <path
                            d="M 80 288 L 146 288 Q 148 307 161 320 L 80 320 Q 46 319 23 297 Q 1 274 0 240 L 0 80 Q 1 46 23 23 Q 46 1 80 0 L 276 0 L 242 32 L 80 32 Q 60 33 46 46 Q 33 60 32 80 L 32 240 Q 33 260 46 274 Q 60 287 80 288 L 80 288 Z M 236 320 L 270 288 L 432 288 Q 452 287 466 274 Q 479 260 480 240 L 480 80 Q 479 60 466 46 Q 452 33 432 32 L 366 32 Q 364 13 351 0 L 432 0 Q 466 1 489 23 Q 511 46 512 80 L 512 240 Q 511 274 489 297 Q 466 319 432 320 L 236 320 L 236 320 Z M 560 96 Q 575 97 576 112 L 576 208 Q 575 223 560 224 Q 545 223 544 208 L 544 112 Q 545 97 560 96 L 560 96 Z M 192 168 L 240 168 Q 249 168 254 175 Q 258 183 255 191 L 235 233 L 320 152 L 272 152 Q 263 152 259 145 Q 254 137 258 129 L 277 87 L 192 168 L 192 168 Z M 314 16 Q 325 17 331 25 L 331 25 Q 336 34 332 45 L 297 120 L 346 120 Q 366 122 368 142 Q 368 151 361 157 L 212 299 Q 206 304 198 304 Q 187 303 181 295 Q 176 286 180 276 L 215 200 L 166 200 Q 146 198 144 178 Q 144 169 151 163 L 300 22 Q 306 16 314 16 L 314 16 Z"
                        />
                    </svg>
                    <p className="font-normal animate-pulse z-10">
                        Charging<span className="animate-pulse">...</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default BatteryInfo;
