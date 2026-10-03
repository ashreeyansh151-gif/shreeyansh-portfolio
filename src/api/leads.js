export default function handler(req, res) {
  // Allow requests from your portfolio
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle browser preflight request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const lead = req.body;

    console.log("New website lead:", lead);

    return res.status(200).json({
      success: true,
      message: "Lead received successfully",
    });
  } catch (error) {
    console.error("Lead error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}