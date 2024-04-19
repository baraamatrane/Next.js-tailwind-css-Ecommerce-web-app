const url = "https://baraa-ecom.onrender.com";
const Function = {
  AddItemCart: async (Cart) => {
    console.log(Cart.id);
    try {
      const res = await fetch(`${url}/Cart/Add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        credentials: "include",
        body: JSON.stringify(Cart), // Serialize Cart object to JSON string
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
  Logout: async () => {
    try {
      const res = await fetch(`${url}/user/logout`, {
        credentials: "include",
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
  UpdateCart: async (Cart, id) => {
    console.log(Cart.id);
    try {
      const res = await fetch(`${url}/Cart/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        credentials: "include",
        body: JSON.stringify(Cart), // Serialize Cart object to JSON string
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
  DeleteCart: async (id) => {
    try {
      const res = await fetch(`${url}/Cart/${id}`, {
        method: "DELETE", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
  DeleteWishlit: async (id) => {
    try {
      const res = await fetch(`${url}/User/${id}/DeleteWishlist`, {
        method: "DELETE", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
  AddWishlit: async (id) => {
    try {
      const res = await fetch(`${url}/User/${id}/AddWishlist`, {
        method: "POST", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      });
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      console.log(data);
      return data;
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  },
};
export default Function;
