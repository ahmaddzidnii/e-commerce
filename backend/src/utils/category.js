export const categoryEnumToText = (category) => {
  switch (category) {
    case "ELEK":
      return "Elektronik";
    case "COMACC":
      return "komputer-aksesoris";
    case "HPACC":
      return "handphone-aksesoris";
    case "PKPRIA":
      return "pakaian-pria";
    case "SHPRIA":
      return "sepatu-pria";
    case undefined:
      return undefined;
    default:
      return null;
  }
};
