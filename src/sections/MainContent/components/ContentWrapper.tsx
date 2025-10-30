import { Main } from "@/sections/MainContent/components/Main";

interface ContentWrapperProps {
  onCreateShareCode?: () => void;
}

export const ContentWrapper = ({ onCreateShareCode }: ContentWrapperProps) => {
  return (
    <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
      <Main onCreateShareCode={onCreateShareCode} />
    </div>
  );
};
