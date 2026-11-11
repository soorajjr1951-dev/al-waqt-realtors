import Link from "next/link";
import { spaces } from "@/lib/spaces";
export function WhatsAppEnquiry({title,slug,className="nv-whatsapp"}:{title:string;slug?:string;className?:string}){const ref=slug??spaces.find(s=>s.title===title)?.slug;return <Link className={className} href={ref?`/listings/${ref}#enquiry`:"/rentals"}><i className="fab fa-whatsapp" aria-hidden="true"/> Enquire on WhatsApp</Link>}
