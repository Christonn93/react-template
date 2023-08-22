// Importing React
import { useEffect, useState } from "react";
import { headers } from "../api/headers";
require("dotenv").config();

/**
 * Function to call a api to receive data
 *
 * @param endpoint Needs a url for the endpoint of the api call you want to make
 * @param method Needs the method you want to use on the fetch call
 * @param body Needs a body for making fetch calls
 * @Return Returning data, loading area and error area.
 *
 * @Info The base structure of this call is made by the creator mentioned down below. Adjustments have been done to the original code.
 *
 * @Creator Martin Kruger
 */
const useApi = (endpoint, method, body) => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);

 const url = `${process.evn.API_URL}` || "www.example.com";
 const apiKeyFlag = `?key=${process.evn.API_KEY}`;

 useEffect(() => {
  async function getData() {
   try {
    setIsLoading(true);
    setIsError(false);
    const fetchedData = await fetch(url + endpoint + apiKeyFlag, {
     method: method,
     headers: headers("application/json"),
     body: JSON.stringify(body),
    });
    const json = await fetchedData.json();
    setData(json);
   } catch (error) {
    console.log(error);
    setIsError(true);
   } finally {
    setIsLoading(false);
   }
  }
  getData();
 }, [endpoint, method, body]);
 return { data, isLoading, isError };
};

export default useApi;
