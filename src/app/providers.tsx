"use client";

import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers;
// This file is used to wrap the application with providers, such as Redux or Context API.
// It allows us to keep the application state consistent across different components and pages.
// This is especially useful for managing global state, such as user authentication, theme settings, etc.