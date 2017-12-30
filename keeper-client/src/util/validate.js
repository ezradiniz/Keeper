
export const emailValidator = email => {
  if (email && email.length > 5) return true;
  return false;
};

export const nicknameValidator = nickname => {
  if (nickname.length > 0)  return true;
  return false;
};

export const passwordValidator = password => {
  if (password && password.length > 0)  return true;
  return false;
};

export const subjectValidator = subject => {
  if (subject.length > 0)  return '';
  return 'Subject invalid';
};
