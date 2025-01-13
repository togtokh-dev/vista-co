import { config } from "..";
import { axiosMasterMain } from "axios-master";

// Define types for requests and responses
export interface GetOrderDetailsRequest {
  userSessionId: string;
}

export interface GetOrderDetailsResponse {
  success: boolean;
  message: string;
  data?: {
    order: {
      cinemaId: string;
      userSessionId: string;
      orderTotalValueInCents: number;
      taxValueInCents: number;
      bookingFeeTotalValueInCents: number;
      bookingFeeTaxValueInCents: number;
      ticketFeeTotalValueInCents: number;
      loyaltyPointsTotalCost: [];
      sessions: [];
      concessions: [];
      bookingFees: [];
      loyaltyMembershipPackageActivation: null;
      loyaltyIntegratedGiftCardActivation: null;
      appliedGiftCards: [];
      appliedLoyaltyPointsPayments: [];
      appliedPaymentVouchers: [];
      loyaltyPointsPayableValueInCents: number;
      createdDateUtc: string;
      expiryDateUtc: string;
      hasCardPaymentPromotionTickets: boolean;
      promotionCards: [];
      customer: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: {
          zipCode: string;
        };
        dateOfBirth: string | null;
        gender: string;
      };
      bookingTip: null;
    };
    suggestedDeals: [];
  };
}

export interface CompleteEditRequest {
  payments?: {
    externalPayments: {
      amountInCents: number;
      paymentProviderReference: string;
      paymentTenderCategory: string;
      cardNumberMasked: string;
      cardType: string;
    }[];
  };
  refundPayments?: {
    externalPayments: {
      amountInCents: number;
      paymentProviderReference: string;
      paymentTenderCategory: string;
      cardNumberMasked: string;
      cardType: string;
    }[];
  };
}

export interface CompleteEditResponse {
  success: boolean;
  message: string;
  data?: {
    order: {
      orderStatus: string;
      paymentStatus: string;
      totalAmountInCents: number;
      createdDateUtc: string;
      expiryDateUtc: string;
    };
  };
  error?: {
    errorCode: string;
    description: string;
  };
}

// Define other request/response types as needed
export interface RemoveDealVoucherRequest {
  barcode?: string;
  promotionId?: string;
  redemptions?: number;
}

export interface RemoveDealVoucherResponse {
  success: boolean;
  message: string;
  data?: {
    status: string;
  };
  error?: {
    errorCode: string;
    description: string;
  };
}

export interface ApplyDealVoucherRequest {
  barcode?: string;
  promotionId?: string;
  redemptions?: number;
  useAllAvailableRedemptions?: boolean;
}

export interface ApplyDealVoucherResponse {
  success: boolean;
  message: string;
  data?: {
    status: string;
    appliedRedemptions: number;
    remainingRedemptions?: number;
  };
  error?: {
    errorCode: string;
    description: string;
  };
}

export interface LoyaltyPointsPaymentBalanceResponse {
  balancePayableInCents: number;
  balancePayable: string;
  points: number;
  pointsRemaining: number;
  pointsRemainingInCents: number;
}

export interface GetLoyaltyPointsPaymentBalanceResult {
  success: boolean;
  message: string;
  data?: LoyaltyPointsPaymentBalanceResponse;
}
export interface SetTicketsRequest {
  tickets: Array<{
    ticketDetails: {
      ticketTypeCode: string;
      priceInCents: number;
      voucherBarcode?: string;
      voucherBarcodePin?: string;
      voucherAreaCategoryCode?: string;
      bookingFeeOverrideInCents?: number;
      thirdPartyMemberScheme?: {
        memberCard: string;
        memberDateOfBirth: string; // ISO date format
      };
      loyaltyRecognitionId?: number;
      loyaltyRecognitionSequence?: number;
    };
    seats?: Array<{
      areaNumber: number;
      rowIndex: number;
      columnIndex: number;
    }>;
  }>;
  bookingFeeOverrideInCents?: number;
  bookingMode?: number;
  useSeatAutoAllocation?: boolean;
}
export interface SetTicketsResponse {
  order: {
    cinemaId: string;
    userSessionId: string;
    orderTotalValueInCents: number;
    taxValueInCents: number;
    bookingFeeTotalValueInCents: number;
    bookingFeeTaxValueInCents: number;
    ticketFeeTotalValueInCents: number;
    loyaltyPointsTotalCost: Array<{
      balanceTypeId: number;
      points: number;
      balanceTypeName: string;
    }>;
    sessions: Array<{
      id: number;
      filmTitle: string;
      filmClassification: string;
      startTime: string; // ISO date format
      allocatedSeating: boolean;
      tickets: Array<{
        ticketDetails: {
          ticketId: number;
          ticketTypeCode: string;
          ticketCode: string;
          description: string;
          finalPriceInCents: number;
          originalPriceInCents: number;
          taxInCents: number;
          voucherBarcode?: string;
          loyaltyRecognitionId?: string;
          loyaltyRecognitionSequence?: number;
        };
        seats: Array<{
          areaCategoryCode: string;
          areaNumber: number;
          rowIndex: number;
          columnIndex: number;
          rowDisplay: string;
          columnDisplay: string;
        }>;
      }>;
    }>;
    concessions: Array<{
      id: string;
      itemId: string;
      description: string;
      finalPriceInCents: number;
      originalPriceInCents: number;
      taxInCents: number;
    }>;
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: {
        zipCode: string;
      };
    };
    createdDateUtc: string; // ISO date format
    expiryDateUtc: string; // ISO date format
  };
  suggestedDeals?: Array<{
    id: string;
    description: string;
    isSeasonPass: boolean;
    isTicketUpgrade: boolean;
    limitPerOrder: number;
    requiresLoyalty: boolean;
    requiresVoucher: boolean;
  }>;
}
// Reusable request handler
const handleRequest = async <T>(
  method: "GET" | "POST" | "DELETE",
  url: string,
  data: any = null,
  name: string
): Promise<T> => {
  try {
    const response = await axiosMasterMain(
      {
        method,
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data,
      },
      {
        name,
        timeout: 20000,
        logger(data) {
          if (config.logger) console.log(data);
        },
      }
    );

    return response;
  } catch (error: any) {
    console.error(`Request failed (${name}):`, error?.response?.data);
    throw new Error(error?.response?.data?.message || "An error occurred");
  }
};

// API Endpoints
const Orders = async (cinemaId: string): Promise<GetOrderDetailsResponse> => {
  const url = `${config.host}/WSVistaWebClient/orders`;
  return handleRequest<GetOrderDetailsResponse>(
    "POST",
    url,
    { cinemaId },
    "Orders"
  );
};

const GetOrderDetails = async (
  req: GetOrderDetailsRequest
): Promise<GetOrderDetailsResponse> => {
  const url = `${config.host}/WSVistaWebClient/orders/${req.userSessionId}`;
  return handleRequest<GetOrderDetailsResponse>(
    "GET",
    url,
    null,
    "GetOrderDetails"
  );
};

const completeEditOrder = async (
  userSessionId: string,
  request: CompleteEditRequest
): Promise<CompleteEditResponse> => {
  const url = `${config.host}/orders/${userSessionId}/complete-edit`;
  return handleRequest<CompleteEditResponse>(
    "POST",
    url,
    request,
    "CompleteEditOrder"
  );
};

const removeDealVoucher = async (
  userSessionId: string,
  request: RemoveDealVoucherRequest
): Promise<RemoveDealVoucherResponse> => {
  const url = `${config.host}/orders/${userSessionId}/deal-voucher`;
  return handleRequest<RemoveDealVoucherResponse>(
    "DELETE",
    url,
    request,
    "RemoveDealVoucher"
  );
};

const applyDealVoucher = async (
  userSessionId: string,
  request: ApplyDealVoucherRequest
): Promise<ApplyDealVoucherResponse> => {
  const url = `${config.host}/orders/${userSessionId}/deal-voucher`;
  return handleRequest<ApplyDealVoucherResponse>(
    "POST",
    url,
    request,
    "ApplyDealVoucher"
  );
};

const getLoyaltyPointsPaymentBalance = async (
  userSessionId: string
): Promise<GetLoyaltyPointsPaymentBalanceResult> => {
  const url = `${config.host}/orders/${userSessionId}/loyalty-points-payment-balance`;
  return handleRequest<GetLoyaltyPointsPaymentBalanceResult>(
    "GET",
    url,
    null,
    "GetLoyaltyPointsPaymentBalance"
  );
};
const setTickets = async (
  userSessionId: string,
  sessionId: number,
  requestBody: SetTicketsRequest
): Promise<{
  success: boolean;
  message: string;
  data?: SetTicketsResponse;
}> => {
  const url = `${config.host}/orders/${userSessionId}/sessions/${sessionId}/set-tickets`;
  return handleRequest("POST", url, requestBody, "SetTickets");
};
// Default export
export default {
  Orders,
  GetOrderDetails,
  completeEditOrder,
  removeDealVoucher,
  applyDealVoucher,
  getLoyaltyPointsPaymentBalance,
  setTickets,
};
