import { mockAdapter } from "./adapters/mockAdapter";
import { sheetsAdapter } from "./adapters/sheetsAdapter";

const useSheets = Boolean(import.meta.env.VITE_GOOGLE_SCRIPT_URL);
const adapter = useSheets ? sheetsAdapter : mockAdapter;

export const bookingApi = {
  getServices: () => adapter.getServices(),
  getProfessionals: () => adapter.getProfessionals(),
  getAvailability: (params) => adapter.getAvailability(params),
  createBooking: (booking) => adapter.createBooking(booking)
};
