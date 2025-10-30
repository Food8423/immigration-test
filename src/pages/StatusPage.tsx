import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const StatusPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent flex flex-col min-h-screen tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <div className="caret-transparent"></div>
      <Header />
      <div className="flex-grow">
        <MainContent 
          onCreateShareCode={() => navigate("/share-code-generated")} 
          showBetaBanner={true}
          showBackLink={true}
          backLinkUrl="/immigration-status-full"
        />
      </div>
      <Footer />
    </div>
  );
};
