"use client";

const MERCHANT_KEY = "PLACEHOLDER_KEY";
const MERCHANT_TOKEN = "PLACEHOLDER_TOKEN";

interface PayableButtonProps {
  amount: number;
  orderDescription: string;
  disabled?: boolean;
}

export default function PayableButton({
  amount,
  orderDescription,
  disabled = false,
}: PayableButtonProps) {
  const handleCheckout = () => {
    const params = new URLSearchParams({
      merchant_key: MERCHANT_KEY,
      merchant_token: MERCHANT_TOKEN,
      amount: amount.toString(),
      currency: "LKR",
      order_description: orderDescription,
    });

    // Redirect to Payable hosted checkout (replace URL with real endpoint when credentials are set)
    const checkoutUrl = `https://checkout.payable.lk/pay?${params.toString()}`;
    window.location.href = checkoutUrl;
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled}
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: "0.03em",
        color: "#FAFCFA",
        backgroundColor: disabled ? "#a8c8b8" : "#2D9B6A",
        border: "none",
        borderRadius: 6,
        padding: "14px 32px",
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
        maxWidth: 320,
        transition: "background-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1E7A52";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D9B6A";
        }
      }}
    >
      Pay Now — LKR {amount.toLocaleString()}
    </button>
  );
}
