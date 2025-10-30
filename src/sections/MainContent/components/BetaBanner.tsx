export const BetaBanner = () => {
  return (
    <div
      role="complementary"
      className="border-b-zinc-400 caret-transparent mb-[15px] py-2.5 border-b"
    >
      <p className="text-neutral-950 text-sm caret-transparent table leading-4 font-gds_transport md:text-base md:leading-5">
        <strong className="text-sky-950 text-sm bg-slate-300 caret-transparent inline-block leading-4 mb-[-3px] max-w-40 break-words mr-2.5 -mt-0.5 pt-0.5 pb-[3px] px-2 md:text-base md:leading-5">
          {" "}
          Beta{" "}
        </strong>
        <span className="text-sm caret-transparent table-cell leading-4 align-middle md:text-base md:leading-5">
          This is a new service – your{" "}
          <a
            href="https://view-immigration-status.service.gov.uk/feedback?feedbackFormLink=https%3A%2F%2Fhomeoffice.eu.qualtrics.com%2Fjfe%2Fform%2FSV_0MqpryPS53jdu0C%3FSection%3Dview-prove-your-rights-uk%26Page%3DSharePreview"
            className="text-sky-700 text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-sky-900 hover:decoration-[3px] hover:border-sky-900"
          >
            feedback
          </a>
          will help us to improve it.
        </span>
      </p>
    </div>
  );
};
