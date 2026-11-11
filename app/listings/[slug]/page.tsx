import type {Metadata} from "next";

import Link from "next/link";

import {notFound} from "next/navigation";

import {InnerShell} from "@/components/theme/shell";

import {ViewingForm} from "@/components/spaces/viewing-form";

import {PropertyCard} from "@/components/spaces/property-card";

import {spaces,formatRent,LANDMARK,relatedSpaces,typeLabel,typeRoute} from "@/lib/spaces";

type Params={params:Promise<{slug:string}>};

export function generateStaticParams(){return spaces.map(s=>({slug:s.slug}));}

export async function generateMetadata({params}:Params):Promise<Metadata>{const {slug}=await params;const s=spaces.find(s=>s.slug===slug);return s?{title:`${s.title} | Al Waqt`,description:s.description}:{};}

export default async function ListingPage({params}:Params){const {slug}=await params;const s=spaces.find(s=>s.slug===slug);if(!s)notFound();return <InnerShell><div className="nv-detail-wrap"><nav className="nv-detail-crumb" aria-label="Breadcrumb"><Link href="/rentals">All properties</Link><span>/</span><Link href={typeRoute[s.type]}>{typeLabel[s.type]}</Link><span>/</span><span aria-current="page">{s.title}</span></nav><div className="nv-detail-heading"><div><span className="nv-detail-tag">{s.type} for rent Â· Sample listing</span><h1>{s.title}</h1><p><i className="fas fa-map-marker-alt" aria-hidden="true"/> {s.location}{s.distance ? ` · ${s.distance} km from ${s.distanceLandmark}` : ""}</p></div><div className="nv-detail-price">{formatRent(s.price)}</div></div><div className="nv-detail-layout"><div><div className="nv-detail-photo"><img src={s.image} alt={`Illustrative image for ${s.title}`} fetchPriority="high"/><span>Illustrative photo · Request actual photos</span></div><div className="nv-detail-stats"><div><small>Space type</small><strong>{s.type}</strong></div><div><small>Area</small><strong>{s.size}</strong></div><div><small>Transaction</small><strong>{s.transaction}</strong></div><div><small>Availability</small><strong>Confirm on WhatsApp</strong></div></div><section className="nv-detail-section"><h2>A little more about this space</h2><p>{s.description}</p></section><section className="nv-detail-section"><h2>Whatâ€™s included</h2><ul className="nv-amenities">{(s.details.length?s.details:["Further details available on enquiry"]).map(d=><li key={d}><i className="fas fa-check" aria-hidden="true"/>{d}</li>)}</ul></section><section className="nv-detail-section"><h2>Location, with a little privacy</h2><div className="nv-location-box"><i className="fas fa-map-marker-alt" aria-hidden="true"/><div><strong>{s.location}</strong><p>{s.distance ? `${s.distance} km from ${s.distanceLandmark}.` : "Exact location available on enquiry."}</p></div></div><p>Ask for the exact location privately on WhatsApp when arranging your visit.</p></section><section className="nv-detail-section"><h2>Before you decide</h2><p>Ask about the asking price, terms, permitted use and availability. Measurements are as supplied; confirm them during your visit. The photograph is illustrative and does not show this specific property. Ask for actual photos on WhatsApp.</p><a className="nv-whatsapp" href="#enquiry">Ask a question on WhatsApp</a></section></div><aside className="nv-detail-aside"><ViewingForm title={s.title}/></aside></div><section className="nv-related"><div className="nv-heading"><div><h2>Keep exploring</h2><p>A few more spaces worth a look.</p></div><Link href={typeRoute[s.type]}>Browse {typeLabel[s.type].toLowerCase()}</Link></div><div className="nv-grid">{relatedSpaces(slug,3).map(s=><PropertyCard key={s.slug} space={s}/>)}</div></section></div></InnerShell>}

