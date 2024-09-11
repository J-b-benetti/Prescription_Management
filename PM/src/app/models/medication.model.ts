export interface MedicationAdministration  {
  medication: {
    reference: {
      reference : string;
    };
  };
  subject: {
    reference: string;
  };
  status: string;
  occurenceDateTime: string;
  isSubPotent?: boolean;
  subPotentReason: { text: string }[];
  performer: {
    function?: CodeableConcept;
    actor: { reference: { reference: string } };
  }[];
}

export interface CodeableConcept {
  coding: { system: string; code: string; display: string }[];
  text?: string;
}
