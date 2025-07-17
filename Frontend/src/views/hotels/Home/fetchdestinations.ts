import { destinationinterface  } from '../Home/destinationinterface';
<<<<<<< Updated upstream
import { useEffect, useState } from 'react'
=======
>>>>>>> Stashed changes
export async function parsedestinations(): Promise<destinationinterface[]> 
{
  try 
  {
    const dfetch = await fetch("http://localhost:3000/Destinations/getAllDestinations");
    if (!dfetch.ok) {
      throw new Error(`Failed to fetch destinations: ${dfetch.status}`);
    }
    const dlist: destinationinterface[] = await dfetch.json();
    return dlist;
  } 
  catch (error) 
  {
    console.error("Error fetching destinations:", error);
    return [];
  }
<<<<<<< Updated upstream
}

=======
}
>>>>>>> Stashed changes
