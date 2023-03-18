import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {useSession,signIn, signOut} from 'next-auth/react'
import Header from "../components/Header";

export default function Home() {
  const {data: session}=useSession()
  return (
    <>
    
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
            Come Join us and Make our Mission a Success and Lets Make India a Better Place
            </h1>
            <p className="leading-relaxed mt-4">
            We believe in unlocking the full potential of women as entrepreneurs and leaders, driving innovation and economic growth. We strive to create a more equitable world by providing women with access to technology and the skills needed to succeed in the digital age. Through our efforts, we aim to build a better future for all.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg mb-4" onClick={()=>signIn()}>
            Sign Up With Google
            </button>
            <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
            <Link href="/MenteeQ">SignUp</Link>
            </button>
            <p className="text-xs text-gray-500 mt-3">
               "There is no limit to what we, as women, can accomplish." - Michelle Obama
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
