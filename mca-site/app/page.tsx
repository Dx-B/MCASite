import Image from "next/image";
import FeatureBox from "./components/FeatureBox";

export default function Home() {
  return (
    <div>

      <header className="w-full h-screen flex items-center justify-center relative">
          <Image src="/path.webp" alt="background" fill className="absolute inset-0 z-0"/>
        <div className="h-full w-full backdrop-blur-sm absolute inset-0"/>
        
        <div className="flex flex-col items-center h-3/4 w-full">
          <div className="w-[80%] rounded-xl h-max flex flex-col items-center z-10">
            <Image src="/mcalogo.png" alt="logo" width={920} height={200}/>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center p-4 z-10 w-full">
            <button className="bg-green-700 w-[30%] sm:text-3xl hover:bg-green-800 bg-opacity-90 outline outline-1 text-white font-bold px-2 py-4 sm:p-4 rounded-[15px]">Get Started</button>
          </div>
        </div>
      </header>

      <section className="fixed right-0 bottom-10 w-[30%] h-[30%] z-20">
        <Image src="/back.jpg" alt="e" fill className="absolute inset-0"/>
        <div className="w-full h-[20%] bg-black text-white text-5xl flex items-center">
          <p className="pl-20 z-20 w-full bg-black py-4">WE ARE EPIC</p>
        </div>
        <Image src="/pig.png" alt="e" width={200} height={200} className="absolute left-12 top-32"/>
        <div className="w-full h-[70%] bg-blue-500 text-white text-3xl text-left flex items-center justify-center">
          <p className="w-[30%] z-20">This creeper just slid into frame as u scrolled :D</p>
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center relative">
        <Image src="/back.jpg" alt="e" fill className="absolute inset-0 z-0"/>
        <div className="w-[80%] z-10">
          <FeatureBox title="A new minecraft." imageURL="/pig.png" backgroundColor="white">
            <p className="sm:text-3xl">Imagine vanilla but everything has a use.</p>
          </FeatureBox>
          <FeatureBox title="New Mobs." imageURL="/pig.png" reversed backgroundColor="gray-100">
            <p className="sm:text-3xl">Mobs feel more alive than ever with more variety.</p>
          </FeatureBox>
          
          <FeatureBox title="New Potions." imageURL="/pig.png" backgroundColor="white">
            <p className="sm:text-3xl">Make your alchemist dreams reality.</p>
          </FeatureBox>
          <FeatureBox title="New Biomes." imageURL="/pig.png" reversed backgroundColor="gray-100">
            <p className="sm:text-3xl">See beautiful new sights on your grand adventure.</p>
          </FeatureBox>
          
          <FeatureBox title="Combat Re-imagined." imageURL="/pig.png" backgroundColor="white">
            <p className="sm:text-3xl">Fight your way to glory.</p>
          </FeatureBox>
          <FeatureBox title="Your next adventure." imageURL="/pig.png" reversed backgroundColor="gray-100">
            <p className="sm:text-3xl">All at your fingertips. Limited by your imagination.</p>
          </FeatureBox>

          <div className="flex flex-col items-center gap-2 justify-center p-4 bg-white">
            <p>Ready to take the next step?</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          </div>
        </div>
      </div>

    </div>
  );
}
