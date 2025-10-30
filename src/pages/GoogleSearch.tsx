export const GoogleSearch = () => {
  return (
    <div className="min-h-screen bg-white font-arial">
      {/* Google Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-8 flex-1">
          <svg className="w-[92px] h-[30px]" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
          </svg>
          
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md">
              <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input 
                type="text" 
                value="uk evisa" 
                className="flex-1 outline-none text-sm"
                readOnly
              />
              <button className="p-1 hover:bg-gray-100 rounded" title="Clear">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
              <button className="p-1 hover:bg-gray-100 rounded" title="Search by voice">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Search by image">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full" title="Google apps">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
        </div>
      </header>

      {/* Search Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 text-sm">
            <button className="flex items-center gap-2 py-3 border-b-2 border-blue-600 text-blue-600">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              All
            </button>
            <button className="flex items-center gap-2 py-3 text-gray-600 hover:text-gray-900">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              Images
            </button>
            <button className="flex items-center gap-2 py-3 text-gray-600 hover:text-gray-900">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.24-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.66 0 3 1.26 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12z"/>
              </svg>
              News
            </button>
            <button className="flex items-center gap-2 py-3 text-gray-600 hover:text-gray-900">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              Videos
            </button>
            <button className="flex items-center gap-2 py-3 text-gray-600 hover:text-gray-900">
              More
            </button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <p className="text-sm text-gray-600 mb-6">About 1,240,000 results (0.45 seconds)</p>

        {/* Result 1 - GOV.UK eVisa */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › evisa</div>
            </div>
          </div>
          <a href="/evisa-info" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            eVisas: access and use your online immigration status - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            View your eVisa and get a share code to prove your immigration status. Your eVisa shows your identity and immigration status. This includes what rights you ...
          </div>
        </div>

        {/* Result 2 - Apply for eVisa */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › view-prove-immigration-status</div>
            </div>
          </div>
          <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            View and prove your immigration status - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            Use this service to view your eVisa and get a share code to prove your immigration status. You can also use this service to update your details.
          </div>
        </div>

        {/* Result 3 - What is an eVisa */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › guidance</div>
            </div>
          </div>
          <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            What an eVisa is and how to get one - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            An eVisa is an online record of your immigration status. You can use it to prove your right to work, rent property or access benefits in the UK.
          </div>
        </div>

        {/* Result 4 - UK Visas and Immigration */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › government › organisations</div>
            </div>
          </div>
          <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            UK Visas and Immigration - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            UKVI is responsible for making decisions on who has the right to visit or stay in the UK. Find information about visas, immigration and citizenship.
          </div>
        </div>

        {/* Result 5 - Check immigration status */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › check-immigration-status</div>
            </div>
          </div>
          <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            Check someone's immigration status - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            Use this service to check someone's immigration status if they've given you a share code. You'll need their date of birth and the share code.
          </div>
        </div>

        {/* People also ask */}
        <div className="border border-gray-300 rounded-lg mb-8">
          <div className="border-b border-gray-300 p-4">
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-base font-normal">What is a UK eVisa?</span>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="border-b border-gray-300 p-4">
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-base font-normal">How do I get my UK eVisa?</span>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="border-b border-gray-300 p-4">
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-base font-normal">Is eVisa mandatory in UK?</span>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <button className="flex items-center justify-between w-full text-left">
              <span className="text-base font-normal">How much does UK eVisa cost?</span>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* More results */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-sm">
              <div className="text-gray-900">www.gov.uk › travel-to-uk</div>
            </div>
          </div>
          <a href="#" className="text-xl text-blue-800 hover:underline visited:text-purple-800">
            Travel to the UK with an eVisa - GOV.UK
          </a>
          <div className="text-sm text-gray-600 mt-1">
            You can travel to and from the UK with your eVisa. You'll need to make sure your passport or identity document is linked to your UKVI account.
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">4</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">5</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-600">United Kingdom</p>
        </div>
        <div className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Advertising</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">How Search works</a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
