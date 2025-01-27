const { YouTubeTranscript } = require('youtube-transcript');

module.exports = async (req, res) => {
  const { videoId } = req.query;
  try {
    const rawTranscript = await YouTubeTranscript.fetchTranscript(videoId);
    const transcript = rawTranscript.map(entry => ({
      text: entry.text,
      time: Math.floor(entry.offset / 1000),
      place: extractPlace(entry.text)
    })).filter(entry => entry.place);

    res.status(200).json(transcript);
  } catch (error) {
    res.status(500).json({ error: 'Transcript not found or not available.' });
  }
};

// Simple place extraction
function extractPlace(text) {
  const places = ['Black Sea', 'North Korea', 'Strait of Hormuz', 'Taiwan', 'Ukraine'];
  return places.find(place => text.toLowerCase().includes(place.toLowerCase()));
}
