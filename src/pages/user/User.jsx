import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ProfileTab, AddressesTab, OrdersTab } from "./components";
import "./User.css";

const tabButtonData = [
  { id: uuid(), tabName: "Profile" },
  { id: uuid(), tabName: "Addresses" },
  { id: uuid(), tabName: "Orders" },
];

export default function User() {
  const [currentTab, setCurrentTab] = useState("profile");

  const getCurrentTab = () => {
    switch (currentTab) {
      case "profile":
        return <ProfileTab />;
      case "addresses":
        return <AddressesTab />;
      case "orders":
        return <OrdersTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="user-page">
      <header className="tab-header center-align-text">
        <div className="tab-name-container flex jc-space-b flex-wrap">
          {tabButtonData.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.tabName.toLowerCase())}
              className={`tab-name p-xs btn-unset ${
                currentTab === item.tabName.toLowerCase() ? "active" : ""
              }`}
            >
              {item.tabName}
            </button>
          ))}
        </div>
      </header>

      {getCurrentTab()}
    </div>
  );
}
