import { Router } from "express";
import supabase from "../utils/db.mjs"

const questionsRouter = Router()

questionsRouter.get("/", async (req, res) => {
    try {
      // Fetch questions from Supabase
      const  { data }  = await supabase.from('service').select('*');
             
      return res.status(200).json({
        message: "Successfully retrieved the list of questions.",
        data: data,
        
      });
    } catch (error) {
      //console.error("Error fetching questions:", error.message);
      return res.status(500).json({
        message: "Server could not retrieve questions due to a database error.",
      });
    }
  });
  export default questionsRouter;
