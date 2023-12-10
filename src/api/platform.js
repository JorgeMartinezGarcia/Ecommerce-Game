import { ENV } from "@/utils";

export class Platform {
  async getAll() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?populate=icon`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
