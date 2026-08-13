import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data;

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      data = await req.json();
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    console.log("[BarakoBrews Quote Lead Received]:", data);

    if (webhookUrl) {
      try {
        const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
        const coffeeList = Array.isArray(data.coffeeOptions)
          ? data.coffeeOptions
          : data.coffeeOptions
          ? [data.coffeeOptions]
          : [];
        const nonCoffeeList = Array.isArray(data.nonCoffeeOptions)
          ? data.nonCoffeeOptions
          : data.nonCoffeeOptions
          ? [data.nonCoffeeOptions]
          : [];

        const fullPayload = {
          sheetName: "Quotes",
          timestamp,
          ...data,
          coffeeOptions: coffeeList,
          nonCoffeeOptions: nonCoffeeList,
          coffeeOptionsText: coffeeList.join(", "),
          nonCoffeeOptionsText: nonCoffeeList.join(", "),
        };

        // Try standard JSON post first
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullPayload),
          redirect: "follow",
        });

        const textResult = await response.text();
        const isHtml = textResult.trim().startsWith("<!DOCTYPE") || textResult.includes("<html");

        if (isHtml) {
          console.warn("[Google Sheets Webhook Warning]: Google Apps Script returned an HTML page instead of JSON. Ensure 'Who has access' is set to 'Anyone' in your Google Apps Script deployment settings.");
          return NextResponse.json({
            success: true,
            status: "permission_required",
            message: "Quote received, but Google Apps Script deployment access needs to be set to 'Anyone'.",
            googleSheet: { isHtml: true, textSnippet: textResult.substring(0, 150) },
          });
        }

        let jsonResult;
        try {
          jsonResult = JSON.parse(textResult);
        } catch {
          jsonResult = { text: textResult };
        }

        console.log("[Google Sheets Response]:", jsonResult);
        return NextResponse.json({ success: true, googleSheet: jsonResult });
      } catch (err) {
        console.error("Google Sheet webhook connection error:", err);
        return NextResponse.json({
          success: true,
          googleSheetError: String(err),
          message: "Quote received locally, but webhook connection encountered an error.",
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quote received successfully",
    });
  } catch (error) {
    console.error("Error processing quote API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit quote" },
      { status: 500 }
    );
  }
}
