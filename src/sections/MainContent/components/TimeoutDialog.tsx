export const TimeoutDialog = () => {
  return (
    <dialog role="dialog" className="caret-transparent m-auto">
      <h1 className="text-neutral-950 text-2xl font-bold caret-transparent leading-[25.0001px] mb-5 font-gds_transport md:text-4xl md:leading-10 md:mb-[30px]">
        You will be signed out soon
      </h1>
      <div className="text-neutral-950 text-base caret-transparent leading-5 mb-[15px] font-gds_transport md:text-[19px] md:leading-[25px] md:mb-5">
        <p
          role="status"
          className="text-base caret-transparent leading-5 my-4 md:text-[19px] md:leading-[25px] md:my-[19px]"
        >
          To protect your information, you will be signed out in{" "}
          <strong className="text-base font-bold caret-transparent leading-5 md:text-[19px] md:leading-[25px]">
            5 minutes
          </strong>
          .
        </p>
        <p className="text-base caret-transparent leading-5 my-4 md:text-[19px] md:leading-[25px] md:my-[19px]">
          If that happens, or if you choose to sign out now, your progress will
          not be saved and you will need to start again.
        </p>
        <p className="text-base caret-transparent leading-5 my-4 md:text-[19px] md:leading-[25px] md:my-[19px]">
          To continue, you can stay signed in.
        </p>
      </div>
      <div className="items-center caret-transparent flex flex-col flex-nowrap mr-0 mb-[5px] md:items-baseline md:flex-row md:flex-wrap md:mr-[-15px] md:mb-[15px]">
        <button
          value="true"
          className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900"
        >
          Stay signed in
        </button>
        <p className="text-neutral-950 text-base caret-transparent leading-8 align-middle mb-[15px] font-gds_transport md:text-[19px] md:leading-[38px] md:mb-5">
          <a
            href="https://view-immigration-status.service.gov.uk/user-sign-out"
            className="text-sky-700 text-base caret-transparent inline-block leading-[19px] max-w-full text-center underline decoration-1 underline-offset-[2.5248px] mr-0 mt-[5px] mb-5 md:text-[19px] md:text-left md:underline-offset-[2.9982px] md:mr-[15px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
          >
            Sign out
          </a>
        </p>
      </div>
    </dialog>
  );
};
