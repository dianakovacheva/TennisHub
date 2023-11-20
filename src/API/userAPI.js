const userBaseUrl = "http://localhost:3000/api/auth";

// Register
export const register = async (firstName, lastName, email, password) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${userBaseUrl}/register`, settings, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(response);
    const result = await response.json();
    // console.log(result);
    const userData = Object.values(result);
    // console.log(userData);
    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Log in
export const login = async (email, password) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${userBaseUrl}/login`, settings, {
      email,
      password,
    });

    const result = await response.json();
    const loginData = Object.values(result);

    return loginData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Log out
export const logout = async () => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Authorization": accessToken,
    },
  };
  try {
    const response = await fetch(`${userBaseUrl}/logout`, settings);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
