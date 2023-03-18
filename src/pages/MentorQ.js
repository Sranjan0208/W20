/* eslint-disable react/no-unescaped-entities */
import Form from "../components/Form";
import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const MentorQ = () => {
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Introduce your Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Brief us about your skills so that we can help Mentees to find you
            </p>
          </div>
          <div class="flex flex-wrap flex-col justify-center content-center ">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 flex flex-col items-center">
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
                <button type="submit">Save</button>
              </form>
              <Form
                question={"Skills you can teach"}
                o1={"Technical"}
                o2={"Entrepreneurship"}
                o3={"Soft Skills"}
                o4={"Other"}
              />
              <Form />
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorQ;
