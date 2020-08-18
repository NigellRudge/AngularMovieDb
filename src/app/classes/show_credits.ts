
export interface ShowCredits {
    cast: ShowCast[];
    crew: ShowCrew[];
  }

interface ShowCrew {
    credit_id: string;
    department: string;
    id: number;
    name: string;
    gender: number;
    job: string;
    profile_path?: string;
}

interface ShowCast {
    character: string;
    credit_id: string;
    id: number;
    name: string;
    gender: number;
    profile_path?: string;
    order: number;
}