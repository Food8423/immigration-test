export const FooterLinks = () => {
  return (
    <div className="text-sm caret-transparent basis-80 grow leading-4 mb-[25px] mx-[15px] md:text-base md:basis-[0%] md:leading-5">
      <ul className="text-sm caret-transparent leading-4 mb-[15px] pl-0 md:text-base md:leading-5">
        <li className="text-sm caret-transparent inline-block leading-4 text-left mr-[15px] mb-[5px] md:text-base md:leading-5">
          <a
            href="https://view-immigration-status.service.gov.uk/privacy"
            className="text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
          >
            Privacy
          </a>
        </li>
        <li className="text-sm caret-transparent inline-block leading-4 text-left mr-[15px] mb-[5px] md:text-base md:leading-5">
          <a
            href="https://view-immigration-status.service.gov.uk/cookies"
            className="text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
          >
            Cookies
          </a>
        </li>
        <li className="text-sm caret-transparent inline-block leading-4 text-left mr-[15px] mb-[5px] md:text-base md:leading-5">
          <a
            href="https://view-immigration-status.service.gov.uk/accessibility-statement"
            className="text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
          >
            Accessibility statement
          </a>
        </li>
        <li className="text-sm caret-transparent inline-block leading-4 text-left mr-[15px] mb-[5px] md:text-base md:leading-5">
          <a
            href="https://www.gov.uk/help/terms-conditions"
            className="text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
          >
            Account terms and conditions
          </a>
        </li>
      </ul>
      <img
        src="https://c.animaapp.com/mgaqbypd707oqM/assets/icon-2.svg"
        alt="OGL"
        className="text-sm caret-transparent inline-block h-[17px] leading-4 align-top w-[41px] mr-2.5 mb-[15px] md:text-base md:leading-5 md:mb-0"
      />
      <span className="text-sm caret-transparent inline-block leading-4 md:text-base md:leading-5">
        All content is available under the{" "}
        <a
          href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
          className="text-sm caret-transparent leading-4 underline decoration-1 underline-offset-[2.2092px] md:text-base md:leading-5 md:underline-offset-[2.5248px] hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
        >
          Open Government Licence v3.0
        </a>
        , except where otherwise stated
      </span>
    </div>
  );
};
