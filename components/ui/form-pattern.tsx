import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert } from "@/components/ui/alert"

interface FormValues {
  name: string
  email: string
}

export function FormPattern({ onSubmit }: { onSubmit?: SubmitHandler<FormValues> }) {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>()

  const defaultOnSubmit: SubmitHandler<FormValues> = data => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit || defaultOnSubmit)} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name", { required: "Name is required" })} aria-invalid={!!errors.name} />
        {errors.name && <Alert variant="destructive">{errors.name.message}</Alert>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email", { required: "Email is required", pattern: { value: /.+@.+\..+/, message: "Invalid email address" } })} aria-invalid={!!errors.email} />
        {errors.email && <Alert variant="destructive">{errors.email.message}</Alert>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      {isSubmitSuccessful && <Alert variant="default">Form submitted successfully!</Alert>}
    </form>
  )
} 
