import logger from "base/logger";
import { countryCodes, globalModels } from "helpers/constants";

export const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const buildProjection = (projections: string) => {
  const arrayProjection = projections.split(",");
  const selectArray: (string | number)[][] = [];

  arrayProjection.forEach((projection: string) => {
    if (typeof projection === "string" && projection) {
      selectArray.push([projection, 1]);
    } else {
      logger.info("Skipping...", projection);
    }
  });
  const select = Object.fromEntries(selectArray);

  return select;
};

export const getCronValueFromDays = (days: string[]) => {
  let daysCount = days.length;
  let value = "";
  let isValue = "";

  do {
    daysCount -= 1;
    switch (days[daysCount]) {
      case "mon":
        isValue = "1";
        break;
      case "tue":
        isValue = "2";
        break;
      case "wed":
        isValue = "3";
        break;
      case "thu":
        isValue = "4";
        break;
      case "fri":
        isValue = "5";
        break;
      case "sat":
        isValue = "6";
        break;
      case "sun":
        isValue = "0";
        break;
      default:
        isValue = "";
        break;
    }
    if (value && isValue) {
      value += ",";
    }
    value += isValue;
  } while (daysCount);
  return value;
};

/**
 *
 * @param {String} collection
 * @param {String} splitName
 */
export const checkIfNotGlobal = (collection: any, splitName: string) => {
  if ([...globalModels, collection].includes(splitName)) {
    return false;
  }
  return true;
};

/**
 *
 * @param {object} data
 * @param {string} name
 * @returns
 */
export const validateBoolean = (data: any, name: string) => {
  const isEnabledPresent = name in data;
  if (!isEnabledPresent) {
    return { message: `${name} is required`, valid: false };
  }
  const enabled = data[name];
  if (typeof enabled !== "boolean") {
    return { message: `${name} must be a boolean`, valid: false };
  }
  return { message: "success", valid: true };
};

export const removeCountryCode = (numbers: string[]) => {
  const cleaned = numbers.map((each) =>
    countryCodes.includes(each.toString().substring(0, 3)) ? `0${each.toString().slice(3)}` : each,
  );
  return cleaned;
};

/**
 *
 * @param {Array} numbers
 * @param {string} countryCode
 */
export const addCountryCode = (numbers: string[], countryCode: string) => {
  const cleaned = numbers.map((each) => {
    if (each.toString().substring(0, 3) === countryCode) {
      return each.toString();
    }

    if (each.toString().charAt(0) === "0") {
      return `234${each.toString().slice(1)}`;
    }

    return `${countryCode}${each.toString()}`;
  });
  return cleaned;
};
