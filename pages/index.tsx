import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
    return (
        <>
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mt-5 mx-5">
                <h1 className="text-xl font-medium mb-4">Weather App</h1>
                <form>
                    <h2 className="text-lg mb-4"> Search for Weather</h2>
                    <div className="flex md:space-x-4">
                        <SearchBox />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
