import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Table from "../../shared/components/Data/Table";
import NumberDisplay from "../../shared/components/Data/NumberDisplay";

const OrderList = ({
  loading,
  success,
  tableHead,
  items,
  filters,
  pagination,
  changedPage,
  changedRowsPerPage,
  changedSort,
  // rowActions,
  // rowActionsDisabled,
  passingRef
}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const displayingOrders = items.map(item => ({
      ...item,
      item_price: <NumberDisplay type="currency" value={item.item_price} />
    }));
    setOrders(displayingOrders);
  }, [items]); // eslint-disable-line

  return (
    <>
      {!loading && success && (
        <Table
          // Status
          loading={loading}
          // Variables
          tableHead={tableHead}
          items={orders}
          filters={filters}
          pagination={pagination}
          // Functions / Handlers
          onChangePage={changedPage}
          onChangeRowsPerPage={changedRowsPerPage}
          onChangeSort={changedSort}
          // Others
          passingRef={passingRef}
        />
      )}
      {!loading && !success && <p>Error</p>}
    </>
  );
};

export default OrderList;

// PropTypes
OrderList.propTypes = {
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.shape({}),
  pagination: PropTypes.shape({}),
  changedPage: PropTypes.func,
  changedRowsPerPage: PropTypes.func,
  changedSort: PropTypes.func,
  // rowActions: PropTypes.shape({
  // }).isRequired,
  // rowActionsDisabled: PropTypes.bool.isRequired,
  passingRef: PropTypes.shape({})
};
OrderList.defaultProps = {
  filters: undefined,
  pagination: undefined,
  changedPage: undefined,
  changedRowsPerPage: undefined,
  changedSort: undefined,
  passingRef: undefined
};
