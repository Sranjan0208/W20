import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

const Mentees = ({ s1, s2, s3 }) => {
  return (
    <div class="flex flex-wrap m-4">
      <div class="xl:w-2/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg"
            alt="content"
          />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          <Link href="https://www.linkedin.com/in/sagniksantra/">{s1}</Link>
          </h2>
        </div>
      </div>
      <div class="xl:w-2/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg"
            alt="content"
          />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          <Link href="https://www.linkedin.com/in/sagniksantra/">{s2}</Link>
          </h2>
        </div>
      </div>
      <div class="xl:w-2/5 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg"
            alt="content"
          />
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          <Link href="https://www.linkedin.com/in/sagniksantra/">{s3}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Mentees;
