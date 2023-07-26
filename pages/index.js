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
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="text-2xl flex items-center justify-center ">
          <div class="bg-white p-8 rounded shadow">
            <h1 class="text-4xl font-bold text-center">
              Current Date and Time
            </h1>
            <p class="text-center mt-4">{currentDate}</p>
          </div>
        </div>
        <div className="flex gap-20 justify-between">
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
    </>
  );
}
export async function getServerSideProps() {
  const serverTime = new Date().toISOString();
  return { props: { serverTime } };
}
