import { ReactNode } from "react";
import { MarketHeader, MarketFooter } from "./market-chrome";
export function InnerShell({children}:{children:ReactNode}){return <div className="nv-market nv-inner"><MarketHeader/><main>{children}</main><MarketFooter/></div>}
export const HomeShell=InnerShell;
