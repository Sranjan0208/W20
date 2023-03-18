import Form from "../components/Form";
import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const MenteeQ = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">
              
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Fill this Form to get matched with a Mentor
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              
            </p>
          </div>
          <div class="flex flex-wrap flex-col justify-center content-center">
            <div class="xl:w-2/4 lg:w-1/2 md:w-full px-8 py-6 flex flex-col items-center">
              <Form 
              question={"Skills you want to learn"}
              o1={"Technical"}
              o2={"Entrepreneurship"}
              o3={"Soft Skills"}
              o4={"Other"}
              />
              <Form 
              question={"Languages you are comfortable with"}
              o1={"Hindi"}
              o2={"English"}
              o3={"Kannada"}
              o4={"Tamil"}/>
              <Form 
              question={"Which part of India do you belong to?"}
              o1={"North"}
              o2={"East"}
              o3={"West"}
              o4={"South"}/>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenteeQ;
