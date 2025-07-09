import * as React from "react"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { MoreHorizontal, ChevronUp, ChevronDown } from "lucide-react"

export interface DataTableColumn<T = any> {
  key: string
  header: string
  accessorKey?: keyof T
  cell?: (row: T) => React.ReactNode
  sortable?: boolean
  width?: string
  align?: "left" | "center" | "right"
}

export interface DataTableProps<T = any> {
  data: T[]
  columns: DataTableColumn<T>[]
  onRowClick?: (row: T) => void
  onSort?: (key: string, direction: "asc" | "desc") => void
  sortKey?: string
  sortDirection?: "asc" | "desc"
  className?: string
  emptyMessage?: string
  loading?: boolean
  rowClassName?: (row: T) => string
  showActions?: boolean
  onRowAction?: (row: T, action: string) => void
  actions?: Array<{
    label: string
    action: string
    icon?: React.ReactNode
  }>
}

export function DataTable<T = any>({
  data,
  columns,
  onRowClick,
  onSort,
  sortKey,
  sortDirection,
  className,
  emptyMessage = "No data available",
  loading = false,
  rowClassName,
  showActions = false,
  onRowAction,
  actions = [{ label: "View", action: "view" }]
}: DataTableProps<T>) {
  const handleSort = (key: string) => {
    if (!onSort) return
    
    const newDirection = sortKey === key && sortDirection === "asc" ? "desc" : "asc"
    onSort(key, newDirection)
  }

  const renderCell = (row: T, column: DataTableColumn<T>) => {
    if (column.cell) {
      return column.cell(row)
    }
    
    if (column.accessorKey) {
      const value = row[column.accessorKey]
      
      // Auto-render status badges for status-like fields
      if (typeof value === "string" && 
          (column.key.toLowerCase().includes("status") || 
           column.key.toLowerCase().includes("stage"))) {
        return <StatusBadge status={value as any}>{value}</StatusBadge>
      }
      
      return value as React.ReactNode
    }
    
    return null
  }

  const getSortIcon = (columnKey: string) => {
    if (sortKey !== columnKey) return null
    return sortDirection === "asc" ? 
      <ChevronUp className="h-3 w-3" /> : 
      <ChevronDown className="h-3 w-3" />
  }

  if (loading) {
    return (
      <div className={cn("rounded-lg border border-slate-700/50 overflow-hidden", className)}>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700/50">
              {columns.map((column) => (
                <TableHead key={column.key} className="text-slate-400">
                  <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
                </TableHead>
              ))}
              {showActions && <TableHead className="w-16"></TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i} className="border-slate-700/30">
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    <div className="h-4 bg-slate-700 rounded animate-pulse w-full"></div>
                  </TableCell>
                ))}
                {showActions && (
                  <TableCell>
                    <div className="h-6 w-6 bg-slate-700 rounded animate-pulse"></div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div className={cn("rounded-lg border border-slate-700/50 overflow-hidden bg-slate-900/30", className)}>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-700/50 hover:bg-slate-800/30">
            {columns.map((column) => (
              <TableHead 
                key={column.key}
                className={cn(
                  "text-slate-400 font-medium",
                  column.sortable && "cursor-pointer hover:text-slate-300 select-none",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right"
                )}
                style={{ width: column.width }}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && getSortIcon(column.key)}
                </div>
              </TableHead>
            ))}
            {showActions && (
              <TableHead className="w-16 text-center">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={columns.length + (showActions ? 1 : 0)} 
                className="text-center py-8 text-slate-500"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow
                key={index}
                className={cn(
                  "border-slate-700/30 hover:bg-slate-800/30 transition-colors",
                  onRowClick && "cursor-pointer",
                  rowClassName?.(row)
                )}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column.key}
                    className={cn(
                      "text-slate-300",
                      column.align === "center" && "text-center",
                      column.align === "right" && "text-right"
                    )}
                  >
                    {renderCell(row, column)}
                  </TableCell>
                ))}
                
                {showActions && (
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      {actions.length === 1 ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-xs text-slate-400 hover:text-fuchsia-400"
                          onClick={(e) => {
                            e.stopPropagation()
                            onRowAction?.(row, actions[0].action)
                          }}
                        >
                          {actions[0].icon}
                          {actions[0].label}
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

DataTable.displayName = "DataTable" 