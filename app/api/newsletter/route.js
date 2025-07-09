import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id, is_active")
      .eq("email", email.toLowerCase())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Database check error:", checkError);
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }

    // If subscription exists and is active
    if (existingSubscription && existingSubscription.is_active) {
      return NextResponse.json(
        { message: "Email is already subscribed" },
        { status: 200 }
      );
    }

    // If subscription exists but is inactive, reactivate it
    if (existingSubscription && !existingSubscription.is_active) {
      const { error: updateError } = await supabase
        .from("newsletter_subscriptions")
        .update({
          is_active: true,
          subscribed_at: new Date().toISOString(),
        })
        .eq("id", existingSubscription.id);

      if (updateError) {
        console.error("Reactivation error:", updateError);
        return NextResponse.json(
          { error: "Failed to reactivate subscription" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "Successfully resubscribed to newsletter" },
        { status: 200 }
      );
    }

    // Create new subscription
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        {
          email: email.toLowerCase(),
          subscribed_at: new Date().toISOString(),
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter",
        subscription: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get total subscription count (for admin purposes)
    const { count, error } = await supabase
      .from("newsletter_subscriptions")
      .select("*", { count: "exact", head: true })
      .eq("is_active", true);

    if (error) {
      console.error("Count error:", error);
      return NextResponse.json(
        { error: "Failed to get subscription count" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Newsletter stats retrieved",
        total_subscribers: count,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter stats error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
