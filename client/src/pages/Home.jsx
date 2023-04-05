import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <header>
        <div className="py-8">
          <h1 className="text-white text-6xl mb-8">
            The Crypto{" "}
            <span className="text-[#a21dc0] font-bold">Crowdfunding&nbsp;</span>
            Revolution
          </h1>
          <h2 className="text-white text-2xl mb-8 tracking-wider font-light">
            Raise money for what matters to you most. Donate to support others.{" "}
          </h2>
        </div>
        <hr className="mb-16" />
      </header>

      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Home;
