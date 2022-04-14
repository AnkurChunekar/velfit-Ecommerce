import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ProfileTab, AddressesTab, SettingsTab, OrdersTab } from "./components";
import "./User.css";

const tabButtonData = [
  { id: uuid(), tabName: "Profile" },
  { id: uuid(), tabName: "Addresses" },
  { id: uuid(), tabName: "Orders" },
  { id: uuid(), tabName: "Settings" },
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
      case "settings":
        return <SettingsTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="user-page">
      <header className="tab-header w-100pc center-align-text">
        {tabButtonData.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentTab(item.tabName.toLowerCase())}
            className={`tab-name p-s btn-unset ${
              currentTab === item.tabName.toLowerCase() ? "active" : ""
            }`}
          >
            {item.tabName}
          </button>
        ))}
      </header>

      {getCurrentTab()}
    </div>
  );
}
