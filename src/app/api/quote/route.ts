import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    // Log payload for development tracking
    console.log("[BarakoBrews Quote Lead Received]:", data);

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheetName: "Quotes",
            ...data,
          }),
        });

        const result = await response.json();
        return NextResponse.json({ success: true, googleSheet: result });
      } catch (err) {
        console.error("Google Sheet webhook error:", err);
        // Continue and return success so client UX is never interrupted
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quote received successfully (local mode)",
    });
  } catch (error) {
    console.error("Error processing quote API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit quote" },
      { status: 500 }
    );
  }
}
