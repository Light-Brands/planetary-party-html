export type { Database, Json } from "./database";

/**
 * Domain types for Planet Party entities
 */

export interface Bioregion {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Guild {
  id: string;
  name: string;
  description: string | null;
  dimension: GuildDimension;
  createdAt: Date;
  updatedAt: Date;
}

export type GuildDimension =
  | "bioregional-intelligence"
  | "technology-sovereignty"
  | "ecosystem-weaving"
  | "community-capacity"
  | "storytelling-mythos"
  | "regenerative-governance"
  | "event-production"
  | "living-systems"
  | "regenerative-capital";

export interface Council {
  id: string;
  name: string;
  bioregionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: string;
  email: string;
  displayName: string | null;
  avatarUrl: string | null;
  bioregionId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Protocol phases representing the PPP cycle
 */
export type ProtocolPhase =
  | "sense"
  | "see"
  | "flow"
  | "celebrate"
  | "regenerate";

