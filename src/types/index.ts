export interface Candidate {
  firstName: string;
  lastName: string;
  location: string;
  gender: string;
  workHistory: Array<{
    company: string;
    title: string;
    startDate: string;
    endDate: string;
  }>;
}

export interface CandidateList {
  candidate: Candidate[];
}
