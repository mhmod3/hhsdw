export default async function handler(req, res) {
  const videoUrl = req.query.video;

  if (!videoUrl) {
    return res.status(400).json({ error: "Video URL is required" });
  }

  try {
    const response = await fetch(videoUrl);
    const data = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-mpegURL");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video" });
  }
}
