import { GlobalSettingsResponse } from "@/types/global";
import qs from "qs"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGlobalSettings(): Promise<GlobalSettingsResponse> {
  const query = qs.stringify({
    populate: {
      header: {
        populate: {
          navigation: true,
        },
      },
      footer: {
        populate: {
          linkGroups: {
            populate: {
              links: true,
            }
          },
          socialLinks: true,
          legalLinks: true
        },
      }
    }
  }, { 
    encodeValuesOnly: true, 
  })
  
  const res = await fetch(`${API_URL}/global?${query}`);


  if(!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json()
}