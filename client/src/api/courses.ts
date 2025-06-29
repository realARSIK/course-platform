import { CoursesResponse, SingleCourseResponse } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getCourses(): Promise<CoursesResponse> {
  const res = await fetch(`${API_URL}/courses?populate=image`);

  if(!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json()
}



export async function getCoursesById(slug: string): Promise<SingleCourseResponse> {
  const res = await fetch(`${API_URL}/courses/${slug}`);

  if(!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json()
}