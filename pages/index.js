import React from "react";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moment from "moment-timezone";
import Stopwatch from "../components/StopWatch";
import DateTimePicker from "@/components/DateTimePicker";

const inter = Inter({ subsets: ["latin"] });
const currentDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");

export default function Home({ serverTime }) {
  return (
    <>
      <header className="font-Playfair text-lg fixed top-0 left-0 w-full z-10">
        <Header />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center p-6 ${inter.className}`}
      >
        <div className="text-2xl flex mt-10 items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <h1 className="text-4xl font-bold text-center">
              Current Date and Time
            </h1>
            <p className="text-center mt-4">{currentDate}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div>
            <Stopwatch serverTime={serverTime} />
          </div>
          <div>
            <DateTimePicker />
          </div>
        </div>
      </main>
      <footer className="relative inset-x-0 bottom-0 mt-10 w-full">
        <Footer />
      </footer>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          /* Adjust styles for screens smaller than 768px (e.g., mobile devices) */
          .p-6 {
            padding: 1rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .gap-6 {
            gap: 1rem;
          }

          /* Add any other responsive styles as needed */
        }
      `}</style>
    </>
  );
}
