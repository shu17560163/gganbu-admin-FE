import type { TablePaginationConfig } from "antd"
import { useState } from "react"

/**
 * set default pagination for table pagination
 */

export default function useTablePagination(initPagination?: TablePaginationConfig) {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 40],
    showSizeChanger: true,
    ...initPagination,
  })

  return { pagination, setPagination }
}
