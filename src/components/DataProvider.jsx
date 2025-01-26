import React, { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard"; // Ensure this path is correct

const DataProvider = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random"); // Replace 'API_URL' with the actual URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuoteData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("An error occurred.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <QuoteCard quoteData={quoteData} />;
};

export default DataProvider;
