import { Logo } from "@/components/Logo";
import { Title } from "@/components/Title";

export const HeaderContent = () => {
  return (
    <div className="relative text-sm border-b-sky-700 caret-transparent leading-[14px] max-w-[960px] -mb-2.5 mx-[15px] pt-2.5 border-t-white border-b-[10px] border-x-white md:text-base md:leading-4 md:mx-auto after:accent-auto after:caret-transparent after:clear-both after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[14px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-gds_transport after:md:text-base after:md:leading-4">
      <Logo />
      <Title />
    </div>
  );
};
