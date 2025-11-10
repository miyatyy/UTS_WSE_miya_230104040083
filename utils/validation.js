// utils/validation.js
function validateOrderPayload(payload) {
  // returns { valid: boolean, message: string|null }
  if (!payload || typeof payload !== 'object') {
    return { valid: false, message: "Payload tidak valid" };
  }

  if (!payload.product || String(payload.product).trim() === '') {
    return { valid: false, message: "Field 'product' wajib diisi" };
  }

  if (payload.quantity === undefined || payload.quantity === null || !Number.isInteger(payload.quantity)) {
    return { valid: false, message: "Field 'quantity' wajib diisi dengan angka bulat" };
  }

  if (payload.quantity <= 0) {
    return { valid: false, message: "Field 'quantity' harus lebih besar dari 0" };
  }

  if (payload.price === undefined || payload.price === null || typeof payload.price !== 'number') {
    return { valid: false, message: "Field 'price' wajib diisi dengan angka" };
  }

  if (payload.price < 0) {
    return { valid: false, message: "Field 'price' harus bernilai >= 0" };
  }

  return { valid: true, message: null };
}

module.exports = { validateOrderPayload };
