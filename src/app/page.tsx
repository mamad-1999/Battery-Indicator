export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h3 className="text-7xl font-bold mb-14">84%</h3>
      <div className="flex items-center justify-center">
        <div className="w-[160px] h-[288px] border-8 border-gray-700 rounded-3xl relative before:absolute before:w-14 before:h-4 before:bg-gray-700 before:top-[-27px] before:left-[42px] before:rounded-md"></div>
        <div className="w-[133px] h-[261px] bg-lime-600 rounded-xl z-10 absolute"></div>
      </div>
    </main>
  )
}
