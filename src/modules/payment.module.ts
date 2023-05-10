import axios, { Axios } from "axios";
import logger from "base/logger";
import { Config } from "convict";
import BadGatewayError from "interfaces/rest/errors/BadGatewayError";
import InvalidPayloadError from "interfaces/rest/errors/InvalidPayloadError";

class Paystack {
  paystackUrl: string;
  paystackSK: string;
  httpClient: Axios;

  constructor({ config }: { config: Config<{ [key: string]: string | number | object }> }) {
    const paystackUrl = config.get("paystack.paystackBaseUrl");
    const paystackSK = config.get("paystack.paystackSK");
    const httpClient = axios.create({
      baseURL: paystackUrl,
      headers: {
        Authorization: `Bearer ${paystackSK}`,
      },
    });
    this.httpClient = httpClient;
    this.paystackUrl = paystackUrl;
    this.paystackSK = paystackSK;
  }

  async verifyPayment(reference: string) {
    try {
      const response = await this.httpClient.get(`/transaction/verify/${reference}`);
      return response.data.data;
    } catch (error: any) {
      logger.error("An error occurred while verifying payment", {
        error: error.toString(),
      });
      if (error.response && error.response.status === 400) {
        throw new InvalidPayloadError(error.response.data.message);
      }
      throw new BadGatewayError("Could not verify payment at the moment. Please try again later");
    }
  }
}

export default Paystack;
