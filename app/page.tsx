import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center text-center">
      <div className="flex flex-col items-center">
        <div className="relative h-64 w-64 rounded-full border-2 border-gray-300 dark:border-gray-700 mb-4 object-cover">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            className="object-cover rounded-full"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h1 className="text-2xl font-bold m-4">Mitani</h1>
        <p className="text-gray-500 dark:text-gray-300">A frontend engineer</p>
      </div>
    </div>
  );
}
