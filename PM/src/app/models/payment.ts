
export interface Payment {
  identifier: { system?: string; value?: string }[];
  status: string; // active | cancelled | draft | entered-in-error
  created: string; // Creation date
  recipient?: { reference: string };
  amount: { value: number; currency: string };
}
