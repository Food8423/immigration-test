
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BetaBanner } from "@/sections/MainContent/components/BetaBanner";

export const ImmigrationStatusFull = () => {


  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>({});
  const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:3001';
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE}/api/user-data`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch(() => {});
  }, []);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent flex flex-col min-h-screen tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <div className="flex-grow">
      <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
        <BetaBanner />
        <div role="region" aria-label="go-back" className="caret-transparent">
          <button
            onClick={() => navigate("/check-phone")}
            className="relative text-neutral-950 text-sm caret-transparent inline-block leading-4 underline decoration-1 underline-offset-[2.2092px] my-[15px] pl-[12.25px] font-gds_transport md:text-base md:leading-5 md:underline-offset-[2.5248px] md:pl-3.5 before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[7px] before:tracking-[normal] before:leading-[18.2858px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:rotate-[-135deg] before:visible before:w-[7px] before:border-gray-600 before:my-auto before:border-separate before:border-r before:border-t before:border-solid before:left-[3px] before:inset-y-0 before:font-gds_transport before:md:leading-5 hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100 bg-transparent border-none cursor-pointer"
          >
            Back
          </button>
        </div>
        <main className="caret-transparent my-10 md:my-[60px]">
          <div className="caret-transparent ml-[-15px] mr-[-15px] after:accent-auto after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-times_new_roman">
            <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-full">
              <h1 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-[30px] font-gds_transport md:text-5xl md:leading-[50.0002px]">
                Your immigration status (eVisa)
              </h1>
            </div>
            <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[75%]">
              
              <dl className="text-neutral-950 text-base caret-transparent block leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px] md:mb-[30px]">
                <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                  <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Name
                  </dt>
                  <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    {userData.name}
                  </dd>
                </div>
                <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                  <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Date of birth
                  </dt>
                  <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    {userData.dateOfBirth}
                  </dd>
                </div>
                <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                  <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Nationality
                  </dt>
                  <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    {userData.nationality}
                  </dd>
                </div>
                <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                  <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Status
                  </dt>
                  <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                    {userData.status}
                  </dd>
                </div>
                {userData.sponsorLicenseNumber && (
                  <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                    <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                      Sponsor licence number
                    </dt>
                    <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                      {userData.sponsorLicenseNumber}
                    </dd>
                  </div>
                )}
                {userData.validFrom && (
                  <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                    <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                      Valid from
                    </dt>
                    <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                      {userData.validFrom}
                    </dd>
                  </div>
                )}
                {userData.validUntil && (
                  <div className="caret-transparent mb-[15px] pb-[15px] border-b border-zinc-400">
                    <dt className="text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                      Valid until
                    </dt>
                    <dd className="text-base caret-transparent leading-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                      {userData.validUntil}
                    </dd>
                  </div>
                )}
              </dl>

              {userData.status?.toLowerCase() === "visitor" && (
                <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                  As a visitor, you are permitted 6 months to stay.
                </p>
              )}

              <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10">
                Prove your status
              </h2>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                If you need to prove your immigration status to someone, you can do this online with a share code.
              </p>

              <button
                onClick={() => navigate("/share-code")}
                className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900"
              >
                Get a share code
              </button>
            </div>

            {userData.photoUrl && (
              <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[25%]">
                <div className="relative w-full">
                  <img
                    alt="Photograph"
                    src={userData.photoUrl}
                    className="caret-transparent w-full block"
                    style={{ 
                      transform: `rotate(${rotation}deg)`, 
                      transition: 'transform 0.3s ease',
                      objectFit: 'cover',
                      aspectRatio: '3/4'
                    }}
                  />
                  <button 
                    onClick={handleRotate}
                    className="relative text-neutral-950 text-base bg-zinc-100 shadow-[rgb(146,145,145)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-zinc-300"
                  >
                    Rotate ↻
                  </button>
                </div>
              </div>
            )}

            <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
              <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10 md:mt-0">
                What you can do in the UK
              </h2>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                You can:
              </p>

              <ul className="text-neutral-950 text-base caret-transparent leading-5 mb-5 pl-5 list-disc font-gds_transport md:text-[19px] md:leading-[25px]">
                <li className="mb-2.5">live in the UK</li>
                <li className="mb-2.5">work - up to 20 hours a week during term time and full-time during the holidays. You must share proof of your term dates with your employer</li>
                <li className="mb-2.5">take part in business activities, such as attending meetings and conferences</li>
                <li className="mb-2.5">take part in sports and creative events</li>
              </ul>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                You cannot:
              </p>

              <ul className="text-neutral-950 text-base caret-transparent leading-5 mb-5 pl-5 list-disc font-gds_transport md:text-[19px] md:leading-[25px]">
            
                <li className="mb-2.5">claim public funds</li>
                <li className="mb-2.5">marry or register a civil partnership</li>
              </ul>

              <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10">
                Legal basis of status
              </h2>

              {userData.status?.toLowerCase() === "visitor" && (
                <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                  You have been granted visitor status under the Immigration Rules.
                </p>
              )}

              {userData.status?.toLowerCase() === "student" && (
                <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                  You have been granted student status under the Immigration Rules.
                </p>
              )}

              <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10">
                National insurance number
              </h2>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                You will need a{" "}
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  National Insurance number
                </a>{" "}
                if you plan to work in the UK.
              </p>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                If you do not have a National Insurance number, you can{" "}
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  apply for one
                </a>
                . Find out more about applying for a National Insurance number on{" "}
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  GOV.UK
                </a>
                . You will need to apply for a National Insurance number on the application helpline.
              </p>


              <h3 className="text-neutral-950 text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                If there is an error on your eVisa
              </h3>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                If any of the information is wrong, you can{" "}
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  report an error with your eVisa
                </a>
                .
              </p>

              <h2 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 mt-[30px] font-gds_transport md:text-4xl md:leading-10">
                Before you travel
              </h2>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                You may be delayed or denied boarding by carriers if you have not added the passport or identity document you are travelling with to your account.
              </p>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                Use the{" "}
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  update your UKVI account details service
                </a>{" "}
                to add a passport or identity document to your account.
              </p>

              <h3 className="text-neutral-950 text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                Nationality information
              </h3>

              <p className="text-neutral-950 text-base caret-transparent leading-5 mb-5 font-gds_transport md:text-[19px] md:leading-[25px]">
                When you add a passport or identity document to your account, the nationality on the newly added document will be displayed on your eVisa.
              </p>

              <p className="text-base caret-transparent leading-5 my-5 md:text-[19px] md:leading-[25px]">
                <a
                  href="#"
                  className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
                >
                  Leave service
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
      </div>
      <Footer />
    </div>
  );
};
