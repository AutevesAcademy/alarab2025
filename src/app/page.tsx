// import Image from "next/image";

export default function Home() {

return (
  <div>
    <ul className="list-none m-0 p-0 overflow-hidden bg-gray-800">
      <li className="float-left">
        <a
          href="#home"
          className="block text-white text-center px-4 py-4 text-decoration-none hover:bg-gray-900 active:bg-gray-900"
        >
          Home
        </a>
      </li>
      <li className="float-left">
        <a
          href="#news"
          className="block text-white text-center px-4 py-4 text-decoration-none hover:bg-gray-900"
        >
          News
        </a>
      </li>
      <li className="float-left">
        <a
          href="#contact"
          className="block text-white text-center px-4 py-4 text-decoration-none hover:bg-gray-900"
        >
          Contact
        </a>
      </li>
      <li className="float-left">
        <a
          href="#about"
          className="block text-white text-center px-4 py-4 text-decoration-none hover:bg-gray-900"
        >
          About
        </a>
      </li>
    </ul>
  </div>
)

}
