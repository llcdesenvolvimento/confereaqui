/**
 * Helpers de tracking de conversão.
 *
 * Cada compra (relatório principal ou upsell) tem um transaction_id único.
 * Quando o transaction_id muda, dispara um evento de conversão único.
 *
 * O evento é empurrado pro dataLayer (Google Tag Manager).
 * Use o transaction_id como key de deduplicação no GTM.
 */

type ConversionType = "relatorio_completo" | "upsell";

interface ConversionPayload {
  transactionId: string;
  searchId: string;
  type: ConversionType;
  /** Nome do produto (ex: "Relatório Completo", "Telefones", "Endereços") */
  productName?: string;
}

// Valores em reais (alinhar com TYPE_PRICES do criar-pagamento/index.ts)
const PRODUCT_VALUES: Record<string, number> = {
  "Relatório Completo": 18.9,
  Telefones: 11.9,
  Endereços: 19.9,
  "Participações Societárias": 11.9,
  "Parentes e Vínculos": 14.9,
};

const getValueForProduct = (productName?: string): number => {
  if (!productName) return 0;
  return PRODUCT_VALUES[productName] ?? 0;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const STORAGE_KEY = "tracked_transactions";

const getTrackedTransactions = (): Set<string> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(arr);
  } catch {
    return new Set();
  }
};

const persistTrackedTransactions = (set: Set<string>) => {
  try {
    const trimmed = Array.from(set).slice(-200);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage pode falhar em modo privado ou cota cheia; ignora
  }
};

/**
 * Dispara evento de conversão se ainda não foi disparado para este transaction_id.
 * Retorna true se o evento foi disparado (primeira vez), false se já tinha sido disparado.
 */
export const trackConversion = (payload: ConversionPayload): boolean => {
  if (!payload.transactionId) return false;

  const tracked = getTrackedTransactions();
  if (tracked.has(payload.transactionId)) {
    return false;
  }

  tracked.add(payload.transactionId);
  persistTrackedTransactions(tracked);

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "purchase",
      transaction_id: payload.transactionId,
      search_id: payload.searchId,
      conversion_type: payload.type,
      product_name: payload.productName || null,
      value: getValueForProduct(payload.productName),
      currency: "BRL",
    });
  }

  return true;
};
