import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";

const Basket = () => {
  const items = useSelector(selectBasketItems);
  if (items.length === 0) return null;
  return (
    <div>
      <Link href="/checkout">
        <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
          {items.length > 0 && (
            <span className="gradiantText absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full text-[10px] text-white">
              {items.length}
            </span>
          )}
          <ShoppingBagIcon className="headerIcon w_8 h-8" />
        </div>
      </Link>
    </div>
  );
};

export default Basket;
