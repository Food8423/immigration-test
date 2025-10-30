import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
        <main className="caret-transparent my-10 md:my-[60px]">
          <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
            <h1 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-5 font-gds_transport md:text-5xl md:leading-[50.0002px] md:mb-[30px]">
              View your eVisa and get a share code to prove your immigration status
            </h1>
            
            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              Use this service to:
            </p>

            <ul className="text-neutral-950 text-base caret-transparent leading-5 mb-5 pl-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              <li className="mb-2.5">view your eVisa</li>
              <li className="mb-2.5">get a share code to prove your immigration status to someone else, such as an employer or private landlord</li>
            </ul>

            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              You will need to sign in to or create a UK Visas and Immigration (UKVI) account.
            </p>

            <div className="text-neutral-950 text-base bg-zinc-100 caret-transparent leading-5 mb-5 p-5 border-l-[10px] border-solid border-zinc-400 font-gds_transport md:text-[19px] md:leading-[25px]">
              <p className="text-base caret-transparent leading-5 my-0 md:text-[19px] md:leading-[25px]">
                <strong className="font-bold">If you are an employer or landlord</strong>
              </p>
              <p className="text-base caret-transparent leading-5 my-2.5 md:text-[19px] md:leading-[25px]">
                Use a different service to{" "}
                <a
                  href="https://www.gov.uk/check-immigration-status"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  check someone immigration status
                </a>
                .
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900"
            >
              Start now
            </button>

            <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10">
              Before you start
            </h2>

            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              To create a UKVI account, you will need an identity document. This can be a:
            </p>

            <ul className="text-neutral-950 text-base caret-transparent leading-5 mb-5 pl-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              <li className="mb-2.5">passport</li>
              <li className="mb-2.5">national identity card</li>
              <li className="mb-2.5">biometric residence permit (BRP)</li>
              <li className="mb-2.5">biometric residence card (BRC)</li>
            </ul>

            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              You will also need access to your email address and UK mobile phone number.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
