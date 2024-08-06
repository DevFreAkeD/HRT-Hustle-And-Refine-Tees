import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-5">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex justify-between w-full max-w-screen-lg mb-8 space-x-24">
          {/* Contact Information */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Fashion Ave</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Email: info@freaked.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">My Account</a></li>
              <li><a href="#" className="hover:text-gray-300">Payment</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Order Queries */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">Order Queries</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Track Order</a></li>
              <li><a href="#" className="hover:text-gray-300">Exchange/Return</a></li>
              <li><a href="#" className="hover:text-gray-300">Cancellation</a></li>
              <li><a href="#" className="hover:text-gray-300">Exchange & Return Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.35C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.31h3.128V8.616c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.238h-1.918c-1.504 0-1.796.714-1.796 1.76v2.308h3.59l-.467 3.396h-3.123V24h6.125c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2.163c-5.488 0-9.837 4.348-9.837 9.837 0 5.488 4.348 9.837 9.837 9.837 5.488 0 9.837-4.348 9.837-9.837 0-5.488-4.348-9.837-9.837-9.837zm0 18.307c-4.679 0-8.469-3.79-8.469-8.469 0-4.679 3.79-8.469 8.469-8.469 4.679 0 8.469 3.79 8.469 8.469 0 4.679-3.79 8.469-8.469 8.469zm0-15.412a6.943 6.943 0 00-1.684.2 6.906 6.906 0 00-2.642 1.068 6.978 6.978 0 00-2.016 2.07 6.957 6.957 0 00-1.196 2.908 6.969 6.969 0 000 3.725 6.964 6.964 0 001.196 2.908 6.971 6.971 0 002.016 2.07 6.904 6.904 0 002.642 1.068 6.943 6.943 0 001.684.2c1.166 0 2.313-.193 3.381-.576a6.996 6.996 0 002.93-1.597 6.93 6.93 0 001.988-2.498 6.985 6.985 0 000-5.851 6.929 6.929 0 00-1.988-2.498 6.995 6.995 0 00-2.93-1.597 6.988 6.988 0 00-3.381-.576zm0 2.07a4.883 4.883 0 110 9.767 4.883 4.883 0 010-9.767zm0 8.063a3.18 3.18 0 100-6.359 3.18 3.18 0 000 6.359zm4.75-10.387a1.028 1.028 0 100-2.056 1.028 1.028 0 000 2.056z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2.163C6.24 2.163 1.657 6.746 1.657 12.506c0 4.387 2.86 8.063 6.824 9.37.498.092.683-.217.683-.485 0-.238-.009-.868-.014-1.703-2.775.603-3.363-1.334-3.363-1.334-.452-1.149-1.105-1.455-1.105-1.455-.905-.618.069-.605.069-.605 1.003.07 1.531 1.031 1.531 1.031.89 1.525 2.338 1.085 2.904.83.092-.645.348-1.085.634-1.334-2.216-.252-4.548-1.108-4.548-4.932 0-1.09.39-1.983 1.029-2.681-.103-.252-.446-1.268.098-2.642 0 0 .841-.27 2.75 1.023A9.545 9.545 0 0112 6.917c.85.004 1.705.115 2.507.337 1.907-1.293 2.748-1.023 2.748-1.023.546 1.374.202 2.39.099 2.642.641.698 1.029 1.591 1.029 2.681 0 3.833-2.337 4.676-4.562 4.923.358.31.678.924.678 1.859 0 1.34-.012 2.419-.012 2.747 0 .269.182.579.688.482 3.964-1.307 6.82-4.983 6.82-9.37C22.343 6.746 17.76 2.163 12 2.163z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Sub Urbans By FreAkeD</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;