import logger from "base/logger";
import { countryCodes, globalModels } from "helpers/constants";

export const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const buildProjection = (projections) => {
  const arrayProjection = projections.split(",");
  const select = {};

  arrayProjection.forEach((projection) => {
    if (typeof projection === "string") {
      select[projection] = 1;
    } else {
      logger("Skiping...", projection);
    }
  });

  return select;
};

export const getCronValueFromDays = (daysList) => {
  const days = daysList;
  let daysCount = days.length;
  let value = "";
  while (daysCount) {
    if (value) {
      value += ",";
    }
    switch (days[daysCount - 1]) {
      case "Mon":
        days[daysCount - 1] = 1;
        break;
      case "Tue":
        days[daysCount - 1] = 2;
        break;
      case "Wed":
        days[daysCount - 1] = 3;
        break;
      case "Thu":
        days[daysCount - 1] = 4;
        break;
      case "Fri":
        days[daysCount - 1] = 5;
        break;
      case "Sat":
        days[daysCount - 1] = 6;
        break;
      case "Sun":
        days[daysCount - 1] = 0;
        break;
      default:
        days[daysCount - 1] = "";
        break;
    }
    value += days[daysCount - 1];
    daysCount -= 1;
  }

  return value;
};

/**
 *
 * @param {String} collection
 * @param {String} splitName
 */
export const checkIfNotGlobal = (collection, splitName) => {
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
export const validateBoolean = (data, name) => {
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

export const removeCountryCode = (numbers) => {
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
export const addCountryCode = (numbers, countryCode) => {
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
