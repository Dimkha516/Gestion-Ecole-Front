import * as React from "react";
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm",
      className
    )}
    {...props}
  />
  ));

Card.displayName = "Card";
export { Card };
Card.propTypes = {
  className: PropTypes.string,
}
