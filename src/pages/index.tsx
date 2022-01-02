import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DiscordAuth from "./discord";
import { NextResponse, NextRequest } from 'next/server'


export default function MainPage() {

  return (
    <>
      <Head>
        <title>Discord Oauth</title>
        <link
          rel="shortcut icon"
        />
      </Head>
      <body>
        {/* <div className="w-screen h-screen flex justify-center items-center">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-1 backdrop-blur">
            <div className="flex-shrink-0 flex justify-center items-center">
              <Image
                src={
                  `https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png`
                }
                height={56}
                width={56}
                alt="Discord Logo"
              ></Image>
            </div>
            <Link href="/discord" passHref>
            <button
              className="px-6 py-2 text-sm justify-start items-start text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2"
            >
              Discord Oauth2
            </button>
            </Link>
          </div>
        </div> */}
        {/* <DiscordAuth /> */}
      </body>
    </>
  );
}
