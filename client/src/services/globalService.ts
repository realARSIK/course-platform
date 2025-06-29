import { getGlobalSettings } from "@/api/global";
import { GlobalSettings } from "@/types";
import { notFound } from "next/navigation";

export async function loadGlobalData(): Promise<GlobalSettings> {
  const res = await getGlobalSettings();

   if (!res || !res.data) {
    return notFound();
  }

  return res.data
}