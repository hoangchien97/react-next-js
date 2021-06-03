import React, { useState, useEffect } from "react";
import { getTierByCountry } from "@services/http-client/home";

function Home() {
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
