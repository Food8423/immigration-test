import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { Copyright } from "@/sections/Footer/components/Copyright";

export const FooterContent = () => {
  return (
    <div className="text-sm caret-transparent leading-4 max-w-[960px] mx-[15px] md:text-base md:leading-5 md:mx-auto">
      <div className="text-sm items-end caret-transparent flex flex-wrap justify-center leading-4 ml-[-15px] mr-[-15px] md:text-base md:leading-5">
        <FooterLinks />
        <Copyright />
      </div>
    </div>
  );
};
