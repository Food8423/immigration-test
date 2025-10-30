import { useState, useEffect } from "react";

interface StatusDisplayProps {
  onCreateShareCode?: () => void;
}

export const StatusDisplay = ({ onCreateShareCode }: StatusDisplayProps) => {
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
    <div className="caret-transparent ml-[-15px] mr-[-15px] after:accent-auto after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-times_new_roman">
      <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-full">
        <h1 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-[30px] font-gds_transport md:text-5xl md:leading-[50.0002px] md:mb-[50px]">
          This is what the checker will see
        </h1>
      </div>
      <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[75%]">
        <div className="caret-transparent ml-[-15px] mr-[-15px] after:accent-auto after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-times_new_roman">
          <div className="caret-transparent">
            <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-full">
              <dl className="text-neutral-950 text-base caret-transparent block leading-5 table-auto w-auto mb-5 border-separate font-gds_transport md:text-[19px] md:table md:leading-[25px] md:table-fixed md:w-full md:mb-[30px] md:border-collapse">
                <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                  <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                    Name
                  </dt>
                  <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                    {userData.name}
                  </dd>
                </div>
                <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                  <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                    Date of birth
                  </dt>
                  <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                    {userData.dateOfBirth}
                  </dd>
                </div>
                <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                  <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                    Nationality
                  </dt>
                  <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                    {userData.nationality}
                  </dd>
                </div>
                <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                  <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                    Status
                  </dt>
                  <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                    {userData.status}
                  </dd>
                </div>
                {userData.sponsorLicenseNumber && (
                  <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                    <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                      Sponsor licence number
                    </dt>
                    <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                      {userData.sponsorLicenseNumber}
                    </dd>
                  </div>
                )}
                {userData.validFrom && (
                  <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                    <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                      Valid from
                    </dt>
                    <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                      {userData.validFrom}
                    </dd>
                  </div>
                )}
                {userData.validUntil && (
                  <div className="text-base border-b-zinc-400 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 caret-transparent block leading-5 mb-[15px] border-b border-separate md:text-[19px] md:table-row md:leading-[25px] md:mb-0 md:border-collapse">
                    <dt className="text-base font-bold caret-transparent block leading-5 break-words w-auto mb-[5px] pr-0 py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:w-[30%] md:pr-5 md:py-2.5 md:border-collapse">
                      Valid until
                    </dt>
                    <dd className="text-base caret-transparent block leading-5 break-words mb-[15px] py-0 border-separate md:text-[19px] md:table-cell md:leading-[25px] md:mb-0 md:py-2.5 md:border-collapse">
                      {userData.validUntil}
                    </dd>
                  </div>
                )}
              </dl>
              <div className="caret-transparent">
                <br className="caret-transparent" />
                {userData.status?.toLowerCase() === "visitor" && (
                  <p className="text-neutral-950 text-base caret-transparent leading-5 mb-[15px] font-gds_transport md:text-[19px] md:leading-[25px] md:mb-5">
                    As a visitor, you are permitted 6 months to stay.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {userData.photoUrl && (
        <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[25%]">
          <div className="relative w-full">
            <img
              alt="Photograph of the person whose status you are checking"
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
              aria-label="Rotate profile image"
              className="relative text-neutral-950 text-base bg-zinc-100 shadow-[rgb(146,145,145)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-zinc-300"
            >
              Rotate ↻
            </button>
          </div>
        </div>
      )}
      <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
        <div className="caret-transparent ml-[-15px] mr-[-15px] mt-10 md:mt-0 after:accent-auto after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-times_new_roman">
          <div className="caret-transparent">
            <button
              onClick={onCreateShareCode}
              className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] box-border caret-transparent inline-block leading-[19px] text-center align-top w-full mb-[22px] pt-2 pb-[7px] px-2.5 border-2 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mb-8 before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900 cursor-pointer"
            >
              Create a share code
            </button>
          </div>
          <div className="box-border caret-transparent float-none w-full pr-[15px] md:float-left">
            <div className="caret-transparent">
              <a
                href="https://view-immigration-status.service.gov.uk/leave"
                className="text-sky-700 text-base caret-transparent leading-5 underline decoration-1 underline-offset-[2.5248px] mb-[15px] font-gds_transport md:text-[19px] md:leading-[25px] md:underline-offset-[2.9982px] md:mb-5 hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
              >
                Leave service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
