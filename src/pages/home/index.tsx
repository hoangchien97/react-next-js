import React, { useState, useEffect } from "react";
import { getTierByCountry } from "@services/http-client/home";
import { useSelector } from "react-redux";
import { selectIsMobile } from "@stores/slices/common";

function Home() {
  const isMobile = useSelector(selectIsMobile);

  const [tiers, setTiers] = useState([]);

  const getTier = async () => {
    try {
      const { data } = await getTierByCountry({ country: "VN" });
      console.log(`data`, data);
      setTiers(data.data.feature);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTier();
  }, []);

  return (
    <div>
      {isMobile ? "Home Mobile" : "Home Desktop"}
      <p>Tier Feature VN</p>
      <div>
        {tiers.length > 0 &&
          tiers.map((tier: any) => {
            <p key={tier.id}>{tier.title}</p>;
          })}
      </div>
    </div>
  );
}

export default Home;
