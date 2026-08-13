import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    console.log("[BarakoBrews Contact Message Received]:", data);

    if (webhookUrl) {
      try {
        const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
        const payload = JSON.stringify({
          sheetName: "Contact Messages",
          timestamp,
          fullName: data.name || data.fullName || "",
          email: data.email || "",
          subject: data.subject || "",
          message: data.message || "",
          ...data,
        });

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          redirect: "follow",
        });

        const textResult = await response.text();
        let jsonResult;
        try {
          jsonResult = JSON.parse(textResult);
        } catch {
          jsonResult = { rawText: textResult.substring(0, 200) };
        }

        console.log("[Google Sheets Contact Response]:", jsonResult);
        return NextResponse.json({ success: true, googleSheet: jsonResult });
      } catch (err) {
        console.error("Google Sheet webhook error:", err);
        return NextResponse.json({ success: true, googleSheetError: String(err) });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Contact message received successfully",
    });
  } catch (error) {
    console.error("Error processing contact API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit message" },
      { status: 500 }
    );
  }
}
