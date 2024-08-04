import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gkbkjqfpxgecermudorr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYmtqcWZweGdlY2VybXVkb3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNjQwOTMsImV4cCI6MjAzNjk0MDA5M30.cTsnraUDWFUDiz1--O-h-n0Fv1cjBqAusAJ_nnUjRYY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
