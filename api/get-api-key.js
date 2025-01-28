const fetch = require('node-fetch');

export default async function handler(req, res) {
  // Extract 'address' parameter from the query string
  const { address } = req.query;

  // Check if the address is provided
  if (!address) {
    res.status(400).json({ error: "Missing 'address' parameter in the request." });
    return;
  }

  // Construct the Google Maps Geocoding API URL
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    // Fetch data from the Google Maps API
    const response = await fetch(url);

    // Check if the API response is successful
    if (!response.ok) {
      throw new Error(`Error from Google Maps API: ${response.statusText}`);
    }

    const data = await response.json();

    // Respond with the geocoding result
    res.status(200).json(data);
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching location data:", error);

    // Respond with a server error
    res.status(500).json({ error: "Failed to fetch location data." });
  }
}
