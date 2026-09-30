/**
 * Barbara Quintero Estudio
 *
 * Este archivo es solamente el esqueleto inicial.
 * La lógica definitiva de disponibilidad, validación,
 * autorización administrativa y LockService se implementará
 * después de validar el modelo de datos.
 */

function doGet(e) {
  return jsonResponse({
    ok: true,
    data: {
      status: "Barbara Quintero API online"
    },
    error: null
  });
}

function doPost(e) {
  return jsonResponse({
    ok: false,
    data: null,
    error: {
      code: "NOT_IMPLEMENTED",
      message: "La creación de reservas todavía no está implementada."
    }
  });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
