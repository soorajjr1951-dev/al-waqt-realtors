"use client";

import Link from "next/link";

import { useEffect,useState } from "react";

import { Space,formatRent } from "@/lib/spaces";

import { WhatsAppEnquiry } from "./whatsapp-enquiry";

export function PropertyCard({space:s}:{space:Space}){const [saved,setSaved]=useState(false);useEffect(()=>{function sync(){try{const v=JSON.parse(localStorage.getItem("alwaqt-shortlist")||localStorage.getItem("nivasa-shortlist")||"[]");setSaved(Array.isArray(v)&&v.includes(s.slug));}catch{}}sync();window.addEventListener("alwaqt-saved",sync);window.addEventListener("nivasa-saved",sync);return()=>{window.removeEventListener("alwaqt-saved",sync);window.removeEventListener("nivasa-saved",sync);};},[s.slug]);function toggle(){try{const raw=JSON.parse(localStorage.getItem("alwaqt-shortlist")||localStorage.getItem("nivasa-shortlist")||"[]");const list:string[]=Array.isArray(raw)?raw:[];const updated=JSON.stringify(saved?list.filter(x=>x!==s.slug):[...list,s.slug]);localStorage.setItem("alwaqt-shortlist",updated);localStorage.setItem("nivasa-shortlist",updated);setSaved(!saved);window.dispatchEvent(new Event("alwaqt-saved"));window.dispatchEvent(new Event("nivasa-saved"));}catch{setSaved(!saved);}}

return <article className="nv-card"><div className="nv-card-image"><Link href={`/listings/${s.slug}`}><img src={s.image} alt={`Illustrative image for ${s.title}`} loading="lazy"/></Link><span className="nv-photo-disclosure">Illustrative photo</span><span className="nv-card-type">{s.transaction} · {s.reference}</span><button onClick={toggle} aria-pressed={saved} aria-label={`${saved?"Unsave":"Save"} ${s.title}`} className={saved?"is-saved":""}><i className={`${saved?"fas":"far"} fa-heart`} aria-hidden="true"/></button></div><div className="nv-card-content"><div className="nv-price">{formatRent(s.price)}</div><h3><Link href={`/listings/${s.slug}`}>{s.title}</Link></h3><p className="nv-distance"><i className="fas fa-map-marker-alt" aria-hidden="true"/> {s.location}</p><div className="nv-specs"><span>{s.size}</span>{s.details.slice(0,2).map(d=><span key={d}>{d}</span>)}</div><div className="nv-card-actions"><Link href={`/listings/${s.slug}`}>View details</Link><WhatsAppEnquiry title={s.title} slug={s.slug}/></div></div></article>}

