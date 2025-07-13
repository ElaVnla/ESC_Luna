export type HotelData = {
  id: string;
  imageCount: number;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  address1: string;
  rating: number;
  trustyou: {
    id: string;
    score: {
      overall: number;
      kaligo_overall: number;
      solo: number;
      couple: number;
      family: number;
      business: number;
    };
  };
  categories: {
    [key: string]: {
      name: string;
      score: number;
      popularity: number;
    };
  };
  amenities_ratings: {
    name: string;
    score: number;
  }[];
  description: string;
  amenities: {
    [key: string]: boolean;
  };
  original_metadata: {
    name: string | null;
    city: string;
    state: string | null;
    country: string;
  };
  image_details: {
    suffix: string;
    count: number;
    prefix: string;
  };
  hires_image_index: string;
  number_of_images: number;
  default_image_index: number;
  imgix_url: string;
  cloudflare_image_url: string;
  checkin_time: string;
};
