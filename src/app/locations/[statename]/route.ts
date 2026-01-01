import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { stateName: string } }
) {
  try {
    const { stateName } = params;
    const locations = await prisma.locationPopupInfo.findMany({
      where: {
        statename: {
          equals: stateName,
          mode: "insensitive", // Case insensitive search
        },
      },
    });
    return NextResponse.json(locations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch locations" },
      { status: 500 }
    );
  }
}
