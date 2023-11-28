import { React, useState, useEffect } from "react";

import ClubsList from "../../clubsList/ClubsList";

export default function UserHome() {
  return (
    <>
      {/* Start Clubs Gallery */}
      <ClubsList />
      {/* End Clubs Gallery */}
    </>
  );
}
