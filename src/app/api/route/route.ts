import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { coordinates, mode } = await req.json();
    const selectedMode = mode || "driving-car";

    // Use environment variable for the ORS URL
    // If hosting locally: "http://localhost:8080/ors"
    // If using public API: "https://api.openrouteservice.org"
    const ORS_BASE_URL =
      process.env.ORS_URL || "https://api.openrouteservice.org";
    const API_KEY = process.env.ORS_API_KEY; // Only needed for public API

    const response = await fetch(
      `${ORS_BASE_URL}/v2/directions/${selectedMode}/geojson`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(API_KEY && { Authorization: API_KEY }),
        },
        body: JSON.stringify({
          coordinates,
          format: "geojson",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`ORS API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Route fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch route" },
      { status: 500 }
    );
  }
}
