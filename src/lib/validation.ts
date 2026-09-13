// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

// Price validation
export const isValidPrice = (price: number, min: number = 50000, max: number = 10000000): boolean => {
  return price >= min && price <= max;
};

// Username validation
export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return usernameRegex.test(username);
};

// Game account name validation
export const isValidAccountName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50;
};
