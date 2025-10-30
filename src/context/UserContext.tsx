import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface UserData {
  name: string;
  dateOfBirth: string;
  nationality: string;
  status: string;
  photoUrl: string;
  sponsorLicenseNumber?: string;
  validFrom?: string;
  validUntil?: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => Promise<void>;
  loading: boolean;
}

const defaultUserData: UserData = {
  name: "SAHJOG SINGH",
  dateOfBirth: "08 December 2006",
  nationality: "IND",
  status: "Student",
  photoUrl: "https://i.postimg.cc/4d0TPzgw/Whats-App-Image-2025-10-30-at-12-01-27.jpg",
  sponsorLicenseNumber: "XC799QAW5",
  validFrom: "8 August 2025",
  validUntil: "18 January 2027",
};

const API_URL = `${(import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:3001'}/api/user-data`;

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [loading, setLoading] = useState(true);

  // Fetch data from server on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Fall back to default data if server is not available
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateUserData = async (data: Partial<UserData>) => {
    const updated = { ...userData, ...data };
    setUserData(updated);

    // Save to server
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save data to server. Please try again.");
    }
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
