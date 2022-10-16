"use strict";
function calcuateTax(income, taxYear) {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}
calcuateTax(10000, 2022);
//# sourceMappingURL=Module_3.js.map
