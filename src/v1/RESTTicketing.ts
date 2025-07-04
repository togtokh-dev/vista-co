//RESTData.ts
import { axiosMasterMain } from "axios-master";
import { jsonToQueryString } from "..";
import { AxiosError, AxiosResponse } from "axios";
export interface CompleteOrderRequest {
  UserSessionId: string;
  PaymentInfo?: {
    CardNumber: string;
    CardType: string;
    CardExpiryMonth: string;
    CardExpiryYear: string;
    CardValidFromMonth?: string;
    CardValidFromYear?: string;
    CardIssueNumber?: string;
    PaymentValueCents: number;
    PaymentSystemId?: string;
    CardCVC?: string;
    PaymentTenderCategory: string;
    PaymentVoucher?: {
      VoucherBarcode: string;
      VoucherPin: string;
    };
    BillFullOutstandingAmount?: boolean;
    UseAsBookingRef?: boolean;
    BankReference?: string;
    WalletAccessToken?: string;
    SaveCardToWallet?: boolean;
    BankTransactionNumber?: string;
    CustomerTaxName?: string;
    CustomerTaxNumber?: string;
    CustomerTaxAddress?: string;
    PaymentConnectorParameters?: {
      Name: string;
      Value: string;
    }[];
  };
  PaymentInfoCollection?: Array<CompleteOrderRequest["PaymentInfo"]>;
  PerformPayment?: boolean;
  CustomerEmail?: string;
  CustomerPhone?: string;
  CustomerName?: string;
  CustomerDateOfBirth?: string;
  CustomerGender?: string;
  GeneratePrintStream?: boolean;
  ReturnPrintStream?: boolean;
  SendBookingConfirmationEmail?: boolean;
  UnpaidBooking?: boolean;
  PrintTemplateName?: string;
  OptionalMemberId?: string;
  OptionalReturnMemberBalances?: boolean;
  CustomerZipCode?: string;
  BookingMode?: number;
  PrintStreamType?: number;
  GenerateConcessionVoucherPrintStream?: boolean;
  GenerateBookingVoucherPrintStream?: boolean;
  PassTypesRequestedForOrder?: {
    IncludeApplePassBook?: boolean;
    IncludeICal?: boolean;
    AdditionalAttachmentTypes?: string[];
  };
  UseAlternateLanguage?: boolean;
  BookingNotes?: string;
  PickupName?: string;
  CustomerLanguageTag?: string;
  NotificationInfo?: {
    Type?: string;
    Platform?: string;
    ApplicationId?: string;
    DeviceToken?: string;
  };
  LinkedBookingId?: string;
  PotentialMemberDetails?: {
    AllowContactByThirdParty?: boolean;
    AllowProfilingByThirdParty?: boolean;
  };
  Tags?: string[];
}

export interface CompleteOrderResponse {
  error?: any;
  errorCode?: any;
  CinemaID: string;
  VistaBookingNumber: string;
  VistaBookingId: string;
  VistaTransNumber: string;
  HistoryID: string;
  PrintStream?: string;
  PrintStreamCollection?: Array<{
    PrintStream: string;
    PrintDocType: number;
  }>;
  PaymentInfoCollection?: Array<{
    CardNumber: string;
    CardType: string;
    CardExpiryMonth: string;
    CardExpiryYear: string;
    CardValidFromMonth?: string;
    CardValidFromYear?: string;
    CardIssueNumber?: string;
    PaymentValueCents: number;
    PaymentSystemId?: string;
    CardCVC?: string;
    PaymentTenderCategory: string;
    PaymentVoucher?: {
      VoucherBarcode: string;
      VoucherPin: string;
    };
    BillFullOutstandingAmount?: boolean;
    UseAsBookingRef?: boolean;
    PaymentErrorCode?: string;
    PaymentErrorDescription?: string;
    PaymentStatus?: string;
    BillingValueCents?: number;
    CardBalance?: number;
    BankReference?: string;
    CardHash?: string;
    WalletAccessToken?: string;
    SaveCardToWallet?: boolean;
    BankTransactionNumber?: string;
    CustomerTaxName?: string;
    CustomerTaxNumber?: string;
    CustomerTaxAddress?: string;
    PaymentConnectorParameters?: Array<{
      Name: string;
      Value: string;
    }>;
  }>;
  BalanceList?: Array<{
    BalanceTypeID: string;
    Name: string;
    Message?: string;
    PointsRemaining?: number;
    LifetimePointsBalanceDisplay?: number;
    IsDefault?: boolean;
    NameAlt?: string;
    NameTranslations?: Array<{
      LanguageTag: string;
      Text: string;
    }>;
    RedemptionRate?: number;
  }>;
  PassCollection?: Array<{
    AttachmentType: string;
    AttachmentData: string;
    FileExtension: string;
    FileName: string;
  }>;
  BackgroundJobUrl?: string;
  LoyaltyPointsCost?: Array<{
    BalanceTypeId: number;
    Points: number;
    BalanceTypeName: string;
  }>;
  OrderEmails?: Array<{
    EmailAddress: string;
    Successful: boolean;
    EmailType: number;
  }>;
  ParentBookingId?: string;
  JourneyReference?: string;
  Result: number;
  ErrorDescription?: string;
  ExtendedResultCode?: number;
}

export interface OrderCancelResponse {
  OrderNotFound: boolean;
  Result: number;
  ErrorDescription: string;
  ExtendedResultCode: number;
}
export const RESTTicketing = (config: {
  token: string;
  host: string;
  regionCode: string;
  logger: boolean;
}) => {
  return {
    /**
     * Cancels the order associated with the UserSessionId.
      Associated cinema order will also be cancelled and any reserved seats will be released as will any other associated resources including 3rd Party Member tickets.
      Orders may also be cancelled by cleanup-tasks in the background so attempting to cancel an already cancelled order will result in a successful result (the OrderNotFound response property can be used to check for this scenario).
      Loyalty sessions associated with the UserSessionId will NOT be disconnected, subsequent calls re-using the UserSessionID will retain the member's context.
     *
     * @param {string} userSessionId - The user's session ID.
     * @returns {Promise<{ success: boolean; message: string; data?: OrderCancelResponse }>}
     */
    orderCancel: async (
      UserSessionId: string,
    ): Promise<{
      success: boolean;
      message: string;
      data?: OrderCancelResponse;
    }> => {
      try {
        // Construct the request URL
        const url = `${config.host}/WSVistaWebClient/RESTTicketing.svc/order/cancel`;

        // Make the API request
        const response = await axiosMasterMain(
          {
            method: "POST",
            url,
            headers: {
              connectapitoken: config.token, // API token
              "Content-Type": "application/json",
              "Connect-Region-Code": config.regionCode, // Localization
            },
            data: { UserSessionId },
          },
          {
            name: "orderCancel",
            timeout: 20000,
            logger(data) {
              if (config.logger) console.log(data);
            },
          },
        );

        // Return success response
        return {
          success: true,
          message: "Order Cancel successfully",
          data: response as OrderCancelResponse,
        };
      } catch (error: any) {
        // Handle errors
        console.error("CompleteOrder failed:", error?.response?.data || error);
        return {
          success: false,
          message: error?.response?.data?.message || "Failed to complete order",
        };
      }
    },
    /**
     * Completes an order with payment details.
     *
     * @param {string} userSessionId - The user's session ID.
     * @param {CompleteOrderRequest} paymentDetails - The payment details and order information.
     * @returns {Promise<{ success: boolean; message: string; data?: CompleteOrderResponse }>}
     */
    completeOrder: async (
      paymentDetails: CompleteOrderRequest,
    ): Promise<{
      success: boolean;
      message: string;
      data?: CompleteOrderResponse;
    }> => {
      try {
        // Construct the request URL
        const url = `${config.host}/WSVistaWebClient/RESTTicketing.svc/order/payment`;

        // Make the API request
        const response = await axiosMasterMain(
          {
            method: "POST",
            url,
            headers: {
              connectapitoken: config.token, // API token
              "Content-Type": "application/json",
              "Connect-Region-Code": config.regionCode, // Localization
            },
            data: paymentDetails,
          },
          {
            name: "completeOrder",
            timeout: 80000,
            logger(data) {
              if (config.logger) console.log(data);
            },
          },
        );

        // Return success response
        return {
          success: true,
          message: "Order completed successfully",
          data: response as CompleteOrderResponse,
        };
      } catch (error: any) {
        // Handle errors
        console.error("CompleteOrder failed:", error?.data || error);
        const axiosError = error as AxiosResponse<any>;
        return {
          success: false,
          message: `${axiosError?.statusText} ${axiosError?.status}`,
          data: {
            error: axiosError?.statusText || axiosError.status,
            errorCode: axiosError?.status,
            ...axiosError?.data,
          },
        };
      }
    },
  };
};
