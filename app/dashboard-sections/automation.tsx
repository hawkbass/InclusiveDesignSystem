"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Zap, 
  Plus, 
  Edit, 
  Trash2,
  Play,
  Pause,
  CheckCircle2,
  XCircle
} from "lucide-react"
import { initialWorkflowRules } from "./data"
import type { WorkflowRule } from "./types"

export function Automation() {
  const [workflowRules, setWorkflowRules] = useState<WorkflowRule[]>(initialWorkflowRules)

  const toggleRule = (ruleId: string) => {
    setWorkflowRules(prev => 
      prev.map(rule => 
        rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule
      )
    )
  }

  const getTriggerLabel = (trigger: WorkflowRule["trigger"]) => {
    switch (trigger) {
      case "application_received":
        return "Application Received"
      case "status_changed":
        return "Status Changed"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "custom":
        return "Custom Trigger"
      default:
        return trigger
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Workflow Automation</h3>
          <p className="text-sm text-muted-foreground">Automate repetitive tasks and workflows</p>
        </div>
        <Button 
          className="bg-primary text-primary-foreground"
          onClick={() => {
            // In a real app, this would open a create rule modal
            alert("Create Rule modal would open here. (Demo mode)")
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Rule
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {workflowRules.map((rule) => (
          <Card key={rule.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {rule.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Trigger: {getTriggerLabel(rule.trigger)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant="outline" 
                    className={rule.isActive 
                      ? "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" 
                      : "border-muted-foreground/30 text-muted-foreground"
                    }
                  >
                    {rule.isActive ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Active
                      </>
                    ) : (
                      <>
                        <XCircle className="h-3 w-3 mr-1" />
                        Inactive
                      </>
                    )}
                  </Badge>
                  <Switch
                    checked={rule.isActive}
                    onCheckedChange={() => toggleRule(rule.id)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Conditions</h4>
                  <div className="space-y-1">
                    {rule.conditions.map((condition, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground bg-muted/30 p-2 rounded">
                        {condition.field} {condition.operator} {String(condition.value)}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Actions</h4>
                  <div className="space-y-1">
                    {rule.actions.map((action, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground bg-muted/30 p-2 rounded">
                        {action.type.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      // In a real app, this would open an edit modal
                      alert(`Edit rule "${rule.name}" modal would open here. (Demo mode)`)
                    }}
                  >
                    <Edit className="h-3.5 w-3.5 mr-2" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-400 hover:text-red-600"
                    onClick={() => {
                      if (confirm(`Are you sure you want to delete the rule "${rule.name}"?`)) {
                        setWorkflowRules(prev => prev.filter(r => r.id !== rule.id))
                      }
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

