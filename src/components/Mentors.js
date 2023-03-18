import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

const Mentors = ({i1, i2, i3, i4}) => {
    return (
    <div class="flex flex-wrap m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt="content"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{i1}</h2>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt="content"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{i2}</h2>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt="content"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{i3}</h2>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt="content"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{i4}</h2>
        </div>
      </div>
    </div>
    )
};

export default Mentors;