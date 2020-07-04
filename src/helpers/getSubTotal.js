function sumofArray(sum, num) {
    return sum + num;
  }
  
  const getSubTotal = items => {
    if (items.length>0) {
      const subtotals = items.map(item => item.price * item.qty);
      return subtotals.reduce(sumofArray);
    }else{
        return 0;
    }
  };
  
  export default getSubTotal;
  