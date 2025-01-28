const { YouTubeTranscript } = require('youtube-transcript');

module.exports = async (req, res) => {
  const { videoId } = req.query;

  if (!videoId) {
    return res.status(400).json({ error: "Missing videoId" });
  }

  try {
    const rawTranscript = await YouTubeTranscript.fetchTranscript(videoId);
    
    if (!rawTranscript || rawTranscript.length === 0) {
      return res.status(404).json({ error: "No transcript available" });
    }

    const transcript = rawTranscript.map(entry => ({
      text: entry.text,
      time: Math.floor(entry.offset / 1000),
      place: extractPlace(entry.text)
    })).filter(entry => entry.place);

    res.status(200).json(transcript);
  } catch (error) {
    console.error("Transcript error:", error);
    res.status(500).json({ error: "Failed to fetch transcript" });
  }
};

// Simple function to extract places from transcript text
function extractPlace(text) {
  const places = ['Black Sea', 'Taiwan', 'Ukraine', 'South China Sea', 'Russia', 'Washington'];
  return places.find(place => text.includes(place));
}
