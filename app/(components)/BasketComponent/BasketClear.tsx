'use client'

import React from "react";
import useClearBasket from "../../hooks/useClearBasket";
import { SafeUser } from "@/app/types";

interface BasketClearProps {
  currentUser: SafeUser | null;
}

const BasketClear: React.FC<BasketClearProps> = ({ currentUser }) => {
  const { clearBasket } = useClearBasket({ currentUser });

  return (
    <div className="flex justify-center">
      <button
        onClick={clearBasket}
        className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-2 rounded-lg mr-4 hover:opacity-80 transition"
      >
        Clear Basket
      </button>
    </div>
  );
}

export default BasketClear;