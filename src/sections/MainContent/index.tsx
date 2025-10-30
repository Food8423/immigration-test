import { BetaBanner } from "@/sections/MainContent/components/BetaBanner";
import { TimeoutDialog } from "@/sections/MainContent/components/TimeoutDialog";
import { BackLink } from "@/sections/MainContent/components/BackLink";
import { ContentWrapper } from "@/sections/MainContent/components/ContentWrapper";

interface MainContentProps {
  onCreateShareCode?: () => void;
  showBetaBanner?: boolean;
  showBackLink?: boolean;
  backLinkUrl?: string;
}

export const MainContent = ({ 
  onCreateShareCode, 
  showBetaBanner = true, 
  showBackLink = true,
  backLinkUrl = "/share"
}: MainContentProps) => {
  return (
    <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
      {showBetaBanner && <BetaBanner />}
      <TimeoutDialog />
      {showBackLink && <BackLink url={backLinkUrl} />}
      <ContentWrapper onCreateShareCode={onCreateShareCode} />
    </div>
  );
};
