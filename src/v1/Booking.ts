import { config } from "..";
import { axiosMasterMain } from "axios-master";

// Function to get booking details
const GetBookingDetails = async (requestBody: {
  CinemaId: string; // The ID of the cinema
  VistaBookingNumber?: number; // Optional booking number
  VistaTransNumber?: number; // Optional transaction number
  UserSessionId?: string; // Optional user session ID
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    BookingId: string;
    BookingNumber: number;
    Status: string;
    ErrorMessage?: string;
    BookingDetails: {
      FilmTitle: string;
      Showtime: string;
      Seats: {
        SeatNumber: string;
        RowNumber: string;
        IsAvailable: boolean;
      }[];
      TotalAmount: number;
      TaxAmount: number;
      Tickets: {
        TicketType: string;
        TicketPrice: number;
        SeatNumber: string;
      }[];
      UserDetails: {
        Email: string;
        FirstName: string;
        LastName: string;
      };
    };
  };
}> => {
  try {
    const url = `${config.host}/WSVistaWebClient/OData.svc/Booking`;

    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data: requestBody,
      },
      {
        name: "GetBookingDetails",
        timeout: 20000,
      }
    );

    return {
      success: true,
      message: "Request successful",
      data: res.data,
    };
  } catch (error) {
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};

// Function to cancel a booking
const CancelBooking = async (requestBody: {
  CinemaId: string;
  VistaBookingNumber?: number;
  UserSessionId?: string;
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    Result: string;
    BookingNumber: number;
    Status: string;
    ErrorMessage?: string;
  };
}> => {
  try {
    const url = `${config.host}/WSVistaWebClient/OData.svc/booking/cancel`;

    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data: requestBody,
      },
      {
        name: "CancelBooking",
        timeout: 20000,
      }
    );

    return {
      success: true,
      message: "Booking cancelled successfully",
      data: res.data,
    };
  } catch (error) {
    console.error("Cancel booking failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while cancelling the booking",
    };
  }
};

// Function to mark a booking as collected
const MarkBookingAsCollected = async (requestBody: {
  CinemaId: string;
  BookingNumber: number;
  ItemsPrinted?: number;
  PrepareConcessionsOnly?: boolean;
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    PickupNumber: string;
    PickupAreas: {
      PickupAreaCode: string;
      PickupAreaDescription: string;
      PickupAreaShortDescription: string;
      Items: {
        ItemId: string;
        ItemSequenceNumber: number;
      }[];
    }[];
    Result: number;
    ErrorDescription?: string;
  };
}> => {
  try {
    const url = `${config.host}/WSVistaWebClient/OData.svc/booking/markcollected`;

    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data: requestBody,
      },
      {
        name: "MarkBookingAsCollected",
        timeout: 20000,
      }
    );

    return {
      success: true,
      message: "Booking marked as collected successfully",
      data: res.data,
    };
  } catch (error) {
    console.error("Mark booking as collected failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while marking the booking as collected",
    };
  }
};

// Function to refund a booking
const RefundBooking = async (requestBody: {
  BookingNumber: number;
  CinemaId: string;
  RefundBookingFee: boolean;
  RefundConcessions: boolean;
  RefundReason: string;
  RefundAmount: number;
  IsPriorDayRefund: boolean;
  PaymentInfo: {
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
    PaymentTenderCategory?: string;
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
    MemberId?: string;
    PaymentToken?: string;
    PaymentTokenType?: string;
    BankAuthCode?: string;
    RefundPaymentMethod?: string;
    ReversalData?: string;
    PaymentConnectorParameters?: {
      Name: string;
      Value: string;
    }[];
  };
  MarkAsRefundedOnly: boolean;
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResultCode: number;
    ErrorDescription: string;
    ExplanationIfRefunded: number;
  };
}> => {
  try {
    const url = `${config.host}/WSVistaWebClient/OData.svc/booking/refund`;

    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data: requestBody,
      },
      {
        name: "RefundBooking",
        timeout: 20000,
      }
    );

    return {
      success: true,
      message: "Booking refunded successfully",
      data: res.data,
    };
  } catch (error) {
    console.error("Refund booking failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while processing the refund",
    };
  }
};

// Function to search for bookings
const SearchBooking = async (requestBody: {
  ReturnTransactionStatusInfoIfSingleBookingMatch: boolean;
  BookingNumber?: number;
  BookingId?: string;
  CinemaId: string;
  MovieName?: string;
  FirstName?: string;
  LastName?: string;
  MemberId?: string;
  Email?: string;
  Phone?: string;
  ClientClass?: string;
  SessionDate?: string;
  BookingDate?: string;
  CardInfo?: {
    CardFirst6Digits: string;
    CardLast4Digits: string;
  };
  AllBookingsFromSessionDate?: boolean;
  VistaTransNumber?: string;
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResultCode: number;
    ErrorDescription: string;
    SingleBookingMatch?: any;
    BookingSearchResults?: any[];
  };
}> => {
  try {
    const url = `${config.host}/WSVistaWebClient/OData.svc/booking/search`;

    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`,
          "Content-Type": "application/json",
          "Connect-Region-Code": config.regionCode,
        },
        data: requestBody,
      },
      {
        name: "SearchBooking",
        timeout: 20000,
      }
    );

    return {
      success: true,
      message: "Booking search successful",
      data: res.data,
    };
  } catch (error) {
    console.error("Search booking failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Function to retrieve the payment status on an unpaid booking
const GetUnpaidBookingDetails = async (
  token: string // The required token for the unpaid booking
): Promise<{
  success: boolean;
  message: string;
  data?: {
    ErrorDescription?: string;
    TransactionId: string;
    FinalizedPaymentResultId?: number;
    BookingNumber: number;
    VistaTransactionId?: string;
    TotalValueInCents: number;
    CurrentValueInCents: number;
    Status: string;
    BookingDetails: {
      BookingId: string;
      BookingNumber: number;
      FilmTitle: string;
      Showtime: string;
      TotalAmount: number;
      Seats: {
        SeatNumber: string;
        RowNumber: string;
      }[];
      UserDetails: {
        FirstName: string;
        LastName: string;
        Email: string;
      };
    };
  };
}> => {
  try {
    // Construct the request URL with the token
    const url = `${config.host}/RESTBooking.svc/booking/unpaid/${token}`;

    // Send the GET request with headers including API token and region code
    const res = await axiosMasterMain(
      {
        method: "GET",
        url,
        headers: {
          connectapitoken: `${config.token}`, // API token for authentication
          "Content-Type": "application/json", // Ensure the response format is JSON
          "Connect-Region-Code": config.regionCode, // Region code if needed
        },
      },
      {
        name: "GetUnpaidBookingDetails", // Request identifier for logging and debugging
        timeout: 20000, // Timeout of 20 seconds for the request
      }
    );

    // Return the 'data' from the successful response
    return {
      success: true,
      message: "Request successful",
      data: res.data,
    };
  } catch (error) {
    // Logs and returns an error message if the request fails
    console.error("Request failed", error?.response?.data);
    return {
      success: false,
      message: error?.response?.data?.message || "An error occurred",
    };
  }
};
// Function to mark an unpaid booking as paid
const MarkBookingAsPaid = async (requestBody: {
  BookingNumber: number; // Booking number to mark as paid
  CinemaId: string; // The ID of the cinema
  CardNumber: string; // Card number used for payment
  CardType: string; // Type of card used for payment
  CardExpiryMonth: string; // Expiry month of the card
  CardExpiryYear: string; // Expiry year of the card
  CardCVC: string; // CVC of the card
  AmountPaidInCents: number; // Amount paid for the booking
  PaymentReference: string; // Reference number for the payment
  PaymentMethod: string; // Method of payment
  BankTransactionNumber?: string; // Optional bank transaction number
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResultCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    // Construct the request URL
    const url = `${config.host}/RESTBooking.svc/booking/unpaid/mark-paid`;

    // Send the POST request with the requestBody and headers
    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`, // API token for authentication
          "Content-Type": "application/json", // Ensure the response format is JSON
          "Connect-Region-Code": config.regionCode, // Region code if needed
        },
        data: requestBody, // Pass the body as JSON
      },
      {
        name: "MarkBookingAsPaid", // For logging and debugging purposes
        timeout: 20000, // Timeout of 20 seconds for the request
      }
    );

    // Return the 'data' from the successful response
    return {
      success: true,
      message: "Booking marked as paid successfully",
      data: res.data,
    };
  } catch (error) {
    // Logs and returns an error message if the request fails
    console.error("Marking booking as paid failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while marking the booking as paid",
    };
  }
};
// Function to start payment for an unpaid booking
const StartPaymentForUnpaidBooking = async (requestBody: {
  BookingNumber: number; // Booking number for which the payment is being made
  CinemaId: string; // The ID of the cinema
  ReturnUrlAfterPaymentIsDone: string; // URL to redirect after payment is completed
  PaymentMethodInWebPaymentModule: string; // Payment method in the web payment module
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResultCode: number;
    ErrorDescription: string;
    PaymentUrl: string;
    BookingDetailsToken: string;
  };
}> => {
  try {
    // Construct the request URL
    const url = `${config.host}/RESTBooking.svc/booking/unpaid/start-redirect-payment`;

    // Send the POST request with the requestBody and headers
    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`, // API token for authentication
          "Content-Type": "application/json", // Ensure the response format is JSON
          "Connect-Region-Code": config.regionCode, // Region code if needed
        },
        data: requestBody, // Pass the body as JSON
      },
      {
        name: "StartPaymentForUnpaidBooking", // For logging and debugging purposes
        timeout: 20000, // Timeout of 20 seconds for the request
      }
    );

    // Return the 'data' from the successful response
    return {
      success: true,
      message: "Payment started successfully",
      data: res.data,
    };
  } catch (error) {
    // Logs and returns an error message if the request fails
    console.error("Payment start failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while starting payment",
    };
  }
};
// Function to update comments or hold flag on an unpaid booking
const UpdateUnpaidBooking = async (requestBody: {
  BookingNumber: number; // The booking number to update
  CinemaId: string; // The ID of the cinema
  BookingComment?: string; // Optional comment for the booking
  HoldFlagForUnpaidBooking?: boolean; // Optional hold flag for the unpaid booking
}): Promise<{
  success: boolean;
  message: string;
  data?: {
    ResultCode: number;
    ErrorDescription: string;
  };
}> => {
  try {
    // Construct the request URL
    const url = `${config.host}/RESTBooking.svc/booking/unpaid/update`;

    // Send the POST request with the requestBody and headers
    const res = await axiosMasterMain(
      {
        method: "POST",
        url,
        headers: {
          connectapitoken: `${config.token}`, // API token for authentication
          "Content-Type": "application/json", // Ensure the response format is JSON
          "Connect-Region-Code": config.regionCode, // Region code if needed
        },
        data: requestBody, // Pass the body as JSON
      },
      {
        name: "UpdateUnpaidBooking", // For logging and debugging purposes
        timeout: 20000, // Timeout of 20 seconds for the request
      }
    );

    // Return the 'data' from the successful response
    return {
      success: true,
      message: "Booking updated successfully",
      data: res.data,
    };
  } catch (error) {
    // Logs and returns an error message if the request fails
    console.error("Booking update failed", error?.response?.data);
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "An error occurred while updating the booking",
    };
  }
};
export default {
  GetBookingDetails,
  CancelBooking,
  MarkBookingAsCollected,
  RefundBooking,
  SearchBooking,
  GetUnpaidBookingDetails,
  MarkBookingAsPaid,
  StartPaymentForUnpaidBooking,
  UpdateUnpaidBooking,
};
