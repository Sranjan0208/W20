import Form from "../components/Form";
import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

const MenteeQ = () => {
  const i = async () => {
    const nameRef = await addDoc(collection(db, "forms"), {
      firstName: firstNameValue,
      lastName: lastNameValue,
    });

    return nameRef;
  };
  const [firstNameValue, setfirstNameValue] = useState();
  const [lastNameValue, setlastNameValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    i()
      .then(() => {
        console.log("Radiohead value saved!");
      })
      .catch((error) => {
        console.error("Error writing document:", error);
      });
  };
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">
              
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Fill this form to get a Mentor
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              
            </p>
          </div>
          <div class="flex flex-wrap flex-col justify-center content-center">
            <div class="xl:w-2/4 lg:w-1/2 md:w-full px-8 py-6 flex flex-col items-center">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
                      value={firstNameValue}
                      onChange={(e) => setfirstNameValue(e.target.value)}
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                      value={lastNameValue}
                      onChange={(e) => setlastNameValue(e.target.value)}
                    />
                  </div>
                </div>
                <button class="ml-0 inline-flex text-white bg-pink-500 border-0 py-0.3 px-3 focus:outline-none hover:bg-pink-300 rounded text-lg" type="submit">Save</button>
                <h1 class="text-white">...</h1>
                <h1 class="text-white">...</h1>
              </form>

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
            <button type="submit" className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
            <Link href="/Mentee">Submit</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenteeQ;
