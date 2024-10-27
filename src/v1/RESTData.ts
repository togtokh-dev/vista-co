import { config, jsonToQueryString } from "..";
import { axiosMasterMain } from "axios-master";

// Implementation Notes: This function fetches the discount availability for a specified cinema from the RESTData service.
// It accepts the cinemaId as a path parameter and optional headers for authentication and region code.
const GetDiscountAvailabilityForCinema = async (
  cinemaId: string
): Promise<{
  success: boolean;
  message: string;
  data?: {
    DiscountAvailabilities: {
      Code: string;
      IsAvailable: boolean;
      HOPK: string;
      UnavailableReason: number;
    }[];
    ResponseCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    // Construct the request URL with the cinemaId path parameter.
    const url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/discount-availability`;

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
        name: "GetDiscountAvailabilityForCinema", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Implementation Notes: This function fetches the seat plan for a specified cinema and screen number from the RESTData service.
// It accepts the cinemaId and screenNumber as path parameters and optional headers for authentication and region code.
const GetSeatPlan = async (
  cinemaId: string,
  screenNumber: number,
  seatLayoutId?: number
): Promise<{
  success: boolean;
  message: string;
  data?: {
    SeatLayoutData: {
      Areas: {
        Number: number;
        AreaCategoryCode: string;
        Description: string;
        DescriptionAlt: string;
        NumberOfSeats: number;
        IsAllocatedSeating: boolean;
        HasSofaSeatingEnabled: boolean;
        Left: number;
        Top: number;
        Height: number;
        Width: number;
        Rows: {
          RowIndexZeroBased: number;
          PhysicalName: string;
          Seats: {
            Position: {
              AreaNumber: number;
              RowIndex: number;
              ColumnIndex: number;
            };
            Priority: number;
            Id: string;
            Status: number;
            SeatStyle: number;
            SeatsInGroup: {
              AreaNumber: number;
              RowIndex: number;
              ColumnIndex: number;
            }[];
            OriginalStatus: number;
          }[];
        }[];
        RowCount: number;
        ColumnCount: number;
      }[];
      AreaCategories: {
        AreaCategoryCode: string;
        Name: string;
        NameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        Hopk: string;
        SeatsToAllocate: number;
        SeatsAllocatedCount: number;
        SeatsNotAllocatedCount: number;
        SelectedSeats: {
          AreaNumber: number;
          RowIndex: number;
          ColumnIndex: number;
        }[];
        IsInSeatDeliveryEnabled: boolean;
      }[];
      BoundaryRight: number;
      BoundaryLeft: number;
      BoundaryTop: number;
      ScreenStart: number;
      ScreenWidth: number;
    };
    ResponseCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    const query = jsonToQueryString({ seatLayoutId: seatLayoutId });
    // Construct the request URL with the cinemaId and screenNumber path parameters.
    let url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/screens/${screenNumber}/seat-plan${query}`;

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
        name: "GetSeatPlan", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Implementation Notes: This function fetches the film sessions for a specified cinema and promotion ID from the RESTData service.
// It accepts cinemaId and promotionId as path parameters and optional headers for authentication and region code.
const GetSeasonPassDealFilmSessions = async (
  cinemaId: string,
  promotionId: string
): Promise<{
  success: boolean;
  message: string;
  data?: {
    Films: {
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
      FirstDaysSessions: any[];
      FutureSessions: any[];
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
    ResponseCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    // Construct the request URL with the cinemaId and promotionId path parameters.
    const url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/seasonpassdeals/${promotionId}/filmsessions`;

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
        name: "GetSeasonPassDealFilmSessions", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Implementation Notes: This function fetches the seat plan for a specified cinema session from the RESTData service.
// It accepts cinemaId and sessionId as path parameters and optional headers for authentication, region code, and user session.
const GetSessionSeatPlan = async (
  cinemaId: string,
  sessionId: string,
  returnSoldSeatsOnly?: boolean,
  userSessionId?: string
): Promise<{
  success: boolean;
  message: string;
  data?: {
    SeatLayoutData: {
      Areas: {
        Number: number;
        AreaCategoryCode: string;
        Description: string;
        DescriptionAlt: string;
        NumberOfSeats: number;
        IsAllocatedSeating: boolean;
        HasSofaSeatingEnabled: boolean;
        Left: number;
        Top: number;
        Height: number;
        Width: number;
        Rows: {
          RowIndexZeroBased: number;
          PhysicalName: string;
          Seats: {
            Position: {
              AreaNumber: number;
              RowIndex: number;
              ColumnIndex: number;
            };
            Priority: number;
            Id: string;
            Status: number;
            SeatStyle: number;
            SeatsInGroup: {
              AreaNumber: number;
              RowIndex: number;
              ColumnIndex: number;
            }[];
            OriginalStatus: number;
          }[];
        }[];
        RowCount: number;
        ColumnCount: number;
      }[];
      AreaCategories: {
        AreaCategoryCode: string;
        Name: string;
        NameTranslations: {
          LanguageTag: string;
          Text: string;
        }[];
        Hopk: string;
        SeatsToAllocate: number;
        SeatsAllocatedCount: number;
        SeatsNotAllocatedCount: number;
        SelectedSeats: {
          AreaNumber: number;
          RowIndex: number;
          ColumnIndex: number;
        }[];
        IsInSeatDeliveryEnabled: boolean;
      }[];
      BoundaryRight: number;
      BoundaryLeft: number;
      BoundaryTop: number;
      ScreenStart: number;
      ScreenWidth: number;
    };
    ResponseCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    const query = jsonToQueryString({
      returnSoldSeatsOnly: returnSoldSeatsOnly,
      userSessionIdP: userSessionId,
    });
    // Construct the request URL with the cinemaId and sessionId path parameters.
    let url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/sessions/${sessionId}/seat-plan${query}`;
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
        name: "GetSessionSeatPlan", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Implementation Notes: This function fetches available tickets for a specified session from the RESTData service.
// It accepts cinemaId and sessionId as path parameters and optional query parameters for user session and ticket options.
const GetSessionTickets = async (
  cinemaId: string,
  sessionId: string,
  salesChannel?: string,
  userSessionId?: string,
  returnOnlyTicketsForLoyaltyMembers?: boolean,
  includeLoyaltyTickets?: boolean,
  includeNonLoyaltyTickets?: boolean,
  includeComplimentaryTickets?: boolean,
  includePackageTickets?: boolean,
  includeRedemptionTickets?: boolean,
  includeAdvanceSalesTickets?: boolean
): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResponseCode: number;
    ExtendedResponseCode: number;
    ErrorDescription: string;
    Tickets: {
      CinemaId: string;
      TicketTypeCode: string;
      TicketCode: string;
      AreaCategoryCode: string;
      HeadOfficeGroupingCode: string;
      Description: string;
      DescriptionAlt: string;
      LongDescription: string;
      LongDescriptionAlt: string;
      IsChildOnlyTicket: boolean;
      IsPackageTicket: boolean;
      IsRedemptionTicket: boolean;
      IsComplimentaryTicket: boolean;
      PriceGroupCode: string;
      PriceInCents: number;
      TaxInCents: number;
      SalesChannels: string[];
      ThirdPartyMembershipName: string;
      IsThirdPartyMemberTicket: boolean;
      DisplaySequence: number;
      SurchargeAmount: number;
      IsShowToNonLoyaltyMembers: boolean;
      IsAvailableForLoyaltyMembersOnly: boolean;
      IsAvailableAsLoyaltyRecognitionOnly: boolean;
      LoyaltyRecognitionId: string;
      LoyaltyRecognitionSequence: number;
      LoyaltyBalanceTypeId: string;
      LoyaltyQuantityAvailable: number;
      LoyaltyPointsCost: number;
      LoyaltyHasUnlimitedRedemptions: boolean;
      LoyaltyPriceCalculation: {
        Type: number;
        SpecialPriceInCents: number;
        PriceOffInCents: number;
        PercentageOff: number;
        AmountSavedInCents: number;
      };
      ProductCodeForVoucher: string;
      QuantityAvailablePerOrder: number;
      IsDynamicallyPriced: boolean;
      TotalTicketFeeAmountInCents: number;
      DescriptionTranslations: {
        LanguageTag: string;
        Text: string;
      }[];
      LongDescriptionTranslations: {
        LanguageTag: string;
        Text: string;
      }[];
      PackageContent: {
        Concessions: {
          Id: string;
          HeadOfficeItemCode: string;
          Description: string;
          DescriptionAlt: string;
          ExtendedDescription: string;
          ExtendedDescriptionAlt: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ExtendedDescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          Quantity: number;
        }[];
        Tickets: {
          Description: string;
          DescriptionAlt: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          TicketTypeCode: string;
          TicketCode: string;
          Quantity: number;
        }[];
      };
      DiscountsAvailable: {
        Description: string;
        Code: string;
        PriceToUseInCents: number;
        LoyaltyBalanceTypeId: string;
        LoyaltyPointsCost: number;
        LoyaltyPointsCostDec: number;
        IsLoyaltyOnly: boolean;
        LoyaltyHasUnlimitedRedemptions: boolean;
        MaxAvailable: number;
        HOPK: string;
        PriceCalculation: {
          Type: number;
          SpecialPriceInCents: number;
          PriceOffInCents: number;
          PercentageOff: number;
          AmountSavedInCents: number;
        };
      }[];
      HOPK: string;
      MaxServiceFeeInCents: number;
      MinServiceFeeInCents: number;
      IsAllocatableSeating: boolean;
      ResalePriceInCents: number;
      IsCardPaymentPromotionTicket: boolean;
      CardPaymentPromotions: {
        Id: string;
        Name: string;
        Cards: {
          CardDefinitionId: string;
          CardType: string;
          BrandName: string;
          RangeStart: number;
          RangeEnd: number;
          SubBrandId: number;
          SubBrandName: string;
          SubBrandDigits: string;
        }[];
      }[];
      EnforceUseOfBarcode: boolean;
      IsSubscriptionTicket: boolean;
      SubscriptionIds: number[];
    }[];
  };
}> => {
  try {
    const query = jsonToQueryString({
      salesChannel: salesChannel,
      userSessionId: userSessionId,
      returnOnlyTicketsForLoyaltyMembers: returnOnlyTicketsForLoyaltyMembers,
      includeLoyaltyTickets: includeLoyaltyTickets,
      includeNonLoyaltyTickets: includeNonLoyaltyTickets,
      includeComplimentaryTickets: includeComplimentaryTickets,
      includePackageTickets: includePackageTickets,
      includeRedemptionTickets: includeRedemptionTickets,
      includeAdvanceSalesTickets: includeAdvanceSalesTickets,
    });
    // Construct the request URL with the cinemaId and sessionId path parameters.
    let url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/sessions/${sessionId}/tickets${query}`;

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
        name: "GetSessionTickets", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Implementation Notes: This function fetches tickets for a specific barcode for a given session and cinema from the RESTData service.
// It accepts cinemaId, sessionId, and barcode as path and query parameters and provides options for ticket type filters.
const GetTicketsForBarcode = async (
  cinemaId: string,
  sessionId: string,
  barcode: string,
  salesChannel?: string,
  userSessionId?: string,
  includeComplimentaryTickets?: boolean,
  includePackageTickets?: boolean,
  includeRedemptionTickets?: boolean,
  includeAdvanceSalesTickets?: boolean,
  includeNonLoyaltyTickets?: boolean,
  includeLoyaltyTickets?: boolean,
  includeLoyaltyRecognitionTickets?: boolean
): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResponseCode: number;
    ExtendedResponseCode: number;
    ErrorDescription: string;
    Tickets: {
      CinemaId: string;
      TicketTypeCode: string;
      TicketCode: string;
      AreaCategoryCode: string;
      HeadOfficeGroupingCode: string;
      Description: string;
      DescriptionAlt: string;
      LongDescription: string;
      LongDescriptionAlt: string;
      IsChildOnlyTicket: boolean;
      IsPackageTicket: boolean;
      IsRedemptionTicket: boolean;
      IsComplimentaryTicket: boolean;
      PriceGroupCode: string;
      PriceInCents: number;
      TaxInCents: number;
      SalesChannels: string[];
      ThirdPartyMembershipName: string;
      IsThirdPartyMemberTicket: boolean;
      DisplaySequence: number;
      SurchargeAmount: number;
      IsShowToNonLoyaltyMembers: boolean;
      IsAvailableForLoyaltyMembersOnly: boolean;
      IsAvailableAsLoyaltyRecognitionOnly: boolean;
      LoyaltyRecognitionId: string;
      LoyaltyRecognitionSequence: number;
      LoyaltyBalanceTypeId: string;
      LoyaltyQuantityAvailable: number;
      LoyaltyPointsCost: number;
      LoyaltyHasUnlimitedRedemptions: boolean;
      LoyaltyPriceCalculation: {
        Type: number;
        SpecialPriceInCents: number;
        PriceOffInCents: number;
        PercentageOff: number;
        AmountSavedInCents: number;
      };
      ProductCodeForVoucher: string;
      QuantityAvailablePerOrder: number;
      IsDynamicallyPriced: boolean;
      TotalTicketFeeAmountInCents: number;
      DescriptionTranslations: {
        LanguageTag: string;
        Text: string;
      }[];
      LongDescriptionTranslations: {
        LanguageTag: string;
        Text: string;
      }[];
      PackageContent: {
        Concessions: {
          Id: string;
          HeadOfficeItemCode: string;
          Description: string;
          DescriptionAlt: string;
          ExtendedDescription: string;
          ExtendedDescriptionAlt: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          ExtendedDescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          Quantity: number;
        }[];
        Tickets: {
          Description: string;
          DescriptionAlt: string;
          DescriptionTranslations: {
            LanguageTag: string;
            Text: string;
          }[];
          TicketTypeCode: string;
          TicketCode: string;
          Quantity: number;
        }[];
      };
      DiscountsAvailable: {
        Description: string;
        Code: string;
        PriceToUseInCents: number;
        LoyaltyBalanceTypeId: string;
        LoyaltyPointsCost: number;
        LoyaltyPointsCostDec: number;
        IsLoyaltyOnly: boolean;
        LoyaltyHasUnlimitedRedemptions: boolean;
        MaxAvailable: number;
        HOPK: string;
        PriceCalculation: {
          Type: number;
          SpecialPriceInCents: number;
          PriceOffInCents: number;
          PercentageOff: number;
          AmountSavedInCents: number;
        };
      }[];
      HOPK: string;
      MaxServiceFeeInCents: number;
      MinServiceFeeInCents: number;
      IsAllocatableSeating: boolean;
      ResalePriceInCents: number;
      IsCardPaymentPromotionTicket: boolean;
      CardPaymentPromotions: {
        Id: string;
        Name: string;
        Cards: {
          CardDefinitionId: string;
          CardType: string;
          BrandName: string;
          RangeStart: number;
          RangeEnd: number;
          SubBrandId: number;
          SubBrandName: string;
          SubBrandDigits: string;
        }[];
      }[];
      EnforceUseOfBarcode: boolean;
      IsSubscriptionTicket: boolean;
      SubscriptionIds: number[];
    }[];
  };
}> => {
  try {
    const query = jsonToQueryString({
      barcode: barcode,
      salesChannel: salesChannel,
      userSessionId: userSessionId,
      includeComplimentaryTickets: includeComplimentaryTickets,
      includePackageTickets: includePackageTickets,
      includeRedemptionTickets: includeRedemptionTickets,
      includeAdvanceSalesTickets: includeAdvanceSalesTickets,
      includeNonLoyaltyTickets: includeNonLoyaltyTickets,
      includeLoyaltyTickets: includeLoyaltyTickets,
      includeLoyaltyRecognitionTickets: includeLoyaltyRecognitionTickets,
    });
    // Construct the request URL with the cinemaId and sessionId path parameters.
    let url = `${config.host}/WSVistaWebClient/RESTData.svc/cinemas/${cinemaId}/sessions/${sessionId}/tickets-for-barcode${query}`;

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
        name: "GetTicketsForBarcode", // Request identifier for logging and debugging
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
  } catch (error: any) {
    // Logs and returns an error message if the request fails.
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
export default {
  GetDiscountAvailabilityForCinema,
  GetSeatPlan,
  GetSeasonPassDealFilmSessions,
  GetSessionSeatPlan,
  GetSessionTickets,
  GetTicketsForBarcode,
};
