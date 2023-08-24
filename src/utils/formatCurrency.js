export default function formatCurrency(price) {
    let value = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 2,
    });
    return value.format(price);
  }
  