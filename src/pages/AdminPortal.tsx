import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// ...existing code... (removed useUser - AdminPortal uses backend directly)
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const AdminPortal = () => {
  const navigate = useNavigate();
  // AdminPortal uses backend directly; no need for UserContext here
  const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:3001';
  
  const defaultData = {
    name: "SAHJOG SINGH",
    dateOfBirth: "08 December 2006",
    nationality: "IND",
    status: "Student",
    photoUrl: "https://i.postimg.cc/4d0TPzgw/Whats-App-Image-2025-10-30-at-12-01-27.jpg",
    sponsorLicenseNumber: "XC799QAW5",
    validFrom: "8 August 2025",
    validUntil: "18 January 2027",
  };
  const [formData, setFormData] = useState(defaultData);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.name || !formData.dateOfBirth || !formData.nationality || !formData.status) {
      alert("Please fill in all required fields (Name, Date of Birth, Nationality, and Status)");
      return;
    }
    try {
  const response = await fetch(`${API_BASE}/api/user-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to save data");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      alert("Error saving data to backend");
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target?.result as string);
          setFormData(importedData);
          // Save imported data to backend
          fetch(`${API_BASE}/api/user-data`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(importedData),
          });
          alert("Data imported successfully!");
        } catch (error) {
          alert("Error importing data. Please check the file format.");
        }
      };
      reader.readAsText(file);
    }
  };
  // Fetch initial data from backend
  useEffect(() => {
  fetch(`${API_BASE}/api/user-data`)
      .then((res) => res.json())
      .then((data) => {
        // If any field is missing or empty, use default
        setFormData({
          ...defaultData,
          ...data
        });
      })
      .catch(() => {
        setFormData(defaultData);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent flex flex-col min-h-screen tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-times_new_roman">
      <Header />
      <div className="flex-grow">
      <div className="caret-transparent max-w-[960px] mx-[15px] md:mx-auto">
        <main className="caret-transparent my-10 md:my-[60px]">
          <div className="box-border caret-transparent float-none w-full px-[15px] md:float-left md:w-[66.6667%]">
            <h1 className="text-neutral-950 text-[32px] font-bold caret-transparent leading-[35px] mb-5 font-gds_transport md:text-5xl md:leading-[50.0002px] md:mb-[30px]">
              Admin Portal - Update User Information
            </h1>

            {showSuccess && (
              <div className="text-emerald-800 text-base bg-emerald-50 caret-transparent leading-5 mb-5 p-5 border-l-[10px] border-solid border-emerald-800 font-gds_transport md:text-[19px] md:leading-[25px]">
                <p className="text-base font-bold caret-transparent leading-5 my-0 md:text-[19px] md:leading-[25px]">
                  ✓ User information updated successfully!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  required
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Date of Birth
                </label>
              <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                Format: DD Month YYYY (e.g., 08 December 2006)
              </p>
              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="08 December 2006"
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  required
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Nationality
                </label>
              <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                3-letter country code (e.g., GBR, USA, CAN)
              </p>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  maxLength={3}
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-[150px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  required
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                  required
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Sponsor Licence Number
                </label>
                <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Leave blank if not applicable (e.g., for Visitor status)
                </p>
                <input
                  type="text"
                  name="sponsorLicenseNumber"
                  value={formData.sponsorLicenseNumber}
                  onChange={handleChange}
                  placeholder="XC799QAW5"
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Valid From
                </label>
                <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Format: D Month YYYY (e.g., 8 August 2025)
                </p>
                <input
                  type="text"
                  name="validFrom"
                  value={formData.validFrom}
                  onChange={handleChange}
                  placeholder="8 August 2025"
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                />
              </div>

              <div className="caret-transparent mb-5">
                <label className="text-neutral-950 text-base font-bold caret-transparent block leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Valid Until
                </label>
                <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Format: D Month YYYY (e.g., 18 January 2027)
                </p>
                <input
                  type="text"
                  name="validUntil"
                  value={formData.validUntil}
                  onChange={handleChange}
                  placeholder="18 January 2027"
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                />
              </div>

              <div className="caret-transparent mb-5">
                <p className="text-neutral-950 text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Photo URL
                </p>
                <p className="text-neutral-500 text-base caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                  Enter the full URL of the photo (optional - leave blank for no photo)
                </p>
                <input
                  type="url"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className="text-neutral-950 text-base caret-transparent block leading-5 w-full max-w-[512px] mb-0 p-[5px] border-2 border-solid border-neutral-950 font-gds_transport md:text-[19px] md:leading-[25px]"
                />
              </div>

              {formData.photoUrl && (
                <div className="caret-transparent mb-5">
                  <p className="text-neutral-950 text-base font-bold caret-transparent leading-5 mb-[5px] font-gds_transport md:text-[19px] md:leading-[25px]">
                    Photo Preview:
                  </p>
                  <img
                    src={formData.photoUrl}
                    alt="Preview"
                    className="caret-transparent w-full max-w-[300px] mb-5 border-2 border-solid border-zinc-400"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x400?text=Invalid+URL";
                    }}
                  />
                </div>
              )}

              <div className="text-neutral-950 text-base bg-zinc-100 caret-transparent leading-5 mb-5 p-5 border-l-[10px] border-solid border-zinc-400 font-gds_transport md:text-[19px] md:leading-[25px]">
                <p className="text-base font-bold caret-transparent leading-5 my-0 md:text-[19px] md:leading-[25px]">
                  Important Notes:
                </p>
                <ul className="text-base caret-transparent leading-5 my-2.5 pl-5 md:text-[19px] md:leading-[25px]">
                  <li>Name, Date of Birth, Nationality, and Status are required</li>
                  <li>Sponsor fields are optional (only for Student/Work visas)</li>
                  <li>Leave Photo URL blank if you don't want to display a photo</li>
                  <li>Data is saved to your browser's local storage</li>
                  <li>Use Export/Import to transfer data between browsers or devices</li>
                  <li>After saving, refresh the Status Page to see changes</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  type="submit"
                  className="relative text-white text-base bg-emerald-800 shadow-[rgb(0,45,24)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-emerald-900"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/status")}
                  className="relative text-emerald-800 text-base bg-zinc-100 shadow-[rgb(146,145,145)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-emerald-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-zinc-300"
                >
                  View Status Page
                </button>

                <button
                  type="button"
                  onClick={handleExportData}
                  className="relative text-neutral-950 text-base bg-zinc-100 shadow-[rgb(146,145,145)_0px_2px_0px_0px] caret-transparent block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-zinc-300"
                >
                  📥 Export Data
                </button>

                <label className="relative text-neutral-950 text-base bg-zinc-100 shadow-[rgb(146,145,145)_0px_2px_0px_0px] caret-transparent inline-block leading-[19px] text-center align-top w-full mr-0 mb-[17px] pt-2 pb-[7px] px-2.5 border-solid border-transparent font-gds_transport md:text-[19px] md:w-auto md:mr-[15px] before:accent-auto before:caret-transparent before:text-neutral-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[19px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-top-0.5 before:-bottom-1 before:-inset-x-0.5 before:font-gds_transport before:md:text-[19px] hover:bg-zinc-300 cursor-pointer">
                  📤 Import Data
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportData}
                    className="hidden"
                  />
                </label>
              </div>
            </form>

          </div>
        </main>
      </div>
      </div>
      <Footer />
    </div>
  );
};
