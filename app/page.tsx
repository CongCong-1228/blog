import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center text-center mt-16">
      <div className="flex flex-col items-center">
        <div className="flex items-center w-48 h-48 rounded-[50%] border-2 border-gray-300 dark:border-gray-700">
          <Image
            src="/vercel.svg"
            alt="avatar"
            priority
            width={192}
            height={192}
          />
        </div>
        <h1 className="text-2xl font-bold">Mitani</h1>
        <p className="text-gray-500 dark:text-gray-300">A software engineer</p>
      </div>
    </div>
  );
}
