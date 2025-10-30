export const ActionButtons = () => {
  return (
    <div className="caret-transparent ml-[-15px] mr-[-15px] mt-10 md:mt-[60px] after:accent-auto after:caret-transparent after:clear-both after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-times_new_roman">
      <div className="caret-transparent">
        <a
          href="https://view-immigration-status.service.gov.uk/share/someone-else/code"
          className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] box-border caret-transparent inline-block leading-[19px] text-center align-top w-full mb-[22px] pt-2 pb-[7px] px-2.5 border-2 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mb-8 before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900"
        >
          Create a share code
        </a>
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
  );
};
