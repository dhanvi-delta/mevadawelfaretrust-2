import type { Notice } from "@/types";

/** Renders the original contribution slab table from a notice. */
export function ContributionTable({ table }: { table: NonNullable<Notice["table"]> }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white">
      <table className="table-clean min-w-[22rem]" lang="gu">
        {table.caption && (
          <caption className="caption-top px-4 pt-4 pb-3 text-left font-semibold text-brand-800">{table.caption}</caption>
        )}
        <thead>
          <tr>
            {table.hasSerial && <th scope="col">ક્રમ</th>}
            <th scope="col">સભાસદ નંબર</th>
            <th scope="col" className="!text-right">
              ફાળાની રકમ
            </th>
          </tr>
        </thead>
        <tbody>
          {table.slabs.map((slab) => (
            <tr key={slab.rangeLabel}>
              {table.hasSerial && <td className="text-muted">{slab.serial}</td>}
              <td className="font-medium">{slab.rangeLabel}</td>
              <td className="text-right font-semibold text-brand-700">{slab.amountLabel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
