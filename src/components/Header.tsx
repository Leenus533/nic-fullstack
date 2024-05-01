import React from "react"

const Header = () => {
  return (
    <header className="text-black py-4 ">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/National_Ice_Centre_Master_Logo.png"
            alt="National Ice Centre Logo"
            className="h-14 w-auto mr-2"
          />
        </div>
        <div className="flex-grow">
          <h1 className=" font-sans text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Whats On?
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header
