import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import Script from "next/script";

const App = () => {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://thumbs.dreamstime.com/b/indian-village-matured-couple-operating-laptop-computer-system-home-india-january-indian-village-government-school-student-168315129.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering Women to Lead:
              <br class="hidden lg:inline-block" /> Lets Make History Together
            </h1>
            <p class="mb-8 leading-relaxed">
              Lets remove all barriers to women led development and ensure an
              enabling environment & ecosystem for women to thrive, transcend
              and transform their lives as well as others.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/Login">Login</Link>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href="/SignUp">SignUp</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      <df-messenger
        chat-icon="https:&#x2F;&#x2F;raw.githubusercontent.com&#x2F;github&#x2F;explore&#x2F;3768cea58745e43fb08fc9f1e325e65dc64adf26&#x2F;topics&#x2F;chatbot&#x2F;chatbot.png"
        intent="WELCOME"
        chat-title="W20_HelpBot"
        agent-id="0348936a-710f-472f-a257-a95a3bcd7d5f"
        language-code="en"
      ></df-messenger>
    </>
  );
};

export default App;
