import { destinationinterface  } from '../Home/destinationinterface';

import { useEffect, useState } from 'react'

export async function parsedestinations(): Promise<destinationinterface[]> 
{
  try 
  {
    const dfetch = await fetch("http://localhost:3000/Destinations/getAllDestinations");
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
