import { StatusDisplay } from "@/sections/MainContent/components/StatusDisplay";

interface MainProps {
  onCreateShareCode?: () => void;
}

export const Main = ({ onCreateShareCode }: MainProps) => {
  return (
    <main className="caret-transparent my-10 md:my-[60px]">
      <StatusDisplay onCreateShareCode={onCreateShareCode} />
    </main>
  );
};
