import { config, jsonToQueryString } from "..";
import { axiosMasterMain } from "axios-master";

const Orders = async (
  cinemaId: string
): Promise<{
  success: boolean;
  message: string;
  data?: {
    order: {
      cinemaId: "0001";
      userSessionId: "7e72a258b5144bbf932589a1f0c0273b";
      orderTotalValueInCents: 0;
      taxValueInCents: 0;
      bookingFeeTotalValueInCents: 0;
      bookingFeeTaxValueInCents: 0;
      ticketFeeTotalValueInCents: 0;
      loyaltyPointsTotalCost: [];
      sessions: [];
      concessions: [];
      bookingFees: [];
      loyaltyMembershipPackageActivation: null;
      loyaltyIntegratedGiftCardActivation: null;
      appliedGiftCards: [];
      appliedLoyaltyPointsPayments: [];
      appliedPaymentVouchers: [];
      loyaltyPointsPayableValueInCents: 0;
      createdDateUtc: "2025-01-13T06:42:53.5912687Z";
      expiryDateUtc: "2025-01-13T06:52:53.5912687Z";
      hasCardPaymentPromotionTickets: false;
      promotionCards: [];
      customer: {
        firstName: "";
        lastName: "";
        email: "";
        phone: "";
        address: {
          zipCode: "";
        };
        dateOfBirth: null;
        gender: "";
      };
      bookingTip: null;
    };
    suggestedDeals: [];
  };
}> => {
  try {
    // Construct the request URL with the backgroundJobId path parameter.
    const url = `${config.host}/WSVistaWebClient/orders`;

    // Send the GET request with headers including API token and region code if provided.
    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`, // API token for authentication
          "Content-Type": "application/json", // Ensures the response format is JSON
          "Connect-Region-Code": config.regionCode, // Region code for localization
        },
        data: {
          cinemaId: cinemaId,
        },
      },
      {
        name: "orders", // Request identifier for logging and debugging
        timeout: 20000, // Timeout of 20 seconds for the request
        logger(data) {
          if (config.logger) {
            console.log(data); // Logs request data for debugging purposes
          }
        },
      }
    );

    // Return the 'data' from the successful response.
    return {
      success: true,
      message: "Request successful",
      data: res,
    };
  } catch (error) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
export default { Orders };
