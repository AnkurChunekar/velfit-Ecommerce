import { useState } from "react";
import { ProfileTab } from "./components/ProfileTab";
import { AddressesTab } from "./components/AddressesTab";
import { SettingsTab } from "./components/SettingsTab";
import { OrdersTab } from "./components/OrdersTab";
import "./User.css";

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
        <button
          onClick={() => setCurrentTab("profile")}
          className={`tab-name p-s btn-unset ${
            currentTab === "profile" ? "active" : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setCurrentTab("addresses")}
          className={`tab-name p-s btn-unset ${
            currentTab === "addresses" ? "active" : ""
          }`}
        >
          Addresses
        </button>
        <button
          onClick={() => setCurrentTab("orders")}
          className={`tab-name p-s btn-unset ${
            currentTab === "orders" ? "active" : ""
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setCurrentTab("settings")}
          className={`tab-name p-s btn-unset ${
            currentTab === "settings" ? "active" : ""
          }`}
        >
          Settings
        </button>
      </header>

      {getCurrentTab()}
    </div>
  );
}
