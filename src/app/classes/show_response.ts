import { Show } from './show';

export interface ShowResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Show[];
}