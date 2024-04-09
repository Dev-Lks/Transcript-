import MainSpeech from "@/components/main-speech";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col w-full items-center px-16 md:px-24 lg:px-32 pt-10 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-bold">Transcript</h1>
        <p className="text-xs md:text-sm font-semibold">by: DevLks</p>
      </div>

      <MainSpeech />
    </div>
  );
}
