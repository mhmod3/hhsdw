// api/handle-m3u8.js
export default async function handler(req, res) {
  const videoUrl = req.query.video;

  if (!videoUrl) {
    return res.status(400).json({ error: "Video URL is required" });
  }

  try {
    // استخدام fetch لجلب البيانات من URL الفيديو m3u8
    const response = await fetch(videoUrl);
    const data = await response.text();

    // إضافة رؤوس CORS لتجاوز القيود
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-mpegURL");

    // إرسال المحتوى إلى العميل
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video" });
  }
}
