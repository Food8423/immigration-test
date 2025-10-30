import { useNavigate } from "react-router-dom";
import { GovUKHeader } from "@/components/GovUKHeader";
import { GovUKFooter } from "@/components/GovUKFooter";

export const EVisaInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent min-h-screen tracking-[normal] leading-[normal] text-start normal-case visible font-sans">
      <GovUKHeader />
      
      <div className="w-full border-b border-zinc-300">
        <div className="max-w-[960px] mx-auto px-[15px] py-2">
          <nav className="text-sm leading-[1.25]">
            <a href="#" className="text-neutral-950 hover:underline">Home</a>
            <span className="mx-1">›</span>
            <a href="#" className="text-neutral-950 hover:underline">Visas and immigration</a>
            <span className="mx-1">›</span>
            <a href="#" className="text-neutral-950 hover:underline">What you need to do</a>
          </nav>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-[15px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-[32px] md:text-5xl font-bold leading-[1.09375] mb-6">
              eVisas: access and use your online immigration status
            </h1>

            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Contents</h2>
              <ol className="list-none space-y-2 text-base">
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">What an eVisa is</a>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">Set up a UKVI account to access your eVisa</a>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">Get an eVisa if you have settlement in the UK</a>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <span>View your eVisa and get a share code to prove your immigration status</span>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">Travel with your eVisa</a>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">Update your details in your UKVI account</a>
                </li>
                <li className="flex">
                  <span className="mr-2">—</span>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900">Report an error with your eVisa</a>
                </li>
              </ol>
            </div>

            <hr className="border-t border-zinc-300 my-8" />

            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-[1.04167]">
              View your eVisa and get a share code to prove your immigration status
            </h2>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              Your eVisa shows your identity and immigration status. This includes what rights you have in the UK, for example to work, rent or claim benefits.
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You can get a share code to prove your immigration status to people such as employers or landlords, or when you travel.
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You'll need to give them your date of birth. You will not need to show them your eVisa.
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              The person who uses your share code will see some of your personal details. When you get your share code you'll be told what they'll see.
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              A share code lasts for 90 days. You can:
            </p>

            <ul className="list-disc pl-5 mb-5 space-y-2 text-base md:text-[19px] leading-[1.31579]">
              <li>use the share code as many times as you need before it expires</li>
              <li>get a new share code whenever you need one</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">
              View your eVisa and get a share code
            </h3>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You'll need the details you use to sign in to your UKVI account. This could be your:
            </p>

            <ul className="list-disc pl-5 mb-5 space-y-2 text-base md:text-[19px] leading-[1.31579]">
              <li>passport</li>
              <li>national identity card</li>
              <li>biometric residence card (BRC) - this can be valid or expired</li>
              <li>expired biometric residence permit (BRP)</li>
              <li>UKVI customer number</li>
            </ul>

            <p className="mb-8 text-base md:text-[19px] leading-[1.31579]">
              You'll also need access to the mobile phone number or email address you use to sign in to your UKVI account.
            </p>

            <button
              onClick={() => navigate("/")}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 inline-flex items-center shadow-[0_2px_0_#002d18] active:top-[2px] active:shadow-none mb-8"
            >
              <span>View your eVisa and get a share code</span>
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-12 leading-[1.04167]">
              Report an error with your eVisa
            </h2>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You should{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                report an error with your eVisa
              </a>{" "}
              if:
            </p>

            <ul className="list-disc pl-5 mb-5 space-y-2 text-base md:text-[19px] leading-[1.31579]">
              <li>your eVisa is wrong - for example it's showing the wrong date of birth or immigration status</li>
              <li>you can view your eVisa but you cannot use it to get a share code</li>
            </ul>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-12 leading-[1.04167]">
              Update your details before you get a share code
            </h2>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You should{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                update your UKVI account
              </a>{" "}
              before you get a share code if:
            </p>

            <ul className="list-disc pl-5 mb-5 space-y-2 text-base md:text-[19px] leading-[1.31579]">
              <li>you've changed your name or nationality</li>
              <li>you need to change your photo because you cannot be recognised from the current one</li>
            </ul>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-12 leading-[1.04167]">
              If you cannot view your eVisa
            </h2>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              Check that you have finished{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                setting up your UKVI account to access your eVisa
              </a>
              .
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You can use different services to{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                prove your right to work
              </a>{" "}
              or{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                prove your right to rent
              </a>{" "}
              if you cannot access an eVisa.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 mt-12 leading-[1.04167]">
              Get help
            </h2>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              You can get help to{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                recover your UKVI account
              </a>{" "}
              if you're having problems signing in to view your eVisa.
            </p>

            <p className="mb-5 text-base md:text-[19px] leading-[1.31579]">
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                Contact UKVI online
              </a>{" "}
              if you have other questions about your eVisa or UKVI account.
            </p>

            <p className="mb-8 text-base md:text-[19px] leading-[1.31579]">
              You can also{" "}
              <a href="#" className="text-sky-700 underline hover:text-sky-900">
                watch eVisa support videos
              </a>
              .
            </p>

            <nav className="border-t border-zinc-300 pt-6 mt-12">
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-4">
                  <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-sky-700 font-bold mb-1">Previous</p>
                    <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                      Get an eVisa if you have settlement in the UK
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-sky-700 font-bold mb-1">Next</p>
                    <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                      Travel with your eVisa
                    </a>
                  </div>
                </div>
              </div>

              <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                View a printable version of the whole guide
              </a>
            </nav>

            <hr className="border-t border-zinc-300 my-8" />

            <div>
              <h3 className="text-lg font-bold mb-4">Explore the topic</h3>
              <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                What you need to do
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="border-t-2 border-sky-700 pt-4">
              <h2 className="text-lg font-bold mb-4">Related content</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                    Check if you need a UK visa
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-700 underline hover:text-sky-900 text-base">
                    How to apply for a visa to come to the UK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 border-t border-zinc-300 py-8 mt-12">
        <div className="max-w-[960px] mx-auto px-[15px]">
          <div className="text-center mb-8">
            <p className="text-lg mb-4">Is this page useful?</p>
            <div className="flex justify-center gap-4">
              <button className="border-2 border-neutral-950 bg-white px-6 py-2 hover:bg-zinc-100">
                Yes
              </button>
              <button className="border-2 border-neutral-950 bg-white px-6 py-2 hover:bg-zinc-100">
                No
              </button>
            </div>
            <button className="mt-4 text-sky-700 underline hover:text-sky-900">
              Report a problem with this page
            </button>
          </div>
        </div>
      </div>

      <GovUKFooter />
    </div>
  );
};
