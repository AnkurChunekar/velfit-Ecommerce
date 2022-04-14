export function ProfileTab() {
  return (
    <div className="tab-container profile">
      <h2 className="fw-600 fs-4 m-s m-rl0"> Personal Information </h2>

      <div className="input-wrapper m-xxs m-rl0">
        <label className="text"> Full Name </label>
        <input
          disabled
          value="John Doe"
          className="input p-xxs m-xxs m-rl0 bd-rad-sm" />
      </div>

      <div className="input-wrapper m-xxs m-rl0">
        <label className="text"> Email </label>
        <input
          disabled
          value="johndoe@gmail.com"
          className="input p-xxs m-xxs m-rl0 bd-rad-sm" />
      </div>
    </div>
  );
}
