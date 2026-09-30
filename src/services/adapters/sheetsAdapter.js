const getUrl = () => import.meta.env.VITE_GOOGLE_SCRIPT_URL;

async function request(params) {
  const url = getUrl();

  if (!url) {
    throw new Error("VITE_GOOGLE_SCRIPT_URL no está configurada.");
  }

  const response = await fetch(url, params);
  return response.json();
}

export const sheetsAdapter = {
  async getServices() {
    return request({
      method: "GET"
    });
  },

  async getProfessionals() {
    return request({
      method: "GET"
    });
  },

  async getAvailability() {
    return request({
      method: "GET"
    });
  },

  async createBooking(booking) {
    return request({
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(booking)
    });
  }
};
