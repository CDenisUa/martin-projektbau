export type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ValidationErrors = Partial<Record<keyof FormState, string>>;

export function validate(form: FormState, t: (key: string) => string): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = t('errorName');
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('errorEmail');
  }
  if (!form.phone.trim()) {
    errors.phone = t('errorPhone');
  }
  if (!form.message.trim() || form.message.trim().length < 5) {
    errors.message = t('errorMessage');
  }

  return errors;
}
