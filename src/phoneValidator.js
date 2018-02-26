import LibPhoneNumber from 'google-libphonenumber';

const PhoneNumberFormat = LibPhoneNumber.PhoneNumberFormat;
const PhoneNumberType = LibPhoneNumber.PhoneNumberType;
const PhoneNumberUtil = LibPhoneNumber.PhoneNumberUtil.getInstance();
const MIN_SIZE = 3; // phone number length < 3 will have PhoneNumberUtil.parse() occur error

export const isPhoneNumberValid = (normalizedPhoneNumber) => {
  if (normalizedPhoneNumber.length < MIN_SIZE) {
    return false;
  }

  const phoneObject = PhoneNumberUtil.parse(normalizedPhoneNumber);
  return PhoneNumberUtil.getNumberType(phoneObject) === PhoneNumberType.MOBILE;
};

export const normalizedPhoneNumber = (phoneNumber, country) => {
  if (phoneNumber.length < MIN_SIZE){
    return phoneNumber;
  }

  const phoneNumberStr = PhoneNumberUtil.parse(phoneNumber, country);

  return PhoneNumberUtil
    .format(phoneNumberStr, PhoneNumberFormat.INTERNATIONAL)
};

export const formatE164 = (phoneNumber, country) =>
  PhoneNumberUtil.format(PhoneNumberUtil.parse(phoneNumber, country), PhoneNumberFormat.E164);

export const formatInternational = (phoneNumber, country) =>
  PhoneNumberUtil.format(PhoneNumberUtil.parse(phoneNumber, country), PhoneNumberFormat.INTERNATIONAL);

export const formatNational = (phoneNumber, country) =>
  PhoneNumberUtil.format(PhoneNumberUtil.parse(phoneNumber, country), PhoneNumberFormat.NATIONAL);

export const formatRFC3966 = (phoneNumber, country) =>
  PhoneNumberUtil.format(PhoneNumberUtil.parse(phoneNumber, country), PhoneNumberUtil.RFC3966);
