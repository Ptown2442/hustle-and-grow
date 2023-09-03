export default [{'id': 1, 'name': 'Phoenix', 'location': 'phoenix', 'timezone': 2}, {'id': 2, 'name': 'Los-Angeles', 'location': 'losangelos', 'timezone': 1}, {'id': 3, 'name': 'New York', 'location': 'newyork', 'timezone': 4}, {'id': 4, 'name': 'Biloxi', 'location': 'biloxi', 'timezone': 3}, {'id': 4, 'name': 'Pensacola', 'location': 'pensacola', 'timezone': 4}, {'id': 5, 'name': 'Seattle', 'location': 'seattle', 'timezone': 1}, {'id': 6, 'name': 'Detroit', 'location': 'detroit', 'timezone': 3}, {'id': 7, 'name': 'Chicago', 'location': 'chicago', 'timezone': 3}]

export interface Cities {
    id: number;
    name: string;
    location: string;
    timezone: number;
}