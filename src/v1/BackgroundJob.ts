import { axiosMasterMain } from "axios-master";

export const BackgroundJob = (config: {
  token: string;
  host: string;
  regionCode: string;
  logger: boolean;
}) => {
  return {
    GetBackgroundJobDetails: async (
      backgroundJobId: string,
    ): Promise<{
      success: boolean;
      message: string;
      data?: {
        Status: string;
        ResultCode: number;
        ErrorDescription: string;
        CinemaId: string;
        UserSessionId: string;
        VistaBookingNumber: number;
        VistaBookingId: string;
        VistaTransNumber: number;
        BalanceList: {
          BalanceTypeID: string;
          Name: string;
          Message: string;
          PointsRemaining: number;
          LifetimePointsBalanceDisplay: number;
          IsDefault: boolean;
          NameAlt: string;
          NameTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          RedemptionRate: number;
        }[];
        TicketPrintStream: string;
        OrderEmails: {
          EmailAddress: string;
          Successful: boolean;
          EmailType: number;
        }[];
      };
    }> => {
      try {
        // Construct the request URL with the backgroundJobId path parameter.
        const url = `${config.host}/WSVistaWebClient/OData.svc/BackgroundJob.svc/${backgroundJobId}`;

        // Send the GET request with headers including API token and region code if provided.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
              "Connect-Region-Code": config.regionCode, // Region code for localization
            },
          },
          {
            name: "GetBackgroundJobDetails", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
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
    },
  };
};
