import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BetaBanner } from "@/sections/MainContent/components/BetaBanner";

export const SignIn = () => {
  const [selectedDocument, setSelectedDocument] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDocument === "passport") {
      navigate("/sign-in/passport-number");
    } else if (selectedDocument === "national-id") {
      navigate("/sign-in/passport-number");
    } else if (selectedDocument === "biometric") {
      navigate("/sign-in/passport-number");
    } else if (selectedDocument === "ukvi-number") {
      navigate("/sign-in/passport-number");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent flex flex-col min-h-screen tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <div className="flex-grow">
      <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
        <BetaBanner />
        <main className="caret-transparent my-10 md:my-[60px]">
          <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
            <h1 className="text-neutral-950 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
              Sign in
            </h1>
            <h2 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-5 font-gds_transport md:text-5xl md:leading-[50.0002px] md:mb-[30px]">
              What identity document do you use to sign in to your UKVI account?
            </h2>
            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px] md:mb-[30px]">
              This is usually the document you used when you created your account. If you have added a new document to your account, use the most recent document to sign in.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="caret-transparent mb-[30px]">
                <div className="caret-transparent mb-2.5">
                  <label className="text-neutral-950 text-base caret-transparent flex leading-5 cursor-pointer mb-2.5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    <input
                      type="radio"
                      name="document"
                      value="passport"
                      checked={selectedDocument === "passport"}
                      onChange={(e) => setSelectedDocument(e.target.value)}
                      className="caret-transparent w-10 h-10 mr-[15px] cursor-pointer"
                    />
                    <span className="caret-transparent mt-2">Passport</span>
                  </label>
                </div>
                <div className="caret-transparent mb-2.5">
                  <label className="text-neutral-950 text-base caret-transparent flex leading-5 cursor-pointer mb-2.5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    <input
                      type="radio"
                      name="document"
                      value="national-id"
                      checked={selectedDocument === "national-id"}
                      onChange={(e) => setSelectedDocument(e.target.value)}
                      className="caret-transparent w-10 h-10 mr-[15px] cursor-pointer"
                    />
                    <span className="caret-transparent mt-2">National identity card</span>
                  </label>
                </div>
                <div className="caret-transparent mb-2.5">
                  <label className="text-neutral-950 text-base caret-transparent flex leading-5 cursor-pointer mb-2.5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    <input
                      type="radio"
                      name="document"
                      value="biometric"
                      checked={selectedDocument === "biometric"}
                      onChange={(e) => setSelectedDocument(e.target.value)}
                      className="caret-transparent w-10 h-10 mr-[15px] cursor-pointer"
                    />
                    <span className="caret-transparent mt-2">Biometric residence card or permit</span>
                  </label>
                </div>
                <p className="text-neutral-950 text-base font-bold caret-transparent leading-5 my-2.5 font-gds_transport md:text-[19px] md:leading-[25px]">
                  or
                </p>
                <div className="caret-transparent mb-2.5">
                  <label className="text-neutral-950 text-base caret-transparent flex leading-5 cursor-pointer mb-2.5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    <input
                      type="radio"
                      name="document"
                      value="ukvi-number"
                      checked={selectedDocument === "ukvi-number"}
                      onChange={(e) => setSelectedDocument(e.target.value)}
                      className="caret-transparent w-10 h-10 mr-[15px] cursor-pointer"
                    />
                    <span className="caret-transparent mt-2">I use a UKVI customer number</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={!selectedDocument}
                className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </form>
          </div>
        </main>
      </div>
      </div>
      <Footer />
    </div>
  );
};
