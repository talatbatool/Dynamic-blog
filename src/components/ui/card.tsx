import React, { HtmlHTMLAttributes } from  "react";
import { cn } from "../../lib/utils"
import { constants } from "buffer";
const card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>>
(({className,...props},ref)=>(
  <div
  ref={ref}
  className={cn("Rounded-xl border bg-card text-card-foreground shadow",className)}
  {...props}/>
))
card.displayName= "card"
const CardHeader = React.forwardRef<HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
> (({className,...props}, ref)=>(
  <div
  ref={ref}
  className={cn("flex flex-col space-y-1.5 p-6",className)}
  {...props}/>
))
CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>

>(({className,...props},ref)=>(
  <h3
  ref={ref}
  className={cn("font-semibold leading-none tracking-tight",className)}
  {...props}/>
  
))
CardTitle.displayName="cardTitle"



const CardDescribtion = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>

>(({className,...props},ref)=>(
  <p
  ref={ref}
  className={cn("text-sm text-muted-foreground",className)}
  {...props}/>
  
))
CardDescribtion.displayName="cardDescribtion"


const CardContent= React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>

>(({className,...props},ref)=>(
  <div
  ref={ref}
  className={cn("p-6 pt-0",className)}
  {...props}/>
  
))
CardContent.displayName="cardContent"


const CardFooter = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>

>(({className,...props},ref)=>(
  <h3
  ref={ref}
  className={cn("flex items-center p-6 pt-0",className)}
  {...props}/>
  
))
CardFooter.displayName="cardFooter"

export {card,CardHeader,CardTitle,CardDescribtion,CardContent,CardFooter}