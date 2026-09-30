import services from "../../data/services";
import professionals from "../../data/professionals";

export const mockAdapter = {
  async getServices() {
    return { ok: true, data: services, error: null };
  },

  async getProfessionals() {
    return { ok: true, data: professionals, error: null };
  },

  async getAvailability() {
    return { ok: true, data: [], error: null };
  },

  async createBooking() {
    return {
      ok: false,
      data: null,
      error: {
        code: "MOCK_NOT_IMPLEMENTED",
        message: "La creación real de reservas todavía no está conectada."
      }
    };
  }
};
