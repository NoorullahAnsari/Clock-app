import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="bg-sky-950 text-white text-xl flex py-4 px-5 justify-between items-center">
        <h1>Welcome</h1>
        <ul className="flex gap-8">
          <li className="header-li p-2 hover:bg-blue-300 transition duration-300 hover:scale-125 rounded active:bg-green-600">
            <Link href="/">Home</Link>
          </li>
          <li className="header-li p-2 hover:bg-blue-300 transition duration-300 hover:scale-125 rounded active:bg-green-600">
            <Link href="/">Stop Watch</Link>
          </li>
          <li className="header-li p-2 hover:bg-blue-300 transition duration-300 hover:scale-125 rounded active:bg-green-600">
            <Link href="/">Date and Time</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          /* Adjust styles for screens smaller than 768px (e.g., mobile devices) */
          .flex {
            flex-direction: column;
            align-items: center;
          }

          .text-xl {
            font-size: 1rem;
          }

          .gap-8 {
            gap: 1rem;
          }

          /* Add any other responsive styles as needed */
        }
      `}</style>
    </>
  );
}
