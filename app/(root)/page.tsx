import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Rahul",
    lastName: "Mijar",
    email: "rahulmijar0243@gmail.com",
  };
  const transactions: any = [];
  const banks: any = [{ currentBalance: 1250 }, { currentBalance: 1450 }];
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            desc="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={720}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={transactions} banks={banks} />
    </section>
  );
};

export default Home;
