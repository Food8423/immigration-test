import { HeaderContent } from "@/sections/Header/components/HeaderContent";

export const Header = () => {
  return (
    <header
      role="banner"
      className="text-white text-sm bg-neutral-950 caret-transparent leading-[14px] border-b-[10px] border-white font-gds_transport md:text-base md:leading-4"
    >
      <HeaderContent />
    </header>
  );
};
