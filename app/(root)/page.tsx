import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Vishnu", lastName: "Prabhakar", email:"24x7vishnu@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.44}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance:125.40},{currentBalance:145.40}]}
       />
    </section>
  );
};

export default Home;
