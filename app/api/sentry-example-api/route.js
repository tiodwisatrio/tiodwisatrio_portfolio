import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
// Sentry example API route removed for production optimization
export async function GET() {
  return NextResponse.json({ data: "Removed Sentry Example API Route" });
}
