import { Router } from "express";
import supabase from "../utils/db.mjs";

const servicesRouter = Router();

//-------Get Top Services------//
servicesRouter.get("/top3services", async (req, res) => {
  try {
    // Fetch questions from Supabase
    const { data } = await supabase.from("service").select("*").limit(3);

    return res.status(200).json({
      message: "Successfully retrieved the list of services.",
      data: data,
    });
  } catch (error) {
    //console.error("Error fetching questions:", error.message);
    return res.status(500).json({
      message: "Server could not retrieve services due to a database error.",
    });
  }
});

//-------Get test------//
servicesRouter.get("/serviceslist", async (req, res) => {
  try {
    // Fetch questions from Supabase
    const { data } = await supabase.from("service").select("*");

    return res.status(200).json({
      message: "Successfully retrieved the list of services.",
      data: data,
    });
  } catch (error) {
    //console.error("Error fetching questions:", error.message);
    return res.status(500).json({
      message: "Server could not retrieve services due to a database error.",
    });
  }
});

servicesRouter.get("/test", async (req, res) => {
  try {
    // Extract query parameters for filtering
    const { lowerprice, higherprice } = req.query;

    // Initialize the query
    let query = supabase
      .from('service')
      .select('image, service_name, category, service_detail(price)');

    // Apply filters based on the provided price range
    if (lowerprice) {
      query = query.gte('service_detail.price', parseFloat(lowerprice));
    }
    if (higherprice) {
      query = query.lte('service_detail.price', parseFloat(higherprice));
    }

    // Execute the query
    const { data, error } = await query;

    // Check for errors in the Supabase query
    if (error) {
      throw error;
    }

    // Sort service_detail prices in ascending order
    if (data) {
      data.forEach(service => {
        service.service_detail.sort((a, b) => a.price - b.price);
      });
    }

    return res.status(200).json({
      message: "Successfully retrieved the list of services.",
      data: data,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching services:", error.message);

    return res.status(500).json({
      message: "Server could not retrieve services due to a database error.",
    });
  }
});

export default servicesRouter;
