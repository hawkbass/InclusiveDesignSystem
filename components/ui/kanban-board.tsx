"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface KanbanCard {
  id: string
  title: string
  description?: string
  status: string
  tags?: string[]
  assignee?: string
}

interface KanbanColumn {
  id: string
  title: string
  cards: KanbanCard[]
}

interface KanbanBoardProps {
  columns: KanbanColumn[]
  onCardMove?: (cardId: string, fromColumn: string, toColumn: string) => void
  onCardAdd?: (columnId: string) => void
  className?: string
}

export function KanbanBoard({
  columns,
  onCardMove,
  onCardAdd,
  className
}: KanbanBoardProps) {
  const [draggedCard, setDraggedCard] = useState<{ cardId: string; columnId: string } | null>(null)

  const handleDragStart = (cardId: string, columnId: string) => {
    setDraggedCard({ cardId, columnId })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetColumnId: string) => {
    if (draggedCard && draggedCard.columnId !== targetColumnId) {
      onCardMove?.(draggedCard.cardId, draggedCard.columnId, targetColumnId)
    }
    setDraggedCard(null)
  }

  return (
    <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
      {columns.map((column) => (
        <div
          key={column.id}
          className="flex-shrink-0 w-80"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(column.id)}
        >
          <Card className="bg-card/50 border-border/50 h-full flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-foreground">
                  {column.title}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {column.cards.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto space-y-2">
              {column.cards.map((card) => (
                <Card
                  key={card.id}
                  draggable
                  onDragStart={() => handleDragStart(card.id, column.id)}
                  className="bg-card border-border/50 cursor-move hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-3">
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      {card.title}
                    </h4>
                    {card.description && (
                      <p className="text-xs text-muted-foreground mb-2">
                        {card.description}
                      </p>
                    )}
                    {card.tags && card.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {card.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {card.assignee && (
                      <p className="text-xs text-muted-foreground">
                        Assigned to: {card.assignee}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground"
                onClick={() => onCardAdd?.(column.id)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Card
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

