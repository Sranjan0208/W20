import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";


const App = () => {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p class="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              Loginodard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <Link href="/Login">Login</Link>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href="/SignUp">SignUp</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
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
