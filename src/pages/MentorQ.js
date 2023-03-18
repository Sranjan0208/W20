/* eslint-disable react/no-unescaped-entities */
import Form from "../components/Form";

const MentorQ = () => {
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
          <div class="flex flex-wrap flex-col justify-center content-center">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 flex flex-col items-center">
              <Form />
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
