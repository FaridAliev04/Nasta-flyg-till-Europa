import { createClient } from "@supabase/supabase-js"

const supaBaseUrl=`https://cibpixfpkuzthabstkfx.supabase.co`
const supaBaseKey=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYnBpeGZwa3V6dGhhYnN0a2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MjE3NjMsImV4cCI6MjAwNzQ5Nzc2M30.HmT7wf63xl7EGXK4YogPc8j92d3zHU_-gAYwZrmyl8s`


export const supabase=createClient(supaBaseUrl,supaBaseKey)