import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import { StatusPage } from "@/pages/StatusPage";
import { SignIn } from "@/pages/SignIn";
import { PassportNumber } from "@/pages/PassportNumber";
import { DateOfBirth } from "@/pages/DateOfBirth";
import { CheckPhone } from "@/pages/CheckPhone";
import { ImmigrationStatusFull } from "@/pages/ImmigrationStatusFull";
import { ShareCode } from "@/pages/ShareCode";
import { ShareCodeReason2 } from "@/pages/ShareCodeReason2";
import { ShareCodeGenerated } from "@/pages/ShareCodeGenerated";
import { AdminPortal } from "@/pages/AdminPortal";
import { EVisaInfo } from "@/pages/EVisaInfo";
import { GoogleSearch } from "@/pages/GoogleSearch";

export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/search" element={<GoogleSearch />} />
          <Route path="/evisa-info" element={<EVisaInfo />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/sign-in/passport-number" element={<PassportNumber />} />
          <Route path="/sign-in/date-of-birth" element={<DateOfBirth />} />
          <Route path="/check-phone" element={<CheckPhone />} />
          <Route path="/immigration-status-full" element={<ImmigrationStatusFull />} />
          <Route path="/share-code" element={<ShareCode />} />
          <Route path="/share-code-reason" element={<ShareCodeReason2 />} />
          <Route path="/share-code-generated" element={<ShareCodeGenerated />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};
