import * as React from "react"
import { cn } from "@/lib/utils"

// Since a fully custom accessible Select is complex, we'll wrap a native select 
// to match the API imported by Landing.jsx

const SelectContext = React.createContext({})

const Select = ({ value, onValueChange, children, required, name }) => {
  return (
    <SelectContext.Provider value={{ value, onValueChange, required, name }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { required, name, value, onValueChange } = React.useContext(SelectContext)
  // We'll hide the actual native select over the trigger for simplicity or just use a native select
  return (
    <select
      ref={ref}
      name={name}
      required={required}
      value={value || ""}
      onChange={(e) => onValueChange(e.target.value)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <option value="" disabled hidden>{props.placeholder || "Select an option"}</option>
      {children}
    </select>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }) => {
  return <>{placeholder}</> // Handled in select directly for this simple mock
}

const SelectContent = ({ children }) => {
  return <>{children}</>
}

const SelectItem = React.forwardRef(({ className, value, children, ...props }, ref) => {
  return (
    <option ref={ref} value={value} className={className} {...props}>
      {children}
    </option>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
