import { useEthereum } from "@decentology/hyperverse-ethereum";
import { useEffect } from "react";
import getShortenedHash from "../../helpers/getShortenedHash";
import { toast } from "react-toastify";

const Nav = () => {
  const { address, disconnect, connect, error } = useEthereum();

  useEffect(() => {
    if (error) {
      toast.warn(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [error]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="text-xl">⌘</span>
        <span className="text-xl">Hyperverse</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="https://twitter.com/shaincodes"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Twitter
          </a>
          <a
            href="https://discord.gg/vJgkUmeHzK"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Discord
          </a>
          <a
            href="https://www.youtube.com/c/Decentology"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            YouTube
          </a>
        </div>
        <div>
          {!address ? (
            <button
              onClick={connect}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              onClick={disconnect}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0"
            >
              {getShortenedHash(address, 5)}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
