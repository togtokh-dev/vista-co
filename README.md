# VISTA CO Integration

![Vista CO](https://cdn.prod.website-files.com/60a5ad9159a5687b2c694d70/611f4edfcf95881ff772e416_moving-to-SaaS.png)

- **Web**: [VISTA CO Official Website](https://www.vista.co/)
- **API Documentation**: [VISTA CO API Reference](https://api.vista.co/WSVistaWebClient/api-docs/api-reference/v1)

## Overview

This project provides a seamless integration with **VISTA CO** APIs for cinema booking management. It includes a variety of features such as booking details retrieval, cancellation, refunding, and managing unpaid bookings. The integration uses Axios for making HTTP requests and handling API calls.

## Key APIs Supported

The following key functionalities are included:

1. **Get Booking Details** - Fetch booking details based on cinema ID and optional booking number, transaction number, or session ID.
2. **Cancel Booking** - Cancel a booking based on cinema ID, booking number, and session information.
3. **Refund Booking** - Refund a booking with details such as refund reason, amount, and payment details.
4. **Mark Booking as Collected** - Mark tickets or concessions as collected at the cinema.
5. **Search Bookings** - Search for multiple bookings based on booking reference, session dates, member details, and more.
6. **Manage Unpaid Bookings** - Operations for marking unpaid bookings as paid or starting payment for unpaid bookings.

## Project Structure

- **/src**: Contains all TypeScript files and business logic for making API requests.
- **axios-master**: Axios instance configured for making requests to VISTA CO API.

## Setup

1. **Install the package**:
   ```bash
   npm install vista-co
   ```
