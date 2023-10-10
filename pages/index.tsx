import SearchBox from '@/components/SearchBox'
import Head from 'next/head'

export default function Search() {
  return (
    <>
      <Head>
        <title>WeatherWise</title>
      </Head>
      
      <main className="mt-10 pt-10 mx-5 text-center align-items-center justify-center">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <h1 className="text-3xl font-medium mb-4">
          WeatherWise
        </h1>
        <form >
          <h2 className="text-lg mb-4">
            Search for local weather
          </h2>
          <div className="mb-4">
            <SearchBox />
          </div>
        </form>
      </main>
     
    </>
  )
}



// export default function Home() {
//   return (
//     <>
//       Empty Page
//     </>
//   )
// }


