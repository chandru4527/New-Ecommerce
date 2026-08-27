import { forwardRef } from "react";

const Button = forwardRef(
    (
        {
            children,

            // Styles
            variant = "primary",
            size = "md",
            rounded = "md",
            fullWidth = false,

            // Icons
            leftIcon,
            rightIcon,
            iconOnly = false,

            // Loading
            loading = false,
            loadingText = "Loading...",

            // Custom class
            className = "",

            // Native props
            type = "button",
            disabled = false,

            // All other functions and props
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

        // Button variants
        const variants = {
            primary:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

            secondary:
                "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",

            success:
                "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

            danger:
                "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

            warning:
                "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",

            dark:
                "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700",

            outline:
                "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",

            ghost:
                "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",

            link:
                "bg-transparent text-blue-600 hover:underline focus:ring-blue-500",
        };

        // Button sizes
        const sizes = {
            xs: "px-2 py-1 text-xs min-h-7",
            sm: "px-3 py-1.5 text-sm min-h-8",
            md: "px-4 py-2 text-sm min-h-10",
            lg: "px-5 py-2.5 text-base min-h-11",
            xl: "px-6 py-3 text-lg min-h-12",
        };

        // Icon-only sizes
        const iconSizes = {
            xs: "h-7 w-7",
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-11 w-11",
            xl: "h-12 w-12",
        };

        // Border radius
        const roundedStyles = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        };

        const buttonClassName = [
            baseStyles,
            variants[variant],
            iconOnly ? iconSizes[size] : sizes[size],
            roundedStyles[rounded],
            fullWidth && "w-full",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled || loading}
                className={buttonClassName}
                {...props}
            >
                {loading ? (
                    <>
                        <span
                            className="
                h-4 w-4 animate-spin rounded-full
                border-2 border-current border-t-transparent
              "
                        />

                        {!iconOnly && (
                            <span>
                                {loadingText}
                            </span>
                        )}
                    </>
                ) : (
                    <>
                        {leftIcon && (
                            <span className="flex items-center">
                                {leftIcon}
                            </span>
                        )}

                        {!iconOnly && children}

                        {rightIcon && (
                            <span className="flex items-center">
                                {rightIcon}
                            </span>
                        )}

                        {iconOnly && children}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;