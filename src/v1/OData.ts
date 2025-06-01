//OData.ts
import { axiosMasterMain } from "axios-master";
import { jsonToQueryString } from "..";
export const OData = (config: {
  token: string;
  host: string;
  regionCode: string;
  logger: boolean;
}) => {
  return {
    AddressModuleConfigs: async (body: {
      $expand?: string; // Expands related entities inline
      $filter?: string; // Filters the results, based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results.
      $top?: number; // Returns only the first n results.
      $skip?: number; // Skips the first n results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Description: string;
        Status: string;
        AssemblyName: string;
        ControlSettings: string;
        ServiceSettings: string;
        IsActive: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/AddressModuleConfigs${query}`,
            headers: {
              connectapitoken: `${config.token}`,
              "Content-Type": "application/json",
            },
          },
          {
            name: "AddressModuleConfigs",
            timeout: 20000,
            logger(data) {
              console.log("Request data:", data);
            },
          },
        );

        return {
          success: true,
          message: "Request successful",
          data: res.value, // Returning the 'value' array from the response
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },

    // Implementation Notes: This function fetches the list of all AdvanceBookingRuleExceptions from the OData service.
    // It accepts an optional 'body' object with OData query parameters like $expand, $filter, $select, $orderby, $top, and $skip.
    AdvanceBookingRuleExceptions: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        AdvanceBookingRuleExceptionId: number;
        SalesChannel: string;
        DaysInAdvance: number;
        BookingStartTime: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData endpoint using Axios with the given parameters in the query string.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/AdvanceBookingRuleExceptions${query}`,
            headers: {
              connectapitoken: `${config.token}`, // Authorization token.
              "Content-Type": "application/json", // Ensure the response is in JSON format.
            },
          },
          {
            name: "AdvanceBookingRuleExceptions", // Name for logging and debugging purposes.
            timeout: 20000, // Set a timeout of 20 seconds for the request.
            logger(data) {
              console.log("Request data:", data); // Logs request data for debugging.
            },
          },
        );

        // Implementation Notes: Returns the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message in case of failure.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all AdvanceBookingRules from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    AdvanceBookingRules: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        AdvanceBookingRuleId: number;
        AdvanceBookingRuleExceptions: {
          ID: string;
          CinemaId: string;
          AdvanceBookingRuleExceptionId: number;
          SalesChannel: string;
          DaysInAdvance: number;
          BookingStartTime: string;
        }[];
        DaysInAdvance: number;
        BookingStartTime: string;
        CalculatedAdvanceBookingDateFrom: string;
        AdvertiseInAdvance: boolean;
        MaxAdvanceMinutesForLoyaltyMember: number;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/AdvanceBookingRules${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "AdvanceBookingRules", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all AdvertisingMediaSets from the OData service.
    // Accepts OData query parameters to filter, expand, or limit the results.
    AdvertisingMediaSets: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        AdvertisingProfileId: string;
        Hopt: string;
        URL: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/AdvertisingMediaSets${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "AdvertisingMediaSets", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all AdvertisingProfiles from the OData service.
    // It accepts optional OData parameters for filtering, expanding, or sorting the results.
    AdvertisingProfiles: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Description: string;
        IsForMobile: boolean;
        Hopt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/AdvertisingProfiles${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "AdvertisingProfiles", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Attributes from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Attributes: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Description: string;
        ShortName: string;
        AltDescription: string;
        AltShortName: string;
        Message: string;
        MessageAlt: string;
        WarningMessage: string;
        WarningMessageAlt: string;
        SalesChannels: string;
        IsUsedForConcepts: boolean;
        IsUsedForSessionAdvertising: boolean;
        DisplayPriority: number;
        DescriptionTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        ShortNameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        MessageTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        SessionAttributeCinemaIDs: string[];
        IsPromoted: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Attributes${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Attributes", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all CinemaEvents from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    CinemaEvents: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
        Description: string;
        DescriptionAlt: string;
        StartDate: string;
        Status: number;
        CinemaIDs: string[];
        LinkedCinemas: {
          ID: string;
          CinemaNationalId: string;
          Name: string;
          NameAlt: string;
          ScheduledFilms: {
            ID: string;
            ScheduledFilmId: string;
            CinemaId: string;
            Sessions: {
              ID: string;
              CinemaId: string;
              ScheduledFilmId: string;
              SessionId: string;
              AreaCategoryCodes: string[];
              MinimumTicketPriceInCents: number;
              Showtime: string;
              IsAllocatedSeating: boolean;
              AllowChildAdmits: boolean;
              SeatsAvailable: number;
              AllowComplimentaryTickets: boolean;
              EventId: string;
              GlobalEventId: string;
              PriceGroupCode: string;
              ScreenName: string;
              ScreenNameAlt: string;
              ScreenNumber: number;
              CinemaOperatorCode: string;
              FormatCode: string;
              FormatHOPK: string;
              SalesChannels: string;
              Attributes: {
                ID: string;
                Description: string;
                ShortName: string;
                AltDescription: string;
                AltShortName: string;
                Message: string;
                MessageAlt: string;
                WarningMessage: string;
                WarningMessageAlt: string;
                SalesChannels: string;
                IsUsedForConcepts: boolean;
                IsUsedForSessionAdvertising: boolean;
                DisplayPriority: number;
                DescriptionTranslations: {
                  LanguageTag: string;
                  Text: string;
                }[];
                ShortNameTranslations: {
                  LanguageTag: string;
                  Text: string;
                }[];
                MessageTranslations: {
                  LanguageTag: string;
                  Text: string;
                }[];
                SessionAttributeCinemaIDs: string[];
                IsPromoted: boolean;
              }[];
              SessionAttributesNames: string[];
              ConceptAttributesNames: string[];
              AllowTicketSales: boolean;
              HasDynamicallyPricedTicketsAvailable: boolean;
              PlayThroughId: string;
              SessionBusinessDate: string;
              SessionDisplayPriority: number;
              GroupSessionsByAttribute: boolean;
              SoldoutStatus: number;
              TypeCode: string;
              InSeatDeliveryFee: {
                PriceType: number;
                FixedPriceInCents: number;
              };
              IsPublicScreening: boolean;
              Status: number;
            }[];
          }[];
          PhoneNumber: string;
          EmailAddress: string;
          Address1: string;
          Address2: string;
          City: string;
          Latitude: number;
          Longitude: number;
          ParkingInfo: string;
          LoyaltyCode: string;
          IsGiftStore: boolean;
          Description: string;
          DescriptionAlt: string;
          PublicTransport: string;
          CurrencyCode: string;
          AllowPrintAtHomeBookings: boolean;
          AllowOnlineVoucherValidation: boolean;
        }[];
        HasSeasonPassTicketsAvailable: boolean;
        NameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        DescriptionTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/CinemaEvents${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "CinemaEvents", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all CinemaOperatorGroups from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    CinemaOperatorGroups: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Description: string;
        Sequence: number;
        CinemaOperators: {
          ID: string;
          CinemaId: string;
          Code: string;
          Name: string;
          ShortName: string;
          IsDefault: boolean;
          HoOperatorCode: string;
          Groups: {
            ID: string;
            Description: string;
            Sequence: number;
            CinemaOperators: {};
          }[];
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/CinemaOperatorGroups${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "CinemaOperatorGroups", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all CinemaOperators from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    CinemaOperators: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        Code: string;
        Name: string;
        ShortName: string;
        IsDefault: boolean;
        HoOperatorCode: string;
        Groups: {
          ID: string;
          Description: string;
          Sequence: number;
          CinemaOperators: {};
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/CinemaOperators${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "CinemaOperators", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Cinemas from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Cinemas: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaNationalId: string;
        Name: string;
        NameAlt: string;
        ScheduledFilms: {
          ID: string;
          ScheduledFilmId: string;
          CinemaId: string;
          Sessions: {
            ID: string;
            CinemaId: string;
            ScheduledFilmId: string;
            SessionId: string;
            AreaCategoryCodes: string[];
            MinimumTicketPriceInCents: number;
            Showtime: string;
            IsAllocatedSeating: boolean;
            AllowChildAdmits: boolean;
            SeatsAvailable: number;
            AllowComplimentaryTickets: boolean;
            EventId: string;
            GlobalEventId: string;
            PriceGroupCode: string;
            ScreenName: string;
            ScreenNameAlt: string;
            ScreenNumber: number;
            CinemaOperatorCode: string;
            FormatCode: string;
            FormatHOPK: string;
            SalesChannels: string;
            Attributes: {
              ID: string;
              Description: string;
              ShortName: string;
              AltDescription: string;
              AltShortName: string;
              Message: string;
              MessageAlt: string;
              WarningMessage: string;
              WarningMessageAlt: string;
              SalesChannels: string;
              IsUsedForConcepts: boolean;
              IsUsedForSessionAdvertising: boolean;
              DisplayPriority: number;
              DescriptionTranslations: {
                LanguageTag: string;
                Text: string;
              }[];
              ShortNameTranslations: {
                LanguageTag: string;
                Text: string;
              }[];
              MessageTranslations: {
                LanguageTag: string;
                Text: string;
              }[];
              SessionAttributeCinemaIDs: string[];
              IsPromoted: boolean;
            }[];
            SessionAttributesNames: string[];
            ConceptAttributesNames: string[];
            AllowTicketSales: boolean;
            HasDynamicallyPricedTicketsAvailable: boolean;
            PlayThroughId: string;
            SessionBusinessDate: string;
            SessionDisplayPriority: number;
            GroupSessionsByAttribute: boolean;
            SoldoutStatus: number;
            TypeCode: string;
            InSeatDeliveryFee: {
              PriceType: number;
              FixedPriceInCents: number;
            };
            IsPublicScreening: boolean;
            Status: number;
          }[];
        }[];
        PhoneNumber: string;
        EmailAddress: string;
        Address1: string;
        Address2: string;
        City: string;
        Latitude: number;
        Longitude: number;
        ParkingInfo: string;
        LoyaltyCode: string;
        IsGiftStore: boolean;
        Description: string;
        DescriptionAlt: string;
        PublicTransport: string;
        CurrencyCode: string;
        AllowPrintAtHomeBookings: boolean;
        AllowOnlineVoucherValidation: boolean;
        ScreenAttributes: {
          ID: string;
          AttributeID: string;
          CinemaId: string;
          ScreenNumber: number;
          ShortName: string;
          IsConcept: boolean;
          Description: string;
          DescriptionAlt: string;
        }[];
        ConceptAttributes: {
          ID: string;
          Description: string;
          ShortName: string;
          AltDescription: string;
          AltShortName: string;
          Message: string;
          MessageAlt: string;
          WarningMessage: string;
          WarningMessageAlt: string;
          SalesChannels: string;
          IsUsedForConcepts: boolean;
          IsUsedForSessionAdvertising: boolean;
          DisplayPriority: number;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ShortNameTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          MessageTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          SessionAttributeCinemaIDs: string[];
          IsPromoted: boolean;
        }[];
        DisplaySofaSeats: boolean;
        TimeZoneId: string;
        HOPK: string;
        NameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        DescriptionTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        ParkingInfoTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        PublicTransportTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        TipsCompulsory: boolean;
        TipPercentages: string;
        ServerName: string;
        CinemaOperators: {
          ID: string;
          CinemaId: string;
          Code: string;
          Name: string;
          ShortName: string;
          IsDefault: boolean;
          HoOperatorCode: string;
          Groups: {
            ID: string;
            Description: string;
            Sequence: number;
            CinemaOperators: {};
          }[];
        }[];
        IsInTouchEnabled: boolean;
        IsGetHelpEnabled: boolean;
        PrimaryDataLanguage: string;
        AlternateDataLanguage1: string;
        AlternateDataLanguage2: string;
        AlternateDataLanguage3: string;
        HasConcessions: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Cinemas${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Cinemas", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Clients from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Clients: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ClientName: string;
        WorkstationCode: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Clients${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Clients", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Clubs from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Clubs: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        PrimaryLanguageTag: string;
        Levels: {
          ID: number;
          Name: string;
        }[];
        Translations: {
          LanguageTag: string;
          Text: string;
        }[];
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Clubs${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Clubs", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all CustomerRatingTypes from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    CustomerRatingTypes: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        RatingType: string;
        IsActive: boolean;
        AllowComment: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/CustomerRatingTypes${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "CustomerRatingTypes", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Deals from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Deals: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Description: string;
        ExtendedDescription: string;
        RequiresLoyalty: boolean;
        RequiresVoucher: boolean;
        TicketRequired: boolean;
        TicketDescriptor: string;
        AllowOverlaps: boolean;
        IsComboDeal: boolean;
        Priority: number;
        IsActive: boolean;
        TransactionStatus: boolean;
        CinemaIDs: string[];
        SalesChannels: {
          ID: string;
          HOPK: string;
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Deals${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Deals", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all EducationLevels from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    EducationLevels: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/EducationLevels${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "EducationLevels", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all FilmGenres from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    FilmGenres: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        Description: string;
        DescriptionTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/FilmGenres${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "FilmGenres", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all FilmPersonLinks from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    FilmPersonLinks: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        FilmId: string;
        PersonId: string;
        PersonType: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/FilmPersonLinks${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "FilmPersonLinks", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all FilmPersons from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    FilmPersons: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        FirstName: string;
        LastName: string;
        UrlToDetails: string;
        UrlToPicture: string;
        PersonType: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/FilmPersons${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "FilmPersons", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Films from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    Films: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ShortCode: string;
        Title: string;
        Rating: string;
        RatingDescription: string;
        Synopsis: string;
        SynopsisAlt: string;
        SynopsisTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        ShortSynopsis: string;
        HOFilmCode: string;
        CorporateFilmId: string;
        RunTime: number;
        OpeningDate: string;
        GraphicUrl: string;
        FilmNameUrl: string;
        TrailerUrl: string;
        AdditionalUrls: {
          Sequence: number;
          Description: string;
          Url: string;
        }[];
        IsComingSoon: boolean;
        IsScheduledAtCinema: boolean;
        TitleAlt: string;
        RatingAlt: string;
        RatingDescriptionAlt: string;
        ShortSynopsisAlt: string;
        WebsiteUrl: string;
        GenreId: string;
        GenreId2: string;
        GenreId3: string;
        EDICode: string;
        FormatCodes: string[];
        TwitterTag: string;
        TitleTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        ShortSynopsisTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        RatingDescriptionTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        CustomerRatingStatistics: {
          RatingCount: number;
          AverageScore: number;
        };
        CustomerRatingTrailerStatistics: {
          RatingCount: number;
          RatingCountLiked: number;
        };
        FilmWebId: string;
        MovieXchangeCode: string;
        DistributorName: string;
        GovernmentCode: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Films${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "Films", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a specific client based on the provided client ID.
    GetClient: async (
      id: string,
    ): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ClientClass: string;
        WorkstationCode: string;
      };
    }> => {
      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided client ID.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetClient?id=${id}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetClient", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the client data from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Coming Soon Scheduled Films from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    GetComingSoonScheduledFilms: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects specific properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
      TargetDateStart?: string; // Start date for filtering films
      TargetDateEnd?: string; // End date for filtering films
      IncludeSessions?: boolean; // Include session data for the films
      cinemaid?: string; // Filter by specific cinema
      JoinRelatedData?: boolean; // Join related data for films
      CinemaOperatorCode?: string; // Filter by cinema operator
      GenreCode?: string; // Filter by film genre
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ScheduledFilmId: string;
        CinemaId: string;
        Sessions: {
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: {
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
            DescriptionTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            ShortNameTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            MessageTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            SessionAttributeCinemaIDs: string[];
            IsPromoted: boolean;
          }[];
          SessionAttributesNames: string[];
          ConceptAttributesNames: string[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: {
            PriceType: number;
            FixedPriceInCents: number;
          };
          IsPublicScreening: boolean;
          Status: number;
        }[];
        FirstDaysSessions: {
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: {
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
            DescriptionTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            ShortNameTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            MessageTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            SessionAttributeCinemaIDs: string[];
            IsPromoted: boolean;
          }[];
          SessionAttributesNames: string[];
          ConceptAttributesNames: string[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: {
            PriceType: number;
            FixedPriceInCents: number;
          };
          IsPublicScreening: boolean;
          Status: number;
        }[];
        FutureSessions: {
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: {
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
            DescriptionTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            ShortNameTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            MessageTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            SessionAttributeCinemaIDs: string[];
            IsPromoted: boolean;
          }[];
          SessionAttributesNames: string[];
          ConceptAttributesNames: string[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: {
            PriceType: number;
            FixedPriceInCents: number;
          };
          IsPublicScreening: boolean;
          Status: number;
        }[];
        Title: string;
        TitleAlt: string;
        Distributor: string;
        Rating: string;
        RatingAlt: string;
        RatingDescription: string;
        RatingDescriptionAlt: string;
        Synopsis: string;
        SynopsisAlt: string;
        OpeningDate: string;
        FilmHOPK: string;
        FilmHOCode: string;
        ShortCode: string;
        RunTime: string;
        TrailerUrl: string;
        Cast: {
          ID: string;
          FirstName: string;
          LastName: string;
          UrlToDetails: string;
          UrlToPicture: string;
          PersonType: string;
        }[];
        DisplaySequence: number;
        TwitterTag: string;
        HasSessionsAvailable: boolean;
        GraphicUrl: string;
        CinemaName: string;
        CinemaNameAlt: string;
        AllowTicketSales: boolean;
        AdvertiseAdvanceBookingDate: boolean;
        AdvanceBookingDate: string;
        AdvanceBookingDateOffset: string;
        LoyaltyAdvanceBookingDate: string;
        LoyaltyAdvanceBookingDateOffset: string;
        HasDynamicallyPricedTicketsAvailable: boolean;
        IsPlayThroughMarketingFilm: boolean;
        PlayThroughFilms: any[];
        CustomerRatingStatistics: {
          RatingCount: number;
          AverageScore: number;
        };
        CustomerRatingTrailerStatistics: {
          RatingCount: number;
          RatingCountLiked: number;
        };
        NationalOpeningDate: string;
        GenreId: string;
        GenreId2: string;
        GenreId3: string;
        CorporateFilmId: string;
        EDICode: string;
        GovernmentCode: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetComingSoonScheduledFilms${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetComingSoonScheduledFilms", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of delivery windows for a specific cinema from the OData service.
    // It accepts optional OData parameters to filter, expand, or sort the results.
    GetDeliveryWindowsForCinema: async (body: {
      cinemaid: string; // The ID of the cinema for which to retrieve delivery windows
      $expand?: string; // Expands related entities inline
      $filter?: string; // Filters the results based on a Boolean condition
      $select?: string; // Selects specific properties to include in the response
      $orderby?: string; // Sorts the results by the given property
      $top?: number; // Limits the number of returned results to the first 'n' entries
      $skip?: number; // Skips the first 'n' results
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        Description: string;
        DeliveryWindow: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided cinema ID and query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetDeliveryWindowsForCinema?cinemaid=${body.cinemaid}${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetDeliveryWindowsForCinema", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches the Loyalty configuration settings from the OData service.
    GetLoyaltySettings: async (): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        AllowMultiplePreferredComplexes: boolean;
        AllowMultiplePreferredSessions: boolean;
        AllowPublicLoyaltyMembership: boolean;
        IsPINNumberRequired: boolean;
        DisplayLoyaltyExpiryWarnings: boolean;
        DisplayAverageRatingForRatings: boolean;
      };
    }> => {
      try {
        // Implementation Notes: Sending a GET request to the OData service to retrieve loyalty settings.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetLoyaltySettings`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetLoyaltySettings", // Request identifier for logging and debugging
            timeout: 200000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the data from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches the Member Field Settings for Loyalty Membership from the OData service.
    // It accepts a `postype` parameter to specify the type of member field settings.
    GetMemberFieldSettings: async (
      postype: string,
    ): Promise<{
      success: boolean;
      message: string;
      data?: {
        RequiredFields: {
          FirstName: boolean;
          LastName: boolean;
          Phone: boolean;
          Address: boolean;
          Email: boolean;
          NationalId: boolean;
          ExternalId: boolean;
          Birthday: boolean;
          Gender: boolean;
          MobilePhone: boolean;
          HomePhone: boolean;
          FavouriteSite: boolean;
        };
        EditFields: {
          FirstName: boolean;
          LastName: boolean;
          Phone: boolean;
          Address: boolean;
          Email: boolean;
          NationalId: boolean;
          ExternalId: boolean;
          Birthday: boolean;
          Gender: boolean;
          MobilePhone: boolean;
          HomePhone: boolean;
          FavouriteSite: boolean;
        };
        DisplayFields: {
          FirstName: boolean;
          LastName: boolean;
          Phone: boolean;
          Address: boolean;
          Email: boolean;
          NationalId: boolean;
          ExternalId: boolean;
          Birthday: boolean;
          Gender: boolean;
          MobilePhone: boolean;
          HomePhone: boolean;
          FavouriteSite: boolean;
        };
      };
    }> => {
      try {
        // Implementation Notes: Sending a GET request to the OData service with the specified postype parameter.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetMemberFieldSettings?postype=${postype}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetMemberFieldSettings", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Returning the response data.
        return {
          success: true,
          message: "Request successful",
          data: res, // The response contains the required, editable, and displayable fields for the loyalty member settings
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches the scheduled films that are currently showing from the OData service.
    GetNowShowingScheduledFilms: async (body: {
      IncludeFutureSessions?: boolean; // Whether to include future sessions in the results
      saleschannelid?: string; // The sales channel used to filter results
      $expand?: string; // Expands related entities inline
      $filter?: string; // Filters the results based on a Boolean condition
      $select?: string; // Selects specific properties to include in the response
      $orderby?: string; // Sorts the results by the given property
      $top?: number; // Limits the number of returned results to the first 'n' entries
      $skip?: number; // Skips the first 'n' results
      GenreCode?: string; // Filter by genre code
      JoinRelatedData?: boolean; // Whether to join related data
      CinemaOperatorCode?: string; // The cinema operator code to filter results
      FilmName?: string; // Filter by film name
      JoinSessions?: boolean; // Whether to join session data
      IncludeEventFilms?: boolean; // Whether to include event films in the results
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ScheduledFilmId: string;
        CinemaId: string;
        Sessions: {
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: {
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
            DescriptionTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            ShortNameTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            MessageTranslations: {
              LanguageTag: string;
              Text: string;
            }[];
            SessionAttributeCinemaIDs: string[];
            IsPromoted: boolean;
          }[];
          SessionAttributesNames: string[];
          ConceptAttributesNames: string[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: {
            PriceType: number;
            FixedPriceInCents: number;
          };
          IsPublicScreening: boolean;
          Status: number;
        }[];
        FutureSessions: {
          // Structure same as `Sessions`
        }[];
        HasFutureSessions: boolean;
        Title: string;
        TitleAlt: string;
        Distributor: string;
        Rating: string;
        RatingAlt: string;
        RatingDescription: string;
        RatingDescriptionAlt: string;
        Synopsis: string;
        SynopsisAlt: string;
        OpeningDate: string;
        FilmHOPK: string;
        FilmHOCode: string;
        ShortCode: string;
        RunTime: string;
        TrailerUrl: string;
        Cast: {
          ID: string;
          FirstName: string;
          LastName: string;
          UrlToDetails: string;
          UrlToPicture: string;
          PersonType: string;
        }[];
        DisplaySequence: number;
        TwitterTag: string;
        HasSessionsAvailable: boolean;
        GraphicUrl: string;
        CinemaName: string;
        CinemaNameAlt: string;
        AllowTicketSales: boolean;
        AdvertiseAdvanceBookingDate: boolean;
        AdvanceBookingDate: string;
        AdvanceBookingDateOffset: string;
        LoyaltyAdvanceBookingDate: string;
        LoyaltyAdvanceBookingDateOffset: string;
        HasDynamicallyPricedTicketsAvailable: boolean;
        IsPlayThroughMarketingFilm: boolean;
        PlayThroughFilms: {}[];
        CustomerRatingStatistics: {
          RatingCount: number;
          AverageScore: number;
        };
        CustomerRatingTrailerStatistics: {
          RatingCount: number;
          RatingCountLiked: number;
        };
        NationalOpeningDate: string;
        GenreId: string;
        GenreId2: string;
        GenreId3: string;
        CorporateFilmId: string;
        EDICode: string;
        GovernmentCode: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the query parameters
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetNowShowingScheduledFilms${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetNowShowingScheduledFilms", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the successful response
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches the sessions currently showing.
    GetNowShowingSessions: async (body: {
      saleschannelid?: string; // The sales channel used to filter results
      $expand?: string; // Expands related entities inline (e.g. Attributes)
      $filter?: string; // Filters the results based on a Boolean condition
      $select?: string; // Selects specific properties to include in the response
      $orderby?: string; // Sorts the results by the given property
      $top?: number; // Limits the number of returned results to the first 'n' entries
      $skip?: number; // Skips the first 'n' results
      CinemaOperatorCode?: string; // The cinema operator code to filter results
      JoinRelatedData?: boolean; // Whether to join related data
      JoinSessions?: boolean; // Whether to join session data
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        ScheduledFilmId: string;
        SessionId: string;
        AreaCategoryCodes: string[];
        MinimumTicketPriceInCents: number;
        Showtime: string;
        IsAllocatedSeating: boolean;
        AllowChildAdmits: boolean;
        SeatsAvailable: number;
        AllowComplimentaryTickets: boolean;
        EventId: string;
        GlobalEventId: string;
        PriceGroupCode: string;
        ScreenName: string;
        ScreenNameAlt: string;
        ScreenNumber: number;
        CinemaOperatorCode: string;
        FormatCode: string;
        FormatHOPK: string;
        SalesChannels: string;
        Attributes: {
          ID: string;
          Description: string;
          ShortName: string;
          AltDescription: string;
          AltShortName: string;
          Message: string;
          MessageAlt: string;
          WarningMessage: string;
          WarningMessageAlt: string;
          SalesChannels: string;
          IsUsedForConcepts: boolean;
          IsUsedForSessionAdvertising: boolean;
          DisplayPriority: number;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ShortNameTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          MessageTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          SessionAttributeCinemaIDs: string[];
          IsPromoted: boolean;
        }[];
        SessionAttributesNames: string[];
        ConceptAttributesNames: string[];
        AllowTicketSales: boolean;
        HasDynamicallyPricedTicketsAvailable: boolean;
        PlayThroughId: string;
        SessionBusinessDate: string;
        SessionDisplayPriority: number;
        GroupSessionsByAttribute: boolean;
        SoldoutStatus: number;
        TypeCode: string;
        InSeatDeliveryFee: {
          PriceType: number;
          FixedPriceInCents: number;
        };
        IsPublicScreening: boolean;
        Status: number;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the query parameters
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetNowShowingSessions${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensures the response format is JSON
            },
          },
          {
            name: "GetNowShowingSessions", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the successful response
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Function to fetch scheduled films for a specific cinema
    GetScheduledFilms: async (params: {
      cinemaId?: string;
      salesChannelId?: string;
      filmId?: string;
      startDate?: string;
      endDate?: string;
      salesRestriction?: string;
      TagsOrAttributes?: string;
      ExpandSessions?: boolean;
      ExpandSalesChannels?: boolean;
      CinemaOperatorCode?: string;
      JoinRelatedData?: boolean;
      JoinSessions?: boolean;
      JoinFilms?: boolean;
      $filter?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ScheduledFilmId: string;
        CinemaId: string;
        Sessions: Array<{
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: Array<{
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
            DescriptionTranslations: Array<{
              LanguageTag: string;
              Text: string;
            }>;
            ShortNameTranslations: Array<{ LanguageTag: string; Text: string }>;
            MessageTranslations: Array<{ LanguageTag: string; Text: string }>;
            SessionAttributeCinemaIDs: string[];
            IsPromoted: boolean;
          }>;
          SessionAttributesNames: string[];
          ConceptAttributesNames: string[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: { PriceType: number; FixedPriceInCents: number };
          IsPublicScreening: boolean;
          Status: number;
        }>;
        HasFutureSessions: boolean;
        Title: string;
        Distributor: string;
        Rating: string;
        Synopsis: string;
        OpeningDate: string;
        GraphicUrl: string;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetScheduledFilms${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json",
            },
          },
          {
            name: "GetScheduledFilms", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the scheduled films data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Function to fetch site groups for a cinema
    GetSiteGroupsForCinema: async (params: {
      clientId?: string;
      cinemaHOPK?: string;
      $filter?: string;
      $select?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        AreaCode: string;
        ClientId: string;
        Cinemas: Array<{
          ID: string;
          Name: string;
          ScheduledFilms: Array<{
            ID: string;
            Title: string;
            Sessions: Array<{
              ID: string;
              CinemaId: string;
              ScheduledFilmId: string;
              SessionId: string;
              Showtime: string;
              MinimumTicketPriceInCents: number;
            }>;
          }>;
        }>;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/GetSiteGroupsForCinema${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json",
            },
          },
          {
            name: "GetSiteGroupsForCinema", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the site group data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Function to fetch Income Ranges
    IncomeRanges: async (params: {
      $expand?: string;
      $filter?: string;
      $select?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/OData.svc/IncomeRanges${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json",
            },
          },
          {
            name: "GetIncomeRanges", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the income range data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Function to fetch Languages
    Languages: async (params: {
      $expand?: string;
      $filter?: string;
      $select?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        FileName: string;
        IETFTag: string;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/OData.svc/Languages${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json",
            },
          },
          {
            name: "GetLanguages", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the languages data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Function to fetch Loyalty Cinemas
    LoyaltyCinemas: async (params: {
      $expand?: string;
      $filter?: string;
      $select?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/OData.svc/LoyaltyCinemas${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json",
            },
          },
          {
            name: "GetLoyaltyCinemas", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the loyalty cinemas data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Function to fetch Loyalty Genre Preferences using dynamic token from config
    LoyaltyGenrePreferences: async (params: {
      $expand?: string;
      $filter?: string;
      $select?: string;
      $orderby?: string;
      $top?: number;
      $skip?: number;
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert params to query string
      const queryString = jsonToQueryString(params);

      try {
        // Sending GET request to the OData service
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/OData.svc/LoyaltyGenrePreferences${queryString}`,
            headers: {
              connectapitoken: `${config.token}`, // Using the dynamic token from the config
              "Connect-Region-Code": `${config.regionCode}`, // Using dynamic region code
              "Content-Type": "application/json", // Content type for the request
            },
          },
          {
            name: "GetLoyaltyGenrePreferences", // Request identifier for logging
            timeout: 20000,
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Returning the response with the loyalty genre preferences data
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all LoyaltySettings from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    LoyaltySettings: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        AllowMultiplePreferredComplexes: boolean;
        AllowGenrePreferenceSelection: boolean;
        AllowSignInToMultipleMemberships: boolean;
        IsPinNumberRequired: boolean;
        NumOfMonthsBeforePointsExpiry: number;
        DisplayAverageCustomerRatings: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/LoyaltySettings${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "LoyaltySettings", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all MembershipPrograms from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    MembershipPrograms: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        ClubId: string;
        Club: {
          PrimaryLanguageTag: string;
          Levels: {
            Id: number;
            Name: string;
          }[];
          NameTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ID: string;
          Name: string;
          NameAlt: string;
        };
        RenewItemId: string;
        ActivateItemId: string;
        LevelId: string;
        RenewalPeriod: number;
        RenewalPeriodUnit: string;
        ActivateConcessionItem: {
          Id: string;
          HeadOfficeItemCode: string;
          HOPK: string;
          Description: string;
          DescriptionAlt: string;
          ExtendedDescription: string;
          ExtendedDescriptionAlt: string;
          PriceInCents: number;
          TaxInCents: number;
          IsVariablePriceItem: boolean;
          MinimumVariablePriceInCents: number;
          MaximumVariablePriceInCents: number;
          ItemClassCode: string;
          RequiresPickup: boolean;
          CanGetBarcode: boolean;
          ShippingMethod: string;
          RestrictToLoyalty: boolean;
          LoyaltyDiscountCode: string;
          RecognitionMaxQuantity: number;
          RecognitionPointsCost: number;
          IsRecognitionOnly: boolean;
          RecognitionId: number;
          RecognitionSequenceNumber: number;
          RecognitionExpiryDate: string;
          IsAvailableForInSeatDelivery: boolean;
          IsAvailableForPickupAtCounter: boolean;
          VoucherSaleType: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          DiscountsAvailable: {
            Code: string;
            Description: string;
            PriceToUseInCents: number;
            DiscountType: number;
            DiscountValue: number;
            IsLoyaltyOnly: boolean;
            MaxQuantity: number;
            PointsCost: number;
            HOPK: string;
            RequiresQualifyingModifier: boolean;
            QualifyingModifiers: string[];
            DiscountTrigger: number;
          }[];
        };
        RenewConcessionItem: {
          Id: string;
          HeadOfficeItemCode: string;
          HOPK: string;
          Description: string;
          DescriptionAlt: string;
          ExtendedDescription: string;
          ExtendedDescriptionAlt: string;
          PriceInCents: number;
          TaxInCents: number;
          IsVariablePriceItem: boolean;
          MinimumVariablePriceInCents: number;
          MaximumVariablePriceInCents: number;
          ItemClassCode: string;
          RequiresPickup: boolean;
          CanGetBarcode: boolean;
          ShippingMethod: string;
          RestrictToLoyalty: boolean;
          LoyaltyDiscountCode: string;
          RecognitionMaxQuantity: number;
          RecognitionPointsCost: number;
          IsRecognitionOnly: boolean;
          RecognitionId: number;
          RecognitionSequenceNumber: number;
          RecognitionExpiryDate: string;
          IsAvailableForInSeatDelivery: boolean;
          IsAvailableForPickupAtCounter: boolean;
          VoucherSaleType: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          DiscountsAvailable: {
            Code: string;
            Description: string;
            PriceToUseInCents: number;
            DiscountType: number;
            DiscountValue: number;
            IsLoyaltyOnly: boolean;
            MaxQuantity: number;
            PointsCost: number;
            HOPK: string;
            RequiresQualifyingModifier: boolean;
            QualifyingModifiers: string[];
            DiscountTrigger: number;
          }[];
        };
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/MembershipPrograms${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "MembershipPrograms", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Occupations from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    Occupations: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Occupations${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "Occupations", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all people involved in the production of films from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    Persons: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        FirstName: string;
        LastName: string;
        UrlToDetails: string;
        UrlToPicture: string;
        IsTalent: boolean;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Persons${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "Persons", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all PlayThroughSessions from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    PlayThroughSessions: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        ScheduledFilmId: string;
        SessionId: string;
        PlayThroughId: string;
        Showtime: string;
        IsAllocatedSeating: boolean;
        AllowChildAdmits: boolean;
        ScreenName: string;
        ScreenNameAlt: string;
        ScreenNumber: number;
        CinemaOperatorCode: string;
        FormatCode: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/PlayThroughSessions${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "PlayThroughSessions", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all Preferences from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    Preferences: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        PreferenceTypeID: string;
        ID: string;
        Name: string;
        NameAlt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Preferences${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "Preferences", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all PreferenceTypes from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    PreferenceTypes: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ClassificationID: number;
        Preferences: {
          PreferenceTypeID: string;
          ID: string;
          Name: string;
          NameAlt: string;
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/PreferenceTypes${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "PreferenceTypes", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all SalesProfiles from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    SalesProfiles: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        SalesProfileId: string;
        AdvanceBookingRuleId: string;
        Cinema: string;
        MaxAdvanceMinutesForLoyaltyMember: boolean;
        AdvanceBookingRuleExceptions: {
          ID: string;
          CinemaId: string;
          AdvanceBookingRuleExceptionId: number;
          SalesChannel: string;
          DaysInAdvance: number;
          BookingStartTime: string;
          CalculatedBookingStartTime: string;
          AdvertiseInAdvance: boolean;
          MaxAdvanceMinutesForLoyaltyMember: boolean;
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Implementation Notes: Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/SalesProfiles${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "SalesProfiles", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Implementation Notes: Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
        };
      } catch (error) {
        // Implementation Notes: Logs and returns an error message if the request fails.
        console.error("Request failed", error?.response?.data);
        return {
          success: false,
          message: error?.response?.data?.message || "An error occurred",
        };
      }
    },
    // Implementation Notes: This function fetches a list of all ScheduledFilms from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    ScheduledFilms: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        ScheduledFilmId: string;
        CinemaId: string;
        Sessions: {
          ID: string;
          CinemaId: string;
          ScheduledFilmId: string;
          SessionId: string;
          AreaCategoryCodes: string[];
          MinimumTicketPriceInCents: number;
          Showtime: string;
          IsAllocatedSeating: boolean;
          AllowChildAdmits: boolean;
          SeatsAvailable: number;
          AllowComplimentaryTickets: boolean;
          EventId: string;
          GlobalEventId: string;
          PriceGroupCode: string;
          ScreenName: string;
          ScreenNameAlt: string;
          ScreenNumber: number;
          CinemaOperatorCode: string;
          FormatCode: string;
          FormatHOPK: string;
          SalesChannels: string;
          Attributes: {
            ID: string;
            Description: string;
            ShortName: string;
            AltDescription: string;
            AltShortName: string;
            Message: string;
            MessageAlt: string;
            WarningMessage: string;
            WarningMessageAlt: string;
            SalesChannels: string;
            IsUsedForConcepts: boolean;
            IsUsedForSessionAdvertising: boolean;
            DisplayPriority: number;
          }[];
          AllowTicketSales: boolean;
          HasDynamicallyPricedTicketsAvailable: boolean;
          PlayThroughId: string;
          SessionBusinessDate: string;
          SessionDisplayPriority: number;
          GroupSessionsByAttribute: boolean;
          SoldoutStatus: number;
          TypeCode: string;
          InSeatDeliveryFee: {
            PriceType: number;
            FixedPriceInCents: number;
          };
          IsPublicScreening: boolean;
          Status: number;
        }[];
        Title: string;
        Distributor: string;
        Rating: string;
        Synopsis: string;
        OpeningDate: string;
        TrailerUrl: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/ScheduledFilms${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "ScheduledFilms", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all ScheduledFilmSalesProfileLinks from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    ScheduledFilmSalesProfileLinks: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        ScheduledFilmSalesProfileLinkId: number;
        ScheduledFilmId: string;
        SalesProfileId: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/ScheduledFilmSalesProfileLinks${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "ScheduledFilmSalesProfileLinks", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all ScreenAttributes from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    ScreenAttributes: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        AttributeID: string;
        CinemaId: string;
        ScreenNumber: number;
        IsConcept: boolean;
        Description: string;
        DescriptionAlt: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/ScreenAttributes${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "ScreenAttributes", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all SeasonPassDeals from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    SeasonPassDeals: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        PromotionId: string;
        CinemaEventCode: string;
        SeasonPassDealTicketTypeGroup: {
          CinemaId: string;
          SeasonPassDealTicketTypeGroupId: number;
          ListComment: string;
          ListCommentAlt: string;
          ListCommentTranslations: Array<{
            LanguageTag: string;
            Text: string;
          }>;
          TicketTypes: Array<{
            CinemaId: string;
            SeasonPassTicketTypeId: number;
            TicketTypeCode: string;
            PriceGroupCode: string;
            Description: string;
            DescriptionAlt: string;
            DescriptionTranslations: Array<{
              LanguageTag: string;
              Text: string;
            }>;
            MinimumPriceInCents: number;
            MaximumPriceInCents: number;
          }>;
        };
        SeasonPassDealFilmGroups: Array<{
          CinemaId: string;
          SeasonPassDealFilmGroupId: number;
          MinimumNumberRequired: number;
          MaximumNumberAvailable: number;
          ListComment: string;
          ListCommentAlt: string;
          ListCommentTranslations: Array<{
            LanguageTag: string;
            Text: string;
          }>;
          Films: Array<{
            CinemaId: string;
            SeasonPassFilmId: number;
            FilmCode: string;
            Title: string;
            TitleAlt: string;
            TitleTranslations: Array<{
              LanguageTag: string;
              Text: string;
            }>;
          }>;
        }>;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/SeasonPassDeals${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "SeasonPassDeals", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all SessionAttributeLinks from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    SessionAttributeLinks: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        SessionId: string;
        ShortName: string;
        AttributeID: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/SessionAttributeLinks${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "SessionAttributeLinks", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all Sessions from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    Sessions: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        CinemaId: string;
        ScheduledFilmId: string;
        SessionId: string;
        AreaCategoryCodes: string[];
        MinimumTicketPriceInCents: number;
        Showtime: string;
        IsAllocatedSeating: boolean;
        AllowChildAdmits: boolean;
        SeatsAvailable: number;
        AllowComplimentaryTickets: boolean;
        EventId: string;
        GlobalEventId: string;
        PriceGroupCode: string;
        ScreenName: string;
        ScreenNameAlt: string;
        ScreenNumber: number;
        CinemaOperatorCode: string;
        FormatCode: string;
        FormatHOPK: string;
        SalesChannels: string;
        Attributes: {
          ID: string;
          Description: string;
          ShortName: string;
          AltDescription: string;
          AltShortName: string;
          Message: string;
          MessageAlt: string;
          WarningMessage: string;
          WarningMessageAlt: string;
          SalesChannels: string;
          IsUsedForConcepts: boolean;
          IsUsedForSessionAdvertising: boolean;
          DisplayPriority: number;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ShortNameTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          MessageTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          SessionAttributeCinemaIDs: string[];
          IsPromoted: boolean;
        }[];
        SessionAttributesNames: string[];
        ConceptAttributesNames: string[];
        AllowTicketSales: boolean;
        HasDynamicallyPricedTicketsAvailable: boolean;
        PlayThroughId: string;
        SessionBusinessDate: string;
        SessionDisplayPriority: number;
        GroupSessionsByAttribute: boolean;
        SoldoutStatus: number;
        TypeCode: string;
        InSeatDeliveryFee: {
          PriceType: number;
          FixedPriceInCents: number;
        };
        IsPublicScreening: boolean;
        Status: number;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Sessions${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "Sessions", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all Settings from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    Settings: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Value: string;
        Name: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/Settings${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "Settings", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all SiteGroupCinemaLinks from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    SiteGroupCinemaLinks: async (body: {
      $expand?: string; // Expands related entities inline.
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        SiteGroupId: string;
        CinemaId: string;
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/SiteGroupCinemaLinks${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "SiteGroupCinemaLinks", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
    // Implementation Notes: This function fetches a list of all SiteGroups visible to all clients from the OData service.
    // The function accepts optional parameters that can be used to filter, expand, or sort the results.
    SiteGroups: async (body: {
      $expand?: string; // Expands related entities inline (Cinemas, ConceptAttributes).
      $filter?: string; // Filters the results based on a Boolean condition.
      $select?: string; // Selects which properties to include in the response.
      $orderby?: string; // Sorts the results by the given property.
      $top?: number; // Limits the number of returned results to the first 'n' entries.
      $skip?: number; // Skips the first 'n' results.
    }): Promise<{
      success: boolean;
      message: string;
      data?: {
        ID: string;
        Name: string;
        AreaCode: string;
        ClientId: string;
        IsOnlyAvailableToClient: boolean;
        Cinemas: {
          ID: string;
          CinemaNationalId: string;
          Name: string;
          NameAlt: string;
          ScheduledFilms: {
            ID: string;
            ScheduledFilmId: string;
            CinemaId: string;
            Sessions: {
              ID: string;
              CinemaId: string;
              ScheduledFilmId: string;
              SessionId: string;
              AreaCategoryCodes: string[];
              MinimumTicketPriceInCents: number;
              Showtime: string;
              IsAllocatedSeating: boolean;
              AllowChildAdmits: boolean;
              SeatsAvailable: number;
              AllowComplimentaryTickets: boolean;
              EventId: string;
              GlobalEventId: string;
              PriceGroupCode: string;
              ScreenName: string;
              ScreenNameAlt: string;
              ScreenNumber: number;
              CinemaOperatorCode: string;
              FormatCode: string;
              FormatHOPK: string;
              SalesChannels: string;
              Attributes: {
                ID: string;
                Description: string;
                ShortName: string;
                AltDescription: string;
                AltShortName: string;
                Message: string;
                MessageAlt: string;
                WarningMessage: string;
                WarningMessageAlt: string;
                SalesChannels: string;
                IsUsedForConcepts: boolean;
                IsUsedForSessionAdvertising: boolean;
                DisplayPriority: number;
                DescriptionTranslations: {
                  LanguageTag: string;
                  Text: string;
                }[];
              }[];
            }[];
          }[];
        }[];
      }[];
    }> => {
      // Convert body to query string
      const query = jsonToQueryString(body);

      try {
        // Sending a GET request to the OData service with the provided query parameters.
        const res = await axiosMasterMain(
          {
            method: "GET",
            url: `${config.host}/WSVistaWebClient/OData.svc/SiteGroups${query}`,
            headers: {
              connectapitoken: `${config.token}`, // API token for authentication
              "Content-Type": "application/json", // Ensure the response format is JSON
            },
          },
          {
            name: "SiteGroups", // Request identifier for logging and debugging
            timeout: 20000, // Timeout of 20 seconds for the request
            logger(data) {
              if (config.logger) {
                console.log(data); // Logs request data for debugging purposes
              }
            },
          },
        );

        // Return the 'value' array from the successful response.
        return {
          success: true,
          message: "Request successful",
          data: res.value,
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
