"use client"

import { FC, useEffect, useState } from "react";

interface CurrencyProps {
  price: string;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const Currency: FC<CurrencyProps> = ({
    price
}) => {
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    if(!isMounted) {
        return null;
    }
  return <div className="font-semibold">{formatter.format(Number(price))}</div>;
};

export default Currency;
