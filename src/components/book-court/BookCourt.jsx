import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userAPI from "../../API/userAPI";
import AuthContext from "../../contexts/AuthContext";

import SelectJoinedClub from "../select-joined-club/SelectJoinedClub";
import NoJoinedClubs from "../no-joined-clubs/NoJoinedClubs";

export default function BookCourt() {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [userJoinedClubs, setUserJoinedClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState("");

  useEffect(() => {
    userAPI
      .getUserJoinedClubs(userId)
      .then((result) => setUserJoinedClubs(result))
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  const onChange = (e) => {
    setSelectedClub(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      navigate(`/club/${selectedClub}/book-court`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {userJoinedClubs.length > 0 && (
        <SelectJoinedClub
          userJoinedClubs={userJoinedClubs}
          onChange={onChange}
          onSubmitHandler={onSubmitHandler}
        />
      )}

      {userJoinedClubs.length === 0 && <NoJoinedClubs />}
    </>
  );
}
