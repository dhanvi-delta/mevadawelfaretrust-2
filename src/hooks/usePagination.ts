"use client";

import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(page, pageCount);

  const pageItems = useMemo(
    () => items.slice((current - 1) * pageSize, current * pageSize),
    [items, current, pageSize],
  );

  return {
    page: current,
    pageCount,
    pageItems,
    setPage,
    reset: () => setPage(1),
    start: items.length === 0 ? 0 : (current - 1) * pageSize + 1,
    end: Math.min(current * pageSize, items.length),
    total: items.length,
  };
}
