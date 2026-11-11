import Link from "next/link";
export type Crumb={label:string;href?:string};
export function PageBanner({title,trail=[]}:{title:string;trail?:Crumb[]}){return <section className="nv-page-banner"><nav aria-label="Breadcrumb"><Link href="/">Home</Link>{trail.map((c,i)=><span key={i}><span aria-hidden="true"> / </span>{c.href?<Link href={c.href}>{c.label}</Link>:<span aria-current="page">{c.label}</span>}</span>)}</nav><h1>{title}</h1><p>Find your fit. Get the details. Start a conversation.</p></section>}
