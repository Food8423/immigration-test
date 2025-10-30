import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="text-neutral-950 text-sm bg-white border-b-neutral-950 border-l-neutral-950 border-r-neutral-950 border-t-zinc-400 caret-transparent leading-4 pt-[25px] pb-[15px] border-t font-gds_transport md:text-base md:leading-5 md:pt-10 md:pb-[25px]"
    >
      <FooterContent />
    </footer>
  );
};
