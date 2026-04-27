import React from "react";

type Props = {
  readonly label: string;
};

export function DashboardButton({ label }: Props): React.JSX.Element {
  const handleClick = React.useCallback((): void => {
    console.log("Dashboard button clicked");
  }, []);

  return <button onClick={handleClick}>{label}</button>;
}
