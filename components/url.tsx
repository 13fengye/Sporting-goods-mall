export const NEXT_PUBLIC_URL = typeof window !== "undefined" ? `http://${window.location.host.replace(':3000','')}:8001` : "";