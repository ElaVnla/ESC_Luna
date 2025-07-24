export type RoomData = {
  searchCompleted: boolean | null;
  completed: boolean;
  status: string | null;
  currency: string | null;
  rooms: Rooms[];
};

export type Rooms = {
  key: string;
  roomDescription: string;
  roomNormalizedDescription: string;
  type: string;
  free_cancellation: boolean;
  long_description: string;
  roomAdditionalInfo: RoomAdditionalInfo;
  description: string;
  images: RoomImage[];
  amenities: string[];
  price_type: string;
  max_cash_payment: number;
  coverted_max_cash_payment: number;
  points: number;
  bonuses: number;
  bonus_programs: any[]; // replace `any` if you have structure
  bonus_tiers: any[];
  lowest_price: number;
  price: number;
  converted_price: number;
  lowest_converted_price: number;
  chargeableRate: number;
  market_rates: MarketRate[];
  base_rate: number;
  base_rate_in_currency: number;
  included_taxes_and_fees_total: number;
  included_taxes_and_fees_total_in_currency: number;
  excluded_taxes_and_fees_currency: string;
  excluded_taxes_and_fees_total: number;
  excluded_taxes_and_fees_total_in_currency: number;
  included_taxes_and_fees: TaxFee[];
  included_taxes_and_fees_in_currency: TaxFee[];
};

export type RoomAdditionalInfo = {
  breakfastInfo: string;
  displayFields: {
    special_check_in_instructions: string;
    check_in_instructions: string;
    know_before_you_go: string;
    fees_optional: string;
    fees_mandatory: string | null;
    kaligo_service_fee: number;
    hotel_fees: any[]; // structure not given
    surcharges: Surcharge[];
  };
};

export type RoomImage = {
  url: string;
  high_resolution_url: string;
  hero_image: boolean;
};

export type MarketRate = {
  supplier: string;
  rate: number;
};

export type TaxFee = {
  id: string;
  amount: number;
  currency: string;
};

export type Surcharge = {
  type: string;
  amount: number;
};

export type HotelsRoomCardType = {
  id: number
  name: string
  sale?: string
  images: RoomImage[]
  features: string
  price: number
  ammenities: string[]
  schemes?: string[]
}
