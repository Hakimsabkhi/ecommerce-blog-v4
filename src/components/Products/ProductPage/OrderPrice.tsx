import React from 'react';

interface OrderPriceProps {
  setSortOrder: (order: 'asc' | 'desc') => void;
  sortOrder: 'asc' | 'desc';
}

const OrderPrice: React.FC<OrderPriceProps> = ({ setSortOrder, sortOrder }) => {
  return (
    <div className="my-4 gap-2 flex items-center justify-end">
      <label htmlFor="sort-order" className="font-bold">Trier par prix :</label>
      <select
        id="sort-order"
        className="w-[150px] p-2  border border-gray-300 rounded"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
      >
        <option value="asc">Du plus bas au plus élevé</option>
        <option value="desc">Du plus élevé au plus bas</option>
      </select>
    </div>
  );
};

export default OrderPrice;
