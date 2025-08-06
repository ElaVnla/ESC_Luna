export type HotelsListType = {
  id: number
  name: string
  address: string,
  latitude: number,
  longitude: number,
  images: string[]
  star_rating: number
  guest_rating: number
  amenities: string[]
  price: number
  // schemes?: string[]
}

export type HotelFetchProps = {
  hotel: HotelsListType;
  destinationId?: string;
  city?: string;
  state?: string;
  checkin?: string;
  checkout?: string;
  guests?: string;
  setShowMap?: (info: { latitude: number; longitude: number; address: string }) => void;
};

export type Filters = {
  starRatings: string[];
  guestRatings: string[];
  priceRanges: string[];
  guestRatingRange: [number, number];
};

export type HotelListFilterProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export interface HotelMapProps {
  hotels: HotelsListType[];
  selectedHotel: HotelsListType;
  rooms?: number;
  nights?: number;
  forceExpanded?: boolean;
  onClose?: () => void;
}