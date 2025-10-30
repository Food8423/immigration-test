import { useNavigate } from "react-router-dom";

interface BackLinkProps {
  url?: string;
}

export const BackLink = ({ url = "/share" }: BackLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <div role="region" aria-label="go-back" className="caret-transparent">
      <a
        href={url}
        onClick={handleClick}
        className="relative text-neutral-950 text-sm caret-transparent inline-block leading-4 underline decoration-1 underline-offset-[2.2092px] my-[15px] pl-[12.25px] font-gds_transport md:text-base md:leading-5 md:underline-offset-[2.5248px] md:pl-3.5 before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[7px] before:tracking-[normal] before:leading-[18.2858px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:rotate-[-135deg] before:visible before:w-[7px] before:border-gray-600 before:my-auto before:border-separate before:border-r before:border-t before:border-solid before:left-[3px] before:inset-y-0 before:font-gds_transport before:md:leading-5 after:accent-auto after:caret-transparent after:text-neutral-950 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-4 after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-x-0 after:-inset-y-3.5 after:font-gds_transport after:md:text-base after:md:leading-5 hover:text-neutral-950/100 hover:decoration-[3px] hover:border-neutral-950/100"
      >
        Back
      </a>
    </div>
  );
};
