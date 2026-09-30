export function validateCustomer(customer) {
  return Boolean(customer?.name?.trim() && customer?.phone?.trim());
}
