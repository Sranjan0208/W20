const Form = () => {
  return (
    <>
      <h3 class="mb-4 font-semibold text-gray-900 ">Identification</h3>
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
        <li class="w-full border-b border-gray-200 rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              for="list-radio-license"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              Driver License{" "}
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              for="list-radio-id"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              State ID
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="list-radio-millitary"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
            />
            <label
              for="list-radio-millitary"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              US Millitary
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="list-radio-passport"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              for="list-radio-passport"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
            >
              US Passport
            </label>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Form;
