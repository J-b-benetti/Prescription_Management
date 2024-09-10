export interface MedicationAdministration  {
    medication: {
        reference: string;
    };
    subject: {
        reference: string;
    };
    status: string;
    statusReason?: string[];
    occurenceDateTime: string;
    isSubPotent?: boolean;
    subPotentReason: string[];
    performer: {
        function?: CodeableConcept;
        actor: { reference: string };
      }[];
}

export interface CodeableConcept {
    coding: { system: string; code: string; display: string }[];
    text?: string;
  }
