"use client";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        htmlFor="quantity"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: "#0B3D2E",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Quantity
      </label>
      <select
        id="quantity"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          color: "#0B3D2E",
          backgroundColor: "#FAFCFA",
          border: "1px solid #c8ddd4",
          borderRadius: 6,
          padding: "10px 14px",
          width: 100,
          cursor: "pointer",
          outline: "none",
          appearance: "auto",
        }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
}
