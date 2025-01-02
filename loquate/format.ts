// TODO: create types for the address object
const record = {
  Id: "GB|RM|B|28276766",
  DomesticId: "28276766",
  Language: "ENG",
  LanguageAlternatives: "ENG",
  Department: "",
  Company: "",
  SubBuilding: "",
  BuildingNumber: "10",
  BuildingName: "",
  SecondaryStreet: "",
  Street: "Tawny Close",
  Block: "",
  Neighbourhood: "",
  District: "",
  City: "Corsham",
  Line1: "10 Tawny Close",
  Line2: "",
  Line3: "",
  Line4: "",
  Line5: "",
  AdminAreaName: "Wiltshire",
  AdminAreaCode: "",
  Province: "Wiltshire",
  ProvinceName: "Wiltshire",
  ProvinceCode: "",
  PostalCode: "SN13 9XE",
  CountryName: "United Kingdom",
  CountryIso2: "GB",
  CountryIso3: "GBR",
  CountryIsoNumber: "826",
  SortingNumber1: "91111",
  SortingNumber2: "",
  Barcode: "(SN139XE1NH)",
  POBoxNumber: "",
  Label: "10 Tawny Close\nCORSHAM\nSN13 9XE\nUNITED KINGDOM",
  Type: "Residential",
  DataLevel: "Premise",
  Field1: "",
  Field2: "",
  Field3: "",
  Field4: "",
  Field5: "",
  Field6: "",
  Field7: "",
  Field8: "",
  Field9: "",
  Field10: "",
  Field11: "",
  Field12: "",
  Field13: "",
  Field14: "",
  Field15: "",
  Field16: "",
  Field17: "",
  Field18: "",
  Field19: "",
  Field20: "",
};

const findItem = {
  Id: "GB|RM|B|28276757",
  Type: "Address",
  Text: "1 Tawny Close",
  Highlight: "",
  Description: "Corsham, SN13 9XE",
};

const formatResult = (addressObject) => {
  const {Id, Text, Description} = addressObject;
  const label = `${Text}, ${Description}`;

  return {id: Id, label};
};

const formatAddress = (addressObject) => {
  const {Line1, Line2, City, PostalCode} = addressObject;

  return {
    address_1: Line1,
    address_2: Line2,
    town: City,
    uk_postcode: PostalCode,
  };
};

const result = formatResult(findItem);
console.log("🚀 ~ result:", result);

const address = formatAddress(record);
console.log("🚀 ~ formatted address:", address);
