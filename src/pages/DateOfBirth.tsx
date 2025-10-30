import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BetaBanner } from "@/sections/MainContent/components/BetaBanner";

export const DateOfBirth = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (day.trim() && month.trim() && year.trim()) {
      navigate("/check-phone");
    }
  };

  const handleBack = () => {
    navigate("/sign-in/passport-number");
  };

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent flex flex-col min-h-screen tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <div className="flex-grow">
      <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
        <BetaBanner />
        <div role="region" aria-label="go-back" className="caret-transparent">
          <button
            onClick={handleBack}
            className="relative text-neutral-950 text-sm caret-transparent inline-block leading-4 underline decoration-1 underline-offset-[2.2092px] my-[15px] pl-[12.25px] font-gds_transport md:text-base md:leading-5 md:underline-offset-[2.5248px] md:pl-3.5 before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[7px] before:tracking-[normal] before:leading-[18.2858px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:rotate-[-135deg] before:visible before:w-[7px] before:border-gray-600 before:my-auto before:border-separate before:border-r before:border-t before:border-solid before:left-[3px] before:inset-y-0 before:font-gds_transport before:md:leading-5 hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100 bg-transparent border-none cursor-pointer"
          >
            Back
          </button>
        </div>
        <main className="caret-transparent my-10 md:my-[60px]">
          <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
            <h1 className="text-neutral-950 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
              Sign in
            </h1>
            <h2 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-5 font-gds_transport md:text-5xl md:leading-[50.0002px] md:mb-[30px]">
              What is your date of birth?
            </h2>
            <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
              You should enter this as shown on your passport. For example, 31 3 1980.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="caret-transparent mb-5 flex gap-5">
                <div className="caret-transparent">
                  <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Day
                  </label>
                  <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    maxLength={2}
                    className="text-neutral-950 text-base caret-transparent block leading-5 w-[60px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  />
                </div>
                <div className="caret-transparent">
                  <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Month
                  </label>
                  <input
                    type="text"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    maxLength={2}
                    className="text-neutral-950 text-base caret-transparent block leading-5 w-[60px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  />
                </div>
                <div className="caret-transparent">
                  <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    maxLength={4}
                    className="text-neutral-950 text-base caret-transparent block leading-5 w-[100px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={!day.trim() || !month.trim() || !year.trim()}
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
