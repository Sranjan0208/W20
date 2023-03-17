import { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Form = () => {
  const i = async () => {
    const radioheadRef = await addDoc(collection(db, "forms"), {
      value: radioheadValue,
    });

    return radioheadRef;
  };
  const [radioheadValue, setradioheadValue] = useState();

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
    <>
      <h3 className="mb-4 font-semibold text-gray-900 ">Identification</h3>
      <form onSubmit={handleSubmit}>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center pl-3">
              <input
                id="list-radio-license"
                type="radio"
                value={0}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                onChange={(e) => setradioheadValue(e.target.value)}
              />
              <label
                htmlFor="list-radio-license"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                Driver License
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center pl-3">
              <input
                id="list-radio-id"
                type="radio"
                value={1}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onChange={(e) => setradioheadValue(e.target.value)}
              />
              <label
                htmlFor="list-radio-id"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                State ID
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center pl-3">
              <input
                id="list-radio-millitary"
                type="radio"
                value={2}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                onChange={(e) => setradioheadValue(e.target.value)}
              />
              <label
                htmlFor="list-radio-millitary"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                US Millitary
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center pl-3">
              <input
                id="list-radio-passport"
                type="radio"
                value={3}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onChange={(e) => setradioheadValue(e.target.value)}
              />
              <label
                htmlFor="list-radio-passport"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
              >
                US Passport
              </label>
            </div>
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
