import React from "react"

const Footer = () => {
  return (
    <div className="">
      <footer className=" bg-[#004996] text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-3">Explore</h5>
              <ul>
                <li className="mb-2">
                  <a href="">Accessibility </a>{" "}
                </li>
                <li className="mb-2">
                  <a href="">FAQs </a>{" "}
                </li>
                <li className="mb-2">
                  <a href="">Hospitality </a>{" "}
                </li>
                <li className="mb-2">
                  <a href="">Upgrades </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3">Whats On?</h5>

              <ul>
                <li className="mb-2">
                  <a href="">Events </a>{" "}
                </li>
                <li className="mb-2">
                  <a href="">Spotlight </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3">Nottingham Ice Centre</h5>
              <ul>
                <li className="mb-2">
                  <a href="">Meetings & Events </a>{" "}
                </li>
                <li className="mb-2">
                  <a href="">National Ice Center </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3">Get Social With Us</h5>
              <ul className="flex space-x-4">
                <li>
                  <a aria-label="twitter link" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="facebook link" href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a aria-label="instagram link" href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className=" text-sm py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <span>© Nottingham Ice Centre LTD. </span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Site Map
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
