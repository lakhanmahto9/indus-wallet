// import React from "react";
// import {
//   CrossIcon,
//   SearchIcon,
//   VerticalThreeDotIcon,
// } from "../../../assets/icons/Icons";
// const AllNetwork = ({ selectedNetwork, handleChangeNetwork, handleClose }) => {
//   console.log(selectedNetwork);
//   const ethereum = [
//     { logo: "/eth_logo.svg", name: "Ethereum Mainnet" },
//     { logo: "/linea-logo-mainnet.svg", name: "Linea" },
//   ];
//   const addition = [
//     { logo: "/arbitrum.svg", name: "Arbitrum One" },
//     { logo: "/avax-token.svg", name: "Avalanche Network C-Chain" },
//     { logo: "/base.svg", name: "Base Mainnet" },
//     { logo: "/bnb.svg", name: "Binance Smart Chain" },
//     { logo: "/optimism.svg", name: "OP Mainnet" },
//     { logo: "/pol-token.svg", name: "Polygon Mainnet" },
//     { logo: "/zk-sync.svg", name: "zkSync Era Mainnet" },
//   ];
//   const testnetwork = [
//     { logo: "/arbitrum.svg", name: "Sepolia" },
//     { logo: "/linea-logo-mainnet.svg", name: "Linea Sepolia" },
//     { logo: "/MegaETH-logo-testnet.png", name: "Mega Testnet" },
//   ];
//   return (
//     <div className="w-full sm:w-[400px] relative">
//       <div className="p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
//         <p className="text-lg font-medium">Select Network</p>
//         <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
//           <CrossIcon color="#000000" width="18" height="18" />
//         </div>
//       </div>
//       <div className="w-full px-4 relative h-16">
//         <input
//           type="search"
//           placeholder="Search"
//           className="h-12 outline-blue-500 w-full px-8 border-2 rounded-md"
//         />
//         <div className="absolute top-4 left-6">
//           <SearchIcon color="#3865fa" width="18" height="18" />
//         </div>
//       </div>
//       <p className="text-sm font-bold text-slate-400 px-4 mb-4">
//         Enabled networks
//       </p>
//       <div className="w-full mb-4">
//         {ethereum.map((item, index) => (
//           <div
//             onClick={() => handleChangeNetwork(item.name)}
//             className={`w-full p-4 border  ${
//               selectedNetwork === item.name
//                 ? "bg-[#ebeafa]"
//                 : "hover:bg-slate-50"
//             } cursor-pointer flex justify-between`}
//             key={index}
//           >
//             <div className="flex gap-2">
//               <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
//               <p className="text-sm font-medium">{item.name}</p>
//             </div>
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 // your dropdown or three-dot action logic here
//               }}
//               className="cursor-pointer hover:bg-slate-100 p-1 rounded-lg"
//             >
//               <VerticalThreeDotIcon color="#000000" width="18" height="18" />
//             </div>
//           </div>
//         ))}
//       </div>

//       <p className="text-sm font-bold text-slate-400 px-4 mb-4">
//         Additional networks
//       </p>
//       <div className="w-full mb-4">
//         {addition.map((item, index) => (
//           <div
//             className="w-full p-4 flex justify-between hover:cursor-text"
//             key={index}
//           >
//             <div className="flex gap-2">
//               <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
//               <p className="text-sm font-medium">{item.name}</p>
//             </div>
//             <div>
//               <p className="text-blue-700 font-medium cursor-pointer hover:underline">
//                 Add
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p className="text-sm font-bold text-slate-400 px-4 mb-4">
//         Show test networks
//       </p>
//       <div className="w-full mb-4">
//         {testnetwork.map((item, index) => (
//           <div
//             className="w-full p-4 flex justify-between cursor-pointer hover:bg-slate-50"
//             key={index}
//           >
//             <div className="flex gap-2">
//               <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
//               <p className="text-sm font-medium">{item.name}</p>
//             </div>
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 // your dropdown or three-dot action logic here
//               }}
//               className="cursor-pointer hover:bg-slate-100 p-1 rounded-lg"
//             >
//               <VerticalThreeDotIcon color="#000000" width="18" height="18" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 sticky bottom-0 bg-white">
//         <button className="w-full border border-blue-700 hover:bg-blue-700 hover:text-white rounded-full text-blue-700 font-medium h-12">
//           + Add a custom network
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllNetwork;

import React, { useState } from "react";
import {
  CrossIcon,
  SearchIcon,
  VerticalThreeDotIcon,
} from "../../../assets/icons/Icons";

const AllNetwork = ({ selectedNetwork, handleChangeNetwork, handleClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const ethereum = [
    { logo: "/eth_logo.svg", name: "Ethereum Mainnet" },
    { logo: "/linea-logo-mainnet.svg", name: "Linea" },
  ];

  const addition = [
    { logo: "/arbitrum.svg", name: "Arbitrum One" },
    { logo: "/avax-token.svg", name: "Avalanche Network C-Chain" },
    { logo: "/base.svg", name: "Base Mainnet" },
    { logo: "/bnb.svg", name: "Binance Smart Chain" },
    { logo: "/optimism.svg", name: "OP Mainnet" },
    { logo: "/pol-token.svg", name: "Polygon Mainnet" },
    { logo: "/zk-sync.svg", name: "zkSync Era Mainnet" },
  ];

  const testnetwork = [
    { logo: "/arbitrum.svg", name: "Sepolia" },
    { logo: "/linea-logo-mainnet.svg", name: "Linea Sepolia" },
    { logo: "/MegaETH-logo-testnet.png", name: "Mega Testnet" },
  ];

  const filteredEthereum = ethereum.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredAddition = addition.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTestnetwork = testnetwork.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noResults =
    filteredEthereum.length === 0 &&
    filteredAddition.length === 0 &&
    filteredTestnetwork.length === 0;

  return (
    <div className="w-full sm:w-[400px] relative">
      <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
        <p className="text-lg font-medium">Select Network</p>
        <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
          <CrossIcon color="#000000" width="18" height="18" />
        </div>
      </div>

      <div className="w-full px-4 relative h-16">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-12 outline-blue-500 w-full px-8 border-2 rounded-md"
        />
        <div className="absolute top-4 left-6">
          <SearchIcon color="#3865fa" width="18" height="18" />
        </div>
      </div>

      {filteredEthereum.length > 0 && (
        <div className="w-full">
          <p className="text-sm font-bold text-slate-400 px-4 mb-4">
            Enabled networks
          </p>
          <div className="w-full mb-4">
            {filteredEthereum.map((item, index) => (
              <div
                onClick={() => handleChangeNetwork(item.name)}
                className={`w-full p-4 border ${
                  selectedNetwork === item.name
                    ? "bg-[#ebeafa]"
                    : "hover:bg-slate-50"
                } cursor-pointer flex justify-between`}
                key={index}
              >
                <div className="flex gap-2">
                  <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    // your dropdown logic here
                  }}
                  className="cursor-pointer hover:bg-slate-100 p-1 rounded-lg"
                >
                  <VerticalThreeDotIcon
                    color="#000000"
                    width="18"
                    height="18"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredAddition.length > 0 && (
        <div className="w-full">
          <p className="text-sm font-bold text-slate-400 px-4 mb-4">
            Additional networks
          </p>
          <div className="w-full mb-4">
            {filteredAddition.map((item, index) => (
              <div
                className="w-full p-4 flex justify-between hover:cursor-text"
                key={index}
              >
                <div className="flex gap-2">
                  <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
                <div>
                  <p className="text-blue-700 font-medium cursor-pointer hover:underline">
                    Add
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredTestnetwork.length > 0 && (
        <div className="w-full">
          <p className="text-sm font-bold text-slate-400 px-4 mb-4">
            Show test networks
          </p>
          <div className="w-full mb-4">
            {filteredTestnetwork.map((item, index) => (
              <div
                onClick={() => handleChangeNetwork(item.name)}
                className={`w-full p-4 border ${
                  selectedNetwork === item.name
                    ? "bg-[#ebeafa]"
                    : "hover:bg-slate-50"
                } cursor-pointer flex justify-between`}
                key={index}
              >
                <div className="flex gap-2">
                  <img src={item.logo} alt="" className="w-5 h-5 rounded-lg" />
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    // dropdown logic here
                  }}
                  className="cursor-pointer hover:bg-slate-100 p-1 rounded-lg"
                >
                  <VerticalThreeDotIcon
                    color="#000000"
                    width="18"
                    height="18"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {noResults && (
        <p className="text-center text-sm text-gray-500 font-medium">
          No networks found for the given search query.
        </p>
      )}

      <div className="w-full p-4 sticky bottom-0 bg-white">
        <button className="w-full border border-blue-700 hover:bg-blue-700 hover:text-white rounded-full text-blue-700 font-medium h-12">
          + Add a custom network
        </button>
      </div>
    </div>
  );
};

export default AllNetwork;
