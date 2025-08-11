import { destinationinterface  } from '../Home/destinationinterface';

import { useEffect, useState } from 'react'

export async function parsedestinations(): Promise<destinationinterface[]> 
{
  try 
  {
    const API_BASE = import.meta.env.VITE_API_BASE || '/api'; // default to /api

    const dfetch = await fetch(`${API_BASE}/Destinations/getAllDestinations`);
    if (!dfetch.ok) {
      throw new Error(`Failed to fetch destinations: ${dfetch.status}`);
    }
    const dlist: destinationinterface[] = await dfetch.json();
    console.log("Test", dlist);
    return dlist;
  } 
  catch (error) 
  {
    console.error("Error fetching destinations:", error);
    return [];
  }
}
