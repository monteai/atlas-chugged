const locations = [
  { time: 3, place: "Milwaukee", lat: 43.0389, lng: -87.9065 },
  { time: 34, place: "Gaza", lat: 31.5, lng: 34.47 },
  { time: 61, place: "Israel", lat: 31.0461, lng: 34.8516 },
  { time: 84, place: "District of Columbia", lat: 38.9072, lng: -77.0369 },
  { time: 115, place: "Egypt", lat: 26.8206, lng: 30.8025 },
  { time: 151, place: "Jordan", lat: 30.5852, lng: 36.2384 },
  { time: 161, place: "Syria", lat: 34.8021, lng: 38.9968 },
  { time: 175, place: "Golan Heights", lat: 32.981, lng: 35.749 },
  { time: 200, place: "Lebanon", lat: 33.8547, lng: 35.8623 },
  { time: 264, place: "Iran", lat: 32.4279, lng: 53.688 },
  { time: 289, place: "Kharg Island", lat: 29.2458, lng: 50.3006 },
  { time: 349, place: "Saudi Arabia", lat: 23.8859, lng: 45.0792 },
  { time: 460, place: "United States", lat: 37.0902, lng: -95.7129 },
  { time: 573, place: "China", lat: 35.8617, lng: 104.1954 },
  { time: 576, place: "Singapore", lat: 1.3521, lng: 103.8198 },
  { time: 640, place: "Forbidden City", lat: 39.9163, lng: 116.3972 },
  { time: 673, place: "Riyadh", lat: 24.7136, lng: 46.6753 },
  { time: 674, place: "Abu Dhabi", lat: 24.4539, lng: 54.3773 },
  { time: 677, place: "Kuwait City", lat: 29.3759, lng: 47.9774 },
  { time: 687, place: "Russia", lat: 61.524, lng: 105.3188 },
  { time: 689, place: "Black Sea", lat: 43.413, lng: 34.219 },
  { time: 701, place: "Montreux (Treaty)", lat: 46.4312, lng: 6.9107 }
];

// Export for browser usage
if (typeof window !== "undefined") {
  window.locations = locations;
}
