import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./User.css";

const tabButtonData = [
  { id: uuid(), tabName: "Profile" },
  { id: uuid(), tabName: "Addresses" },
  { id: uuid(), tabName: "Orders" },
];

export function User() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="user-page">
      <header className="tab-header center-align-text">
        <div className="tab-name-container flex jc-space-b flex-wrap">
          {tabButtonData.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.tabName.toLowerCase())}
              className={`tab-name p-xs btn-unset ${
                pathname.includes(item.tabName.toLowerCase()) ? "active" : ""
              }`}
            >
              {item.tabName}
            </button>
          ))}
        </div>
      </header>

      <Outlet />
    </div>
  );
}
