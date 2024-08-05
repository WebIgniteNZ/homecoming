"use server";

import { supabase } from "./supabase";

export const submitForm = async (formData, country, tickets) => {
  try {
    console.log("HEY", {
      email: formData.get("emailr"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      age: formData.get("age"),
      country,
      tickets: tickets !== "10 or more" ? tickets : 10,
    });
    const { data, error } = await supabase
      .from("Audience")
      .insert([
        {
          email: formData.get("emailr"),
          name: formData.get("name"),
          phone: formData.get("phone"),
          age: formData.get("age"),
          country,
          tickets: tickets !== "10 or more" ? tickets : 10,
        },
      ])
      .select();
    console.log(data, error);
    if (error && error.message) {
      return error.code === "23505" ? "You're already subscribed" : error.message;
    }
    if (data) return true;
  } catch (err) {
    console.log(err);
  }
  return false;
};
