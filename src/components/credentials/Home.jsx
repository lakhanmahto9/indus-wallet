import React from "react";


const Home = ({children}) => {
  const language = ["Hindi", "English"];
  return (
    <div className="w-full h-full pb-7 bg-blue-50">
      <div className="w-full px-4 lg:px-96">
        <div className="p-4 flex justify-between items-center">
        <div className="w-60">
            <img src="/icon7.png" alt="" className="h-16"/>
          </div>
          <select className="h-12 border-2 px-8 rounded-md border-blue-500 outline-blue-500">
            {language.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Home;
