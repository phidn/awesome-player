function Header() {
  return (
    <header className="w-full backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            Local
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 py-2">
              Player
            </span>
          </a>
          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto transform hover:scale-125 duration-300 ease-in-out mt-4"
              href="https://github.com/phidn/my-local-player"
            >
              <svg
                className="fill-current h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
