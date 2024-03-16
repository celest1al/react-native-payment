import base64 from "base-64";

const PKG_NAME = "";
const PKG_VERSION = "";
const PROXY_URL = process.env.EXPO_PUBLIC_PROXY_URL ?? "";
const vaultEndpoint = `${PROXY_URL}/vault/`
const apiEndpoint = `${PROXY_URL}/api/`;
const PUBLIC_KEY = process.env.EXPO_PUBLIC_OMISE_PUBLIC_KEY ?? "";
const SECRET_KEY = process.env.EXPO_PUBLIC_OMISE_SECRET_KEY ?? "";

type Headers = {
  Authorization: string;
  "User-Agent": string;
  "Content-Type": string;
  "Access-Control-Allow-Origin": string;
  "Omise-Version"?: string;
};

type CreateTokenData = {
  card: TokenData;
};

type TokenData = {
  name: string;
  city: string;
  postal_code: number;
  number: string;
  expiration_month: number;
  expiration_year: number;
  security_code: number;
};

type CustomerData = {
  email: string;
};

type SourceData = {
  type: string;
  amount: number;
  currency: string;
};

type ChargeData = {
  amount: number;
  currency: string;
  card: string;
};

let _key = "";
let _apiVersion = "";

class ReactNativeOmise {
  constructor() {
    this.createSource = this.createSource.bind(this);
    this.createToken = this.createToken.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
    this.retrieveCustomer = this.retrieveCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.destroyCustomerCard = this.destroyCustomerCard.bind(this);
  }

  config(key: string, apiVersion = "2015-11-17") {
    _key = key;
    _apiVersion = apiVersion;
  }

  getHeaders(key: string) {
    let headers: Headers = {
      Authorization: "Basic " + base64.encode(key + ":"),
      "User-Agent": PKG_NAME + "/" + PKG_VERSION,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    if (_apiVersion && _apiVersion !== "") {
      headers["Omise-Version"] = _apiVersion;
    }

    return headers;
  }

  async createToken(data: CreateTokenData) {
    const tokenEndpoint = vaultEndpoint + "tokens";
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok && response.status === 200) {
        return await response.json();
      } else {
        console.log("response not ok", response);
        return await response.json();
      }
    } catch (error) {
      console.error("Error creating token:", error);
      return error;
    }
  }

  async createSource(data: SourceData) {
    const sourceEndpoint = `${apiEndpoint}sources`;
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(sourceEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok && response.status === 200) {
        return await response.json();
      } else {
        console.log("response not ok", response);
        throw await response.json();
      }
    } catch (error) {
      console.error("Error creating source:", error);
      throw error;
    }
  }

  async createCharge(data: ChargeData) {
    const sourceEndpoint = `${apiEndpoint}charges`;
    const headers = {
      Authorization: "Basic " + base64.encode(SECRET_KEY + ":"),
      "User-Agent": PKG_NAME + "/" + PKG_VERSION,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }

    try {
      const response = await fetch(sourceEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok && response.status === 200) {
        return await response.json();
      } else {
        console.log("response not ok", response);
        throw await response.json();
      }
    } catch (error) {
      console.error("Error creating source:", error);
      throw error;
    }
  }

  async createCustomer(data: CustomerData) {
    const customerEndpoint = `${apiEndpoint}customers`;
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(customerEndpoint, {
        method: "POST",
        cache: "no-cache",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        console.log("response not ok", response);
        throw response.json();
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  }

  async retrieveCustomer(customerId: string) {
    const customerEndpoint = `${apiEndpoint}customers/${customerId}`;
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(customerEndpoint, {
        method: "GET",
        cache: "no-cache",
        headers: headers,
      });

      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        console.log("response not ok", response);
        throw response.json();
      }
    } catch (error) {
      console.error("Error retrieving customer:", error);
      throw error;
    }
  }

  async updateCustomer(customerId: string, data: CustomerData) {
    const customerEndpoint = `${apiEndpoint}customers/${customerId}`;
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(customerEndpoint, {
        method: "PATCH",
        cache: "no-cache",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        console.log("response not ok", response);
        throw response.json();
      }
    } catch (error) {
      console.error("Error updating customer:", error);
      throw error;
    }
  }

  async destroyCustomerCard(customerId: string, cardId: string) {
    const customerEndpoint = `${apiEndpoint}customers/${customerId}/cards/${cardId}`;
    const headers = this.getHeaders(_key);

    try {
      const response = await fetch(customerEndpoint, {
        method: "DELETE",
        cache: "no-cache",
        headers: headers,
      });

      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        console.log("response not ok", response);
        throw response.json();
      }
    } catch (error) {
      console.error("Error destroying customer card:", error);
      throw error;
    }
  }
}

const reactNativeOmise = new ReactNativeOmise();

reactNativeOmise.config(PUBLIC_KEY, "2017-11-12");

export { reactNativeOmise };
