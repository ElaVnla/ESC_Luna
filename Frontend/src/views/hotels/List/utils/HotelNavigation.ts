export const getHotelDetailUrl = (params: {
  hotel_id: string;
  city?: string;
  state?: string;
  destination_id?: string;
  checkin?: string;
  checkout?: string;
  guests?: string;
  rooms?: string;
  lang?: string;
  currency?: string;
  partner_id?: string;
  landing_page?: string;
  product_type?: string;
}) => {
  const urlParams = new URLSearchParams({
    hotel_id: params.hotel_id,
    city: params.city || "",
    state: params.state || "",
    destination_id: params.destination_id || "",
    checkin: params.checkin || "",
    checkout: params.checkout || "",
    guests: params.guests || "1",
    rooms: params.rooms || "1",
    lang: params.lang || "en_US",
    currency: params.currency || "SGD",
    partner_id: params.partner_id || "1089",
    landing_page: params.landing_page || "wl-acme-earn",
    product_type: params.product_type || "earn",
  });
  return `/hotels/detail?${urlParams.toString()}`;
};
