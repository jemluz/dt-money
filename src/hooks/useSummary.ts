import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (final, transaction) => {
      if (transaction.type === 'income') {
        final.income += transaction.price;
        final.total += transaction.price;
      } else {
        final.outcome += transaction.price;
        final.total -= transaction.price;
      }

      return final;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return summary;
}