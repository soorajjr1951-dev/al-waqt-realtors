import { Space } from "./spaces";
export const categories=["All","Land","Offices","Shops","Buildings","Other spaces"] as const;
export type Category=typeof categories[number];
export function matchesCategory(s:Space,category:string){if(category==="All"||!category)return true;if(category==="Land")return s.type==="Plot";if(s.type==="Plot")return false;const title=s.title.toLowerCase();if(category==="Offices")return title.includes("office");if(category==="Shops")return title.includes("shop");if(category==="Buildings")return title.includes("building");return !/office|shop|building/.test(title);}
export function withinAttingalRadius(s:Space,km:string){return !km||(s.distance!==null&&s.distanceLandmark==="Attingal"&&s.distance<=Number(km));}
