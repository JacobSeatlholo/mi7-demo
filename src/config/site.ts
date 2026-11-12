/**
 * Central site configuration for the Mi7 National Group demo website.
 * Every value below is real information published on mi7national.co.za
 * or on Mi7 official channels. Update WHATSAPP_NUMBER if Mi7 supplies a
 * dedicated sales WhatsApp line. The current number is the official
 * Mi7 Security Hyperstore assistance line published on their website.
 */
export const site = {
  name: "Mi7 National Group",
  motto: "Your Trust, Our Protection",
  description:
    "Bespoke security, armed response, emergency medical services and community wellness. Serving Pietermaritzburg, Hilton, Howick and communities across South Africa.",
  hotline: "0800 647 911",
  hotlineHref: "tel:0800647911",
  controlRoom: "24 Hour Emergency Control Room",
  email: "armedresponse@mi7nationalgroup.co.za",
  whatsappNumber: "27615496195", // official Mi7 Security Hyperstore WhatsApp line
  whatsappDisplay: "061 549 6195",
  facebook: "https://www.facebook.com/Mi7.National.Group",
  instagram: "https://www.instagram.com/mi7nationalgroup/",
  headOffice: {
    label: "Head Office",
    lines: ["26A Shortts Retreat Road", "Mkondeni, Pietermaritzburg", "KwaZulu-Natal, 3201"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=26A+Shortts+Retreat+Road+Mkondeni+Pietermaritzburg+3201",
  },
  responseOffice: {
    label: "Response Office",
    lines: ["60 Rosedale Road", "Mountain Rise, Pietermaritzburg", "KwaZulu-Natal, 3201"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=60+Rosedale+Road+Mountain+Rise+Pietermaritzburg+3201",
  },
  originalSite: "https://mi7national.co.za",
  hyperstoreUrl: "https://mi7national.co.za/hyperstore/",
} as const;

/** Build a WhatsApp deep link with a prefilled enquiry message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
