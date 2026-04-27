import React from "react";

export function DashboardButton({
  label,
}: {
  readonly label: string;
}): React.JSX.Element {
  const handleClick = React.useCallback((): void => {
    console.log("Dashboard button clicked");
  }, []);

  return <button onClick={handleClick}>{label}</button>;
}
