import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { User, UserData } from "src/types";
import { developerRoute } from "src/util/redirects";
import { withSession } from "src/util/session";
import axios from "axios";

interface Props {
  user?: User;
}


export default function DiscordAuth({ user }: Props) {
  const [dust, setDust] = useState(null);

  useEffect(() => {
    const name = new URLSearchParams(window.location.href);
    if (window.location.href.indexOf('is_redirect') != -1 && !user) {
      window.location.href = window.location.href;
    }
    // if(!user && ) {
    // window.location.href = window.location.href;
    // }
  }, []);

  useEffect(() => {
    if (user !== undefined) {
      axios.post("/api/wallet/dust", { user }).then(res => setDust(res.data.sendAmount));
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>{user?.username || "Login with discord"}</title>
        <link rel="shortcut icon" href={user?.avatar || "https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png"} />
      </Head>
      <body>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 backdrop-blur" style={{ "display": "flex", "flexDirection": "column" }}>
            {!user && (
              <>
                <div className="flex-shrink-0">
                  <Image
                    src="https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png"
                    alt="Discord Logo"
                    height={56}
                    width={56}
                  />
                </div>
                <Link href="/api/user/login" passHref>
                  <button className="px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2">
                    Login with discord
                  </button>
                </Link>
              </>
            )}
            {user && (
              <>
                <div className="flex-shrink-0">
                  <Image
                    src={user.avatar}
                    alt="User Avatar"
                    height={56}
                    width={56}
                  />
                </div>
                <h1 className="px-5 py-1 text-1xl font-semibold flex justify-center items-center text-black-500  border-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2">
                  {user.username}#{user.discriminator}
                </h1>
                {dust !== null && <h1>
                  Please send your self a transaction with this exact amount: {dust}
                  <br />
                  And then type in the transaction Id.
                </h1>}
                <input />

                <Link href="/api/auth/logout" passHref>
                  <button className="px-2.5 py-2 text-sm flex justify-start text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-gray-50 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-5555dd-200 focus:ring-offset-2">
                    Logout
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </body>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(developerRoute);